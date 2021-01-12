const forms = {}; // namespace
forms.list_long = ['coins', 'supplies', 'stone', 'lumber', 'iron', 'dye'];
forms.list_short = ['coins', 'supplies', 'stone', 'lumber'];
forms.list = [];
// forms.parties = 4;
forms.hint_counter = 0;
forms.expected = [];
// forms.eliminated = [];
forms.still_expected = [];
forms.validated_pass = [];
forms.attemptsLeft = 3;
forms.quota = 1;
forms.index = 0;
forms.reqqty = 10;
forms.reqtype = 'stone';
forms.unusable = {};
forms.validated_hints = [];
forms.costIncurred = {};
forms.costStructure = [];
forms.costStructure_short = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 1, lumber: 1 }, // submit cost
];
forms.costStructure_long = [
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // check cost
    { coins: 10, supplies: 20, stone: 1, lumber: 1, iron: 1, dye: 1 }, // submit cost
];
forms.req = [
    { type: 'stone', qty: 16, n: 4 },
    { type: 'lumber', qty: 20, n: 4 },
    { type: 'lumber', qty: 25, n: 5 },
];
forms.popovers = [];

// let scorecard = { coins: 1000, supplies: 1000, stone: 10, lumber: 10 };
scorecard.deduct = function(name, qty) {
    this[name] -= qty;
    // store_scorecard(gamedata?);
    console.log(`deduct(name=${name},qty=${qty})`)
    console.log(`store_scorecard(${JSON.stringify(this)})`)
    return this[name];
}
scorecard.deposit = function(name, qty) {
    this[name] -= qty;
    // store_scorecard(gamedata?);
    console.log(`deposit(name=${name},qty=${qty})`)
    console.log(`store_scorecard(${JSON.stringify(this)})`)
    return this[name];
}

// let content_index = 0;
// let form = { index: 0, score: 0, min: 5, total: 0, dbindex: 0 };
forms.form = { index: 0, score: 100, min: 5, total: 0, dbindex: 0 };
forms.form.submit = { cost: {name:'coins', qty:20} };
forms.form.check = { cost: {name:'coins', qty:10} };
// let forms_db = content_database.forms;
$(function () {
    // $(`#formsModal1-c1`).html( forms_createCard('card1') );
    forms_createForm();
    // $(`#formsModal1-cprev`).html( forms_createPageButton('prev', 'card0p') );
    // $(`#formsModal1-c1`).html( forms_createCard('card1') );
    // $(`#formsModal1-c2`).html( forms_createCard('card2') );
    // $(`#formsModal1-c3`).html( forms_createCard('card3') );
    // $(`#formsModal1-c4`).html( forms_createCard('card4') );
    // $(`#formsModal1-c5`).html( forms_createCard('card5') );
    // $(`#formsModal1-cnext`).html( forms_createPageButton('next', 'card0n') );

    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
})

function forms_createCard(id='mainCard') {
    let form_content = forms_buildForm();
    return `
        <div class="card" style="height: 36rem;" id="${id}">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body d-flex flex-column" id="${id}-body" style="max-height:500px;">
            <h5 class="card-title" id="${id}-title">Name and address</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="${id}-subtitle">[As of today]</h6>
            <em class="card-text" id="${id}-text">Please furnish all details</em>
            </div>
            <div class="card-body pt-0">

            ${form_content.trim()}

            </div>

            <div class="card-body" hidden>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            <a href="#" class="card-link" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>
            <a href="#" class="card-link" data-toggle="popover" title="Popover title" data-content="Some popover text!" data-trigger="focus">popping</a>
            </div> 

            <div class="card-body">
            </div>

        </div>
    `;
}

function forms_buildForm() {
    // console.log(`....... forms_buildForm() ........`)
    let content_db_entry = forms_db[forms.form.dbindex];
    let options_db_entry = { sub: {type:'text',width:6,req:1}, act: {type:'text',width:6}, det: {type:'text',width:4}, 
                  adj: {type:'text',width:4}, obj: {type:'text',width:4}, adv: {type:'text',width:4} };
    // console.log(`options_db_entry = `, options_db_entry)
    // console.log(`content_db_entry = `, content_db_entry)
    // console.log('content_db_entry', content_db_entry);
    // console.log('options_db_entry', options_db_entry);
    let options = Object.entries(options_db_entry).map(([key,value]) => { let entry=Object.assign({key},value); return entry; });
    // let content = content_db_entry.map(record => Object.entries(record).map(([key,value]) => {return {key,value}}));
    let content = content_db_entry[forms.form.index];
    // console.log('options', options);
    // console.log('content', content);
    // build row
    // console.log(`options = `, options)
    // console.log(`content = `, content)
    let index = 0, form_html = '', margin='              ';
    for(let irow=0; irow<10; irow++) {
        // console.log(`irow = ${irow}`)
        let width = { used: 0, total: 12 };
        form_html += margin+ `<div class="form-row">\n`;
        for(let icol=0; icol<10; icol++, index++) {
            // console.log(` icol = ${icol}`)
            let curr_content = content[index];
            let curr_options = options[index];
            let next_content = content[index+1];
            let next_options = options[index+1];
            if(!curr_options) curr_options = {key:'???',type:'text',width:4}
            let cls_form_div = `col-md-${curr_options.width} mb-3`;
            let form_field_label = 'key' //curr_content.key; //'key';
            let form_field_value = 'value' //curr_content.value; //'value';
            let form_field_validation = curr_options.req ? 'required' : '';
            form_html += margin+ `  ${forms_createFormInputField('validationServer0<i>', {i:index+1, cls_form_div, 
                        form_field_label, form_field_value, form_field_validation })}\n`;
            if(!next_content || next_content.width>(width.total-width.used)) break;
        }
        form_html += margin+ `</div>\n`;
        if(index >= content.length-1) break;
    }
    return `
            <form>
              ${form_html.trim()}
              <br>
              <div class="form-group">
                ${forms_createFormCheckField('validationServer0<i>', {i:index+2, cls_form_div:'col-md-3 mb-3', 
                        form_field_label:'Agree to terms and conditions', form_field_value:'', form_field_validation:'required',
                        form_field_fb_invalid:'You must agree before submitting.' })}
              </div>
              <hr>
              <button class="btn btn-primary" xtype="submit" onclick="forms_submitForm();return false;">Submit form</button>
              <button class="btn btn-primary" xtype="submit" onclick="forms_checkForm();return false;">Check form</button>
            </form>
    `;
}

function forms_createPageButton(dir, id='mainCard') {
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
function forms_createFormInputField(id='validationServer<i>', {i=0, cls_form_div='col-md-6 mb-3', 
        form_field_label='', form_field_value='', form_field_validation='required' }) {
    id = id.replace('<i>', i);
    return `
            <div class="${cls_form_div}">
            <label for="${id}" id="${id}Label">${form_field_label}</label>
            <input type="text" class="form-control xis-valid" id="${id}" value="${form_field_value}" ${form_field_validation}>
            <div id="${id}Feedback" class="valid-feedback">Looks good!</div>
            <div id="${id}Feedback" class="invalid-feedback">Please provide a valid ${form_field_label}</div>
            </div>
        `;
}
function forms_createFormSelectField(id='validationServer<i>', {i=0, cls_form_div='col-md-6 mb-3', 
        form_field_label='', form_field_value='', form_field_validation='required' }) {
    id = id.replace('<i>', i);
    return `
             <div class=${cls_form_div}">
              <label for="${id}" id="${id}Label">${form_field_label}</label>
              <select class="custom-select xis-invalid" id="${id}" aria-describedby="${id}Feedback" required>
                <option selected disabled value="">Choose...</option>
                ${function() { return form_field_value.map(value => `
                <option value="${value}">${value}</option>`).join('\n') }()}
              </select>
              <div id="${id}Feedback" class="invalid-feedback"> Please select a valid ${form_field_label}. </div>
            </div>
     `;
}
function forms_createFormCheckField(id='validationServer<i>', {i=0, cls_form_div='col-md-6 mb-3', 
        form_field_label='', form_field_value='', form_field_validation='required', form_field_fb_invalid='aa' }) {
    id = id.replace('<i>', i);
    return `
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="aa" id="${id}" aria-describedby="${id}Feedback" ${form_field_value} ${form_field_validation}>
              <label class="form-check-label" for="${id}" id="${id}Label"> ${form_field_label} </label>
              <!-- <div  id="${id}Feedback" class="invalid-feedback"> ${form_field_fb_invalid} </div> --->
            </div>
     `;
}
function capitalizeFirstLetter(string) {
    if(typeof string!=='string') return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function forms_extractData(content, content1) {
    if(!content) content = forms_db[forms.form.dbindex];
    if(!content1) content1 = content[forms.form.index];
    if(!content1) return;
    // console.log('content1', content1);
    let content2 = [];
    for(let i=0; i<content1.length; i++) {
        let key = Object.keys(content1[i])[0];
        let value = content1[i][key];
        content2.push({key,value});
    }
    // console.log('content2', content2);
    return content2;
}
function forms_createForm() {
    forms.form.index = 0;
    let credits = 5 + forms.form.score - forms.form.min;
    let content = forms_db[forms.form.dbindex];
    let content2 = forms_extractData(content);
    // let content2 = Object.assign({}, content[forms.form.index]);
    // console.log('content2', content2);
    if(content[forms.form.index]) {
        $(`#formsModal1-c1`).html( forms_createCard('card1') );
    } else {
        $(`#formsModal1-c1`).html( `<p style="margin: 20px 0 200px 20px">Thank you for filling out these forms. You got ${forms.form.score} out of ${forms.form.total} right.</p>` );
    }
    // let keys = Object.keys(content2);
    let ids = [1,2,3,4,5,6,7,8,9].map(i => `validationServer0${i}`);
    for(let i=0; i<content2.length; i++) {
        let key = content2[i].key;
        let value = content2[i].value;
        // console.log(`key=${key}, value=${value}`)
        $(`#${ids[i]}Label`).text(capitalizeFirstLetter(key));
        if(credits <= 0) continue; else credits--;
        $(`#${ids[i]}`).val(capitalizeFirstLetter(value));
    }
    // console.log(`Need ${failed} more corrections to win`);
}

function forms_checkForm({index=0,dbindex=0,name='',qty=0}={}) {
    if(!index) index = forms.form.index;
    if(!dbindex) dbindex = forms.form.dbindex;
    if(!name) { qty = forms.form.check.cost.qty; }
    if(!name) { name = forms.form.check.cost.name; }
    let content = forms_db[forms.form.dbindex];
    let content2 = forms_extractData(content);
    console.log(`forms.form.index=${forms.form.index}`);
    console.log(`index=${index}`);
    console.log(`content=`, content);
    console.log(`content2=`, content2);
    console.log(`name=${name},qty=${qty}`);
    let passed=0, failed=0, total=0;
    let ids = [1,2,3,4,5,6,7,8,9].map(i => `validationServer0${i}`);
    ids.push();
    // check agreement and deduct checking fees
    let agreed = forms_validate(ids[content2.length], true); // checkbox
    if(agreed) scorecard.deduct(name,qty);
    else return [passed, failed, total];
    // now validate all the fields
    for(let i=0; i<content2.length; i++) {
        if(forms_validate(ids[i], content2[i].value)) passed++; else failed++; total++;
    }
    return [passed, failed, total];
}
function forms_submitForm() {
    let [passed, failed, total] = forms_checkForm(forms.form.submit.cost);
    forms.form.index++; // increment afterwards
    forms.form.score += passed;
    forms.form.total += total;
    let credits = 5 + forms.form.score - forms.form.min;
    console.log(forms.form);
    let content = forms_db[forms.form.dbindex];
    let content2 = forms_extractData(content);
    console.log(content2);
    if(content[forms.form.index]) {
        $(`#formsModal1-c1`).html( forms_createCard('card1') );
    } else {
        $(`#formsModal1-c1`).html( `<p style="margin: 20px 0 200px 20px">Thank you for filling out these forms. You got ${forms.form.score} out of ${forms.form.total} right.</p>` );
        return;
    }
    let ids = [1,2,3,4,5,6,7,8,9].map(i => `validationServer0${i}`);
    for(let i=0; i<content2.length; i++) {
        let key = content2[i].key;
        let value = content2[i].value;
        // console.log(`key=${key}, value=${value}`)
        $(`#${ids[i]}Label`).text(capitalizeFirstLetter(key));
        if(credits <= 0) continue; else credits--;
        $(`#${ids[i]}`).val(capitalizeFirstLetter(value));
    }
    console.log(`Need ${failed} more corrections to win`);
}
function forms_validate(id, expected=true) {
    let $elem = $(`#${id}`);
    let actual = (typeof expected==='boolean') ? $elem.is(':checked') : $elem.val();
    if(typeof actual==='string') actual = actual.toLowerCase();
    if(typeof expected==='string') expected = expected.toLowerCase();
    // else if(expected!==undefined) expected = expected.toString().toLowerCase();
    if(actual===expected ) {
        $elem.removeClass('is-invalid')
        $elem.addClass('is-valid')
        retval = 1;
    } else {
        $elem.removeClass('is-valid')
        $elem.addClass('is-invalid')
        retval = 0;
    }
    console.log(`actual=${actual}, expected=${expected}, id=${id}`);
    return retval;
}

function forms_launchMiniFormsModal(dbindex) { 
    if(dbindex!==undefined) forms.form.dbindex = dbindex;
    forms_createForm();
    $(`#formsModal1`).modal({keyboard: false});
}

function forms_launchBridge(id='formsBridgeModal') {
    let html = '';
    for(let i=0; i<3; i++) {
        let {type, qty} = forms.req[i];
        let text = minigames.forms[i].collected ? 'Collected' : 'Apply';
        let onclick = minigames.forms[i].collected ? 'xonclick' : 'onclick';
        let btnstyle = minigames.forms[i].collected ? 'btn-secondary' : 'btn-outline-secondary';
        let dismiss = minigames.forms[i].collected ? 'none' : 'modal';
        html += `
            <div class="col" id="${id}-c${i}" style="width:20%;">
                <div class="card" style="height: 22rem;" id="${id}-c${i}-card">
                  <img src="forms/img/forms-card.gif" class="card-img-top" alt="..." height="200px">
                  <div class="card-body d-flex flex-column text-center" id="${id}-c${i}-card-body" xstyle="max-height:200px;">
                    <h4 class="card-title"><span id="${id}-c${i}-qty">${qty}</span> &nbsp; <span id="${id}-c${i}-type">${capitalizeFirstLetter(type)}</span></h4>
                    <!--- <h4 class="card-subtitle mb-2 text-muted" id="${id}-c${i}-card-subtitle">${qty}</h4> --->
                    <!--- <em class="card-text" id="${id}-c${i}-card-text">Please furnish all details</em> --->
                    <br>
                    <a class="btn ${btnstyle}" id="forms-${i}" data-dismiss="${dismiss}" aria-label="Close" ${onclick}="forms_launchMiniFormsModal(${i})">${text}</a>
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
    $(`#${id}`).modal({keyboard:false});
}
