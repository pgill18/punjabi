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
