const negotiator = {}; // namespace

// const scorecard = { coins: 2000, supplies: 5000, stone: 30, lumber: 20 };

// negotiator.form = { index: 0, score: 0, min: 6, total: 0 };
// negotiator.list = ['coins', 'supplies', 'stone', 'lumber'];
negotiator.list_long = ['coins', 'supplies', 'stone', 'lumber', 'iron', 'dye'];
negotiator.list_short = ['coins', 'supplies', 'stone', 'lumber'];
negotiator.list = [];
negotiator.parties = 4;
negotiator.hint_counter = 0;
negotiator.expected = [];
negotiator.eliminated = [];
negotiator.still_expected = [];
negotiator.validated_pass = [];
negotiator.attemptsLeft = 3;
negotiator.quota = 1;
negotiator.index = 0;
negotiator.reqqty = 10;
negotiator.reqtype = 'stone';
negotiator.unusable = {};
negotiator.validated_hints = [];
negotiator.costIncurred = {};
negotiator.costStructure = [];
negotiator.costStructure_short = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // submit cost
];
negotiator.costStructure_long = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // submit cost
];
negotiator.req = [
	{ type: 'stone', qty: 16, n: 4 },
	{ type: 'lumber', qty: 20, n: 4 },
	{ type: 'lumber', qty: 25, n: 5 },
];
negotiator.popovers = [];

negotiator.expedition_mode = false;
negotiator.expedition = { cost: {}, coll: {}, rewards: {}, cb: 0, done: 0 };

$(function () {
	negotiator.popovers = negotiator_fillPopovers();
    // every5min_routines.push(negotiator_refresh);
	daily_routines.push(negotiator_refresh);
	setTimeout(() => {
		negotiator.list = (tile.level>2) ? negotiator.list_long : negotiator.list_short;
		negotiator_fillReqs();
		negotiator_body();
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
	}, 2500); // wait for tile.level to load at 2000ms
});
function negotiator_body() {
    $(`#negotiator-modal1-c1`).html( negotiator_createCard('card1', 1) );
    $(`#negotiator-modal1-c2`).html( negotiator_createCard('card2', 2) );
    $(`#negotiator-modal1-c3`).html( negotiator_createCard('card3', 3) );
    $(`#negotiator-modal1-c4`).html( negotiator_createCard('card4', 4) );
    $(`#negotiator-modal1-c5`).html( negotiator_createCard('card5', 5) );
    $('#negotiator-bsalert').html('');
    $('#negotiator-bsalert').attr('class', '');
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
}
function negotiator_fillPopovers() {
    let popovers = [''];
    popovers[1] = [`Turns`, `You have a total of ${negotiator.attemptsLeft} turns. Each Submit costs one turn. Check costs no turns.`, `Turns explanation`];
    popovers[2] = [`Hints`, `Hints are automatically created after check/submit. You can also pay for extra hints using Hints button below.`, `Hints explanation`];
    popovers[3] = [`Submit cost`, `Each individual selection costs the amount you select as offer.`, `Submit cost`];
    popovers[4] = [`Check cost`, `Each individual selection costs the amount you select as offer.`, `Check cost`];
    popovers[5] = ['', '', ''];
    return popovers;
}
function negotiator_fillReqs() {
  	let qty1 = tile.level>2 ? 16 : 16;
  	let qty2 = tile.level>2 ? 20 : 15;
  	let qty3 = tile.level>2 ? 35 : 25;
  	let list = negotiator.list.slice(2);
  	let type1 = list[random(0, list.length-1)];
  	let type2 = list[random(0, list.length-1)];
  	let type3 = list[random(0, list.length-1)];
    if(type1===type2 && type2===type3 && list[1]) { // if all the same change the middle one
        type2 = list[0]!==type2 ? list[0] : list[1];
    }
    negotiator.req = [
        { type: type1, qty: qty1, n: 4 },
        { type: type2, qty: qty2, n: 5 },
        { type: type3, qty: qty3, n: 5 },
    ];
}

function negotiator_expedition_mode(value=true, {cb}={}) {
    negotiator.expedition_mode = value;
    // negotiator.expedition.cb = cb;
}
function negotiator_expedition_cb() {
    negotiator_expedition_mode(false);
    if(!negotiator.expedition.cb) return;
    if(typeof negotiator.expedition.cb !== 'function') return;
    negotiator.expedition.cost = negotiator.costIncurred;
    negotiator.expedition.cb(negotiator.expedition);
}

function negotiator_expedition_launchMiniNegotiatorModal(state, {coll,rewards,cost,mult,zindex,cb}={}) {
    // console.log(`negotiator_expedition_launchMiniNegotiatorModal(state, {coll,rewards,zindex,cb}={})`, state, coll, rewards, zindex)
    negotiator.expedition = { cost, coll, rewards, mult, cb, done: 0, started: 0 };
    let reqcoll =  {};
    if(isEmpty(coll)) { reqcoll =  { type: 'stone', qty: 0 }; }
    else {
        reqcoll.type = Object.keys(coll)[0]
        reqcoll.qty = coll[reqcoll.type];
    }
    negotiator_expedition_mode(true);
    negotiator_launchMiniNegotiatorModal(state.level-1, {zindex,reqcoll});
    // on close call back
    $('#negotiationModal1').on('hide.bs.modal', negotiator_expedition_cb);
}

function negotiator_launchMiniNegotiatorModal(x=0, {zindex,reqcoll}={}) {
    // console.log(`negotiator_launchMiniNegotiatorModal(x=${x}, zindex=${zindex})`)
	negotiator.parties = x===0 ? 4 : 5;
    negotiator.attemptsLeft = 3;
    if(x===2 && tile.level>3) {
    	negotiator.list = negotiator.list_long;
    	negotiator.costStructure = negotiator.costStructure_long;
	    negotiator.reqqty = 35;
	    negotiator.attemptsLeft = 4;
    } else {
    	negotiator.list = negotiator.list_short;
    	negotiator.costStructure = negotiator.costStructure_short;
    }
    let llength = negotiator.list.length;
    negotiator.index = x;
    negotiator.costIncurred = {};
    // negotiator.reqtype = negotiator.list[random(0,3)];
    negotiator.reqtype = negotiator.list[random(0,llength-1)];
    negotiator.list.map(type => negotiator.unusable[type]=1);
    negotiator.list.map(type => negotiator.costIncurred[type]=0);
    for(let i=0; i<negotiator.parties; i++) {
        negotiator.expected[i] = negotiator.list[random(0,llength-1)];
        // negotiator.costIncurred[negotiator.expected[i]] = 0;
        negotiator.unusable[negotiator.expected[i]] = 0;
    }
    // negotiator.costStructure = [
    //     { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // check cost
    //     { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // submit cost
    // ];
    console.log(`negotiator.expected=`, negotiator.expected);
  	if(negotiator.req[x]) {
  		negotiator.reqtype = negotiator.req[x].type;
  		negotiator.reqqty = negotiator.req[x].qty;
  	}
    // let available_message = `${negotiator.reqqty} ${negotiator.reqtype}`;
    if(reqcoll) {
        negotiator.reqtype = reqcoll.type;
        negotiator.reqqty = reqcoll.qty;
        // available_message = `random items`;
    }
    let available_message = `${negotiator.reqqty} ${negotiator.reqtype}`;
    if(!negotiator.reqqty) available_message = `random items`;
    // if(!negotiator.reqqty) available_message = `3 attempts`;
  	negotiator_body();
    negotiator_bscard();
    $(`#negotiator-check`).attr('disabled', (tile.level>=3));
    $(`#negotiator-modal1-c5`).attr('hidden', (x===0));
  	$('#negotiator-available').text(available_message);
    // $('#negotiationModal1').attr('data-backdrop', 'static');
    if(zindex) $('#negotiationModal1').css('z-index', zindex);
  	$('#negotiationModal1').modal({keyboard:false});
  	negotiator.still_expected = negotiator.expected.slice(0);
  	negotiator.validated_pass = [0,0,0,0];
  	if(negotiator.parties>4) negotiator.validated_pass = [0,0,0,0,0];
  	negotiator.hint_counter = 0;
}
function negotiator_popover(id, title, content, linktext) {
    $(`#${id}`).prop('title', title);
    $(`#${id}`).prop('data-content', content);
    $(`#${id}`).text(linktext);
}

function negotiator_launchBridge(id='tradingBridgeModal') {
	let html = '';
	for(let i=0; i<3; i++) {
		let {type, qty} = negotiator.req[i];
		let text = minigames.negotiator[i].collected ? 'Collected' : 'Negotiate';
		let onclick = minigames.negotiator[i].collected ? 'xonclick' : 'onclick';
		let btnstyle = minigames.negotiator[i].collected ? 'btn-secondary' : 'btn-outline-secondary';
		let dismiss = minigames.negotiator[i].collected ? 'none' : 'modal';
	    html += `
            <div class="col" id="tradingBridgeModal-c${i}" style="width:20%;">
		        <div class="card" style="height: 22rem;" id="${id}-c${i}-card">
		          <img src="negotiator/img/negotiator-card.jpg" class="card-img-top" alt="..." height="200px">
		          <div class="card-body d-flex flex-column text-center" id="${id}-c${i}-card-body" xstyle="max-height:200px;">
		            <h4 class="card-title"><span id="${id}-c${i}-qty">${qty}</span> &nbsp; <span id="${id}-c${i}-type">${capitalizeFirstLetter(type)}</span></h4>
		            <!--- <h4 class="card-subtitle mb-2 text-muted" id="${id}-c${i}-card-subtitle">${qty}</h4> --->
		            <!--- <em class="card-text" id="${id}-c${i}-card-text">Please furnish all details</em> --->
		            <br>
		            <a class="btn ${btnstyle}" id="negotiator-${i}" data-dismiss="${dismiss}" aria-label="Close" ${onclick}="negotiator_launchMiniNegotiatorModal(${i})">${text}</a>
		          </div>
		        </div>
		    </div>
	    `;
	}
	html = `<br><div class="container-fluid row">${html}</div><br>`;
	let message = `All negotiation platforms are refreshed once everyday.`;
	html += `<a href="#" class="card-link" data-toggle="popover" xtitle="${message}" data-content="${message}">?</a>`;
	$(`#${id}-body`).html(html);
	$('[data-toggle="popover"]').popover()
}

function negotiator_createCard(id='mainCard', i=0) {
	let llength = negotiator.list.length;
    return `
        <div class="card" style="height: 32rem;" id="${id}">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body d-flex flex-column" id="${id}-body" style="max-height:500px;">
            <h5 class="card-title" id="${id}-title"> Representative</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="${id}-subtitle"> [Represents party ${i}]</h6>
            <!--- <em class="card-text" id="${id}-text">Please furnish all details</em> --->
          </div>
          <div class="card-body pt-0">
                ${negotiator_createListGroup('listEntry<i>', {i, cls_form_div:'col-md-2 mb-3', text: 'text'})}
                <br>
                ${negotiator_createSelectOptionField('selectEntry<i>', {i, llength, cls_form_div:'mb-3', 
                          form_field_label:'', form_field_value:'Jean', form_field_validation:'required' })}
              </div>
            </form>
          </div>

          <div class="card-body">
            <!-- <a href="#" class="card-link">Card link</a> --->
            <!-- <a href="#" class="card-link">Another link</a> --->
            <!-- <a href="#" class="card-link" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a> --->
            <a href="#" class="card-link text-muted" id="${id}-popover" data-toggle="popover" title="${negotiator.popovers[i][0]}" data-content="${negotiator.popovers[i][1]}" data-trigger="focus">${negotiator.popovers[i][2]}</a>
          </div> 

        </div>
    `;
}

function negotiator_createPageButton(dir, id='mainCard') {
    // let icon = dir==='next' ? 'fa-arrow-right' : 'fa-arrow-left';
    let icon = dir==='next' ? 'navigate_next' : 'navigate_before';
    // let icon = dir==='next' ? 'arrow_forward_ios' : 'arrow_back_ios';
    return `
        <div class="card" style="height: 36rem;">
          <div style="height: 50%"></div>
          <!-- <a class="" id="${id}" onclick="${dir}_${id}"><i class="fa ${icon}" style="font-size:32px;color:dimgray;margin-left:50px"></i></a> -->
          <a class="" id="${id}" onclick="${dir}_${id}"><i class="material-icons" style="font-size:48px;color:dimgray;xmargin-left:50px">${icon}</i></a>
        </div>
        `;
}
function negotiator_createSelectOptionField(id='validationServer<i>', {i=0, llength=4, cls_form_div='col-md-6 mb-3', 
        form_field_label='', form_field_value='', form_field_options=[], form_field_validation='required' }) {
    id = id.replace('<i>', i);
    let qty = 1;
    if(negotiator.expedition_mode && negotiator.expedition.mult) qty *= negotiator.expedition.mult;
    let options_html = '';
    for(let option of form_field_options) {
        options_html += `                          <option value="${option}">${option}</option>`;
    }
    return `
              <div class="${cls_form_div} ml-n1">
                <label for="${id}" id="${id}Label">${form_field_label}</label>
                <select class="custom-select xis-invalid" id="${id}" style="width:210px" aria-describedby="${id}Feedback" ${form_field_validation}>
                  <option selected disabled value="">Choose...</option>
                  <option class="ddl-coins" value="coins">Coins ${10*qty}  ${spaces(10)} <span style="float:right">[${scorecard.coins}]</span></option>
                  <option class="ddl-supplies" value="supplies">Supplies ${20*qty} ${spaces(5)} <span style="float:right">[${scorecard.supplies}]</span></option>
                  <option class="ddl-stone"  value="stone">Stone ${qty}  ${spaces(15)} <span style="float:right">[${scorecard.stone}]</span></option>
                  <option class="ddl-lumber" value="lumber">Lumber ${qty}  ${spaces(12)} <span style="float:right">[${scorecard.lumber}]</span></option>
                  ${llength>4? `<option class="ddl-iron" value="iron">Iron ${qty}  ${spaces(18)} <span style="float:right">[${scorecard.iron}]</span></option>`: ''}
                  ${llength>5? `<option class="ddl-dye" value="dye">Dye ${qty}  ${spaces(18)} <span style="float:right">[${scorecard.dye}]</span></option>`: ''}
                </select>
                <!--- <div id="${id}Feedback" class="invalid-feedback"> Please select an option. </div> --->
              </div>
        `;
}
function negotiator_createListGroup(id='mainList<i>', {i=0, cls_form_div='col-md-6 mb-3', aaa=''}) {
    id = id.replace('<i>', i);
    return `
            <ul class="list-group list-group-flush" id="${id}">
              <li class="list-group-item py-1" id="${id}-0">${spaces(1)}</li>
              <li class="list-group-item py-1" id="${id}-1">${spaces(1)}</li>
              <li class="list-group-item py-1" id="${id}-2">${spaces(1)}</li>
              <li class="list-group-item py-1" id="${id}-3">${spaces(1)}</li>
              <li class="list-group-item py-1" id="${id}-4">${spaces(1)}</li>
              <li class="list-group-item py-1" id="${id}-5"></li>
              <li class="list-group-item py-1" id="${id}-6"></li>
              <li class="list-group-item py-1" id="${id}-7"></li>
              <li class="list-group-item py-1" id="${id}-8"></li>
              <li class="list-group-item py-1" id="${id}-9"></li>
            </ul>
        `;
}
function negotiator_punjabi(eword,capitalize=1) {
    if(!eword) return eword;
    eword = lowercase(eword);
    let lookup = {coins: 'sikkey', supplies: 'cheejan', stone: 'pathar', lumber: 'lakkad', iron: 'loha', dye: 'rang'}
    let pword = lookup[eword];
    return capitalize ? capitalizeFirstLetter(pword) : pword;
}

function negotiator_validate(id, expected, i) {
    let $elem = $(`#${id}`);
    let actual = $elem.val();
    if(typeof actual==='string') actual = actual.toLowerCase();
    if(typeof expected==='string') expected = expected.toLowerCase();
    if(actual===expected ) {
        $elem.removeClass('is-invalid')
        $elem.addClass('is-valid')
        retval = 1;
    } else {
        $elem.removeClass('is-valid')
        $elem.addClass('is-invalid')
        retval = 0;
    }
    let random_selection = random(1,5);
    console.log(`actual=${actual}, expected=${expected}, negotiator.unusable=`, negotiator.unusable);
    if(actual!==expected ) {
        if(negotiator.unusable[actual]) {
            console.log(`Eliminated ${actual}`);
            if(random_selection===5) {
	            negotiator.validated_hints[i] = `Nobody wants ${actual}.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} kissey nu nahin ${translate1('want', actual)}.`;
	        }
            else if(random_selection===4) {
	            negotiator.validated_hints[i] = `Nobody needs ${actual}.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} kissey nu nahin ${translate1('need', actual)}.`;
	        }
            else if(random_selection===3) {
	            negotiator.validated_hints[i] = `Nobody demands ${actual}.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} koi nahin ${translate1('demand', actual)}.`;
	        }
            else if(random_selection===2) {
	            negotiator.validated_hints[i] = `Nobody's asking for ${actual}.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} nu koi nahin ${translate1('ask', actual)}.`;
	        }
            else {
	            negotiator.validated_hints[i] = `Nobody's looking for ${actual}.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} koi nahin ${translate1('look', actual)}.`;
	        }
        } else if(!negotiator.still_expected.includes(actual)) {
            console.log(`Eliminated ${actual}`);
            if(random_selection===5) {
	            negotiator.validated_hints[i] = `Nobody wants ${actual} anymore.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} hunn kissey nu nahin ${translate1('want', actual)}.`;
	        }
            else if(random_selection===4) {
	            negotiator.validated_hints[i] = `Nobody needs ${actual} anymore.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} hunn kissey nu nahin ${translate1('need', actual)}.`;
	        }
            else if(random_selection===3) {
	            negotiator.validated_hints[i] = `Nobody demands ${actual} anymore.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} hunn koi nahin ${translate1('demand', actual)}.`;
	        }
            else if(random_selection===2) {
	            negotiator.validated_hints[i] = `Nobody's asking for ${actual} anymore.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} nu hunn koi nahin ${translate1('ask', actual)}.`;
	        }
            else {
	            negotiator.validated_hints[i] = `Nobody's looking for ${actual} anymore.`;
	            negotiator.validated_hints[i] = `${negotiator_punjabi(actual)} hunn koi nahin ${translate1('look', actual)}.`;
	        }
        } else {
            if(random_selection===5) {
	            negotiator.validated_hints[i] = `I don't want ${actual}.`
	            negotiator.validated_hints[i] = `Meinu ${negotiator_punjabi(actual)} nahin ${translate1('want', actual)}.`
	        }
            else if(random_selection===4) {
	            negotiator.validated_hints[i] = `I don't need ${actual}.`
	            negotiator.validated_hints[i] = `Meinu ${negotiator_punjabi(actual)} nahin ${translate1('need', actual)}.`
	        }
            else if(random_selection===3) {
	            negotiator.validated_hints[i] = `I don't demand ${actual}.`
	            negotiator.validated_hints[i] = `Mein ${negotiator_punjabi(actual)} nahin ${translate1('demand', actual)}.`
	        }
            else if(random_selection===2) {
	            negotiator.validated_hints[i] = `I'm not asking for ${actual}.`
	            negotiator.validated_hints[i] = `Mein ${negotiator_punjabi(actual)} nahin ${translate1('ask', actual)}.`
	        }
            else {
	            negotiator.validated_hints[i] = `I'm not looking for ${actual}.`
	            negotiator.validated_hints[i] = `Mein ${negotiator_punjabi(actual)} nahin ${translate1('look', actual)}.`
	        }
        }
        // $(`.ddl-${actual}`).attr('disabled', true);
        negotiator.validated_pass[i] = 0;
    } else {
        negotiator.validated_hints[i] = `Yes! I needed ${actual}.`
        negotiator.validated_hints[i] = `Haan! Meinu ${negotiator_punjabi(actual)} ${translate1('want', actual)} si.`
        negotiator.validated_pass[i] = 1;
    }
    console.log(`actual=${actual}, expected=${expected}, retval=${retval}`);
    return retval;
}
function translate1(word, context) {
	let lookup = {
		'coins': { want: 'chahidey', need: 'lodhida', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haigey' },
		'supplies': { want: 'chahidian', need: 'lodhidian', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haigian' },
		'stone': { want: 'chahida', need: 'lodhida', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haiga' },
		'lumber': { want: 'chahidi', need: 'lodhidi', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haigi' },
		'iron': { want: 'chahida', need: 'lodhida', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haiga' },
		'dye': { want: 'chahida', need: 'lodhida', demand: 'mangda', ask: 'puchhda', look: 'labh riha', have: 'haiga' },
	}
	if(!lookup[context] || !lookup[context][word]) return word;
	return lookup[context][word];
}
function negotiator_check(pay=1) {
    if(pay) $(`#negotiator-check`).attr('disabled', (tile.level>=0));
    let retval = 0, counter = 0;
    negotiator.validated_hints = [];
    negotiator.still_expected = negotiator.expected.filter((type,i) => !negotiator.validated_pass[i]);
    negotiator.eliminated = negotiator.expected.filter((type,i) => negotiator.validated_pass[i]);
    console.log(`negotiator.eliminated = ${negotiator.eliminated}`)
    console.log(`negotiator.still_expected = ${negotiator.still_expected}`)
    let ids = ['selectEntry1', 'selectEntry2', 'selectEntry3', 'selectEntry4', 'selectEntry5'];
    for(let i in ids) {
    	if(negotiator.index===0 && i>=4) continue;
        retval += negotiator_validate(ids[i], negotiator.expected[i], i);
        counter++;
    }
    if(pay) negotiator_deduct(negotiator.costStructure[0]);
    negotiator_show_validated_hints();
    console.log(`retval = ${retval}`)
    return retval===counter;
}
function negotiator_submit() {
    if(negotiator.attemptsLeft<=0) {
        return negotiator_bsalert(`Sorry, you ran out of attempts!`);
    }
    negotiator.attemptsLeft--;
    negotiator_deduct(negotiator.costStructure[1]);
    if(negotiator.expedition_mode) { negotiator.expedition.started = 1; }
    if(negotiator_check(0)) {
      	$(`#negotiator-submit`).attr('hidden', true);
      	$(`#negotiator-finish`).attr('hidden', false);
        if(negotiator.expedition_mode) {
            negotiator.expedition.coll[negotiator.reqtype] = negotiator.reqqty;
            negotiator.expedition.done = 1;
        }
        add_collected(negotiator.reqtype, negotiator.reqqty);
        negotiator_bscard();
        return negotiator_bsalert(`${negotiator.reqqty} ${negotiator.reqtype} allocated. It cost you ${obj2string(negotiator.costIncurred)}`, 'Success', 'success');
    } else {
        return negotiator_bsalert(`You have ${negotiator.attemptsLeft} more attempts left.`, 'Continue trying', 'warning')
    }
}
function negotiator_deduct(costStruct) {
    let ids = ['selectEntry1', 'selectEntry2', 'selectEntry3', 'selectEntry4', 'selectEntry5'];
    let mult = negotiator.expedition_mode ? negotiator.expedition.mult||1 : 1;
    let cost = {};
    for(let i in ids) {
    	if(negotiator.index===0 && i>=4) continue;
        let type = lowercase($(`#${ids[i]}`).val());
        if(!type || !costStruct[type]) continue;
        negotiator.costIncurred[type] += costStruct[type] * mult;
        scorecard[type] -= costStruct[type];
        cost[type] = (cost[type]||0) + costStruct[type] * mult;
    }
    deduct_dependencies(cost);
    negotiator_bscard();
}
function negotiator_finish() {
	// scorecard[negotiator.reqtype] += negotiator.reqqty;
	// add_collected(negotiator.reqtype, negotiator.reqqty)
	// negotiator.quota--;
	// $(`#negotiator-${negotiator.quota}`).attr('hidden', true);
	// $(`#negotiator-${negotiator.quota}`).attr('disabled', true);
	// $(`#negotiator-${negotiator.quota}>i`).css('color', 'gray');
	// $(`#negotiator-${negotiator.quota}`).css('pointerEvents', 'none');
	// if(negotiator.quota<=0) $(`#negotiator`).attr('hidden', true);
	// $(`#negotiator-${negotiator.index}`).css('color', 'gray');
    if(!negotiator.expedition_mode) {
    	$(`#negotiator-${negotiator.index}`).attr('disabled', 'true');
    	$(`#negotiator-${negotiator.index}`).css('pointerEvents', 'none');
    	minigames.negotiator[negotiator.index].collected = 1;
    	minigames.negotiator[negotiator.index].colltime = (new Date).getTime();
    }
    $(`#negotiator-submit`).attr('hidden', false);
    $(`#negotiator-finish`).attr('hidden', true);
    save_data();
}
function negotiator_refresh() {
	console.log(`........ negotiator_refresh()`)
	$(`#negotiator-0`).attr('disabled', 'false');
	$(`#negotiator-1`).attr('disabled', 'false');
	$(`#negotiator-2`).attr('disabled', 'false');
	$(`#negotiator-0`).css('pointerEvents', 'true');
	$(`#negotiator-1`).css('pointerEvents', 'true');
	$(`#negotiator-2`).css('pointerEvents', 'true');
	minigames.negotiator[0].collected = 0;
	minigames.negotiator[1].collected = 0;
	minigames.negotiator[2].collected = 0;
	negotiator_fillReqs();
}
function negotiator_show_validated_hints() {
    let ids = ['listEntry1', 'listEntry2', 'listEntry3', 'listEntry4', 'listEntry5'];
    for(let i=0; i<ids.length; i++) {
    	if(negotiator.index===0 && i>=4) continue;
        $(`#${ids[i]}-${negotiator.hint_counter}`).text(negotiator.validated_hints[i]);
    }
    negotiator.hint_counter++;
}
function negotiator_bsalert(text, exclaim='', color='light') {
    let message = `<strong>${exclaim}!</strong> ${text}`;
    $('#negotiator-bsalert').attr('class', '');
    $('#negotiator-bsalert').addClass(`alert alert-${color}`);
    $('#negotiator-bsalert').html(message);
}
function negotiator_bscard() {
	let scorecard = get_scorecard();
    // let array = Object.entries(scorecard).map(([key,value]) => key+' '+value);
    let array = negotiator.list.map(key => key+' '+scorecard[key]);
    // $('#negotiator-bscard').text(array.join('  '));
    $('#negotiator-bscard').html(array.join('&nbsp;&nbsp;&nbsp;&nbsp;'));
}
function negotiator_resolve_hint(i, certainity=50, identity='first') {
    let index = i;
    let db_obj = negotiator_db[certainity];
    console.log(`index=${index}`)
    console.log(`index=${index}, db_obj=`, db_obj)
    let hint_lines = db_obj[identity];
    // if(identity==='second') hint_lines = db_obj.second;
    // if(identity==='third') hint_lines = db_obj.third;
    // if(identity==='none') hint_lines = db_obj.none;
    console.log(`index=${index}, hint_lines=`, hint_lines)
    let ilast = negotiator.expected.length-1;
    let hint = hint_lines[random(0, hint_lines.length-1)] || '';
    console.log(`index=${index}, hint=`, hint)
    if(hint.match(/next/i) && i<ilast) index=i+1;
    if(hint.match(/previous/i) && i>0) index=i-1;
    if(hint.match(/last/i)) index=ilast;
    if(hint.match(/first/i)) index=0;
    if(hint.match(/second/i)) index=1;
    if(hint.match(/third/i)) index=2;
    if(hint.match(/fourth/i)) index=3;
    if(hint.match(/next to first/i)) index=1;
    if(hint.match(/next to last/i)) index=ilast-1;
    if(hint.match(/previous from last/i)) index=ilast-1;
    if(hint.match(/one before last/i)) index=ilast-1;
    if(hint.match(/second from last/i)) index=ilast-1;
    if(hint.match(/third from last/i)) index=ilast-2;
    if(hint.match(/fourth fron last/i)) index=ilast-3;
    let value = negotiator.expected[index];
    hint = hint.replace(/\$type/, value);
    console.log(`index=${index}, value=`, value)
    console.log(`index=${index}, hint=`, hint)
    return hint.replace(/\$type/, value);
}
function negotiator_hints() {
    let ids = ['listEntry1', 'listEntry2', 'listEntry3', 'listEntry4', 'listEntry5'];
    for(let i=0; i<ids.length; i++) {
    	if(negotiator.index===0 && i>=4) continue;
        let [hint, info] = negotiator_genHint(negotiator.hint_counter);  let ti = negotiator.hint_counter+1;
        while(!hint) { [hint, info] = negotiator_genHint(ti); if(ti++>8) break; }
        $(`#${ids[i]}-${negotiator.hint_counter}`).text(`${hint} ${info}`);
    }
    negotiator.hint_counter++;
}
function negotiator_genHint(i) {
    let hint = negotiator_resolve_hint(i,100,'second');
    let info = `(certainity 100)`;
    if(negotiator.hint_counter===0) {
        let certainity = 100; //[0,50,100][random(0,2)];
        hint = negotiator_resolve_hint(i,certainity,'none');
        if(!hint) info = ` (certainity ${certainity}, combos 'none', i=${i})`
        else info = ` (certainity ${certainity})`
    }
    if(negotiator.hint_counter===1) {
        let certainity = 50; //[0,50,100][random(0,2)];
        hint = negotiator_resolve_hint(i,certainity,'third');
        if(!hint) info = ` (certainity ${certainity}, combos 'third', i=${i})`
        else info = ` (certainity ${certainity})`
    }
    if(negotiator.hint_counter===2) {
        let certainity = [0,50,100][random(0,2)];
        hint = negotiator_resolve_hint(i,certainity,'second');
        if(!hint) info = ` (certainity ${certainity}, combos 'second', i=${i})`
        else info = ` (certainity ${certainity})`
    }
    if(negotiator.hint_counter===3) {
        let certainity = [0,50,100][random(0,2)];
        hint = negotiator_resolve_hint(i,certainity,'first');
        if(!hint) info = ` (certainity ${certainity}, combos 'first', i=${i})`
        else info = ` (certainity ${certainity})`
    }
    return [hint, info];
}
