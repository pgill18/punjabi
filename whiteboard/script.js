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
    { type: 'stone', qty: 12, n: 4 },
    { type: 'lumber', qty: 15, n: 4 },
    { type: 'lumber', qty: 25, n: 5 },
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
    // $("#whiteboardModal1-body").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-r1").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-dialog").css('max-width', (whiteboard.ncols*220)+'px');
    $("#whiteboardModal1-dialog").css('max-width', (whiteboard.ncols*250)+'px');
    // whiteboard.popovers = whiteboard_fillPopovers();
    // $('[data-toggle="popover"]').popover()
    // $('[data-toggle="tooltip"]').tooltip()
    // daily_routines.push(whiteboard_refresh);
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

    whiteboard.expedition_mode = 0;
    whiteboard.expedition = { level: 1 };
    if(whiteboard.expedition_mode) 
        data = whiteboard_db_levels[whiteboard.expedition.level][0];

    data.cols = 5;
    data.cols = data.origlines.reduce((a, b) => a.length > b.length ? a : b, []).length;
    data.even = 1;
    if(data.even) {
        data.origlines.map(line => line.push(...spaces_list(data.cols-line.length)));
    }
    console.log(data);

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
    if(index===3) {
        data.original = flatten_lines(data.origlines);
        data.model = shuffle(data.original.slice());
    }
    refresh_html(data);
    // footer text
    if(whiteboard.req[index]) {
        whiteboard.reqtype = whiteboard.req[index].type;
        whiteboard.reqqty = whiteboard.req[index].qty;
    }
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

function refresh_html(data, auto=0) {
    whiteboard.data = data;
    console.log(`... refresh_html`);
    let mismatches = compare(data.model, whiteboard.prev_data.model);
    if(mismatches.length) console.log(`mismatches ... `, mismatches);
    console.log(whiteboard.data, whiteboard.prev_data);
    if(!mismatches.length) {
        if(!whiteboard.prev_data.model) { whiteboard.prev_data = data; return; }
        // return;
    }
    $(`#whiteboard-content`).html( json2html( data ) );
    $("#whiteboard-square").sortable({ tolerance: 'pointer' });
}

function json2html(data) {
    // console.log(`... json2html`);
    // console.log(data);
    whiteboard.aaa = 1; //mismatches.reduce((a,b) => a+b, 0);
    let cards_html = !data ? [] : data.model.map((a,i) => json2card(data.model[i], whiteboard.prev_data.model[i], {data,i}));
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
function json2card(a, prev_a, {data,i}={}) {
    let title=a, body='';
    let color = { bg: 'bg-light', border: '', bgcolor: 'orange', opacity: 0.5 };
    prev_a = data.original[i];
    let completed = 0;
    if(whiteboard.aaa) {
        if(a===prev_a) color = { bg: 'xbg-success', border: 'border-success', bgcolor: 'green', opacity: 0.5 };
        else { whiteboard.aaa = 0; color = { bg: 'xbg-info', border: 'border-warning', bgcolor: 'orange', opacity: 0.5 }; }
        if(completedThisSection(data, i)) completed = 1;
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
function completedThisSection(data, i) {
    let mismatches = compare(data.model, data.original);
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
function compare(model, original) {
    if(!model || !original) return [];
    let mismatches = [];
    for(let i=0; i<model.length; i++) {
        if(model[i]===original[i]) continue;
        mismatches.push(i);
    }
    return mismatches;
}

function read_square(_this) {
    let array = [];
    let sqcoll = $('#whiteboard-square').find('.card-title'); //.values().map(a => $(a).text());
    for(let el of sqcoll) {
        array.push($(el).text().trim());
    }
    // console.log(`---- array -------`)
    // console.log(array);
    return array;
}
function get_card(i) {
    let sqcoll = $('#whiteboard-square').find('.card'); //.values().map(a => $(a).text());
    let sqlist = [];
    for(let el of sqcoll) {
        sqlist.push(el);
    }
    return sqlist[i];
}
function compare_element(a, prev_a, {data,i,context}={}) {
    // console.log(`compare_element(${a}, ${prev_a}, {data,${i},${context.aaa}}={})`, data);
    let title=a, body='';
    let color = { bg: 'bg-light', border: '', bgcolor: 'orange', opacity: 0.5 };
    // console.log(`compare_element() : color=`, color);
    // prev_a = data.original[i];
    let completed = 0;
    if(context.aaa) {
        if(a===prev_a) color = { bg: 'xbg-success', border: 'border-success', bgcolor: 'green', opacity: 0.5 };
        else { context.aaa = 1; color = { bg: 'xbg-info', border: 'border-warning', bgcolor: 'orange', opacity: 0.5 }; }
        if(completedThisSection(data, i)) completed = 1;
    }
    if(data.dims===2) {
        if(completed) color.bg = 'bg-success';
    }
    let card = get_card(i);
    // console.log(`compare_element() : color=`, color);
    $(card).attr('class', `card ${color.bg} ${color.border}`);
    // console.log(card);
}
function compare_square() {
    let context = { aaa: 1 };
    let data = whiteboard.data;
    let data_square = read_square();
    let data_input = Object.assign({}, data, {model: data_square});
    data.model.map((a,i) => compare_element(data_square[i], data.original[i], {data:data_input,i,context}));
    // console.log(`data_square=`, data_square);
    // console.log(`data.original=`, data.original);
    let mismatches = compare(data_square, data.original);
    return mismatches;
}

function whiteboard_check(pay=1) {
    if(pay) whiteboard_deduct(whiteboard.costStructure[0]);
    console.log(whiteboard);
    let mismatches = compare_square();
    console.log(`mismatches=`, mismatches);
    return mismatches.length===0;  //return passed;
}

function whiteboard_submit() {
    if(whiteboard.attemptsLeft<=0) {
        return whiteboard_bsalert(`Sorry, you ran out of attempts. Try again later.`, 'Missed', 'danger');
    }
    whiteboard.attemptsLeft--;
    whiteboard_deduct(whiteboard.costStructure[1]);
    if(whiteboard_check(0)) {
        $(`#whiteboard-submit`).attr('hidden', true);
        $(`#whiteboard-finish`).attr('hidden', false);
        add_collected(whiteboard.reqtype, whiteboard.reqqty);
        whiteboard_bscard();
        return whiteboard_bsalert(`${whiteboard.reqqty} ${whiteboard.reqtype} allocated. It cost you ${obj2string(whiteboard.costIncurred)}`, 'Success', 'success');
    } else {
        return whiteboard_bsalert(`You have ${whiteboard.attemptsLeft} more attempts left.`, 'Continue trying', 'warning')
    }
}

function whiteboard_deduct(costStruct) {
    let cost = {};
    for(let [type, qty] of Object.entries(costStruct)) {
        // if(whiteboard.index===0 && i>=4) continue;
        if(!type || !costStruct[type]) continue;
        whiteboard.costIncurred[type] += costStruct[type];
        // scorecard[type] -= costStruct[type];
        cost[type] = (cost[type]||0) + costStruct[type];
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
    $(`#whiteboard-${whiteboard.index}`).attr('disabled', 'true');
    $(`#whiteboard-${whiteboard.index}`).css('pointerEvents', 'none');
    $(`#whiteboard-submit`).attr('hidden', false);
    $(`#whiteboard-finish`).attr('hidden', true);
    minigames.whiteboard[whiteboard.index].collected = 1;
    minigames.whiteboard[whiteboard.index].colltime = (new Date).getTime();
}

// function get_scorecard(card=scorecard) {
//     return card;
// }
// function deduct_dependencies(cost) {
//     for(let [type, qty] of Object.entries(cost)) {
//         if(!type || !cost[type]) continue;
//         scorecard[type] -= cost[type];
//     }
// }

function whiteboard_createWhiteboard(dbindex) { 
    whiteboard_setup(dbindex);
}

function whiteboard_launchMiniWhiteboardModal(dbindex) { 
    // if(dbindex!==undefined) forms.form.dbindex = dbindex;
    if(dbindex!==undefined) whiteboard.index = dbindex;
    whiteboard_createWhiteboard(dbindex);
    $(`#whiteboardModal1`).modal({keyboard: false});
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
