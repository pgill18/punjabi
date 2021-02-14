let langdb = [];

async function whiteboard_loadWhiteboardData({level=1, platform=1, cluster=1, degree=0}={}, {preload=1}={}) {
    console.log(`... whiteboard_loadWhiteboardData(level=${level}, platform=${platform}, cluster=${cluster}, preload=${preload})`)
    let verbs = get_cluster(cluster-1).verbs;
    let nouns = get_cluster(cluster-1).nouns;
    let irow = Math.floor((platform-1)/5);
    console.log(`verbs=`, verbs)
    console.log(`nouns=`, nouns)
    console.log(`irow=`, irow)
    if(preload) { // if platform data already exists, load next row data
        if(langdb[level-1] && langdb[level-1][platform-1]) platform = (++irow)*nouns.length + 1;
    }
    let pronouns = [["it", "i", "you", "he", "they"], ["it", "i", "you", "she", "we"],
                    ["it", "i", "you", "who", "someone"], ["it", "i", "you", "he", "they"]][level-1];

    let elevel = level;
    if(!defined(degree)) degree = tile.level;

    for(let index=0; index<pronouns.length; index++) {
        if(index!==irow) continue;
        let pronoun = pronouns[index];
        let file_url = get_file_url(pronoun, degree);
        load_url_data(nouns, verbs, platform, elevel, degree, file_url);
    }
    // util functions
    function get_file_url(pronoun, level=0, dir="whiteboard/content/data") {
        let {form, perfect, continuous, adj, adv} = get_tense_setup(level);
        let perfect_str = perfect ? 'perfect' : 'simple';
        let continuous_str = continuous ? '.cont' : '';
        let adj_str = adj ? ".adj" : "";
        let adv_str = adv ? ".adv" : "";
        let basename = `${form}.${perfect_str}${continuous_str}`;
        let file = `${dir}/${basename}/${pronoun}${adj_str}${adv_str}.lc${cluster}.json`;
        return file;
    }
    function load_url_data(nouns, verbs, platform, elevel, level, file_url) { // elevel=exp-level, level=difficulty/tile-level
        let irow = Math.floor((platform-1)/5);
        console.log(`... load_url_data(nouns, verbs, irow=${irow}, elevel=${elevel}, difficulty-level=${level}, file_url)`, file_url)
        let {form, perfect, continuous, adj, adv} = get_tense_setup(level);
        nouns = nouns[elevel-1];
        // let curr_row = Math.floor(platform/5);
        $.getJSON(file_url, async function (file_data) {
             // $.each(file_data, function (entry) {
                // console.log(file_data);
                // data = file_data;
                for(let icol=0; icol<nouns.length; icol++) {
                    let platform_index = (irow)*nouns.length + (icol);
                    if(platform_index < platform-1) continue;
                    // console.log(`... loading data for icol=${icol} ... noun=`, nouns[icol])
                    let collected = []; let noun = nouns[icol];
                    for(let verbs_irow=0; verbs_irow<verbs.length; verbs_irow++) {
                        let collection = collect_records(file_data, verbs[verbs_irow], noun, adj, adv);
                        collected.push(...collection);
                        // let platform = (irow)*nouns.length + (icol+1);
                    }
                    if(!langdb[elevel-1]) langdb[elevel-1] = [];
                    langdb[elevel-1][platform_index] = collected;
                }
            // })
        });
    }
    function collect_records(file_data, iverbs, inoun, iadj=0, iadv=0) {
        // console.log(`... collect_records(file_data, iverbs=${iverbs}, inoun=${inoun}, iadj=${iadj}, iadv=${iadv})`);
        // console.log(`****************** file_data.length =`, file_data.length)
        let collected = [];
        for(let record of file_data) {
            // console.log(record[6])
            let {pron, verb, noun, adj, adv, det, prep} = record[6];
            // if((iadj && !adj) || (iadv && !adv)) continue;
            // if((idet && !det) || (iprep && !prep)) continue;
            // if(noun===inoun) console.log(pron, verb, noun, adj, adv, det, prep);
            if(noun===inoun && iverbs.includes(verb)) {
                // console.log(pron, verb, noun, adj, adv, det, prep);
                let origlines = record.slice(0,4).map(line=>line.split(/\s+/));
                let data_obj = { "origlines": origlines, "tense": record[6], "dims": 2 };
                collected.push( data_obj );
                // console.log(`data_obj`, data_obj);
            }
        }
        return collected;
    }
}

function get_tense_setup(level, {adjArg,advArg,tenseCheck=1,tenseIdMin=0}={}) {
    let tenseId = -1;
    for(let form of ['present', 'past', 'future']) {
    for(let perfect of [false, true]) {
    for(let continuous of [false, true]) {
        tenseId++;
        // console.log(`*******************tenseId=${tenseId}**********************`);
        // if(form!=='present') continue;
        // if(perfect!==false) continue;
        // if(continuous!==false) continue;
        if(perfect===true && continuous===true) continue;
        if(tenseCheck && tenseId < tenseIdMin) continue;
        if(tenseId < level) continue;
        // console.log(`*******************(${tenseId} < ${level})=${(tenseId < level)}**********************`);

        for(let adj of [false, true]) {
        for(let adv of [false, true]) {
            // if(adj!==false) continue;
            // if(adv!==false) continue;
            if(tenseCheck && defined(adjArg) && adj!==adjArg) continue;
            if(tenseCheck && defined(advArg) && adv!==advArg) continue;
            return {form, perfect, continuous, adj, adv};
        }}
    }}}
    return {form:'present', perfect:false, continuous:false, adj:false, adv:false};
}

function get_cluster(i) {
    let clusters = [
        {
            verbs: [
                [ 'be',   'have',   'do'],
                [ 'see',  'come',   'go'],
                [ 'know', 'find',   'use'],
            ],
            nouns: [
                [ 'book',   'home',     'work',     'water',    'week'],
                [ 'hand',   'room',     'thing',    'word',     'student'],
                [ 'child',  'mother',   'family',   'man',      'woman'],
            ],
        },
        {
            verbs:
               [ [ 'be', 'have', 'do' ],
                 [ 'say', 'get', 'make' ],
                 [ 'go', 'know', 'take' ] ],
            nouns:
               [ [ 'job', 'business', 'year', 'way', 'day' ],
                 [ 'thing', 'system', 'point', 'government', 'group' ],
                 [ 'time', 'work', 'part', 'woman', 'place' ] ],
        },
        {
            verbs:
               [ [ 'be', 'have', 'do' ],
                 [ 'feel', 'want', 'give' ],
                 [ 'think', 'look', 'work' ]
               ],
            nouns:
               [ [ 'job', 'business', 'money', 'mother', 'government' ],
                 [ 'right', 'room', 'thing', 'story', 'group' ],
                 [ 'woman', 'work', 'family', 'people', 'day' ]
                ],
        },
        {
             verbs:
               [ [ 'be', 'have', 'do' ],
                 [ 'ask', 'tell', 'call' ],
                 [ 'try', 'seem', 'leave' ] 
               ],
              nouns:
               [ [ 'business', 'problem', 'mother', 'life', 'student' ],
                 [ 'study', 'man', 'question', 'story', 'woman' ],
                 [ 'week', 'month', 'year', 'lot', 'day' ] 
               ],
        }
    ];
    return clusters[i];
}

function get_data(type) {
    let data = {
        verb_noun: [
            ["",        "be", "have", "do", "say", "get", "make", "go", "know", "take", "see", "come", "think", "look", "want", "give", "use", "find", "tell",  "ask", "work", "seem", "feel", "try", "leave", "call"],
            ["book",    "..", "have", "..", "...", "get", "....", "..", "....", "take", "see", "....", ".....", "at",   "want", "give", "use", "find", "about", "...", "....", "....", "....", "...", ".....", "...."],
            ["business","..", "have", "do", "...", "get", "....", "..", "know", "....", "...", "....", ".....", "after","....", "....", "...", "....", "tell",  "...", "....", "....", "....", "...", "leave", "...."],
            ["child",   "be", "have", "..", "...", "...", "....", "..", "know", "....", "see", "....", ".....", "after","....", "to",   "...", "....", "about", "ask", "....", "....", "....", "...", ".....", "...."],
            ["country", "..", "have", "..", "...", "...", "....", "to", "know", "....", "see", "to",   "about", "....", "....", "to",   "...", "....", "about", "...", "for",  "....", "....", "...", "leave", "...."],
            ["day",     "..", "have", "..", "...", "get", "....", "..", "....", "take", "...", "....", "during","....", "want", "give", "...", "....", "about", "...", "for",  "....", "....", "for", ".....", "...."],
            ["eye",     "..", "have", "..", "...", "...", "....", "..", "....", "....", "...", "....", "think", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["fact",    "..", "....", "..", "say", "...", "....", "..", "know", "....", "...", "....", "think", "....", "....", "....", "...", "....", "tell",  "...", "....", "like", "....", "...", ".....", "...."],
            ["family",  "..", "have", "..", "...", "get", "make", "..", "know", "....", "see", "to",   "about", "after","want", "....", "...", "....", "about", "ask", "for",  "....", "like", "...", ".....", "call"],
         ["government", "..", "have", "..", "...", "get", "make", "..", "....", "....", "...", "from", ".....", "....", "....", "....", "...", "....", "about", "ask", "for",  "....", "....", "...", ".....", "...."],
            ["group",   "..", "have", "..", "...", "get", "make", "with","know","....", "see", "from", ".....", "....", "want", "....", "...", "....", "about", "ask", "with", "....", "....", "...", "leave", "...."],
            ["hand",    "..", "have", "..", "...", "...", "....", "..", "....", "....", "see", "....", ".....", "....", "....", "....", "use", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["home",    "..", "a",    "..", "...", "...", "a"   , "go", "....", "it",   "a",   "come", "about", "....", "a",    "give", "a",   "a",    "about", "...", "from", "....", "like", "at",  "leave", "call"],
            ["job",     "..", "have", "do", "...", "get", "....", "to", "know", "take", "...", "to",   "about", "....", "want", "....", "use", "find", "about", "for", "....", "....", "....", "for", "leave", "...."],
            ["life",    "..", "have", "..", "...", "get", "....", "..", "....", "....", "...", "....", "about", "....", "....", "give", "...", "....", "about", "...", "....", "....", "....", "...", ".....", "...."],
            ["lot",     "..", "have", "..", "...", "...", "....", "..", "....", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["man",     "be", "....", "..", "...", "...", "....", "to", "know", "....", "see", "....", ".....", "at",   "....", "....", "use", "find", "tell",  "ask", "....", "....", "....", "...", ".....", "...."],
            ["money",   "..", "have", "..", "...", "get", "make", "..", "....", "take", "see", "....", "about", "at",   "want", "give", "use", "find", "....",  "for", "for",  "....", "....", "...", ".....", "...."],
            ["month",   "..", "....", "..", "...", "get", "....", "..", "....", "....", "...", "....", ".....", "....", "....", "....", "use", "....", "....",  "...", "for",  "....", "....", "for", ".....", "...."],
            ["mother",  "be", "have", "..", "...", "...", "....", "..", "....", "....", "see", "to",   "about", "after","....", "....", "...", "....", "about", "ask", "for",  "....", "....", "...", ".....", "call"],
            ["mr",      "..", "....", "..", "...", "...", "....", "..", "....", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["night",   "..", "....", "..", "...", "...", "....", "at", "....", "take", "...", "....", "at",    "....", "....", "....", "...", "....", "....",  "...", "at",   "like", "....", "at",  "leave", "at"],
            ["number",  "..", "....", "..", "...", "...", "....", "..", "know", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["part",    "..", "....", "do", "...", "...", "....", "..", "know", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["people",  "..", "....", "..", "...", "...", "....", "..", "....", "....", "see", "....", ".....", "after","....", "....", "...", "....", "about", "ask", "with", "....", "....", "...", ".....", "...."],
            ["place",   "..", "have", "..", "...", "get", "....", "to", "know", "....", "see", "to",   ".....", "....", "want", "....", "use", "find", "....",  "...", "....", "....", "....", "...", "leave", "...."],
            ["point",   "..", "have", "..", "...", "get", "make", "..", "....", "take", "see", "to",   "about", "....", "....", "give", "...", "find", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["problem", "..", "have", "..", "...", "get", "make", "..", "know", "....", "see", "....", "about", "at",   "....", "....", "...", "find", "about", "...", "on",   "seem", "....", "...", ".....", "...."],
            ["program", "..", "....", "..", "...", "...", "make", "..", "....", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["question","..", "have", "..", "...", "get", "....", "..", "....", "....", "...", "....", "about", "....", "....", "....", "...", "....", "....",  "ask", "....", "seem", "....", "...", ".....", "...."],
            ["right",   "..", "have", "..", "...", "get", "make", "..", "....", "....", "...", "....", "think", "look", "....", "....", "...", "....", "....",  "...", "....", "seem", "feel", "...", ".....", "...."],
            ["room",    "..", "have", "..", "...", "get", "make", "to", "....", "....", "see", "to",   ".....", "....", "want", "give", "use", "find", "....",  "...", "....", "....", "....", "...", "leave", "...."],
            ["school",  "..", "have", "..", "...", "...", "make", "to", "....", "....", "see", "to",   "at",    "....", "....", "....", "...", "find", "about", "...", "at",   "....", "....", "...", ".....", "...."],
            ["state",   "..", "have", "..", "...", "...", "....", "to", "....", "....", "see", "to",   ".....", "....", "....", "....", "...", "....", "....",  "...", "....", "....", "....", "...", ".....", "...."],
            ["story",   "..", "have", "..", "...", "get", "make", "..", "know", "....", "...", "....", ".....", "....", "want", "....", "...", "....", "tell",  "...", "....", "seem", "....", "...", ".....", "...."],
            ["student", "be", "have", "..", "...", "...", "....", "to", "know", "....", "see", "....", ".....", "....", "....", "....", "...", "....", "....",  "ask", "....", "....", "....", "...", ".....", "...."],
            ["study",   "..", "....", "do", "...", "...", "....", "..", "....", "....", "...", "....", ".....", "....", "....", "....", "...", "....", "about", "...", "....", "....", "....", "...", "leave", "...."],
            ["system",  "..", "have", "..", "...", "get", "make", "..", "know", "....", "...", "....", ".....", "....", "want", "....", "use", "....", "about", "...", "....", "seem", "....", "...", ".....", "...."],
            ["thing",   "..", "have", "do", "say", "get", "make", "..", "....", "take", "see", "....", ".....", "....", "want", "give", "use", "find", "about", "...", "....", "....", "....", "...", ".....", "...."],
            ["time",    "..", "have", "..", "...", "get", "....", "..", "know", "take", "...", "....", ".....", "....", "want", "give", "use", "find", "tell",  "ask", "....", "....", "....", "...", ".....", "...."],
            ["water",   "..", "have", "..", "...", "get", "....", "..", "....", "take", "see", "....", ".....", "....", "want", "give", "use", "find", "....",  "for", "....", "....", "like", "...", ".....", "...."],
            ["way",     "..", "have", "..", "...", "get", "make", "..", "know", "....", "...", "....", ".....", "....", "....", "....", "...", "find", "....",  "...", "....", "....", "feel", "...", ".....", "...."],
            ["week",    "..", "have", "..", "...", "get", "....", "..", "....", "take", "...", "....", ".....", "....", "want", "give", "use", "find", "....",  "...", "for",  "....", "....", "for", ".....", "...."],
            ["woman",   "be", "....", "..", "...", "...", "....", "to", "know", "....", "see", "....", ".....", "at",   "....", "....", "...", "find", "tell",  "ask", "....", "....", "....", "...", ".....", "...."],
            ["word",    "..", "have", "..", "say", "...", "....", "..", "know", "....", "see", "....", ".....", "....", "want", "....", "...", "....", "tell",  "...", "....", "....", "....", "...", ".....", "...."],
            ["work",    "..", "have", "..", "...", "to", "....", "to", "know", "....", "...", "to",   "about", "for",  "want", "give", "...", "find", "about", "at", "....",  "seem", "....", "...", ".....", "...."],
            ["world",   "..", "....", "..", "...", "...", "....", "..", "....", "....", "see", "to",   "about", "at",   "....", "....", "...", "....", "tell",  "...", "....", "....", "....", "...", ".....", "...."],
            ["year",    "..", "have", "..", "...", "get", "....", "..", "....", "take", "...", "....", ".....", "....", "want", "give", "use", "find", "....",  "...", "for",  "....", "....", "for", ".....", "...."],
        ],
    };
    return data[type];
}

