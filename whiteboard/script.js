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
    { type: 'stone', qty: 16, n: 4 },
    { type: 'lumber', qty: 20, n: 4 },
    { type: 'lumber', qty: 25, n: 5 },
];
whiteboard.popovers = [];

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
    // whiteboard_fillReqs();
    // whiteboard_body();
    whiteboard_initialize(index);
}

function whiteboard_initialize(index) {
    whiteboard.content = whiteboard_rawdb[index].sequences1;
    whiteboard.shuffled = shuffle(whiteboard.content.slice(0));
    let nrows = Math.ceil(whiteboard.shuffled.length / whiteboard.ncols);
    $('#whiteboardModal1-content').html('');
    for(let irow=0; irow<nrows; irow++) {
        let row_elm = whiteboard_add_element(`<div class="container-fluid row mx-0 my-0 px-0 py-0" id="whiteboardModal1-r${irow+1}">`, `whiteboardModal1-content`);
        whiteboard_add_row_cols(`whiteboardModal1-r${irow+1}`, whiteboard.ncols, whiteboard_add_card1, {irow, colwidth: whiteboard.colwidth});
    }
    // $("#whiteboardModal1-content").find('.sortcell').sortable({ tolerance: 'pointer' });
    $("#whiteboardModal1-content").find('.sortcell').sortable({ tolerance: 'pointer', connectWith: '.sortcell' });
    // $("#whiteboardModal1-r1").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-r2").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-r3").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-r4").sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-content").find('.row').sortable({ tolerance: 'pointer' });
    // $("#whiteboardModal1-r1").sortable({ connectWith: '#whiteboardModal1-r2' });
    // $("#whiteboardModal1-r2").sortable({ connectWith: '#whiteboardModal1-r1' });
    // $(".ui-sortable").sortable({ connectWith:['.row'] });
    // $("#whiteboardModal1-r1").sortable({ tolerance: 'pointer' });
    $('#whiteboardModal1-available').text(`${whiteboard.reqqty} ${whiteboard.reqtype}`);
    whiteboard_bscard();
}

// function whiteboard_initialize() {
//     whiteboard.shuffled = shuffle(whiteboard.shuffled);
//     let nrows = Math.ceil(whiteboard.shuffled.length / whiteboard.nrows);
//     $('#whiteboardModal1-content').html('');
//     // let containers = [];
//     // let nrows = 6, ncols = 6; let colwidth = Math.round(12/ncols);
//     // for(let irow=0; irow<whiteboard.nrows; irow++) {
//     for(let irow=0; irow<nrows; irow++) {
//         let row_elm = whiteboard_add_element(`<div class="container-fluid row mx-0 my-0 px-0 py-0" id="whiteboardModal1-r${irow+1}">`, `whiteboardModal1-content`);
//         whiteboard_add_row_cols(`whiteboardModal1-r${irow+1}`, whiteboard.ncols, whiteboard_add_card1, {irow, colwidth: whiteboard.colwidth});
//         // whiteboard_add_row_cols(`whiteboardModal1-r1`, whiteboard.ncols, whiteboard_add_card1, {irow, colwidth: whiteboard.colwidth});
//         // $(`#whiteboardModal1-r${irow+1}`).sortable({ tolerance: 'pointer' });
//     }
//     $('#whiteboardModal1-available').text(`${whiteboard.reqqty} ${whiteboard.reqtype}`);
//     whiteboard_bscard();
// }

function whiteboard_add_element(html, pid) {
    let elm = document.createElement('div'); elm.innerHTML = html.trim();
    document.getElementById(pid).appendChild(elm.firstChild)
}

function whiteboard_add_row_cols(rowid, ncols, add_child, options={}) {
    let {colwidth, cls_child, cls_col, title, text, irow, offset, vlist, list, dd_list, quantity, interval, cost, onclick} = options;
    if(!colwidth) colwidth = Math.round(12/ncols);
    for(let icol=0; icol<ncols; icol++) {
        let index = offset ? offset+icol : icol;
        let ctitle = Array.isArray(title) ? title[icol] : title ? title.replace('<i>', index) : title;
        let conclick = Array.isArray(onclick) ? onclick[icol] : onclick ? onclick.replace('<i>', index) : onclick;
        let ctext = Array.isArray(text) ? text[icol] : text ? text.replace('<i>', index) : text;
        let clist = Array.isArray(list) ? list[icol] : list ? list.replace('<i>', index) : list;
        let cvlist = Array.isArray(vlist) ? vlist[icol] : vlist ? vlist.replace('<i>', index) : vlist;
        let opts = Object.assign({}, options, {title: ctitle, text: ctext, data: clist, vlist: cvlist, onclick: conclick, ncols, irow, icol});
        let core_html = add_child(`${rowid}-c${icol}`, opts);
        // let padding1 = icol===0 ? 'pr-1 xpl-0' : icol===ncols-1 ? 'xpr-0 pl-0' : 'pr-1 pl-0';
        // let padding2 = irow===0 ? 'pt-0 pb-0' : irow===nrows-1 ? 'pt-1 pb-0' : 'pt-1 xpb-0';
        let padding = 'px-1 py-1'; //padding1+' '+padding2;
        // padding += icol===0 ? ' ml-1' : icol===ncols-1 ? ' mr-1' : '';
        let colm_html = whiteboard_add_col(`${rowid}-c${icol}`, core_html, {colwidth, cls_col, padding});
        whiteboard_add_element(colm_html, rowid);
    }
}

function whiteboard_add_col(id, html, {colwidth, cls_col, padding}) {
    return`    <div class="col-md-${colwidth} ml-auto ${padding} sortcell" id="${id}">${html}</div>`;
}
function whiteboard_add_card1(id, {title, subtitle, cls_child="card-secondary", ncols, irow, icol, onclick=""}={}) {
    if(!title) title = `card ${irow}.${icol}`;
    let index = irow*ncols+icol;
    if(index > whiteboard.shuffled.length-1) index -= whiteboard.shuffled.length;
    if(index > whiteboard.shuffled.length-1) index -= whiteboard.shuffled.length;
    // title = shuffled[index];
    let entry = whiteboard.shuffled[index%whiteboard.shuffled.length];
    title = camel(entry.pword);
    subtitle = camel(entry.word);
    console.log(`================== `, id, `, title=`, title)
    return `
        <div class="card ${cls_child}" id="${id}-card">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body" id="${id}-card-body" style="cursor:pointer; min-height:80px">
            <h6 class="card-title" id="${id}-card-title">${title}</h6>
            <p class="card-text" id="${id}-card-text" hidden>${subtitle}</p>
          </div>
        </div>`;
}

function whiteboard_hint() {
    let cards = document.getElementsByClassName('card');
    for(let i=0; i<cards.length; i++) {
        let state = $(cards[i]).find(`p`).attr('hidden');
        $(cards[i]).find(`p`).attr('hidden', !state);
    }
}
function whiteboard_check(pay=0) {
    if(pay) whiteboard_deduct(whiteboard.costStructure[0]);
    let passcount = 0;
    let cards = document.getElementsByClassName('card');
    for(let i=0; i<cards.length; i++) {
        // let expected = content[i];
        let expected = whiteboard.content[i%whiteboard.content.length].pword;
        let actual = $(cards[i]).find(`h6`).text();
        console.log(`i=${i}, actual=`, lower(actual), `, expected=`, lower(expected))
        if(lower(actual)===lower(expected)) {
          $(cards[i]).css('background', 'lightgreen');
          whiteboard.score++; passcount++;
        } else $(cards[i]).css('background', 'salmon');
    }
    console.log(whiteboard);
    let passed = passcount===cards.length;
    return passed;
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
    $('#whiteboardModal1-bsalert').attr('class', '');
    $('#whiteboardModal1-bsalert').addClass(`alert alert-${color}`);
    $('#whiteboardModal1-bsalert').html(message);
}
function whiteboard_bscard() {
    let scorecard = get_scorecard();
    // let array = Object.entries(scorecard).map(([key,value]) => key+' '+value);
    let array = whiteboard.list.map(key => key+' '+scorecard[key]);
    // $('#whiteboard-bscard').text(array.join('  '));
    $('#whiteboardModal1-bscard').html(array.join('&nbsp;&nbsp;&nbsp;&nbsp;'));
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
    whiteboard_createWhiteboard(dbindex);
    $(`#whiteboardModal1`).modal({keyboard: false});
}

function whiteboard_launchBridge(id='teachingBridgeModal') {
    let html = '';
    for(let i=0; i<3; i++) {
        let {type, qty} = forms.req[i];
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
