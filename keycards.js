// keys activation code goes here
let keycards = { coll: [], active: [], types: [] };

let hour = 60*60; // in seconds

keycards.types = [
    [
        { name: `Speed-up 2x`, value: 2, type: 1, interval_mult: 1/2, id: 0, period: 24*hour, details: `Speed-up by 2x [all productions] (for next 24 hours)` },
        { name: `Boost-up 2x`, value: 4, type: 1, quantity_mult: 2, id: 1, period: 24*hour, details: `Boost-up by 2x [all productions] (for next 24 hours)` },
        { name: `Speed-up 4x`, value: 2, type: 1, interval_mult: 1/4, id: 2, details: `Speed-up by 4x [currently running productions]` },
        { name: `Boost-up 4x`, value: 4, type: 1, quantity_mult: 4, id: 3, details: `Boost-up by 4x [currently running productions]` },
        { name: `Finish one`,  value: 4, type: 1, interval_mult: 0, id: 4, details: `Finish one production (you choose)` },
        { name: `Set of goods`, value: 20, type: 1, id: 5, details: `Set of goods (you choose)` },
        { name: `Set of attempts`, value: 10, type: 1, id: 6, details: `Set of 10 attempts` },
        { name: `Refresh Trading Post`, value: 0, type: 1, id: 7, details: `Refresh Trading Post (all 3 platforms)` },
        { name: `Refresh Teaching Post`, value: 0, type: 1, id: 8, details: `Refresh Teaching Post (all 3 platforms)` },
        // { name: `Refresh Weekly Expedition`, value: 0, type: 1, id: 9, details: `Refresh Weekly Expedition (Restart from expedition-level 1 as if its a new week)` },
    ],
    [
        { name: 'goods', value: 20, type: 1 },
        { name: 'speedx', value: 2, type: 1 },  // speedup all productions by 2x for 24 hours
        { name: 'speedup', value: 4, type: 1 }, // speedup current productions by 4x
    ],
    [
        { name: 'goods', value: 40, type: 2 },
        { name: 'speedx', value: 5, type: 2 },  // speedup all productions by 5x for 24 hours
        { name: 'speedup', value: 10, type: 2 }, // speedup current productions by 10x
    ],
    [
        { name: 'goods', value: 60, type: 3 },
        { name: 'speedx', value: 10, type: 3 },  // speedup all productions by 10x for 24 hours
        { name: 'speedup', value: 100, type: 3 }, // speedup current productions by 100x
    ],
];

keycards.active = [ ];
keycards.coll = JSON.parse(JSON.stringify(keycards.types[0].slice(0,9).map(a => initialize_keycard(a))));
function initialize_keycard(keycard) {
    if(!defined(keycard.count)) keycard.count = 1;
    if(!defined(keycard.date)) keycard.date = new Date();
    return keycard;
}

function activate_keycard(keycard) {
    if(typeof keycard==="number") keycard = keycards.coll[keycard];
    if(!keycard || keycard.count<=0) return;
    let index = keycards.coll.indexOf(keycard);
    // if(index>=0) keycards.coll.splice(index, 1);
    keycard.count--;
    keycard.init = new Date();
    if(keycard.period) keycards.active.push(keycard);
    return keycard;
}
function active_keycard_effects() {
    let interval_mult = 1, quantity_mult = 1;
    for(let i=keycards.active.length-1; i>=0; i--) {
        if(getDuration(keycards.active[i].init) >= 24*60*60) {
            keycards.active.splice(i, 1); // remove if been active for 24 hours
        }
    }
    for(let keycard of keycards.active) {
        if(keycard.interval_mult) interval_mult *= keycard.interval_mult;
        if(keycard.quantity_mult) quantity_mult *= keycard.quantity_mult;
    }
    return {interval_mult, quantity_mult}
}
function getDuration(date) {
    date = new Date(date)
    let now = new Date();
    let millisecs = now.getTime() - date.getTime();
    return !date ? 0 : round(millisecs/1000);
}

let admin_mode_on = 0;
let key_mode_on = 0;
