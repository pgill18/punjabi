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
let langwork = {
    day: [], week: [], month: [], year: []
};

setTimeout(function() {
    let score = getVoiceScoreAggregate();
    console.log(`... getVoiceScoreAggregate() ... ${score}`);
}, 3000);

function getVoiceScoreAggregate() {
    let lang_cluster = get_lang_cluster_sdb();
    let score = getGridTotal( lang_cluster.records );
    return score;
}
function getGridTotal( dbv ) {
    return getBarsAggregate(dbv, 'day', 5) + getBarsAggregate(dbv, 'week', 5) + getBarsAggregate(dbv, 'month', 4) + getBarsAggregate(dbv, 'year', 4);
}

function getBarsAggregate(dbv, key, max=5) {
    console.log(`getBarsAggregate(dbv, key=${key}, max=${max})`)
    let lookup = {
      day: { key: 'day', loop: 1 },
      week: { key: 'day', loop: 7 },
      month: { key: 'week', loop: 4 },
      quarter: { key: 'month', loop: 3 },
      year: { key: 'quarter', loop: 4 },
    }
    let loop_count = lookup[key].loop;
    let sub_key = lookup[key].key;
    let counter = 0;
    for(let i=0; i<loop_count; i++) {
        let count = getBarsTotal(dbv, sub_key, i, max);
        counter += count;
        console.log(`i=${i}, count=${count}, counter=${counter}`)
    }
    console.log(`return=${counter}`);
    return counter;
}

function getBarsTotal(dbv, key, i, max=5) {
    console.log(`getBarsTotal(dbv, key=${key}, max=${max})`)
    let list = dbv; //dbv[key];
    if(!list || !list.length) return 0;
    let counter = 0;
    for(let entry of list) {
        // if(!entry.mode || entry.mode!=='voice') continue;
        if(!entry.date) continue;
        // console.log(entry)
        let date = new Date(entry.date);
        if(!isDateRange(date, key, i)) continue;
        counter++
        // console.log(`    key=${key}, counter=${counter}, entry:`, date.toLocaleString())
        if(counter >= max) break;
    }
    // console.log(`return=${counter}`);
    return counter;
}

function isDateRange(date, key, n) { // n = 0 to any integer
    let min = new Date();
    let max = new Date();
    date = new Date(date);
    date.setMilliseconds(0);
    min.setMilliseconds(0);
    max.setMilliseconds(0);
    switch(key) {
        case 'today': min.setDate(min.getDate() - 1); break;
        case 'day': min.setDate(min.getDate() - (n+1)); max.setDate(max.getDate() - n); break;
        case 'week': min.setDate(min.getDate() - ((n+1)*7)); max.setDate(max.getDate() - (n*7)); break; // 7 days in a week
        case 'month': min.setDate(min.getDate() - ((n+1)*30)); max.setDate(max.getDate() - (n*30)); break; // 30 days in a month
        case 'quarter': min.setDate(min.getDate() - ((n+1)*90)); max.setDate(max.getDate() - (n*90)); break; // 90 days in a quarter
        case 'year': min.setDate(min.getDate() - ((n+1)*365)); max.setDate(max.getDate() - (n*365)); break; // 365 days in a year
    }
    // printDate(min, "min", ", ", false);
    // printDate(date, "date", ", ", false);
    // printDate(max, "max", ", ", false);
    // console.log(`...........................................`);
    return date > min && date <= max;
}

// function getGridTotal( dbv ) {
//   return getBarsTotal(dbv, 'day', 5) + getBarsTotal(dbv, 'week', 5) + getBarsTotal(dbv, 'month', 4) + getBarsTotal(dbv, 'year', 4);
// }

// function getBarsAggregate(dbv, key, max=5) {
//     let list = dbv[key];
//     if(!list || !list.length) return 0;
//     let counter = 0;
//     for(let entry of list) {
//         let date = new Date(entry);
//         if(!isDateRange(date, key)) continue;
//         if(++counter >= max) break;
//     }
//     return counter;
// }

// function getBarsTotal(dbv, key, max=5) {
//     let list = dbv[key];
//     if(!list || !list.length) return 0;
//     let counter = 0;
//     for(let entry of list) {
//         let date = new Date(entry);
//         if(!isDateRange(date, key)) continue;
//         if(++counter >= max) break;
//     }
//     return counter;
// }

// function isDateRange(date, key, n) { // n = 0 to any integer
//     let min = new Date();
//     let max = new Date();
//     switch(key) {
//         case 'day': min.setDate(min.getDate() - 1); break;
//         case 'week': min.setDate(min.getDate() - n+1); max.setDate(max.getDate() - n); break;
//         case 'month': min.setDate(min.getDate() - ((n+1)*7)); max.setDate(max.getDate() - (n*7)); break; // 7 days in a week
//         case 'year': min.setDate(min.getDate() - ((n+1)*90)); max.setDate(max.getDate() - (n*90)); break; // 90 days in a quarter
//     }
//     return date >= min && date <= max;
// }

function getBarsTotal__old(dbv, key, max=5) {
    let list = dbv[key];
    if(!list || !list.length) return 0;
    let counter = 0;
    for(let entry of list) {
        let date = new Date(entry);
        if(!isDateRange(date, key)) continue;
        if(++counter >= max) break;
    }
    return counter;
}

function isDateRange__old(date, key) {
    let deadline = new Date();
    switch(key) {
        case 'day': deadline.setDate(date.getDate() - 1);
        case 'week': deadline.setDate(date.getDate() - 7);
        case 'month': deadline.setDate(date.getDate() - 30);
        case 'year': deadline.setDate(date.getDate() - 365);
    }
    return date > deadline;
}

function populate_langwork(mode='speech') {
    for(let cluster of langscores.clusters) {
        if(!cluster.records || !cluster.records.length) continue;
        for(let record of cluster.records) {
            if(!record || !record.date) continue;
            if(!record.mode || record.mode!==mode) continue;
            let date = new Date(record.date);
        }
    }
}

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
    tense.date = new Date();
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
