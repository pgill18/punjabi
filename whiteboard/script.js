// let tile = { level: 1 };
// let scorecard = get_scorecard({coins: 1000, supplies: 2000, stone: 50, lumber: 40, iron: 30, dye: 20});

const whiteboard = {}; // namespace

// let nrows = 4, ncols = 4; let colwidth = Math.round(12/ncols);
// let whiteboard = { score: 0, min: 16, total: 0 };
Object.assign(whiteboard, {nrows: 4, ncols: 4, score: 0});
whiteboard.colwidth = Math.round(12/whiteboard.ncols);

// console.log('whiteboard_db[0][0]', whiteboard_db[0][0])
// let content = whiteboard_db[0][0].map(entry => entry[Object.keys(entry)[0]]);
// whiteboard.content = whiteboard_rawdb[0].sequences1;
// whiteboard.shuffled = whiteboard.content.slice(0);   //shuffle(shuffled);
// function shuffle(array) {
//     let output = array.slice(0);
//     [output[0], output[1]] = [array[1], array[0]];
//     return output;
// }

whiteboard.list_long = ['coins', 'supplies', 'stone', 'lumber', 'iron', 'dye'];
whiteboard.list_short = ['coins', 'supplies', 'stone', 'lumber'];
whiteboard.list = [];
whiteboard.parties = 4;
whiteboard.hint_counter = 0;
whiteboard.expected = [];
whiteboard.eliminated = [];
whiteboard.still_expected = [];
whiteboard.validated_pass = [];
whiteboard.attemptsLeft = 3;
whiteboard.quota = 1;
whiteboard.index = 0;
whiteboard.reqqty = 10;
whiteboard.reqtype = 'stone';
whiteboard.unusable = {};
whiteboard.validated_hints = [];
whiteboard.costIncurred = {};
whiteboard.costStructure = [];
whiteboard.costStructure_short = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 2, lumber: 2 }, // submit cost
];
whiteboard.costStructure_long = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 2, lumber: 2, iron: 2, dye: 2 }, // submit cost
];
whiteboard.req = [
    { type: 'stone', qty: 15, n: 4 },
    { type: 'lumber', qty: 20, n: 4 },
    { type: 'lumber', qty: 50, n: 5 },
];
whiteboard.popovers = [];

// let whiteboard.data = {};
// let whiteboard.prev_data = {}; // = {model:[]};
// let data_url = "get";
// let scorecard = { stone: 0, lumber: 0, iron: 0, dye: 0 };
// let selected = { level: 1, platform: 1 };
// let whiteboard.aaa = 0;

whiteboard.data = {};
whiteboard.prev_data = {}; // = {model:[]};
whiteboard.aaa = 0;

$(function () {
    $("#whiteboardModal1-dialog").css('max-width', (whiteboard.ncols*250)+'px');
    // whiteboard.popovers = whiteboard_fillPopovers();
    // $('[data-toggle="popover"]').popover()
    // $('[data-toggle="tooltip"]').tooltip()
    // every5min_routines.push(whiteboard_refresh);
    daily_routines.push(whiteboard_refresh);
    setTimeout(() => {
        whiteboard_setup();
    }, 2500); // wait for tile.level to load at 2000ms
});

function whiteboard_fillReqs(base=0) {
    let qty1 = tile.level>=base ? 16 : 16;
    let qty2 = tile.level>=base ? 20 : 15;
    let qty3 = tile.level>=base ? 50 : 25;
    let list = whiteboard.list.slice(2);
    if(list.length>2) list = list.concat(list.slice(2,4)); // double the probability of the last two
    if(list.length>2) list = list.concat(list.slice(2,4)); // triple the probability of the last two
    console.log(`probables list: whiteboard =`, list)
    let type1 = list[random(0, list.length-1)];
    let type2 = list[random(0, list.length-1)];
    let type3 = list[random(0, list.length-1)];
    if(type1===type2 && type2===type3 && list[1]) { // if all the same change the middle one
        type2 = list[0]!==type2 ? list[0] : list[1];
    }
    whiteboard.req = [
        { type: type1, qty: qty1, n: 4 },
        { type: type2, qty: qty2, n: 5 },
        { type: type3, qty: qty3, n: 5 },
    ];
}

function whiteboard_setup(index=0) {
    whiteboard.list = (tile.level>2) ? whiteboard.list_long : whiteboard.list_short;
    whiteboard.list.map(type => whiteboard.costIncurred[type]=0);
    whiteboard.costStructure = (tile.level>2) ? whiteboard.costStructure_long : whiteboard.costStructure_short;
    whiteboard.attemptsLeft = 3;
    whiteboard_fillReqs();
    // whiteboard_body();
    whiteboard_initialize(index);
}

function whiteboard_initialize(index) {
    whiteboard.content = whiteboard_rawdb[index].sequences1;
    whiteboard.shuffled = shuffle(whiteboard.content.slice(0));
    let nrows = Math.ceil(whiteboard.shuffled.length / whiteboard.ncols);
    // -------------------------------------------------------
    // == how data is put together
    // -- origlines field comes from the database
    // -- original is made from flattening origlines
    // -- model is made from shuffling original
    // -- dims=2 allows origlines be treated as sentences for checking
    // -- if even===1, then origlines are appended with whitespaces before flatenning
    // -- a final word on data,
    // -- there are three types of data: long, expedition, and old (or temp or raw)
    // -- long form is 3 sentences per entry: english, pbe, and pbi
    // -- expedition form is the same as long form
    // -- old or raw may have any number of sentences per entry
    // -- old or raw entry is displayed as it is in whiteboard
    // -- whereas long and expedition data is shown as two entries at a time
    // -- pbi sentences are only shown in level-4 of the expedition or index-2 of the post
    //
    // let data = {
    //       "origlines": [
    //         [ "Many", "people", "don’t", "know", "this" ],
    //         [ "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē" ]
    //       ],
    //       "original": [ 
    //         "Many", "people", "don’t", "know", "this",
    //         "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē"
    //       ],
    //       "model": [
    //         "people", "don’t", "know", "this", "Many",
    //         "sārē", "lōka", "iha", "jāṇadē", "nahīṁ", "Bahuta",
    //       ],
    //       "dims": 2,
    // }
    // let data = whiteboard_db_temp[index];
    let data = whiteboard_db_temp[0];

    if(whiteboard_db_long.length>0) {
        data = { dims: 2 };
        let x = random(0, whiteboard_db_long.length-2);
        let idata = whiteboard_db_long.slice(x);
        if(x >= whiteboard_db_long.length-2) idata = whiteboard_db_long.slice(-2);
        if(index===0) data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
        if(index===1) data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
        if(index===2) data.origlines = [].concat(idata[0].origlines, idata[1].origlines);
        // data.origlines = [].concat(idata[0].origlines, idata[1].origlines, idata[2].origlines);
        data.origlines3 = [].concat(idata[0].origlines.slice(0,3), idata[1].origlines.slice(0,3));
        whiteboard.idata = idata;
    }

    // whiteboard.expedition_mode = 1;
    // whiteboard.expedition = { level: 4 };
    // if(whiteboard.expedition_mode) 
    //     data = whiteboard_db_levels[whiteboard.expedition.level][1];
    let irow = 2, icol = 0;

    if(whiteboard.expedition_mode) {
        data = { dims: 2 };
        let elevel = whiteboard.expedition.level;
        let db_lvl = whiteboard_db_levels[elevel];
        let x = random(0, db_lvl.length-2);
        let idata = db_lvl.slice(x);
        if(x >= db_lvl.length-2) idata = db_lvl.slice(-2);
        if(elevel===4) data.origlines = [].concat(idata[0].origlines, idata[1].origlines);
        if(elevel===4) data.origlines3 = [].concat(idata[0].origlines.slice(0,3), idata[1].origlines.slice(0,3));
        // else data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
        else {
            let platform = whiteboard.expedition.platform || 1;
            idata = langdb[elevel-1][platform-1];
            if(idata) {
                if(idata.length===1) idata.push(idata[0]);
                console.log(`... langdb =`, langdb)
                console.log(`... elevel=${elevel}, platform=${platform}, idata =`, idata)
                data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
                data.origlines3 = [].concat(idata[0].origlines.slice(0,3), idata[1].origlines.slice(0,3));
            }
            if(idata) {
                console.log(`... idata =`, idata)
                whiteboard.expedition.tenses = [idata[0].tense, idata[1].tense];
            }
        }
        // if no data found, assign the pencil thing
        if(!data.origlines) {
            let idata = db_lvl.slice(x);
            data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
            data.origlines3 = [].concat(idata[0].origlines.slice(0,3), idata[1].origlines.slice(0,3));
        }
    }

    // data.cols = 5;
    data.cols = data.origlines.reduce((a, b) => a.length > b.length ? a : b, []).length;
    data.even = 1;
    if(data.even) {
        data.origlines.map(line => line.push(...spaces_list(data.cols-line.length)));
    }
    // console.log(data);

    if(whiteboard.expedition_mode) {
        let elevel = whiteboard.expedition.level;
        if(elevel===1 || elevel===4) { // english lines are unscrabled for level-1 & 4
            data.original = flatten_lines(data.origlines);
            data.model = flatten_lines(shuffle_lines2(data.origlines));
        } else {
            data.original = flatten_lines(data.origlines);
            data.model = flatten_lines(shuffle_lines(data.origlines));
        }
    } else {
        if(index===0) {
            data.original = flatten_lines(data.origlines);
            data.model = flatten_lines(shuffle_lines2(data.origlines));
        }
        if(index===1) {
            data.original = flatten_lines(data.origlines);
            data.model = flatten_lines(shuffle_lines(data.origlines));
        }
        if(index===2) {
            data.original = flatten_lines(data.origlines);
            data.model = flatten_lines(shuffle_lines(data.origlines));
        }
        if(index===3) { // all scrambled (never used)
            data.original = flatten_lines(data.origlines);
            data.model = shuffle(data.original.slice());
        }        
    }

    whiteboard_refresh_html(data);
    // footer text
    // if(whiteboard.req[index]) {
    //     whiteboard.reqtype = whiteboard.req[index].type;
    //     whiteboard.reqqty = whiteboard.req[index].qty;
    // }
    $('#whiteboard-available').text(`${whiteboard.reqqty} ${whiteboard.reqtype}`);
    $('#whiteboard-bsalert').html('');
    $('#whiteboard-bsalert').attr('class', '');
    whiteboard_bscard();
    // utility functions
    function flatten_lines(lines, list=[]) {
        lines.map(line => list.push(...line));
        return list;
    }
    function shuffle_lines(lines, output=[]) {
        lines.map(line => output.push(shuffles(line.slice())));
        return output;
    }
    function shuffle_lines2(lines, output=[]) {
        lines.map((line,i) => output.push( i%2===1 ? shuffles(line.slice()) : line.slice() ));
        return output;
    }
    function spaces_list(count) {
        if(count > 0) return new Array(count).fill("");
        return [];
    }
    function shuffles(list) { // shuffle but keep empty-words at the end
        let spaces = list.filter(a => a==="");
        list = shuffle(list).filter(a => a!=="");
        return list.concat(spaces);
    }
}

function whiteboard_refresh_html(data, auto=0) {
    whiteboard.data = data;
    // console.log(`... whiteboard_refresh_html`);
    let mismatches = whiteboard_compare(data.model, whiteboard.prev_data.model);
    if(mismatches.length) console.log(`mismatches ... `, mismatches);
    // console.log(whiteboard.data, whiteboard.prev_data);
    if(!mismatches.length) {
        if(!whiteboard.prev_data.model) { whiteboard.prev_data = data; return; }
        // return;
    }
    $(`#whiteboard-content`).html( whiteboard_json2html( data ) );
    $("#whiteboard-square").sortable({ tolerance: 'pointer' });
}

function whiteboard_json2html(data) {
    // console.log(`... whiteboard_json2html`);
    // console.log(data);
    whiteboard.aaa = 1; //mismatches.reduce((a,b) => a+b, 0);
    let cards_html = !data ? [] : data.model.map((a,i) => whiteboard_json2card(data.model[i], whiteboard.prev_data.model[i], {data,i}));
    let cols = data.cols ? data.cols : Math.round(Math.sqrt(data.model.length));
    let html = `
        <div class="row row-cols-1 row-cols-md-${cols}" id="whiteboard-square">
        ${cards_html.join('\n')}
        </div>
    `;
    whiteboard.prev_data = data;
    // console.log(html);
    return html.trim();
}
function whiteboard_json2card(a, prev_a, {data,i}={}) {
    let title=a, body='';
    let color = { bg: 'bg-light', border: '', bgcolor: 'orange', opacity: 0.5 };
    prev_a = data.original[i];
    let completed = 0;
    if(whiteboard.aaa) {
        if(a===prev_a) color = { bg: 'xbg-success', border: 'border-success', bgcolor: 'green', opacity: 0.5 };
        else { whiteboard.aaa = 0; color = { bg: 'xbg-info', border: 'border-warning', bgcolor: 'orange', opacity: 0.5 }; }
        if(whiteboard_completedThisSection(data, i)) completed = 1;
    }
    if(data.dims===2) {
        if(completed) color.bg = 'bg-success';
    }
    if(!title || title==="") title = "&nbsp;";
    let card = `
          <div class="col mb-4">
            <div class="card ${color.bg} ${color.border}" style="border-width: 1px; xbackground-color: ${color.bgcolor}, xopacity: ${color.opacity}">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${body}</p>
              </div>
            </div>
          </div>
    `;
    return card.trim();
}
function whiteboard_completedThisSection(data, i) {
    let mismatches = whiteboard_compare(data.model, data.original);
    let lastmatchi = mismatches.length ? mismatches[0] - 1 : data.model.length-1;
    let match_section_edge_index = -1;
    for(let rowi=0; rowi<data.origlines.length; rowi++) {
        let row = data.origlines[rowi];
        if(lastmatchi >= (match_section_edge_index+row.length))
            match_section_edge_index += row.length;
        else break;
    }
    // console.log(`i=${i} <= match_section_edge_index=${match_section_edge_index} ... lastmatchi=${lastmatchi}, mismatches=`, mismatches);
    return i <= match_section_edge_index;
}
function whiteboard_compare(model, original) {
    if(!model || !original) return [];
    let mismatches = [];
    for(let i=0; i<model.length; i++) {
        if(model[i]===original[i]) continue;
        mismatches.push(i);
    }
    return mismatches;
}

function whiteboard_read_square(_this) {
    let array = [];
    let sqcoll = $('#whiteboard-square').find('.card-title'); //.values().map(a => $(a).text());
    for(let el of sqcoll) {
        array.push($(el).text().trim());
    }
    // console.log(`---- array -------`)
    // console.log(array);
    return array;
}
function whiteboard_get_card(i) {
    let sqcoll = $('#whiteboard-square').find('.card'); //.values().map(a => $(a).text());
    let sqlist = [];
    for(let el of sqcoll) {
        sqlist.push(el);
    }
    return sqlist[i];
}
function whiteboard_compare_element(a, prev_a, {data,i,context}={}) {
    // console.log(`whiteboard_compare_element(${a}, ${prev_a}, {data,${i},${context.aaa}}={})`, data);
    let title=a, body='';
    let color = { bg: 'bg-light', border: '', bgcolor: 'orange', opacity: 0.5 };
    // console.log(`whiteboard_compare_element() : color=`, color);
    // prev_a = data.original[i];
    let completed = 0;
    if(context.aaa) {
        if(a===prev_a) color = { bg: 'xbg-success', border: 'border-success', bgcolor: 'green', opacity: 0.5 };
        else { context.aaa = 1; color = { bg: 'xbg-info', border: 'border-warning', bgcolor: 'orange', opacity: 0.5 }; }
        if(whiteboard_completedThisSection(data, i)) completed = 1;
    }
    if(data.dims===2) {
        if(completed) color.bg = 'bg-success';
    }
    let card = whiteboard_get_card(i);
    // console.log(`whiteboard_compare_element() : color=`, color);
    $(card).attr('class', `card ${color.bg} ${color.border}`);
    // console.log(card);
}
function whiteboard_compare_square() {
    let context = { aaa: 1 };
    let data = whiteboard.data;
    let data_square = whiteboard_read_square();
    let data_input = Object.assign({}, data, {model: data_square});
    data.model.map((a,i) => whiteboard_compare_element(data_square[i], data.original[i], {data:data_input,i,context}));
    // console.log(`data_square=`, data_square);
    // console.log(`data.original=`, data.original);
    let mismatches = whiteboard_compare(data_square, data.original);
    return mismatches;
}
function whiteboard_credit_langscore() {
    let tenses = idata2tenses(whiteboard.idata);
    if(tenses) tenses.map(tense => credit_langscores(tense));
    function idata2tenses(idata, tenses=[]) {
        if(!idata || !idata.length) return;
        for(let origlines of idata.slice(0,2)) {
            let tense = {};
            for(let word of origlines[0]) {
                switch(get_pos_type(word)) {
                    case 'pron': tense.pron = word; break;
                    case 'verb': tense.verb = word; break;
                    case 'noun': tense.noun = word; break;
                    case 'adj': tense.adj = word; break;
                    case 'adv': tense.adv = word; break;
                    case 'det': tense.det = word; break;
                    case 'prep': tense.prep = word; break;
                    case 'conj': tense.conj = word; break;
                    case 'intj': tense.intj = word; break;
                }
            }
        }
        return tenses;
    }
    function get_pos_type(word) {
        word = clean(word);
        let postype = '';
        if(get_lang_data('pronouns').includes(word)) postype = 'pron';
        if(get_lang_data('verbs').includes(word)) postype = 'verb';
        if(get_lang_data('nouns').includes(word)) postype = 'noun';
        if(get_lang_data('adjectives').includes(word)) postype = 'adj';
        if(get_lang_data('adverbs').includes(word)) postype = 'adv';
        if(get_lang_data('determiners').includes(word)) postype = 'det';
        if(get_lang_data('prepositions').includes(word)) postype = 'prep';
        if(get_lang_data('conjunctions').includes(word)) postype = 'conj';
        if(get_lang_data('interjections').includes(word)) postype = 'intj';
        return postype;
    }
    function clean(text, icase='') {
        if(!text) return text;
        else text = text.toString().trim();
        text = text.toLowerCase();
        return text;
    }
}

function speakit(text){
    console.log(`... speak()`);
    console.log(text);
    console.log(pa2hi(text));
    // let synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(pa2hi(text));
    utterThis.voice = voices[9];
    synth.speak(utterThis);
}

function whiteboard_listen() {
    whiteboard.done = 0;
    window.speechSynthesis.getVoices();
    // const synthesis = { voices: [], pitch: 1, rate: 1, volume: 1 }; // defaults
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.speechGrammarList || window.webkitSpeechGrammarList;
    // setTimeout(() => synthesis.voices = window.speechSynthesis.getVoices(), 100);
    speak();
    listen();

    function speak() {
        let data_square = whiteboard_read_square();
        let mismatches = whiteboard_compare_square();
        let start1 = round(data_square.length/4) * 1;
        let start2 = round(data_square.length/4) * 2;
        let start3 = round(data_square.length/4) * 3;
        let start4 = round(data_square.length/4) * 4;
        if(mismatches[0] >= start1 && mismatches[0] < start3) speakit(whiteboard.data.origlines3[2].join(" "));
        if(mismatches[0] >= start3 && mismatches[0] < start4) speakit(whiteboard.data.origlines3[5].join(" "));
    }

    function listen() {
        let recognition = new SpeechRecognition();
        recognition.lang = 'pa-Guru-IN'; //'hi-IN'; // 'pa-IN'; // info.lang = 'en-US';
        // recognition.lang = 'hi-IN'; // 'pa-IN'; // info.lang = 'en-US';
        recognition.maxAlternatives = 10;
        let speechGrammarList = new SpeechGrammarList();

        speechGrammarList.addFromString(grammar(), 1);
        recognition.grammars = speechGrammarList;
        console.log(grammar());
        // words.length=4 words=एचडी,एक,किताब,है

        recognition.continuous = true;
        recognition.start();
        recognition.onresult = function(event) {
            // if (event.results.length > 0) {
            //     let latest = event.results[event.results.length-1][0];
            let resultsList = event.results[event.results.length-1];
            for(let resindex=0; resindex<resultsList.length; resindex++) {
                console.log(`....................... ${resindex} of ${resultsList.length} ................................`);
                let latest = resultsList[resindex];
                console.log(`... ${latest.transcript} `);
                console.log(latest);

                // keep only the last word
                let transcript = latest.transcript.trim().toLowerCase();
                transcript = hi2pa0(transcript);
                let words = transcript.split(/\s+/);
                console.log(`words.length=${words.length} words=${words}`)
                if(words.length > 1 || transcript.match(/number/i)) {
                    let endword = words[words.length-1];
                    console.log(`endword=${endword}`);
                    let data_square = whiteboard_read_square();
                    let mismatches = whiteboard_compare_square();
                    let start1 = round(data_square.length/4) * 1;
                    let start2 = round(data_square.length/4) * 2;
                    let start3 = round(data_square.length/4) * 3;
                    let start4 = round(data_square.length/4) * 4;
                    console.log(`whiteboard.data.origlines3 =`, whiteboard.data.origlines3)
                    let orig_words1 = whiteboard.data.origlines3[2]; // 0,1,2 (eng,pbe,pbi)
                    let orig_words2 = whiteboard.data.origlines3[5]; // 3,4,5 (eng,pbe,pbi)
                    let success1 = 0, success2 = 0;
                    if(mismatches[0] >= start1 && mismatches[0] < start3) success1 = whiteboard_voice_work_square(1, words, orig_words1);
                    if(mismatches[0] >= start3 && mismatches[0] < start4) success2 = whiteboard_voice_work_square(3, words, orig_words2);
                    if(success2 || whiteboard.done) recognition.stop();
                    else if(success1) speak();
                    if(success1 || success2 || whiteboard.done) break;
                }
            }
        };
        recognition.onstart = function(event) {
            let button = document.getElementById('whiteboard-voice');
            // if(button) button.style.backgroundColor = 'lime';
            if(button) $(button).removeClass('btn-light')
            if(button) $(button).addClass('btn-success')
        }
        recognition.onend = function(event) {
            let button = document.getElementById('whiteboard-voice');
            // if(button) button.style.backgroundColor = 'white';
            if(button) $(button).removeClass('btn-success')
            if(button) $(button).addClass('btn-light')
        }
    }
    function grammar() {
        let grammar_words = [];
        let data_square = whiteboard_read_square();
        let mismatches = whiteboard_compare_square();
        let start1 = round(data_square.length/4) * 1;
        let start2 = round(data_square.length/4) * 2;
        let start3 = round(data_square.length/4) * 3;
        let start4 = round(data_square.length/4) * 4;
        let orig_words1 = whiteboard.data.origlines3[2]; // 0,1,2 (eng,pbe,pbi)
        let orig_words2 = whiteboard.data.origlines3[5]; // 3,4,5 (eng,pbe,pbi)
        // let grammar_words = [].concat(orig_words1, orig_words2);
        if(mismatches[0] >= start1 && mismatches[0] < start3) grammar_words = orig_words1.slice().map(word => pa2hi0(word));
        if(mismatches[0] >= start3 && mismatches[0] < start4) grammar_words = orig_words2.slice().map(word => pa2hi0(word));
        // let grammar_names = ['Tusīṁ', 'kī', 'kara', 'rahē', 'hō'];
        return '#JSGF V1.0; grammar phrase; public <phrase> = ' + grammar_words.join(" | ") +' ;';
    } 
    function pa2hi0(word) { return word }
    function hi2pa0(word) { return word }
}

function pa2hi(word) {
    let oword = word.split('').map(c => c.charCodeAt(0)).map(c => c<2565||c>2694?c:c-256).map(c => String.fromCharCode(c))
        .filter(a => a!==2562).join('');
    console.log(`pa2hi(${word}) => ${oword}`)
    return oword;
    // return word.split('').map(c => c.charCodeAt(0)).map(c => c<2565||c>2694?c:c-256).map(c => String.fromCharCode(c)).join('');
}
function hi2pa(word) {
    let oword = word.split('').map(c => c.charCodeAt(0)).map(c => c<2309||c>2438?c:c+256).map(c => String.fromCharCode(c)).join('')
    console.log(`hi2pa(${word}) => ${oword}`)
    return oword;
    // return word.split('').map(c => c.charCodeAt(0)).map(c => c<2309||c>2438?c:c+256).map(c => String.fromCharCode(c)).join('')
}  

function whiteboard_voice_work_square(irow, words, orig_words) {
    let data_square = whiteboard_read_square();
    let start = round(data_square.length/4) * irow;
    let end = round(data_square.length/4) * (irow+1);
    let row_words = data_square.slice(start, end);
    console.log('row_words', row_words);
    console.log('origlines', whiteboard.data.origlines);
    console.log('original', whiteboard.data.original);
    console.log('orig_words', orig_words);
    let correct_row_words = whiteboard.data.origlines[irow];
    let beginword = words[0];
    let endword = words[words.length-1];
    // if(beginword && endword) {
    if(match(words, orig_words)) {
        whiteboard_voice_fix_square(irow, correct_row_words);
        return 1;
    }
    return 0;
    function match(words, orig_words) {
        console.log(`... match(words, orig_words)`);
        console.log('words', words);
        console.log('orig_words', orig_words);
        words = combine_words(words, orig_words);
        console.log('combine_words() =', words);
        // let mismatches = orig_words.map((word,i) => [word,words[i]]).filter(([orig_word,new_word]) => new_word!==orig_word);
        // let mismatches = orig_words.map((word,i) => word===words[i] ? 0 : 1).reduce((a,b) => a+b, 0);
        let mismatches = deep_match(words, orig_words);
        let mismatches_n =  round(mismatches.reduce((a,b) => a+b, 0));
        let mismatches_pc =  round(mismatches.reduce((a,b) => a+b, 0)/mismatches.length * 100);
        console.log('mismatches =', mismatches, ', mismatches % =', mismatches_pc);
        // if(mismatches.length>1) whiteboard_bsalert(mismatches.map(([a,b]) => `${a}!==${b}`).join(' , '), 'Missed', 'warning');
        if(mismatches_pc>30) whiteboard_bsalert(diffString(words.join(' '), orig_words.join(' ')), 'Missed', 'warning');
        else whiteboard_bsalert('', 'Great job!', 'success');
        return mismatches_n <= 1; // tolerate 1 error
    }
    function deep_match(words, orig_words, index=0) {
        let mismatches = orig_words.map(a => 1);
        for(let word of words) {
            for(let i=index; i<orig_words.length; i++) {
                if(word===orig_words[i]) {
                    mismatches[i] = 0; index = i+1;
                }
            }
        }
        return mismatches;
    }
    function combine_words(words, orig_words) {
        let mismatches_count = deep_match(words, orig_words);
        if(mismatches_count <= 0) return words;
        for(let i=words.length-2; i>=0; i--) {
            let new_words = words.slice();
            new_words[i] += new_words.splice(i+1, 1);
            let mismatches_new = deep_match(new_words, orig_words);
            if(mismatches_new < mismatches_count) { // if matching improves, keep the change
                words = new_words; mismatches_count = mismatches_new;
            }
        }
        return words;
    }
}
function whiteboard_voice_fix_square(irow, row_words) {
    let start = round(whiteboard.data.model.length/4) * irow;
    row_words.map((a,i) => whiteboard.data.model[start+i] = row_words[i]);
    $(`#whiteboard-content`).html( whiteboard_json2html( whiteboard.data ) );
    $("#whiteboard-square").sortable({ tolerance: 'pointer' });
}

function whiteboard_voice_check(pay=0) {
    whiteboard_listen();
    // if(pay) whiteboard_deduct(whiteboard.costStructure[0]);
    // console.log(whiteboard);
    // let mismatches = whiteboard_compare_square();
    // console.log(`mismatches=`, mismatches);
    // return mismatches.length===0;  //return passed;
}
function whiteboard_voice_check2(pay=0) {
    // whiteboard_listen();
    if(pay) whiteboard_deduct(whiteboard.costStructure[0]);
    console.log(whiteboard);
    let mismatches = whiteboard_compare_square();
    console.log(`mismatches=`, mismatches);
    return mismatches.length===0;  //return passed;
}

function whiteboard_check(pay=1) {
    if(pay) whiteboard_deduct(whiteboard.costStructure[0]);
    console.log(whiteboard);
    let mismatches = whiteboard_compare_square();
    console.log(`mismatches=`, mismatches);
    return mismatches.length===0;  //return passed;
}
function whiteboard_submit() {
    if(whiteboard.attemptsLeft<=0) {
        return whiteboard_bsalert(`Sorry, you ran out of attempts. Try again later.`, 'Missed', 'danger');
    }
    whiteboard.attemptsLeft--;
    if(whiteboard_check(0) && whiteboard.attemptsLeft>=2) {
        console.log(`Hooray! You one shotted it!!`);
    } else {
        whiteboard_deduct(whiteboard.costStructure[1]);
    }
    if(whiteboard.expedition_mode) { whiteboard.expedition.started = 1; }
    if(whiteboard_check(0)) {
        $(`#whiteboard-submit`).attr('hidden', true);
        $(`#whiteboard-finish`).attr('hidden', false);
        if(whiteboard.expedition_mode) {
            whiteboard.expedition.coll[whiteboard.reqtype] = whiteboard.reqqty;
            whiteboard.expedition.done = 1;
        }
        add_collected(whiteboard.reqtype, whiteboard.reqqty);
        whiteboard_bscard();
        return whiteboard_bsalert(`${whiteboard.reqqty} ${whiteboard.reqtype} allocated. It cost you ${obj2string(whiteboard.costIncurred)}`, 'Success', 'success');
    } else {
        return whiteboard_bsalert(`You have ${whiteboard.attemptsLeft} more attempts left.`, 'Continue trying', 'warning')
    }
}

function whiteboard_deduct(costStruct) {
    let mult = whiteboard.expedition_mode ? whiteboard.expedition.mult||1 : 1;
    let cost = {};
    for(let [type, qty] of Object.entries(costStruct)) {
        // if(whiteboard.index===0 && i>=4) continue;
        if(!type || !costStruct[type]) continue;
        whiteboard.costIncurred[type] += costStruct[type] * mult;
        // scorecard[type] -= costStruct[type];
        cost[type] = (cost[type]||0) + costStruct[type] * mult;
    }
    deduct_dependencies(cost);
    whiteboard_bscard();
}
function whiteboard_bsalert(text, exclaim='', color='light') {
    let message = `<strong>${exclaim}!</strong> ${text}`;
    $('#whiteboard-bsalert').attr('class', '');
    $('#whiteboard-bsalert').addClass(`alert alert-${color}`);
    $('#whiteboard-bsalert').html(message);
}
function whiteboard_bscard() {
    let scorecard = get_scorecard();
    // let array = Object.entries(scorecard).map(([key,value]) => key+' '+value);
    let array = whiteboard.list.map(key => key+' '+scorecard[key]);
    // $('#whiteboard-bscard').text(array.join('  '));
    $('#whiteboard-bscard').html(array.join('&nbsp;&nbsp;&nbsp;&nbsp;'));
}

function whiteboard_hint() {
    let cards = document.getElementsByClassName('card');
    for(let i=0; i<cards.length; i++) {
        let state = $(cards[i]).find(`p`).attr('hidden');
        $(cards[i]).find(`p`).attr('hidden', !state);
    }
}

function whiteboard_finish() {
    if(!whiteboard.expedition_mode) {
        $(`#whiteboard-${whiteboard.index}`).attr('disabled', 'true');
        $(`#whiteboard-${whiteboard.index}`).css('pointerEvents', 'none');
        minigames.whiteboard[whiteboard.index].collected = 1;
        minigames.whiteboard[whiteboard.index].colltime = (new Date).getTime();
        // whiteboard_credit_langscore();
        // localStorage.setItem('langscores', JSON.stringify(langscores));
    }
    $(`#whiteboard-submit`).attr('hidden', false);
    $(`#whiteboard-finish`).attr('hidden', true);
    whiteboard.done = 1;
    save_data();
}

function whiteboard_refresh() {
    console.log(`........ whiteboard_refresh()`)
    $(`#whiteboard-0`).attr('disabled', 'false');
    $(`#whiteboard-1`).attr('disabled', 'false');
    $(`#whiteboard-2`).attr('disabled', 'false');
    $(`#whiteboard-0`).css('pointerEvents', 'true');
    $(`#whiteboard-1`).css('pointerEvents', 'true');
    $(`#whiteboard-2`).css('pointerEvents', 'true');
    minigames.whiteboard[0].collected = 0;
    minigames.whiteboard[1].collected = 0;
    minigames.whiteboard[2].collected = 0;
    whiteboard_fillReqs();
}

function whiteboard_createWhiteboard(index) { 
    whiteboard_setup(index);
}

function whiteboard_launchMiniWhiteboardModal_bak(dbindex, {zindex}={}) { 
    // if(dbindex!==undefined) forms.form.dbindex = dbindex;
    if(dbindex!==undefined) whiteboard.index = dbindex;
    whiteboard_createWhiteboard(dbindex);
    if(zindex) $('#whiteboardModal1').css('z-index', zindex);
    $(`#whiteboardModal1`).modal({keyboard: false});
}

function whiteboard_expedition_mode(mode_value=true, {state,cb}={}) {
    whiteboard.expedition_mode = mode_value;
    if(mode_value===true) {
        whiteboard.expedition.level = state.level || 1;
        whiteboard.expedition.platform = state.platform || 1;
    }
    // whiteboard.expedition.cb = cb;
}
function whiteboard_expedition_cb() {
    whiteboard.done = 1;
    whiteboard_expedition_mode(false);
    if(!whiteboard.expedition.cb) return;
    if(typeof whiteboard.expedition.cb !== 'function') return;
    whiteboard.expedition.cost = whiteboard.costIncurred;
    whiteboard.expedition.cb(whiteboard.expedition);
}

function whiteboard_expedition_launchMiniWhiteboardModal(state, {coll,rewards,cost,mult,zindex,cb}={}) {
    // console.log(`whiteboard_expedition_launchMiniWhiteboardModal(state, {coll,rewards,zindex,cb}={})`, state, coll, rewards, zindex)
    whiteboard.expedition = { cost, coll, rewards, mult, cb, done: 0, started: 0 };
    let reqcoll =  {};
    if(isEmpty(coll)) { reqcoll =  { type: 'stone', qty: 0 }; }
    else {
        reqcoll.type = Object.keys(coll)[0]
        reqcoll.qty = coll[reqcoll.type];
    }
    whiteboard_expedition_mode(true, {state});
    whiteboard_launchMiniWhiteboardModal(state.level-1, {zindex,reqcoll});
    // on close call back
    $('#whiteboardModal1').on('hide.bs.modal', whiteboard_expedition_cb);
}

function whiteboard_launchMiniWhiteboardModal(x=0, {zindex,reqcoll}={}) {
    // console.log(`whiteboard_launchMiniWhiteboardModal(x=${x}, zindex=${zindex})`)
    // whiteboard.parties = x===0 ? 4 : 5;
    whiteboard.attemptsLeft = 3;
    if(x===2 && tile.level>3) {
        whiteboard.list = whiteboard.list_long;
        whiteboard.costStructure = whiteboard.costStructure_long;
        whiteboard.reqqty = 50;
        whiteboard.attemptsLeft = 4;
    } else {
        whiteboard.list = whiteboard.list_short;
        whiteboard.costStructure = whiteboard.costStructure_short;
    }
    let llength = whiteboard.list.length;
    whiteboard.index = x; // index is used by teaching-post, not by expedition
    whiteboard.costIncurred = {};
    // whiteboard.reqtype = whiteboard.list[random(0,3)];
    whiteboard.reqtype = whiteboard.list[random(0,llength-1)];

    if(whiteboard.req[x]) {
        whiteboard.reqtype = whiteboard.req[x].type;
        whiteboard.reqqty = whiteboard.req[x].qty;
    }
    // let available_message = `${whiteboard.reqqty} ${whiteboard.reqtype}`;
    if(reqcoll) {
        whiteboard.reqtype = reqcoll.type;
        whiteboard.reqqty = reqcoll.qty;
        // available_message = `random items`;
    }
    let available_message = `${whiteboard.reqqty} ${whiteboard.reqtype}`;
    if(!whiteboard.reqqty) available_message = `random items`;
    // if(!whiteboard.reqqty) available_message = `3 attempts`;

    whiteboard_createWhiteboard(x);
    // whiteboard_body();
    whiteboard_bscard();
    $('#whiteboard-available').text(available_message);
    // $('#whiteboardModal1').attr('data-backdrop', 'static');
    if(zindex) $('#whiteboardModal1').css('z-index', zindex);
    $('#whiteboardModal1').modal({keyboard:false});
    $('#whiteboard-voice').click();
}

function whiteboard_launchBridge(id='teachingBridgeModal') {
    let html = '';
    for(let i=0; i<3; i++) {
        let {type, qty} = whiteboard.req[i];
        let text = minigames.whiteboard[i].collected ? 'Collected' : 'Collect';
        let onclick = minigames.whiteboard[i].collected ? 'xonclick' : 'onclick';
        let btnstyle = minigames.whiteboard[i].collected ? 'btn-secondary' : 'btn-outline-secondary';
        let dismiss = minigames.whiteboard[i].collected ? 'none' : 'modal';
        html += `
            <div class="col" id="${id}-c${i}" style="width:20%;">
                <div class="card" style="height: 22rem;" id="${id}-c${i}-card">
                  <img src="forms/img/forms-card.gif" class="card-img-top" alt="..." height="200px">
                  <div class="card-body d-flex flex-column text-center" id="${id}-c${i}-card-body" xstyle="max-height:200px;">
                    <h4 class="card-title"><span id="${id}-c${i}-qty">${qty}</span> &nbsp; <span id="${id}-c${i}-type">${capitalizeFirstLetter(type)}</span></h4>
                    <!--- <h4 class="card-subtitle mb-2 text-muted" id="${id}-c${i}-card-subtitle">${qty}</h4> --->
                    <!--- <em class="card-text" id="${id}-c${i}-card-text">Please furnish all details</em> --->
                    <br>
                    <a class="btn ${btnstyle}" id="whiteboard-${i}" data-dismiss="${dismiss}" aria-label="Close" ${onclick}="whiteboard_launchMiniWhiteboardModal(${i})">${text}</a>
                  </div>
                </div>
            </div>
        `;
    }
    html = `<br><div class="container-fluid row">${html}</div><br>`;
    let message = `All whiteboard platforms are refreshed once everyday.`;
    html += `<a href="#" class="card-link" data-toggle="popover" xtitle="${message}" data-content="${message}">?</a>`;
    $(`#${id}-body`).html(html);
    $('[data-toggle="popover"]').popover()
    $(`#${id}`).modal({keyboard:false});
}
