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
    let score = getGridTotal( lang_cluster.records, ['voice'] );
    return score;
}
function getGridTotal( records, filter ) {
    if(filter && filter.length) records = records.filter(record => filter.includes(record.mode));
    return getBarsAggregateTotal(records, 'day', 5) + getBarsAggregateTotal(records, 'week', 5) + getBarsAggregateTotal(records, 'month', 5); // + getBarsAggregateTotal(records, 'year', 4);
}
function getGridLists( records, filter ) {
    console.log(`... getGridLists(records, filter) ...`);
    console.log('records =', records);
    console.log('filter =', filter);
    if(filter && filter.length) records = records.filter(record => filter.includes(record.mode));
    console.log('filtered-records =', records);
    return { day: getBarsAggregateList(records, 'day', 5), week: getBarsAggregateList(records, 'week', 5), month: getBarsAggregateList(records, 'month', 5) }; //, year: getBarsAggregateList(records, 'year', 4) };
}

function getBarsAggregateTotal(records, key, max=5) {
    let output = getBarsAggregateList(records, key, max);
    return output.length;
}
function getBarsAggregateList(records, key, max=5) {
    console.log(`getBarsAggregate(records, key=${key}, max=${max})`)
    let lookup = {
      day: { key: 'day', loop: 1 },
      week: { key: 'day', loop: 7 },
      month: { key: 'week', loop: 4 },
      quarter: { key: 'month', loop: 3 },
      year: { key: 'quarter', loop: 4 },
    }
    let loop_count = lookup[key].loop;
    let sub_key = lookup[key].key;
    let output = [];
    for(let i=0; i<loop_count; i++) {
        let sub_max = key==='day' ? max : 1;
        let outlist = getBarsList(records, sub_key, i, sub_max);
        if(outlist && outlist.length) output.push(...outlist);
        console.log(`i=${i}, count=${outlist.length}, counter=${output.length}`)
    }
    console.log(`return=${output.length}`, output);
    return output;
}

function getBarsTotal(records, key, i, max=1) {
    let output = getBarsList(records, key, i, max);
    return output.length;
}
function getBarsList(records, key, i, max=1) {
    console.log(`getBars(records, key=${key}, max=${max})`)
    let list = records; //dbv[key];
    if(!list || !list.length) return 0;
    let output = [];
    for(let entry of list) {
        // if(!entry.mode || entry.mode!=='voice') continue;
        if(!entry.date) continue;
        // console.log(entry)
        let date = new Date(entry.date);
        if(!isDateRange(date, key, i)) continue;
        output.push(date);
        // console.log(`    key=${key}, counter=${counter}, entry:`, date.toLocaleString())
        if(output.length >= max) break;
    }
    // console.log(`return=${counter}`);
    return output;
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

// function getBarsAggregateTotal(records, key, max=5) {
//     console.log(`getBarsAggregate(records, key=${key}, max=${max})`)
//     let lookup = {
//       day: { key: 'day', loop: 1 },
//       week: { key: 'day', loop: 7 },
//       month: { key: 'week', loop: 4 },
//       quarter: { key: 'month', loop: 3 },
//       year: { key: 'quarter', loop: 4 },
//     }
//     let loop_count = lookup[key].loop;
//     let sub_key = lookup[key].key;
//     let counter = 0;
//     for(let i=0; i<loop_count; i++) {
//         let count = getBarsTotal(records, sub_key, i, max);
//         counter += count;
//         console.log(`i=${i}, count=${count}, counter=${counter}`)
//     }
//     console.log(`return=${counter}`);
//     return counter;
// }

// function getBarsTotal(records, key, i, max=5) {
//     console.log(`getBarsTotal(records, key=${key}, max=${max})`)
//     let list = records; //dbv[key];
//     if(!list || !list.length) return 0;
//     let counter = 0;
//     for(let entry of list) {
//         // if(!entry.mode || entry.mode!=='voice') continue;
//         if(!entry.date) continue;
//         // console.log(entry)
//         let date = new Date(entry.date);
//         if(!isDateRange(date, key, i)) continue;
//         counter++
//         // console.log(`    key=${key}, counter=${counter}, entry:`, date.toLocaleString())
//         if(counter >= max) break;
//     }
//     // console.log(`return=${counter}`);
//     return counter;
// }

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
