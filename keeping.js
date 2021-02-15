// book-keeping code goes here
let langscores = {
    cluster: 1,
    clusters: [ {blank:1},
        { degree: 0, cards: [], records: [] },
        { degree: 0, cards: [], records: [] },
        { degree: 0, cards: [], records: [] },
        { degree: 0, cards: [], records: [] },
    ]
};
let langscores_table;
let langscores_overall;

function get_lang_cluster_sdb() {
    let cluster = langscores.cluster || 1;
    let lang_cluster = langscores.clusters[cluster];
    return lang_cluster;
}

function credit_langscores(tense={}) {
    let lang_cluster = get_lang_cluster_sdb();
    let degree = lang_cluster.degree;
    let langcard = lang_cluster.cards[degree];
    if(!langcard) langcard = lang_cluster.cards[degree] = {scores:{}};
    for(let [key,value] of Object.entries(tense)) {
        langcard.scores[value] = ++langcard.scores[value] || 1;
        langcard.scores[`.${key}`] = ++langcard.scores[`.${key}`] || 1;
        langcard.scores[`${key}=${value}`] = ++langcard.scores[`${key}=${value}`] || 1;
    }
    lang_cluster.records.push(tense);
}

function getLangScore() {
    // console.log(langscores)
    if(!langscores || !langscores.clusters) {
        console.log(`No langauge scores data yet!`);
        return 0;
    }
    let scores = calcLangScores(langscores.clusters[1]);
    langscores_table = scores.table;
    langscores_overall = scores.overall;
    return langscores_overall;
}

function calcLangScores(json_data) {
    return load_data(json_data);

    function load_data(json_data) {
        console.log(`load_data(json_data): json_data=`, json_data)
        console.log(`load_data(json_data): json_data.cards[0]=`, json_data.cards[0])
        // $.getJSON(file_url, async function (scorecard) {
        // function report(scorecard) {
            // let card = scorecard.cards[0];
            let card = json_data.cards[0] || {scores:{}};
            let scores = { pron: {}, verb: {}, noun: {}, pos: {} };
            for(let [key,value] of Object.entries(card.scores)) {
                console.log(`... [key,value] = [${key}, ${value}] ...`)
                if(key.match(/^verb=/)) { let word = get_word(key); inc_score(word,'verb',value); }
                if(key.match(/^noun=/)) { let word = get_word(key); inc_score(word,'noun',value); }
                if(key.match(/^pron=/)) { let word = get_word(key); inc_score(word,'pron',value); }
            }
            console.log('scores=', scores);
            return load_report(scores);
            // functions
            function get_word(key) { return key.split('=')[1]; }
            function inc_score(word, pos, value) {
                console.log(`inc_score(${word}, ${pos}, ${value})`, scores)
                value = Math.round(+value*2);
                scores[pos][word] = value;
                scores.pos[pos] = value;
            }
        // }
        // });
    }
    
    function load_report(scores) {
        let table = [];
        table.push( get_keys(scores.verb, 'verbs').slice(0,8) )
        table.push( get_values(scores.verb, 'verbs').slice(0,8) )
        table.push( get_keys(scores.noun, 'nouns').slice(0,14) )
        table.push( get_values(scores.noun, 'nouns').slice(0,14) )
        table.push( get_keys(scores.pron, 'prons').slice(0,8) )
        table.push( get_values(scores.pron, 'prons').slice(0,8) )
        let overall_score = Math.round((table[1][0] + table[3][0] + table[5][0])/3);
        return { overall: overall_score, table};
        // utility function
        function get_keys(coll, name) {
            return [name].concat(Object.keys(coll));
        }
        function get_values(coll, name) {
            let coll_values = Object.values(coll);
            coll_values = coll_values.map(value => Math.round(+value*get_mult(name)));
            return [get_avg(coll_values)].concat(coll_values);
        }
        function get_avg(list) {
            if(!list || !list.length) return 0;
            let average = list.reduce((a,b) => +a+b,0)/list.length;
            console.log(`average =`, average);
            return Math.round(average);
            // return list.reduce((a,b) => +a+b,0)/list.length;
        }
        function get_mult(name) {
            let factor = 1/5;
            switch(name) {
                case 'prons': return factor * 9/15;
                case 'verbs': return factor * 9/15;
                case 'nouns': return factor * 15/15;
            }
            return 1;
        }
    }
}
