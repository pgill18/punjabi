// let expedition_state = { level: 1, platform: 1 };
// let expedition.progress = { attempts: 10, boost: 1, discount: 1 };
// let scorecard = { coins: 1000, supplies: 2000, stone: 10, lumber: 10, iron: 0, dye: 0 };
let expedition = { state: { level: 1, platform: 1 }, progress: { attempts: 10, boost: 1, discount: 1 }, trail: [] };
let context = { transition: 0 };

function expedition_startNegotiaiton() { 
    console.log(`... expedition_startNegotiaiton()`);
    if(expedition.progress.attempts<=-3) return alert('You ran out of attempts. New attempts are added 1 per hour.');
    if(expedition.progress.attempts<=0) if(!confirm('You ran out of attempts. New attempts are added 1 per hour. You can borrow up to 3 attempts. Would you like to borrow an attempt now?')) return;
    $(`#platform-body-${expedition.state.platform}`).popover('hide');
    expedition_launchNegotiation(expedition.state, expedition_complete_platform);
}
function expedition_startWhiteboard() { 
    console.log(`... expedition_startWhiteboard()`);
    if(expedition.progress.attempts<=-3) return alert('You ran out of attempts. New attempts are added 1 per hour.');
    if(expedition.progress.attempts<=0) if(!confirm('You ran out of attempts. New attempts are added 1 per hour. You can borrow up to 3 attempts. Would you like to borrow an attempt now?')) return;
    $(`#platform-body-${expedition.state.platform}`).popover('hide');
    expedition_launchWhiteboard(expedition.state, expedition_complete_platform);
}
function expedition_updateScores({save=0}={}) {
    get_scorecard(); // from settle_script.js, syncs scoreboard to main display
    $(`#expedition-scorecard`).text(expedition_obj2string_filtered(scorecard));
    $(`#expedition-progress`).text(expedition_obj2string({attempts: expedition.progress.attempts}, {showempty:1}) + ' left');
    // $(`#expedition-progress`).text(obj2string(expedition.progress));
    // save state for later restore
    if(save) {
        localStorage.setItem('expedition', JSON.stringify(expedition));
        // localStorage.setItem('scorecard', JSON.stringify(scorecard));
        save_data();
    }
}
function expedition_reBindNegotiationListeners() {
    $('a[id^="btn-negotiation-"]').each(function(index, el) {
        $(this).unbind().on('click', function(event) {
            event.preventDefault();
            console.log(this.id);
            expedition_startNegotiaiton();
        });
    });
}
function expedition_reBindWhiteboardListeners() {
    $('a[id^="btn-whiteboard-"]').each(function(index, el) {
        $(this).unbind().on('click', function(event) {
            event.preventDefault();
            console.log(this.id);
            expedition_startWhiteboard();
        });
    });
}

function expedition_launchWeeklyExpedition() {
    expedition_drawExpeditionMap()
    $('#expeditionModal').modal({ keyboard: false });
    $(document).on('shown.bs.popover', expedition_reBindNegotiationListeners);
    $(document).on('shown.bs.popover', expedition_reBindWhiteboardListeners);
}

function expedition_onclick_platform(index) {
    // popover_index = index;
}
function expedition_genRewards(state, type=1) {
    let mult = state.level;
    let coll1 = (Math.random() > 0.5) ? {lumber:15*mult} : {stone:16*mult};
    let coll2 = (Math.random() > 0.5) ? {iron:15*mult} : {dye:16*mult};
    let coll = (type===2 && tile.level>=3) ? coll2 : coll1;
    let rewards1 = (Math.random() > 0.9) ? {attempts:3} : {};
    let rewards2 = (Math.random() > 0.99) ? {attempts:3} : {};
    let rewards = type===1 ? rewards1 : rewards2;
    if(rewards.attempts) coll = {};
    let cost = {};
    return {coll, rewards, cost, mult};
}
function expedition_launchNegotiation(state, complete_platform) {
    // let coll = (Math.random() > 0.5) ? {lumber:20} : {stone:25};
    // let rewards = (Math.random() > 0.9) ? {attempts:3} : {};
    // if(rewards.attempts) coll = {};
    let {coll, rewards, cost, mult} = expedition_genRewards(state, 1);
    // Object.keys(coll).map(key => scorecard[key] += coll[key]);
    // complete_platform({coll, rewards});
    // $(`#expedition_grid`).css('background', 'dimgray');
    // $(`#expeditionModal-body`).css('background', 'dimgray');
    $('#screenModal').find('.modal-backdrop').css('opacity', '0.1 !important');
    $('#screenModal').css('z-index', '1500');
    $('#screenModal').modal({keyboard:false});
    context.transition = 1;
    let options = {coll, rewards, cost, mult, zindex:1600, cb:complete_platform};
    console.log(expedition)
    negotiator_expedition_launchMiniNegotiatorModal(expedition.state, options);
    // $(`#expeditionModal-body`).css('background', '');
}
function expedition_launchWhiteboard(state, complete_platform) {
    let {coll, rewards, cost, mult} = expedition_genRewards(state, 2);
    $('#screenModal').find('.modal-backdrop').css('opacity', '0.1 !important');
    $('#screenModal').css('z-index', '1500');
    $('#screenModal').modal({keyboard:false});
    context.transition = 1;
    let options = {coll, rewards, cost, mult, zindex:1600, cb:complete_platform};
    console.log(expedition)
    whiteboard_expedition_launchMiniWhiteboardModal(expedition.state, options);
}
// function expedition_launchWhiteboard(state, complete_platform) {
//     return;
//     let coll = (Math.random() > 0.5) ? {dye:20} : {iron:25};
//     let rewards = (Math.random() > 0.9) ? {attempts:3} : {};
//     if(rewards.attempts) coll = {};
//     context.transition = 1;
//     Object.keys(coll).map(key => add_collected(key, coll[key]));
//     // Object.keys(coll).map(key => scorecard[key] += coll[key]);
//     complete_platform({coll, rewards, done:1, started: 1});
// }
function expedition_complete_platform({ cost={}, coll={}, rewards={}, cb=0, done=0, started=0, way='negotiation' }={}) {
    console.log(`expedition_complete_platform({ cost={}, coll={}, rewards={}, cb={cb}, done=${done}, started=${started} }={})`, cost, coll, rewards)
    if(!context.transition) return;
    else context.transition = 0;
    console.log(`... expedition_complete_platform()`);
    if(done) {
        let earnings = Object.assign({}, coll, rewards);
        let imprint = expedition_updateTrail(way, earnings);
        // $(`#platform-body-${expedition.state.platform}`).find('p').text(obj2string(imprint));
        $(`#platform-body-${expedition.state.platform}`).find('p').text(expedition_obj2string(earnings));
        $(`#platform-body-${expedition.state.platform}`).popover('dispose');
        expedition.state.platform++;
        if(expedition.state.platform>20) {
            if(expedition.state.level < 4) {
                alert(`Cangratulations! You have successfully completed Level ${expedition.state.level} of Weekly Expedition.\nYou are now moving onto Level ${expedition.state.level+1} of Weekly Expedition.`);
                expedition.state.level++;
                expedition.state.platform = 1;
                expedition.trail[expedition.state.level] = [];
            } else {
                alert(`Congratulations!!!!! You have successfully completed all levels of Weekly Expedition.\nCome back next week to start a new expedition. Until then, relax and enjoy your rewards from this week.`)
            }
        }
        expedition_updateExpeditionMap();
    }
    // adjust numbers
    if(done || started) {
        expedition.progress['attempts']--;
        if(rewards.attempts) expedition.progress['attempts'] += rewards.attempts;
    }
    expedition_updateScores({save: 1});
    $('#screenModal').modal('hide');
    console.log(expedition);
}
function expedition_updateTrail(way, earnings) {
    let { level, platform } = expedition.state;
    let time = (new Date()).getTime();
    if(!expedition.trail[level]) expedition.trail[level] = [];
    expedition.trail[level][platform] = { earnings, way, time };
    return expedition.trail[level][platform];
}

function expedition_restoreState() {
    let expedition_data = JSON.parse(localStorage.getItem('expedition')||"{}");
    // let scorecard_data = JSON.parse(localStorage.getItem('scorecard'));
    if(Object.keys(expedition_data).length) expedition = expedition_data;
    // if(scorecard_data) scorecard = scorecard_data;
    expedition_updateExpeditionMap();
}
function expedition_refresh() {
    console.log(`........ expedition_refresh()`)
    Object.assign(expedition, { state: { level: 1, platform: 1 }, progress: { attempts: 10, boost: 1, discount: 1 }, trail: [] });
}
function expedition_refresh_attempts(count=1) {
    console.log(`........ expedition_refresh_attempts(${count})`)
    expedition.progress.attempts += count;
    if(expedition.progress.attempts > 10) expedition.progress.attempts = 10;
    // console.log(`... expedition_refresh_attempts = ${count}`);
    let save = 1 // save data after adding attempts
    if(save) {
        localStorage.setItem('expedition', JSON.stringify(expedition));
        // localStorage.setItem('scorecard', JSON.stringify(scorecard));
        save_data();
    }
}

function expedition_drawExpeditionMap() {
    let html = expedition_createExpeditionMap(4, 5);
    $(`#expedition_grid`).html(html);
    $(`#platform-body-${expedition.state.platform}`).popover();
    expedition_updateExpeditionMap();
    expedition_updateScores();
    // $('[data-toggle="popover"]').popover();
}

function expedition_updateExpeditionMap(rows=4, cols=5) {
    // console.log(`----------- expedition_updateExpeditionMap(rows=4, cols=5)`);
    let html = '', index = 1;
    for(let irow=0; irow<rows; irow++) {
        let mgn = 3 ;//+ irow;
        for(let icol=0; icol<cols; icol++, index++) {
            let border = index < expedition.state.platform ? 'border-secondary' : 'border-success';
            if(index === expedition.state.platform) border = 'border-warning';
            // $(`#platform-${index}`).find('.card-body').prop('data-toggle', 'tooltip');
            $(`#platform-${index}`).removeClass('border-success');
            $(`#platform-${index}`).removeClass('border-warning');
            $(`#platform-${index}`).removeClass('border-secondary');
            $(`#platform-${index}`).addClass(border);
            if(index < expedition.state.platform) {
                $(`#platform-${index}`).css('border-width', '0px');
                $(`#platform-${index}`).css('background', 'lightgray');
                $(`#platform-${index}`).css('color', 'dimgray');
            } else {
                $(`#platform-${index}`).css('border-width', '2px');
                $(`#platform-${index}`).css('background', '');
                $(`#platform-${index}`).css('color', '');
            }
            let platform = index;
            let level = expedition.state.level;
            let earnings={'holds a':'mystery'}, way, time, imprint;
            if(expedition.trail[level] && expedition.trail[level][platform]) {
                earnings = expedition.trail[level][platform].earnings;
                way = expedition.trail[level][platform].way;
                time = expedition.trail[level][platform].time;
                imprint = expedition.trail[level][platform];
            }
            // $(`#platform-body-${expedition.state.platform}`).find('p').text(obj2string(imprint));
            $(`#platform-body-${platform}`).find('p').text(expedition_obj2string(earnings));
        }
    }
    $(`#platform-body-${expedition.state.platform}`).find('p').text('click to start');
    $(`#platform-body-${expedition.state.platform}`).prop('type', '');
    $(`#platform-body-${expedition.state.platform}`).popover();
    $(`#expeditionModal-level`).text('Level ' + expedition.state.level);
    // $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="popover"]').popover();
}

function expedition_createExpeditionMap(rows=4, cols=5) {
    let html = '', index = 1;
    for(let irow=0; irow<rows; irow++) {
        let mgn = 3 ;//+ irow;
        for(let icol=0; icol<cols; icol++, index++) {
            let border = index < expedition.state.platform ? 'border-secondary' : 'border-success';
            if(index === expedition.state.platform) border = 'border-warning';
            let popover = `
            <div class="row ml-1 mr-n5" style="width:500px">
                <a type="button" class="btn btn-success btn-lg btn-block" id="btn-negotiation-${index}" onclick="expedition_startNegotiaiton(${index})">Negotiate</a>
                <a type="button" class="btn btn-primary btn-lg btn-block" id="btn-whiteboard-${index}" onclick="expedition_startWhiteboard(${index})">Teach</a>
                <!-- <a type="button" class="btn btn-primary btn-lg btn-block" id="btn-whiteboard-${index}" onclick="expedition_startWhiteboard(${index})">Teach</a> -->
                <!-- <a type="button" class="btn btn-primary btn-lg btn-block" id="btn-whiteboard-${index}" onclick="expedition_startWhiteboard(${index})">Solve</a> -->
            </div>
            `.trim();
            html += `
                <div class="col mx-${mgn} my-5">
                    <div class="card ${border}" id="platform-${index}" style="border-width:2px;">
                      <!-- <img src="..." class="card-img-top" alt="..."> -->
                      <div class="card-body" id="platform-body-${index}" onclick="expedition_onclick_platform(${index})" tabindex="0" type="button" role="button" data-toggle="popover" xdata-trigger="focus" data-html="true" xtitle="Pick one" data-content='${popover}'>
                        <h5 class="card-title">Platform ${index}</h5>
                        <p class="card-text">Stone, Lumber, ...</p>
                      </div>
                    </div>
                  </div>
            `.trim();
        }
    }
    return `<div class="row row-cols-1 row-cols-md-6">${html}</div>`;
}

function expedition_obj2string(obj, showempty=0) {
    return Object.entries(obj).filter(([key,value]) => value||showempty).map(([key,value]) => `${key} ${value}`).join(', ');
}

function expedition_obj2string_filtered(obj) {
    let filter = ['coins', 'supplies', 'stone', 'lumber', 'iron', 'dye'];
    return Object.entries(obj).filter(([key,value]) => filter.includes(key)).map(([key,value]) => `${key} ${value}`).join(', ');
}

$(function() {
    // every5min_routines.push( expedition_refresh );
    hourly_routines.push( expedition_refresh_attempts );
    weekly_routines.push( expedition_refresh );
    expedition_restoreState();
});
