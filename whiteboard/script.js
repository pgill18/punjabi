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
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // submit cost
];
whiteboard.costStructure_long = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // submit cost
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

function whiteboard_setup(index=0) {
    whiteboard.list = (tile.level>2) ? whiteboard.list_long : whiteboard.list_short;
    whiteboard.list.map(type => whiteboard.costIncurred[type]=0);
    whiteboard.costStructure = (tile.level>2) ? whiteboard.costStructure_long : whiteboard.costStructure_short;
    whiteboard.attemptsLeft = 3;
    // whiteboard_fillReqs();
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
    }

    // whiteboard.expedition_mode = 1;
    // whiteboard.expedition = { level: 4 };
    // if(whiteboard.expedition_mode) 
    //     data = whiteboard_db_levels[whiteboard.expedition.level][1];

    if(whiteboard.expedition_mode) {
        data = { dims: 2 };
        let elevel = whiteboard.expedition.level;
        let db_lvl = whiteboard_db_levels[elevel];
        let x = random(0, db_lvl.length-2);
        let idata = db_lvl.slice(x);
        if(x >= db_lvl.length-2) idata = db_lvl.slice(-2);
        if(elevel===4) data.origlines = [].concat(idata[0].origlines, idata[1].origlines);
        else data.origlines = [].concat(idata[0].origlines.slice(0,2), idata[1].origlines.slice(0,2));
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
    whiteboard_deduct(whiteboard.costStructure[1]);
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
    }
    $(`#whiteboard-submit`).attr('hidden', false);
    $(`#whiteboard-finish`).attr('hidden', true);
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
    // whiteboard_fillReqs();
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
