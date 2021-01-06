class Card {
    constructor() {
        this.collection = {};
    }
    deposit(name, value) {
        if(!this.collection[name]) this.collection[name] = 0
        this.collection[name] += value;
    }
    deduct(name, value) {
        if(!this.collection[name]) this.collection[name] = 0
        this.collection[name] -= value;
    }
}

class Entity {
    constructor({qty=10,invl=5,name='na',tag='na',card}={}) {
        this.quantity = qty;
        this.interval = invl;
        this.colltime = 0;
        this.collected = 0;
        this.motivation = 0;
        this.state = { ready:0, idle:0, running:0 };
        this.name = name; // type of good
        this.tag = tag; // name of each building
        this.card = card;
    }
    run(qty, invl) {
        if(!qty) qty = this.quantity;
        if(!invl) invl = this.interval;
        this.starttime = this.timenow();
        this.state = { ready:0, idle:0, running:1 };
    }
    collect(qty) {
        if(!qty) qty = this.quantity;
        this.collected += qty;
        this.collected += qty*this.motivation; // additional coll if motivated
        this.colltime = this.timenow();
        this.state = { ready:0, idle:1, running:0 };
        if(this.card) this.card.deposit(this.name, qty);
    }
    collect_if_ready(qty) {
        if(!this.state.ready) return 0;
        return this.collect(qty);
    }
    isready() {
        if(!this.state.running) return 0;
        return (this.timenow() > this.colltime+this.interval*60*1000) ? 1 : 0;
    }
    cancel() {
        this.state = { ready:0, idle:1, running:0 };
    }
    loop_check() {
        if(!this.state.running || !this.isready()) return 0;
        this.state = { ready:1, idle:0, running:0 };
        return 1;
    }
}

class EntityObj {
    constructor({i}={}) {
        this.content = {};
        // this.i = i;
    }
}

function version_handling() {
    if(tile.version < 0.7) { //} || (version < 0.75 && user.id==='darshanbal')) {
        if(confirm(`A new version of this app is available. The upgrade process involves updates to local data. This page will be saved and reloaded after update to continue properly.\nProceed?`)) {
            tile.version = VERSION;
            save_data();
            window.location.reload(false);
        }
    }
    // if(tile.version < VERSION) {
    //     console.log(`... version was previously set to ${version}, upgrading ${VERSION}`)
    //     tile.version = VERSION
    //     save_data();
    // }
    // $("#version").html(version);
    // console.log(`... version is set to ${version}`)
}

const VERSION = 0.7;

const info = { project: 'Punjabi' };
const user = { id: 'na', name: '', email: '' };
const tile = { i: 1, j: 1, level: 0, pending: 0, sides: [0, 0, 0] };

const minigames = {
    negotiator: [{collected: 0,colltime: 0},{collected: 0,colltime: 0},{collected: 0,colltime: 0}],
    forms: [{collected: 0,colltime: 0},{collected: 0,colltime: 0},{collected: 0,colltime: 0}],
    // algebra: [{collected: 0,colltime: 0},{collected: 0,colltime: 0},{collected: 0,colltime: 0}],
    whiteboard: [{collected: 0,colltime: 0},{collected: 0,colltime: 0},{collected: 0,colltime: 0}],
    // blackboard: [{collected: 0,colltime: 0},{collected: 0,colltime: 0},{collected: 0,colltime: 0}],
}
const name_lookup = ['coins', 'supplies', 'stone', 'lumber', 'iron', 'dye'];
const dependencies_db = {
    inst: {
        coins: [{coins: 100}, {coins: 200}],
        supplies: [{coins: 100}, {coins: 200}],
        happiness: [], diamonds: [], marks: [], people: [], happiness: [],
        stone:  [{coins: 200, supplies: 500}, {coins: 500, supplies: 1000}],
        lumber: [{coins: 200, supplies: 500}, {coins: 500, supplies: 1000}],
        iron:  [{coins: 200, supplies: 500}, {coins: 500, supplies: 1000}],
        dye:  [{coins: 200, supplies: 500}, {coins: 500, supplies: 1000}],
    },
    run: {
        coins:  [], diamonds: [], marks: [], people: [], happiness: [],
        supplies: [{coins: [10, 20, 50, 70, 100, 200]}, {coins: [20, 50, 100, 200, 300, 600]}],
        stone:  [{supplies: [1000, 2000, 4000, 8000]}, {supplies: [1000, 2000, 4000, 8000]}], 
        lumber: [{supplies: [1000, 2000, 4000, 8000]}, {supplies: [1000, 2000, 4000, 8000]}], 
        iron:  [{supplies: [1000, 2000, 4000, 8000]}, {supplies: [1000, 2000, 4000, 8000]}], 
        dye:  [{supplies: [1000, 2000, 4000, 8000]}, {supplies: [1000, 2000, 4000, 8000]}], 
    }
};
const content_values_db = {
    interval: {
        coins: [
            [5, 15, 60, 4*60, 8*60, 24*60],
            [5, 15, 60, 4*60, 8*60, 24*60]],
        supplies: [
            [5, 15, 60, 4*60, 8*60, 24*60],
            [5, 15, 60, 4*60, 8*60, 24*60]],
        stone:  [[4*60, 8*60, 24*60, 48*60]],
        lumber: [[4*60, 8*60, 24*60, 48*60]],
        iron: [[4*60, 8*60, 24*60, 48*60]],
        dye: [[4*60, 8*60, 24*60, 48*60]],
    },
    quantity: {
        coins: [
            [20, 30, 50, 70, 100, 200],
            [60, 90, 150, 200, 300, 600]],
        supplies: [
            [100, 150, 200, 300, 500, 1000],
            [300, 450, 600, 900, 1500, 3000]],
        // coins: [
        //     [70, 100, 200, 70, 100, 200],
        //     [200, 300, 600, 200, 300, 600]],
        // supplies: [
        //     [300, 500, 1000, 300, 500, 1000],
        //     [1000, 1500, 3000, 1000, 1500, 3000]],
        stone:  [[5, 10, 20, 30]],
        lumber: [[5, 10, 20, 30]],
        iron: [[5, 10, 20, 30]],
        dye:  [[5, 10, 20, 30]],
    }
};

const people_db = {
    people: { max: 200, enrolled: 50, housed: 0, used: 0, temps: 5 },
    values: [
        [16, 59],
        [17, 38],
        [45, 45],
        [36, 36],
        [45, 45],
        [36, 36],
        [0, 0],
    ]
};
const unlocked_db_init = {
    coins: [1, 0, 0],
    supplies: [1, 0, 0],
    happiness: [0, 0, 0],
    harness: [0, 0, 0],
    stone:  [1, 0], lumber: [0, 0], iron:  [0, 0], dye:  [0, 0],
    form: [0], negotiation: [0], trading: [0], harness: [0], chatbot: [0],
    chalkboard: [0], puzzle: [0], falling: [0], shooting: [0],
    paintball: [0], tower: [0], quiz: [0], math: [0],
};
let unlocked_db = JSON.parse(JSON.stringify(unlocked_db_init)); // clone initial values

const unlocking_db_orig = [
    // stone era
    { cost: {stone:  0, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 0,    knock: 0,        spaces: 0, temps: 5 } },
    { cost: {stone: 10, lumber: 0, iron: 0, dye: 0 },       gain: { supplies: 0, greet: 0,        spaces: 0, temps: 5 } },
    { cost: {stone: 20, lumber: 0, iron: 0, dye: 0 },       gain: { supplies: 1, lumber: 0,       spaces: 0, temps: 5 } },
    // lumber era
    { cost: {stone: 20, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 1,    form: 0,         spaces: 0, temps: 5} },
    { cost: {stone: 10, lumber: 30, iron: 0, dye: 0 },      gain: { happiness: 1, negotiation: 0, spaces: 1, temps: 5 } },
    { cost: {stone: 30, lumber: 30, iron: 0, dye: 0 },      gain: { harness: 0,  iron: 0,         spaces: 1, temps: 5 } },
    // iron era
    { cost: {stone: 10, lumber: 10, iron: 30, dye: 0 },     gain: { coins: 2,     chatbot: 0,     spaces: 1, temps: 5 } },
    { cost: {stone: 20, lumber: 10, iron: 20, dye: 0 },     gain: { harness: 2,   chalkboard: 0,  spaces: 1, temps: 5 } },
    { cost: {stone: 20, lumber: 10, iron: 20, dye: 0 },     gain: { supplies: 2,  puzzle: 0,      spaces: 1, temps: 5 } },
    { cost: {stone: 10, lumber: 20, iron: 20, dye: 0 },     gain: { harness: 3,   dye: 0,         spaces: 1, temps: 5 } },
    // dye era
    { cost: {stone: 10, lumber: 10, iron: 10, dye: 30 },    gain: { happiness: 2,  falling: 0,    spaces: 1, temps: 5 } },
    { cost: {stone: 10, lumber: 10, iron: 10, dye: 30 },    gain: { happiness: 2,  shooting: 0,   spaces: 1, temps: 5 } },
    { cost: {stone: 10, lumber: 10, iron: 10, dye: 30 },    gain: { happiness: 2,  paintball: 0,  spaces: 1, temps: 5 } },
    { cost: {stone: 10, lumber: 10, iron: 10, dye: 30 },    gain: { happiness: 2,  tower: 0,      spaces: 1, temps: 5 } },
    { cost: {stone: 20, lumber: 0, iron: 10, dye: 20 },     gain: { harness: 4,    quiz: 0,       spaces: 1, temps: 5 } },
    { cost: {stone: 10, lumber: 20, iron: 0, dye: 20 },     gain: { happiness: 3,  math: 0,       spaces: 1, temps: 5 } },
    { cost: {stone: 0, lumber: 10, iron: 20, dye: 20 },     gain: { harness: 5,    none: 0,       spaces: 1, temps: 5 } },
];

let unlocking_db_full = [
    // stone era
    { cost: {stone:  0, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 0,    tbd: 0,   spaces: 0, temps: 5 } },
    { cost: {stone: 10, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 1,    tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 20, lumber: 0, iron: 0, dye: 0 },       gain: { lumber: 0,   tbd: 0,   spaces: 0, temps: 5 } },
    // lumber era
    { cost: {stone:  0, lumber: 20, iron: 0, dye: 0 },      gain: { supplies: 1, tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 20, iron: 0, dye: 0 },      gain: { trading: 0,  tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 30, iron: 0, dye: 0 },      gain: { none: 0,     tbd: 0,   spaces: 2, temps: 10 } },
    // iron era
    { cost: {stone: 50, lumber: 40, iron: 0,  dye: 0 },     gain: { iron: 0,     tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 10, lumber: 20, iron: 30, dye: 0 },     gain: { forms: 0,    tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 10, iron: 20, dye: 0 },     gain: { none: 0,     tbd: 0,   spaces: 1, temps: 10 } },
    // dye era
    { cost: {stone: 40, lumber: 30, iron: 50, dye: 0  },    gain: { dye: 0,      tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 10, lumber: 20, iron: 30, dye: 30 },    gain: { pupil: 0,    tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 10, iron: 20, dye: 20 },    gain: { none: 0,     tbd: 0,   spaces: 1, temps: 10 } },
    // happiness era
    { cost: {stone:  0, lumber: 20, iron: 30, dye: 10 },    gain: { none: 0,     tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 20, iron: 10, dye: 30 },    gain: { tutor: 0,    tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 10, iron: 30, dye: 20 },    gain: { none: 0,     tbd: 0,   spaces: 1, temps: 10 } },
    // arcade era
    { cost: {stone:  0, lumber: 20, iron: 10, dye: 30 },    gain: { none: 0,     tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 20, iron: 30, dye: 10 },    gain: { player: 0,   tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 30, iron: 20, dye: 30 },    gain: { none: 0,     tbd: 0,   spaces: 1, temps: 10 } },
];

let unlocking_db = [
    // stone era
    { cost: {stone:  0, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 0,    tbd: 0,   spaces: 0, temps: 5 } },
    { cost: {stone: 10, lumber: 0, iron: 0, dye: 0 },       gain: { coins: 1,    tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 20, lumber: 0, iron: 0, dye: 0 },       gain: { lumber: 0,   tbd: 0,   spaces: 0, temps: 5 } },
    // lumber era
    { cost: {stone:  0, lumber: 20, iron: 0, dye: 0 },      gain: { supplies: 1, tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 20, iron: 0, dye: 0 },      gain: { trading: 0,  tbd: 0,   spaces: 0, temps: 10 } },
    { cost: {stone: 30, lumber: 30, iron: 0, dye: 0 },      gain: { none: 0,     tbd: 0,   spaces: 2, temps: 10 } },
];

let current_era = 0;

const scorecard = {coins: 0, supplies: 0, happiness: 0, stone: 0, lumber: 0, iron: 0, dye: 0};

const canvas_db = {
    locked: _locked,
    blocked: _blocked,
    pieces: _pieces,
};

const build_db = {
    current_era: current_era,
    unlocked_db: unlocked_db,
    unlocking_db: unlocking_db,
};

let auto_pilot = { 
    on: 0,
    interval: 1,
    maxturns: 10,
    counter: 0,
    mode: {
        run: 40,
        build: 0,
        unlock: 0,
        level: 0
    },
};
const runtime = { overall: 0, currlevel: 0 };
const hourly_routines = [];
const daily_routines = [];
const weekly_routines = [];

// let done_hourly = { hour: 0, date: 0, speedup: 1 };
const done_routinely = {
    // m1: 0, m5: 0, m10: 0, m15: 0, m30: 0, m45: 0, h1: 0, h3: 0, h8: 0, h12: 0, d1: 0, w1: 0
    m1: (new Date(2020,11-1,27)),
    m5: (new Date(2020,11-1,27)),
    m10: (new Date(2020,11-1,27)),
    m15: (new Date(2020,11-1,27)),
    m30: (new Date(2020,11-1,27)),
    m45: (new Date(2020,11-1,27)),
    h1: (new Date(2020,11-1,27)),
    h3: (new Date(2020,11-1,27)),
    h8: (new Date(2020,11-1,27)),
    h12: (new Date(2020,11-1,27)),
    d1: (new Date(2020,11-1,27)),
    w1: (new Date(2020,11-1,27)),
    o1: (new Date(2020,11-1,27)),
    y1: (new Date(2020,11-1,27)),
}

function timenow() {
    return (new Date).getTime();
}
function deleteAllProgress() {
    store_scorecard(`build/space-${tile.i}-${tile.j}`, '');
}
function deleteLevelProgress__orig(levelup=false) {
    let game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}`);
    delete game_data.build_db; delete game_data.canvas_db;
    if(!game_data.people) game_data.people = {};
    Object.assign(game_data.people, { housed: 0, used: 0, temps: 0 });
    game_data.people.max += 50;
    game_data.scorecard.coins += 2000;
    game_data.scorecard.supplies += 6000;
    if(levelup) {
        if(tile.level<9) tile.level++;  tile.pending = 0;
        if(tile.level<9 && unlocking_db_full.length>unlocking_db.length) {
            unlocking_db = unlocking_db_full.slice(0, unlocking_db.length+1)
        }
        game_data.level = tile.level;
        if(!game_data.main) game_data.main = {};
        game_data.main.pending = 0;
        // $('#level-up').prop('hidden', true);
        $('#level').text(tile.level+1);
    }
    store_scorecard(`build/space-${tile.i}-${tile.j}`, game_data);
}
function levelUp__orig(delpro=false, check_done=true) {
    if(check_done) {
        let next_era_db = unlocking_db[current_era+1];
        if(next_era_db) { console.log(`This level is not done yet! Level up when this level is completed.`); return; }
    }
    if(delpro) return deleteLevelProgress(true);
    if(tile.level<9) tile.level++;  tile.pending = 0;
    if(tile.level<9 && unlocking_db_full.length>unlocking_db.length) {
        unlocking_db = unlocking_db_full.slice(0, unlocking_db.length+1)
    }
    // $('#level-up').prop('hidden', true);
    $('#level').text(tile.level+1);
    let game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}`);
    game_data.level = tile.level;
    if(!game_data.main) game_data.main = {};
    game_data.main.pending = 0;
    store_scorecard(`build/space-${tile.i}-${tile.j}`, game_data);
}

// function deleteLevelProgress(game_data) {
//     if(!game_data) game_data = retrieve_gamedata()
//     delete game_data.build_db; delete game_data.canvas_db;
//     if(!game_data.people) game_data.people = {};
//     Object.assign(game_data.people, { housed: 0, used: 0, temps: 0 });
//     game_data.people.max += 50;
//     game_data.scorecard.coins += 2000;
//     game_data.scorecard.supplies += 6000;
//     store_gamedata(game_data);
// }
// function levelUp(delpro=true, check_done=true) {
//     if(check_done) {
//         let next_era_db = unlocking_db[current_era+1];
//         if(next_era_db) { console.log(`This level is not done yet! Level up when this level is completed.`); return; }
//     }
//     let game_data = retrieve_gamedata()
//     game_data.done = 1;
//     store_gamedata(game_data);
//     tile.level++; 
//     game_data.level = tile.level;
//     game_data.done = 0;
//     if(unlocking_db_full.length>unlocking_db.length) {
//         unlocking_db = unlocking_db_full.slice(0, unlocking_db.length+1)
//     }
//     if(delpro) deleteLevelProgress(game_data);
//     else store_gamedata(game_data);
//     // update level as top entry
//     game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}`);
//     if(!game_data) game_data = {};
//     game_data = { level: tile.level, sides: game_data.sides };
//     store_scorecard(`build/space-${tile.i}-${tile.j}`, game_data);
//     $('#level').text(tile.level+1);
// }

function deleteLevelProgress() {
    current_era = 0;
    unpopulate_all();
    lock_spaces_all();
    Object.assign(unlocked_db, JSON.parse(JSON.stringify(unlocked_db_init))); // clone initial values
    Object.assign(people_db.people, { housed: 0, used: 0, temps: 0 });
    set_people(people_db.people);
    people_db.people.max += 50;
    add_collected("coins", 2000)
    add_collected("supplies", 6000)
}
function levelUp(delpro=true, check_done=true) {
    if(check_done) {
        let next_era_db = unlocking_db[current_era+1];
        if(next_era_db) { console.log(`This level is not done yet! Level up when this level is completed.`); return; }
    }
    save_data(); // save completed level
    let game_data = retrieve_gamedata()
    game_data.done = 1;
    store_gamedata(game_data);
    tile.level++; 
    if(unlocking_db_full.length>unlocking_db.length) {
        let inc = tile.level===1 ? 2 : 1
        unlocking_db = unlocking_db_full.slice(0, unlocking_db.length+inc)
    }
    if(delpro) deleteLevelProgress();
    save_data(); // save new level
    $('#level').text(tile.level+1);
    $('#era').text(current_era+1);
}

function retrieve_gamedata() {
    let game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}/${tile.level}`);
    if(!game_data) {
        game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}`); // older version
    }
    return game_data;
}

function store_gamedata(game_data) {
    store_scorecard(`build/space-${tile.i}-${tile.j}/${tile.level}`, game_data);
}

function runWithSpeedup(speedx, _this) {
    if(_this) {
        // if(_this.parentNode.tagName==='a') _this = _this.parentNode;
        if(_this.parentNode.style.color==='red') {
            _this.parentNode.style.color="dimgray";
            _game_speedx = 1;  _delay_speedx = 1;
        } else {
            _this.parentNode.style.color="red";
            _game_speedx = speedx;
            _delay_speedx = (_game_speedx>100) ? 5 : 1;
        }
    }
}
function editTilesWrapper(_this) {
    editTiles();
    if($(_this).hasClass('btn-outline-primary')) {
        $(_this).removeClass('btn-outline-primary')
        $(_this).addClass('btn-light')
    }
    else if($(_this).hasClass('btn-light')) {
        $(_this).removeClass('btn-light')
        $(_this).addClass('btn-outline-primary')
    }
}

function get_collected(name) {
    let id = `score-${name}`;
    // console.log(`get_collected(${name})`);
    let value = parseInt(document.getElementById(id).textContent);
    return value;
}
function add_collected(name, value) {
    console.log(`add_collected(${name}, ${value})`)
    value += get_collected(name) || 0;
    console.log(`display_collected(${name}, ${value})`)
    display_collected(name, value);
    return value;
}
function display_collected(name, value) {
    let id = `score-${name}`;
    // console.log(`display_collected(${name})`);
    document.getElementById(id).textContent = value;
}

function get_collection() {
    let coins = get_collected('coins') || 0;
    let supplies = get_collected('supplies') || 0;
    let stone  = get_collected('stone') || 0;
    let lumber = get_collected('lumber') || 0;
    let iron = get_collected('iron') || 0;
    let dye = get_collected('dye') || 0;
    let happiness = get_collected('happiness') || 0;
    return {coins, supplies, happiness, stone, lumber, iron, dye};
}
function get_dependencies_op(piece, op='run', intvli=0,) {
    let index = piece.entity.content.index;
    let level = piece.entity.content.level;
    let name = name_lookup[index];
    let dependency = dependencies_db[op][name][level];
    let coins=0, supplies=0, happiness=0, stone=0, lumber=0, iron=0, dye=0;
    if(!dependency) return {coins, supplies, stone, lumber, iron, dye};
    if(dependency.coins) coins = dependency.coins[intvli] || 0;
    if(dependency.supplies) supplies = dependency.supplies[intvli] || 0;
    if(dependency.happiness) happiness = dependency.happiness[intvli] || 0;
    if(dependency.stone) stone  = dependency.stone[intvli] || 0;
    if(dependency.lumber) lumber = dependency.lumber[intvli] || 0;
    if(dependency.iron) iron = dependency.iron[intvli] || 0;
    if(dependency.dye) dye = dependency.dye[intvli] || 0;
    return {coins, supplies, happiness, stone, lumber, iron, dye};
}
function get_dependencies_era(entry) {
    let dependencies = Object.assign({}, entry.cost);
    if(!dependencies.coins) dependencies.coins = 0;
    if(!dependencies.supplies) dependencies.supplies = 0;
    if(!dependencies.happiness) dependencies.happiness = 0;
    if(!dependencies.stone) dependencies.stone  = 0;
    if(!dependencies.lumber) dependencies.lumber = 0;
    if(!dependencies.iron) dependencies.iron = 0;
    if(!dependencies.dye) dependencies.dye = 0;
    return dependencies;
}
function get_scorecard() {
    let sc = get_collection();
    Object.assign(scorecard, sc);
    return scorecard;
}
// function check_dependencies(piece, intvli) {
//     let collection = get_collection(intvli);
//     let dependencies = get_dependencies(piece);
//     if(collection.coins < dependencies.coins) return false;
//     if(collection.coins < dependencies.coins) return false;
//     if(collection.coins < dependencies.coins) return false;
//     if(collection.coins < dependencies.coins) return false;
//     if(collection.coins < dependencies.coins) return false;
//     if(collection.coins < dependencies.coins) return false;
//     return {coins, supplies, stone, lumber, iron, dye}
// }
function check_dependencies_op(piece, op, intvli, retval) {
    let dependencies = get_dependencies_op(piece, op, intvli);
    return check_dependencies(dependencies, retval)
}
function deduct_dependencies_op(piece, op, intvli) {
    let dependencies = get_dependencies_op(piece, op, intvli);
    return deduct_dependencies(dependencies, intvli)
}
function check_dependencies_era(entry, retval) {
    let dependencies = entry.cost;
    return check_dependencies(dependencies, retval)
}
function deduct_dependencies_era(entry) {
    let dependencies = entry.cost;
    return deduct_dependencies(dependencies)
}

function check_dependencies(dependencies, retval) {
    let collection = get_collection();
    // let dependencies = get_dependencies(piece, op, intvli);
    let coins = (collection.coins - dependencies.coins);
    let supplies = (collection.supplies - dependencies.supplies);
    let happiness = (collection.happiness - dependencies.happiness);
    let stone   = (collection.stone - dependencies.stone);
    let lumber = (collection.lumber - dependencies.lumber);
    let iron = (collection.iron - dependencies.iron);
    let dye = (collection.dye - dependencies.dye);
    console.log(`check_dependencies()`)
    console.log(collection);
    console.log(dependencies);
    console.log({coins, supplies, happiness, stone, lumber, iron, dye});
    if(coins<0 || supplies<0 || happiness<0 || stone<0 || lumber<0 || iron<0 || dye<0) {
        if(retval) return {coins, supplies, happiness, stone, lumber, iron, dye};
        return false;
    }
    return {coins, supplies, happiness, stone, lumber, iron, dye}
}
function deduct_dependencies(dependencies) {
    let collection = get_collection();
    // let dependencies = get_dependencies(piece, op, intvli);
    let coins = collection.coins - (dependencies.coins || 0);
    let supplies = collection.supplies - (dependencies.supplies || 0);
    let stone   = collection.stone - (dependencies.stone || 0);
    let lumber = collection.lumber - (dependencies.lumber || 0);
    let iron = collection.iron - (dependencies.iron || 0);
    let dye = collection.dye - (dependencies.dye || 0);
    display_collection({coins, supplies, stone, lumber, iron, dye});
    return {coins, supplies, stone, lumber, iron, dye};
}
function display_collection(collection) {
    display_collected('coins', collection.coins);
    display_collected('supplies', collection.supplies);
    display_collected('stone', collection.stone);
    display_collected('lumber', collection.lumber);
    display_collected('iron', collection.iron);
    display_collected('dye', collection.dye);
}
function get_interval_quantity_cost(piece, op='run', i) {
    if(!piece) piece = _configuringPiece;
    if(!piece || !piece.entity) return;
    let index = piece.entity.content.index;
    let level = piece.entity.content.level;
    let name = name_lookup[index];
    let interval = content_values_db.interval[name][level];
    let quantity = content_values_db.quantity[name][level];
    let cost = dependencies_db[op][name][level]
    console.log(`index=${index}, name=${name}, level=${level}, cost=`, dependencies_db[op][name]);
    return {interval, quantity, cost};
}
function set_interval_quantity(piece, i) {
    let index = piece.entity.content.index;
    let level = piece.entity.content.level;
    let name = name_lookup[index];
    piece.entity.quantity = content_values_db.quantity[name][level][i];
    piece.entity.interval = content_values_db.interval[name][level][i];
    console.log(`set_interval_quantity()`)
    console.log(`index=${index}, name=${name}, level=${level}, i=${i}`);
    console.log(content_values_db);
    console.log(piece);
}

function produce(i) {
    console.log(`produce(${i})`)
    let piece = _configuringPiece;
    console.log(piece);
    if(!piece || !piece.entity) return;
        if(piece.entity.content.index>=2)    console.log(`-------------------------------------- produce ...............`, piece.entity)
    if(!check_dependencies_op(piece, 'run', i)) { 
        let retval = check_dependencies_op(piece, 'run', i, true); let list = [];
        for(let key in retval) { if(retval[key]<0) list.push(`Need ${Math.abs(retval[key])} more ${key}`) }
        retval = JSON.stringify(retval);
        if(!auto_pilot.on) alert('Not enough resources!\n'+list.join('\n')); 
        return; 
    }
        if(piece.entity.content.index>=2)   console.log(`-----------------2--------------------- produce ...............`, piece.entity)
    deduct_dependencies_op(piece, 'run', i);
    set_interval_quantity(piece, i);
    piece.entity.collected = 1; // TBD
    piece.entity.isel = i;
    start(piece);
}

function ready(piece, location=-1) {
    // console.log(`ready(${piece.entity}, ${location})..0`)
    if(!piece || !piece.entity) return;
    // console.log(`ready(${piece.entity})..1`)
    if(piece.entity.collected) return 0;
    // console.log(`ready(${piece.entity})..2`)
    let current_time = timenow();
    let duration = current_time - piece.entity.start_time;
    let isel = piece.entity.isel || 0;
    // console.log(`location = ${location})`)
    // console.log(`duration(${duration})..2`)
    // console.log(`current_time(${current_time})..2`)
    // console.log(`piece.entity.start_time(${piece.entity.start_time})..2`)
    // console.log(`piece.entity.duration[isel]=${piece.entity.duration[isel]})..2`)
    // console.log(`ready(${piece.entity})..3`)
    let divisor = 1000/_game_speedx;
    let remaining = -(duration/divisor - piece.entity.duration[isel]*60)/_game_speedx;
    // console.log(`time remaining = ${remaining} seconds ...2i`)
    if(duration/divisor > piece.entity.duration[isel]*60) {
        return true;
    }
    // if(duration/1000 > piece.entity.duration[isel]*60) {
    //     return true;
    // }
    // console.log(`ready(${piece.entity})..4`)
    return false; //TBD
}
function flag(piece) {
    if(!ready(piece)) return;
    _content_names = name_lookup;
    let id = "score-" + _content_names[piece.entity.content.index];
    console.log(`id=${id}, piece.entity.content.index=${piece.entity.content.index}, piece.entity.content.exists=${piece.entity}, piece.entity.content.value=${piece.entity.content.value}, _content.names=${_content.names[piece.entity.content.index]}`);
    document.getElementById(id).style.backgroundColor = 'goldenrod';
}
function start(piece) {
    console.log(`start(${piece})`)
    console.log(piece)
    if(!piece || !piece.entity) return;
    if(!piece.entity.collected) return 0;
    update_status(piece);

    let current_time = timenow();
    // piece.entity.entity.isel = isel; // comes from modal choice
    piece.entity.start_time = current_time;
    piece.entity.collected = 0;
    piece.entity.running = 1;
    changeImage(piece, {running:1});
    console.log(piece)
    console.log(`current_time=(${current_time})`)
}
function tick(){
    for(let i = 0; i < _pieces.length; i++){
        if(!_blocked.includes(i)) continue;
        if(ready(piece)) flag(_pieces[i]);
    }
}
function update_status(piece) {
    if(!piece || !piece.entity || !piece.entity.duration) return;
    let isel = piece.entity.isel || 0;
    let duration = piece.entity.duration[isel]*60*1000;
    let added_time = duration - remaining_time_overall();
    if(added_time>0) {
        runtime.currlevel += added_time;
        runtime.overall += added_time;
    }
    console.log(`added_time=`, added_time);
    console.log(`runtime=`, runtime);
}
function remaining_time_overall() { // in ms (absolute)
    let remaining_time_overall = 0;
    for(let piece of _pieces) {
        if(!piece.entity || piece.entity.collected) continue;
        if(!piece.entity.running) continue;
        let remaining_time_piece = remaining_time(piece);
        if(remaining_time_piece < remaining_time_overall) continue;
        remaining_time_overall = remaining_time_piece;
    }
    console.log(`remaining_time_overall=`, remaining_time_overall);
    return remaining_time_overall;
}
function remaining_time(piece) { // in ms (absolute)
    if(!piece || !piece.entity) return 0;
    if(piece.entity.collected) return 0;
    if(!piece.entity.running) return 0;
    if(!piece.entity.start_time) return 0;
    let isel = piece.entity.isel || 0;
    let duration = piece.entity.duration[isel]*60*1000;
    let run_so_far = (timenow() - piece.entity.start_time)*_game_speedx;
    let remaining_time = duration - run_so_far;
    console.log(`remaining_time=`, remaining_time);
    if(runtime.currlevel<duration) runtime.currlevel = duration;
    if(runtime.overall<duration) runtime.overall = duration;
    return remaining_time;
}

function collect(piece) {
    if(!piece || !piece.entity) return;
    // changeImage(piece.entity.i, {ready:0});
    changeImage(piece, {ready:0});
    piece.entity.flagged = 0;
    _content_names = name_lookup;
    // if(!ready(piece)) return;
    let id = "score-" + _content_names[piece.entity.content.index];
    console.log(`id=${id}, piece.entity.content.index=${piece.entity.content.index}, piece.entity.content.exists=${piece.entity}, piece.entity.content.value=${piece.entity.content.value}, _content_names=${_content_names[piece.entity.content.index]}`);
    let score_value = parseInt(document.getElementById(id).textContent);
    document.getElementById(id).textContent = score_value + piece.entity.quantity;
    // document.getElementById(id).textContent = score_value + piece.entity.content.value;
    piece.entity.collected = 1;
    piece.entity.running = 0;
}
function collect_people(count, dir) {
    let id = dir ? 'score-people-used' : 'score-people-housed';
    // console.log(`id=${id}, piece.entity.content.index=${piece.entity.content.index}, piece.entity.content.exists=${piece.entity}, piece.entity.content.value=${piece.entity.content.value}, _content_names=${_content_names[piece.entity.content.index]}`);
    let score_value = parseInt(document.getElementById(id).textContent);
    document.getElementById(id).textContent = score_value + count;
    let roster = people_db.people.enrolled + people_db.people.temps;
    document.getElementById('score-people-roster').textContent = roster;
}

function collect_all_once(mode={collect:1, run:1}) {
    console.log(`_locked: `, _locked)
    console.log(`canvas_db: `, canvas_db)
    if(mode.collect===undefined) mode.collect = 1;
    if(mode.run===undefined) mode.run = 1;
    console.log(`collect_all()`);
    let collected = 0, running = 0, instances = [];
    for(let index in _pieces) {
        let piece = _pieces[index];
        console.log(`0piece.entity=${piece.entity}`);
        if(!piece.entity) continue;
        instances[piece.entity.content.index] = 1;
        console.log(`1piece.entity=${piece.entity}`);
        if(ready(piece) && mode.collect) {
            collect(piece);
            console.log(`2piece.entity=${piece.entity}`);
            collected++;
        }
        console.log(`3piece.entity=${piece.entity}`);
        if(!piece.entity.running && mode.run) {
            _configuringPiece = piece;
            let interval = piece.entity.content.index>1 ? auto_pilot.interval : auto_pilot.interval+3;
            produce(interval);
            console.log(`4piece.entity=${piece.entity}`);
            running++;
            continue;
        }
        if(piece.entity.running) running++;
    }
    return [collected, running, instances];
}
async function collect_all_loop(mode={run:10,build:0}) {
    if(mode.run===undefined) mode.run = 10;
    if(!auto_pilot.on) {
        $('#collect-loop').css('color', 'red');
        auto_pilot.on = 1;
    } else { // toggle auto_pilot
        $('#collect-loop').css('color', 'gray');
        auto_pilot.on = 0;  return;
    }
    auto_pilot.counter = 0;
    auto_pilot.maxturns = mode.run;
    while(1) {
        console.log(`collect_all()...counter=`+auto_pilot.counter);
        console.log(auto_pilot);
        if(!auto_pilot.on) break;
        let [collected, running, instances] = collect_all_once();
        if(collected) {
            auto_pilot.counter++;
            mode.alert = 0;
            if(auto_pilot.mode.unlock) unlock_era(mode); // check and update
    // console.log(`............................collect_all_loop(${instances})..............`)
            let collection = get_collection();
            let instantiate = 0;
            // not enough of something, instantiate it
            if(collection.supplies<1000) { if(instances[2] || instances[3] || instances[4] || instances[5]) instantiate++; }
            else if(collection.stone<50) { if(!instances[2] && current_era>=0 && collection.supplies>=10000) instantiate++; }
            else if(collection.lumber<50) { if(!instances[3] && current_era>=2 && collection.supplies>=10000) instantiate++; }
            else if(collection.iron<50) { if(!instances[4] && current_era>=5 && collection.supplies>=10000) instantiate++; }
            else if(collection.dye<50) { if(!instances[5] && current_era>=8 && collection.supplies>=10000) instantiate++; }
            // too much of something, remove it
            if(collection.supplies>=50000) { if(!(instances[2] || instances[3] || instances[4] || instances[5])) instantiate++; }
            else if(collection.stone>=100) { if(instances[2]) instantiate++; }
            else if(collection.lumber>=100) { if(instances[3]) instantiate++; }
            else if(collection.iron>=100) { if(instances[4]) instantiate++; }
            else if(collection.dye>=100) { if(instances[5]) instantiate++; }
    // console.log(`.................2...........collect_all_loop(${instantiate})..............`)
            if(instantiate && auto_pilot.mode.build) {
                unpopulate_all();
                populate_era();
            }
        }
        update_autopilot_display();
        if(auto_pilot.counter>=auto_pilot.maxturns) break;
        await delay(1, _delay_speedx);
    }
    update_autopilot_display();
    $('#collect-loop').css('color', 'gray');
    auto_pilot.on = 0;
}
function update_autopilot_display(clear) {
    document.getElementById('score-autopilot').textContent = 
        clear ? '' : auto_pilot.counter + '/' + auto_pilot.maxturns;    
}
function auto_pilot_mode({run,build,unlock,level,type,qty}={}) {
    if(run!==undefined) auto_pilot.mode.run = run;
    if(build!==undefined) auto_pilot.mode.build = build;
    if(unlock!==undefined) auto_pilot.mode.unlock = unlock;
    if(level!==undefined) auto_pilot.mode.level = level;
    if(type!==undefined) auto_pilot.mode.type = type;
    if(qty!==undefined) auto_pilot.mode.qty = qty;
}
function unlock_space(x) {
    if(x || x===0) {
        unlockTile(x);
    } else if(_locked.length>0) {
        unlockTile(_locked.splice(0,1));
    }
}
function lock_space(x) {
    if(!x && x!==0) x = _locked[0]-1;
    while(x===_scorner || _blocked.includes(x)) { x--; if(!x || x<=0) break; }
    _locked.unshift();
    lockTile(_locked[0]);
}
function lock_spaces_all(n) {
    if(!n || n>_locked_bak.length) n = _locked_bak.length;
    _locked = [];
    for(let i=0; i<n; i++) {
        let loc = _locked_bak[i];
        _locked.push(loc);
        lockTile(loc);
    }
    canvas_db.locked = _locked;
}

function unlock_era(mode={build:1,alert:0}, {check_only=0}={}) {
    // console.log(`............................unlock_era(${mode})..............`, mode)
    let next_era_db = unlocking_db[current_era+1];
    if(!next_era_db) { console.log(`Nothing to unlock`); return; }
    console.log(next_era_db);
    if(!check_dependencies_era(next_era_db)) {
        let leftovers = check_dependencies_era(next_era_db, true);
        let collection = get_collection();
        let messages = [];
        // console.log(leftovers);
        for(let name in leftovers) {
            // console.log(`name=${name}, leftover=${leftovers[name]}`)
            if(leftovers[name] < 0) console.log(`Not enough ${name}. Needed ${next_era_db.cost[name]}, found ${collection[name]}.`);
            // else console.log(`... enough ${name}. Needed ${next_era_db.cost[name]||0}, found ${collection[name]}.`);
            if(leftovers[name] < 0) messages.push(`Not enough ${name}. Needed ${next_era_db.cost[name]}, found ${collection[name]}.`)
        }
        if(mode.alert) alert(`Unable to unlock!\n` + messages.join('\n'));
        return false;
    }
    if(check_only) return true;
    deduct_dependencies_era(next_era_db);
    enable_unlocked(next_era_db.gain);
    current_era++;
    document.getElementById('era').textContent = current_era + 1;
    // if(mode.build) {
    //     unpopulate_all();
    //     populate_era();
    // }
    // if(current_era>=unlocking_db.length-1) {
    //     tile.level++;
    // }
    // if(current_era >= unlocking_db.length) tile.pending = 1;
    for(let i=0; i<next_era_db.gain.spaces; i++) {
        unlock_space();
    }
    return true;
}
function populate_era() {
    let house=0, supplies=1, stone=2, lumber=3, iron=4, dye=5;
    // let production = current_era<2 ? stone : current_era<2 ? lumber : current_era<2 ? iron : dye;
    let production = stone;
    let collection = get_collection();
    if(collection.stone < 50) production = stone;
    else if(collection.lumber < 50 && current_era>=2) production = lumber;
    else if(collection.iron < 50 && current_era>=5) production = iron;
    else if(collection.dye < 50 && current_era>=8) production = dye;
    // addTile(index=0, level=0, variant=0, loc=i)
    // add_building(house, 0, 0, 0);
    // add_building(house, 0, 0, 1);
    // add_building(house, 0, 0, 6);
    if(have_resources1(1)) add_building(house, 1, 0, 0);  else if(have_resources1(0)) add_building(0, 0, 0, 0);
    if(have_resources1(1)) add_building(house, 1, 0, 1);  else if(have_resources1(0)) add_building(0, 0, 0, 1);
    if(have_resources1(1)) add_building(house, 1, 0, 6);  else if(have_resources1(0)) add_building(0, 0, 0, 6);
    if(have_resources1(1)) add_building(house, 1, 0, 7);  else if(have_resources1(0)) add_building(0, 0, 0, 7);
    if(have_resources1(1)) add_building(house, 1, 0, 12); else if(have_resources1(0)) add_building(0, 0, 0, 12);
    if(have_resources1(1)) add_building(house, 1, 0, 13); else if(have_resources1(0)) add_building(0, 0, 0, 13);
    if(have_resources1(1)) add_building(house, 1, 0, 18); else if(have_resources1(0)) add_building(0, 0, 0, 18);
    if(have_resources1(1)) add_building(house, 1, 0, 19); else if(have_resources1(0)) add_building(0, 0, 0, 19);
    if(have_resources1(1)) add_building(house, 1, 0, 24); else if(have_resources1(0)) add_building(0, 0, 0, 24);
    if(have_resources1(1)) add_building(house, 1, 0, 25); else if(have_resources1(0)) add_building(0, 0, 0, 25);
    if(have_resources1(1)) add_building(house, 1, 0, 30); else if(have_resources1(0)) add_building(0, 0, 0, 24);
    if(have_resources1(1)) add_building(house, 1, 0, 31); else if(have_resources1(0)) add_building(0, 0, 0, 25);
    // add_building(supplies, 0, 0, 2);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 2);  else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 2);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 8);  else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 8);
    if(have_resources2(production,1)) add_building(production, 1, 0, 14); else if(have_resources2(production,0)) add_building(production, 0, 0, 14);
    if(have_resources2(production,1)) add_building(production, 1, 0, 22); else if(have_resources2(production,0)) add_building(production, 0, 0, 22);
    if(have_resources2(production,1)) add_building(production, 1, 0, 23); else if(have_resources2(production,0)) add_building(production, 0, 0, 23);
    if(have_resources2(production,1)) add_building(production, 1, 0, 27); else if(have_resources2(production,0)) add_building(production, 0, 0, 27);
    if(have_resources2(production,1)) add_building(production, 1, 0, 28); else if(have_resources2(production,0)) add_building(production, 0, 0, 28);
    if(have_resources2(production,1)) add_building(production, 1, 0, 29); else if(have_resources2(production,0)) add_building(production, 0, 0, 29);
    if(have_resources2(production,1)) add_building(production, 1, 0, 33); else if(have_resources2(production,0)) add_building(production, 0, 0, 33);
    if(have_resources2(production,1)) add_building(production, 1, 0, 34); else if(have_resources2(production,0)) add_building(production, 0, 0, 34);
    if(have_resources2(production,1)) add_building(production, 1, 0, 35); else if(have_resources2(production,0)) add_building(production, 0, 0, 35);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 14); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 14);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 13); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 13);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 26); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 26);
    if(have_resources2(supplies,1)) add_building(supplies, 1, 0, 32); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 26);
    for(let i=0; i<36; i++) {
        if(tile_occupied(i)) continue;
        if(have_resources2(supplies,1)) add_building(supplies, 1, 0, i);  else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, i);
    }
}
function populate_era_old() {
    let house=0, supplies=1, stone=2, lumber=3, iron=4, dye=5;
    let production = current_era<2 ? stone : current_era<2 ? lumber : current_era<2 ? iron : dye;
    // addTile(index=0, level=0, variant=0, loc=i)
    add_building(house, 0, 2, 0);
    add_building(house, 0, 2, 1);
    add_building(house, 0, 2, 6);
    if(have_resources1(1)) add_building(house, 0, 2, 7);  else if(have_resources1(0)) add_building(0, 0, 2, 7);
    if(have_resources1(1)) add_building(house, 0, 2, 12); else if(have_resources1(0)) add_building(0, 0, 2, 12);
    if(have_resources1(1)) add_building(house, 0, 2, 13); else if(have_resources1(0)) add_building(0, 0, 2, 13);
    if(have_resources1(1)) add_building(house, 0, 2, 18); else if(have_resources1(0)) add_building(0, 0, 2, 18);
    if(have_resources1(1)) add_building(house, 0, 2, 19); else if(have_resources1(0)) add_building(0, 0, 2, 19);
    if(have_resources1(1)) add_building(house, 0, 2, 24); else if(have_resources1(0)) add_building(0, 0, 2, 24);
    if(have_resources1(1)) add_building(house, 0, 2, 25); else if(have_resources1(0)) add_building(0, 0, 2, 25);
    if(have_resources1(1)) add_building(house, 0, 2, 30); else if(have_resources1(0)) add_building(0, 0, 2, 24);
    if(have_resources1(1)) add_building(house, 0, 2, 31); else if(have_resources1(0)) add_building(0, 0, 2, 25);
    add_building(supplies, 0, 2, 2);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 2, 8);  else if(have_resources2(supplies,0)) add_building(supplies, 0, 2, 8);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 2, 14); else if(have_resources2(supplies,0)) add_building(supplies, 0, 2, 14);
    if(have_resources2(production,1)) add_building(production, 0, 2, 21); else if(have_resources2(production,0)) add_building(production, 0, 2, 21);
    if(have_resources2(production,1)) add_building(production, 0, 2, 22); else if(have_resources2(production,0)) add_building(production, 0, 2, 22);
    if(have_resources2(production,1)) add_building(production, 0, 2, 23); else if(have_resources2(production,0)) add_building(production, 0, 2, 23);
    if(have_resources2(production,1)) add_building(production, 0, 2, 27); else if(have_resources2(production,0)) add_building(production, 0, 2, 27);
    if(have_resources2(production,1)) add_building(production, 0, 2, 28); else if(have_resources2(production,0)) add_building(production, 0, 2, 28);
    if(have_resources2(production,1)) add_building(production, 0, 2, 29); else if(have_resources2(production,0)) add_building(production, 0, 2, 29);
    if(have_resources2(production,1)) add_building(production, 0, 2, 33); else if(have_resources2(production,0)) add_building(production, 0, 2, 33);
    if(have_resources2(production,1)) add_building(production, 0, 2, 34); else if(have_resources2(production,0)) add_building(production, 0, 2, 34);
    if(have_resources2(production,1)) add_building(production, 0, 2, 35); else if(have_resources2(production,0)) add_building(production, 0, 2, 35);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 2, 20); else if(have_resources2(supplies,0)) add_building(supplies, 0, 2, 20);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 2, 26); else if(have_resources2(supplies,0)) add_building(supplies, 0, 2, 26);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 2, 32); else if(have_resources2(supplies,0)) add_building(supplies, 0, 2, 26);
}
function unpopulate_all() {
    for(let index in _pieces) {
        if(!_pieces[index].entity) continue;
        deleteTile(index);
    }
}
function have_resources1(level=0) {
    if(!unlocked_db.coins[level]) return 0;
    // let needed = current_era ? needed_db['housing'][0] : needed_db['housing'][0];
    // let needed = current_era<3 ? people_db.values[ib][0] : people_db.values[ib][1];
    let needed = people_db.values[0][level];
    let roster = people_db.people.enrolled + people_db.people.temps;
    let available = roster - people_db.people.housed;
    console.log(`have_resources1(${level}) => if(available=${available} >= needed=${needed}) return 1`)
    if(available >= needed) return 1;
    return 0;
}
function have_resources2(ib=1, level=0) {
    let name = ib===2 ? 'stone' : ib===3 ? 'lumber' : ib===4 ? 'iron' : ib===5 ? 'dye' : 'supplies';
    let collection = get_collection();
    if(collection.supplies<5000 && name!=='supplies') return 0;
    if(ib===3) console.log(unlocked_db);
    if(!unlocked_db[name][level]) return 0;
    // let needed = current_era ? needed_db['supplies'][0] : needed_db['supplies'][0];
    // let needed = current_era<2 ? people_db.values[ib][0] : people_db.values[ib][1];
    let needed = people_db.values[ib][level];
    let available = people_db.people.housed - people_db.people.used;
    console.log(`have_resources2(${ib}) => if(available=${available} >= needed=${needed}) return 1`)
    if(available >= needed) return 1;
    return 0;
}
function add_building(index, level, variant, location) {
    console.log(`add_building(${index}, ${level}, ${variant}, ${location})...1`)
    if(tile_occupied(location)) return;
    if(_locked.includes(location)) return;
    if(_blocked.includes(location)) return;
    console.log(`add_building(${index}, ${level}, ${variant}, ${location})...2`)
    return addTile(index, level, variant, location, {ready:0});
}
function tile_occupied(loc) {
    if(typeof loc!=='number') return 0;
    if(loc >= _pieces.length) return 0;
    return _pieces[loc].entity ? 1 : 0;
}

function display_unlocked(gain) {
    if(gain.form!==undefined) $(document.getElementById('mini-form')).prop('hidden', false);
    if(gain.trading!==undefined) $(document.getElementById('mini-trading')).prop('hidden', false);
    if(gain.negotiation!==undefined) $(document.getElementById('mini-negotiation')).prop('hidden', false);
    if(gain.harness!==undefined) $(document.getElementById('mini-harness')).prop('hidden', false);
    if(gain.chatbot!==undefined) $(document.getElementById('mini-chatbot')).prop('hidden', false);
    if(gain.chalkboard!==undefined) $(document.getElementById('mini-chalkboard')).prop('hidden', false);
    if(gain.puzzle!==undefined) $(document.getElementById('mini-puzzle')).prop('hidden', false);
    if(gain.falling!==undefined) $(document.getElementById('mini-falling')).prop('hidden', false);
    if(gain.shooting!==undefined) $(document.getElementById('mini-shooting')).prop('hidden', false);
    if(gain.paintball!==undefined) $(document.getElementById('mini-paintball')).prop('hidden', false);
    if(gain.tower!==undefined) $(document.getElementById('mini-tower')).prop('hidden', false);
    if(gain.quiz!==undefined) $(document.getElementById('mini-quiz')).prop('hidden', false);
    if(gain.math!==undefined) $(document.getElementById('mini-math')).prop('hidden', false);
    // unlock any new building
    if(gain.coins!==undefined) $(document.getElementById('lib-coins-'+gain.coins)).prop('hidden', false);
    if(gain.supplies!==undefined) $(document.getElementById('lib-supplies-'+gain.supplies)).prop('hidden', false);
    if(gain.happiness!==undefined) $(document.getElementById('lib-happiness-'+gain.happiness)).prop('hidden', false);
    if(gain.stone!==undefined) $(document.getElementById('lib-stone-'+gain.stone)).prop('hidden', false);
    if(gain.lumber!==undefined) $(document.getElementById('lib-lumber-'+gain.lumber)).prop('hidden', false);
    if(gain.iron!==undefined) $(document.getElementById('lib-iron-'+gain.iron)).prop('hidden', false);
    if(gain.dye!==undefined) $(document.getElementById('lib-dye-'+gain.dye)).prop('hidden', false);
    // add temps
    let roster = people_db.people.enrolled + people_db.people.temps;
    document.getElementById('score-people-roster').textContent = roster;
}
function display_unlocked2(gain) {
    if(gain.form!==undefined) $(document.getElementById('mini-form')).removeClass('text-muted');
    if(gain.trading!==undefined) $(document.getElementById('mini-trading')).removeClass('text-muted');
    if(gain.negotiation!==undefined) $(document.getElementById('mini-negotiation')).removeClass('text-muted');
    if(gain.harness!==undefined) $(document.getElementById('mini-harness')).removeClass('text-muted');
    if(gain.chatbot!==undefined) $(document.getElementById('mini-chatbot')).removeClass('text-muted');
    if(gain.chalkboard!==undefined) $(document.getElementById('mini-chalkboard')).removeClass('text-muted');
    if(gain.puzzle!==undefined) $(document.getElementById('mini-puzzle')).removeClass('text-muted');
    if(gain.falling!==undefined) $(document.getElementById('mini-falling')).removeClass('text-muted');
    if(gain.shooting!==undefined) $(document.getElementById('mini-shooting')).removeClass('text-muted');
    if(gain.paintball!==undefined) $(document.getElementById('mini-paintball')).removeClass('text-muted');
    if(gain.tower!==undefined) $(document.getElementById('mini-tower')).removeClass('text-muted');
    if(gain.quiz!==undefined) $(document.getElementById('mini-quiz')).removeClass('text-muted');
    if(gain.math!==undefined) $(document.getElementById('mini-math')).removeClass('text-muted');
    // unlock any new building
    if(gain.coins!==undefined) $(document.getElementById('lib-coins-'+gain.coins)).prop('disabled', false);
    if(gain.supplies!==undefined) $(document.getElementById('lib-supplies-'+gain.supplies)).prop('disabled', false);
    if(gain.happiness!==undefined) $(document.getElementById('lib-happiness-'+gain.happiness)).prop('disabled', false);
    if(gain.stone!==undefined) $(document.getElementById('lib-stone-'+gain.stone)).prop('disabled', false);
    if(gain.lumber!==undefined) $(document.getElementById('lib-lumber-'+gain.lumber)).prop('disabled', false);
    if(gain.iron!==undefined) $(document.getElementById('lib-iron-'+gain.iron)).prop('disabled', false);
    if(gain.dye!==undefined) $(document.getElementById('lib-dye-'+gain.dye)).prop('disabled', false);
}
function enable_unlocked(gain) {
    console.log(`enable_unlocked(gain)`, gain)
    if(gain.form!==undefined) unlocked_db.form[gain.form] = 1;
    if(gain.trading!==undefined) unlocked_db.trading[gain.trading] = 1;
    if(gain.negotiation!==undefined) unlocked_db.negotiation[gain.negotiation] = 1;
    if(gain.harness!==undefined) unlocked_db.harness[gain.harness] = 1;
    if(gain.chatbot!==undefined) unlocked_db.chatbot[gain.chatbot] = 1;
    if(gain.chalkboard!==undefined) unlocked_db.chalkboard[gain.chalkboard] = 1;
    if(gain.puzzle!==undefined) unlocked_db.puzzle[gain.puzzle] = 1;
    if(gain.falling!==undefined) unlocked_db.falling[gain.falling] = 1;
    if(gain.shooting!==undefined) unlocked_db.shooting[gain.shooting] = 1;
    if(gain.paintball!==undefined) unlocked_db.puzzle[gain.paintball] = 1;
    if(gain.tower!==undefined) unlocked_db.puzzle[gain.tower] = 1;
    if(gain.quiz!==undefined) unlocked_db.puzzle[gain.quiz] = 1;
    if(gain.math!==undefined) unlocked_db.math[gain.math] = 1;

    if(gain.coins!==undefined) unlocked_db.coins[gain.coins] = 1;
    if(gain.supplies!==undefined) unlocked_db.supplies[gain.supplies] = 1;
    if(gain.happiness!==undefined) unlocked_db.happiness[gain.happiness] = 1;
    if(gain.stone!==undefined) unlocked_db.stone[gain.stone] = 1;
    if(gain.lumber!==undefined) unlocked_db.lumber[gain.lumber] = 1;
    if(gain.iron!==undefined) unlocked_db.iron[gain.iron] = 1;
    if(gain.dye!==undefined) unlocked_db.dye[gain.dye] = 1;
    if(gain.temps!==undefined) people_db.people.temps += gain.temps;
    display_unlocked(gain);
    display_unlocked2(gain);
    console.log('unlocked_db', unlocked_db)
}

function set_people({enrolled=0, housed=0, used=0, temps=0, roster=0}={}) {
    if(!roster) roster = enrolled + temps;
    // set_collected('people-enrolled', enrolled);
    set_collected('people-housed', housed);
    set_collected('people-used', used);
    // set_collected('people-temps', temps);
    set_collected('people-roster', roster);
    return {enrolled, housed, used, temps};
}
function set_collection({coins=0, supplies=0, happiness=0, stone=0, lumber=0, iron=0, dye=0}={}) {
    set_collected('coins', coins);
    set_collected('supplies', supplies);
    set_collected('stone', stone);
    set_collected('lumber', lumber);
    set_collected('iron', iron);
    set_collected('dye', dye);
    set_collected('happiness', happiness);
    return {coins, supplies, happiness, stone, lumber, iron, dye};
}
function set_collected(name, value=0) {
    let id = `score-${name}`;
    // console.log(`get_collected(${name})`);
    document.getElementById(id).textContent = value;
}
function refresh_periodic_data() {
    // console.log(`refresh_periodic_data()`);
    refresh_daily_data();
    // save_data();
}
function refresh_daily_data() {
    let speedup = _game_speedx;
    // console.log(`refresh_daily_data()`, (new Date()).toLocaleString());
    // let [now, since_midnight, since_noon, since_hour] = time_since();
    // let since_hour = time_since_hour();
    // let time = (new Date).getTime();
    // let date = new Date();
    // let hour = date.getHours();
    // let minute = date.getMinutes();

    if(true_every_minute(speedup)) {
        $('#runtime').text(stamp(runtime.currlevel, "d:h"))
    //     console.log(`------ done_routinely.m1: `, done_routinely.m1);
    //     console.log(`------ minutes-since last 1min-routine: `, time_since(done_routinely.m1, 'minutes', speedup));
    //     console.log(`------ minutes-since last 5min-routine: `, time_since(done_routinely.m5, 'minutes', speedup));
    //     console.log(`------ minutes-since last 10min-routine: `, time_since(done_routinely.m10, 'minutes', speedup));
    //     console.log(`------ minutes-since last 15min-routine: `, time_since(done_routinely.m15, 'minutes', speedup));
    //     console.log(`------ minutes-since last 30min-routine: `, time_since(done_routinely.m30, 'minutes', speedup));
    //     console.log(`------ minutes-since last 45min-routine: `, time_since(done_routinely.m45, 'minutes', speedup));
    //     console.log(`------ minutes-since last 1hour-routine: `, time_since(done_routinely.h1, 'minutes', speedup));
    //     console.log(`------ minutes-since last 3hour-routine: `, time_since(done_routinely.h3, 'minutes', speedup));
    //     console.log(`------ minutes-since last 8hour-routine: `, time_since(done_routinely.h8, 'minutes', speedup));
    //     console.log(`------ minutes-since last 12hour-routine: `, time_since(done_routinely.h12, 'minutes', speedup));
    //     console.log(`------ minutes-since last 1day-routine: `, time_since(done_routinely.d1, 'minutes', speedup));
    //     console.log(`------ hours-since last 1week-routine: `, time_since(done_routinely.w1, 'hours', speedup));
    //     console.log(`------ hours-since last 1month-routine: `, time_since(done_routinely.o1, 'hours', speedup));
    //     console.log(`------ hours-since last 1year-routine: `, time_since(done_routinely.y1, 'hours', speedup));
    }
    if(true_every_5minutes(speedup)) {
        console.log(`refresh_daily_data()`, (new Date()).toLocaleString());
        console.log(`  Minutes since last hourly-routine: `, round(time_since(done_routinely.h1, 'minutes', speedup)));
        console.log(`  Minutes since last daily-routine: `, round(time_since(done_routinely.d1, 'minutes', speedup)));
        console.log(`  Hours since last weekly-routine: `, round(time_since(done_routinely.w1, 'hours', speedup)));
    }
    if(true_every_hour(speedup)) {
        console.log(`  Running hourly routine. Minutes since last run: `, round(time_since(done_routinely.h1, 'minutes', speedup)));
        for(let routine of hourly_routines) {
            if(typeof routine==="function") routine();
        }
    }
    if(true_every_day(speedup)) {
        console.log(`  Running daily routine. Minutes since last run: `, round(time_since(done_routinely.d1, 'minutes', speedup)));
        for(let routine of daily_routines) {
            if(typeof routine==="function") routine();
        }
    }
    if(true_every_week(speedup)) {
        console.log(` Running weekly routine. Hours since last run: `, round(time_since(done_routinely.w1, 'hours', speedup)));
        for(let routine of weekly_routines) {
            if(typeof routine==="function") routine();
        }
    }
    // true_every_minute(speedup);
    true_every_5minutes(speedup);
    true_every_10minutes(speedup);
    true_every_15minutes(speedup);
    true_every_30minutes(speedup);
    true_every_45minutes(speedup);
    // true_every_hour(speedup);
    true_every_3hours(speedup);
    true_every_8hours(speedup);
    true_every_12hours(speedup);
    // true_every_day(speedup);
    // true_every_week(speedup);
    true_every_month(speedup);
    true_every_year(speedup);
    // status update
    console.log(`runtime.overall = `, stamp(runtime.overall));
    console.log(`runtime.currlevel = `, stamp(runtime.currlevel));
}
function stamp(time=0, format="") {
    let ms = {day: 24*60*60*1000, hour: 60*60*1000, minute: 60*1000, second: 1000 };
    let days = Math.floor(time/ms.day); time = time - days*ms.day;
    let hours = Math.floor(time/ms.hour);   time = time - hours*ms.hour;
    let mins  = Math.floor(time/ms.minute);  time = time - mins*ms.minute;
    let secs  = Math.floor(time/ms.second);
    // console.log('milliseconds => ', ms);
    if(format==="d:h") return `${days} days, ${hours} hours`;
    if(!days && !hours) return `${mins} mins, ${secs} secs`
    if(!days) return `${hours} hours, ${mins} mins, ${secs} secs`
    return `${days} days, ${hours} hours, ${mins} mins, ${secs} secs`
}
function time_until(date, units='seconds', speedup=1) {
    if(!date || !speedup) return;
    let now = new Date();
    let diff = date.getTime() - now.getTime();
    if(units==='days') return diff/(24*60*60*1000)*speedup;
    if(units==='hours') return diff/(60*60*1000)*speedup;
    if(units==='minutes') return diff/(60*1000)*speedup;
    if(units==='seconds') return diff/1000*speedup;
    return diff*speedup;
}

function time_since(date, units='seconds', speedup=1) {
    if(!date || !speedup) return;
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    if(units==='days') return diff/(24*60*60*1000)*speedup;
    if(units==='hours') return diff/(60*60*1000)*speedup;
    if(units==='minutes') return diff/(60*1000)*speedup;
    if(units==='seconds') return diff/1000*speedup;
    return diff*speedup;
}

function true_every_minute(speedup=1) {
    return true_every_n_ms('m1', 1*60*1000/speedup);
}
function true_every_5minutes(speedup=1) {
    return true_every_n_ms('m5', 5*60*1000/speedup);
}
function true_every_10minutes(speedup=1) {
    return true_every_n_ms('m10', 10*60*1000/speedup);
}
function true_every_15minutes(speedup=1) {
    return true_every_n_ms('m15', 15*60*1000/speedup);
}
function true_every_30minutes(speedup=1) {
    return true_every_n_ms('m30', 30*60*1000/speedup);
}
function true_every_45minutes(speedup=1) {
    return true_every_n_ms('m45', 45*60*1000/speedup);
}
function true_every_hour(speedup=1) {
    return true_every_n_ms('h1', 60*60*1000/speedup);
}
function true_every_3hours(speedup=1) {
    return true_every_n_ms('h3', 3*60*60*1000/speedup);
}
function true_every_8hours(speedup=1) {
    return true_every_n_ms('h8', 8*60*60*1000/speedup);
}
function true_every_12hours(speedup=1) {
    return true_every_n_ms('h12', 12*60*60*1000/speedup);
}
function true_every_day(speedup=1) {
    return true_every_n_ms('d1', 24*60*60*1000/speedup);
}
function true_every_week(speedup=1) {
    return true_every_n_ms('w1', 7*24*60*60*1000/speedup);
}
function true_every_month(speedup=1) {
    return true_every_n_ms('o1', 30*7*24*60*60*1000/speedup);
}
function true_every_year(speedup=1) {
    return true_every_n_ms('y1', 365*7*24*60*60*1000/speedup);
}
function true_every_n_ms(tkey, wait=0) {
    let thn = done_routinely[tkey] || (new Date(1974,1,1));
    let now = new Date();
    let diff = now.getTime() - thn.getTime();
    // console.log(`diff=${diff}, wait=${wait}, then=${thn}`)
    if(diff > wait) {
        done_routinely[tkey] = now;
        return 1;
    }
    return 0;
}

// function true_every_hour(speedup) {
//     true_every_n_ms(60*60*1000, thn, speedup)
// }
// function true_every_minute(n, thn, speedup=1) {
//     let wait = 60*1000/speedup;
//     let thn = done_routinely.m1;
//     let now = new Date();
//     let diff = now.getTime() - thn.getTime();
//     if(diff > wait) {
//         done_routinely.m1 = now;
//         return 1;
//     }
//     return 0;
// }
// function true_every_hour(n, thn, speedup=1) {
//     let wait = 60*60*1000/speedup;
//     let thn = done_routinely.h1;
//     let now = new Date();
//     let diff = now.getTime() - thn.getTime();
//     if(diff > wait) {
//         done_routinely.h1 = now;
//         return 1;
//     }
//     return 0;
// }
// function true_every_3hours(n, thn, speedup=1) {
//     let wait = 60*60*1000/speedup;
//     let thn = done_routinely.h3;
//     let now = new Date();
//     let diff = now.getTime() - thn.getTime();
//     if(diff > wait) {
//         done_routinely.h3 = now;
//         return 1;
//     }
//     return 0;
// }


// function refresh_daily_data() {
//     console.log(`refresh_daily_data()`, (new Date()).toLocaleString());
//     let [now, since_midnight, since_noon, since_hour] = time_since();
//     // let since_hour = time_since_hour();
//     let time = (new Date).getTime();
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();

//     if(true_every_hour(3)) {
//         // done_hour_hourly = minute; //hour;
//         console.log(`------ done_hourly.hour: `, done_hourly.hour);
//     }

//     // let done_daily = 0;
//     // if(time > midnight && time < noon) {
//     //     if(done_daily) { // do nightly routines
//     //         refresh_negotiator(time)
//     //     }
//     //     done_daily = 0;
//     // }
//     // else if(time > noon && time < midnight) {
//     //     if(!done_daily) { // do noontime routines
//     //     }
//     //     done_daily = 1;
//     // }
// }
// function true_every_hour(n) {
//     let date = new Date();
//     // let hour = date.getHours();
//     // let minute = date.getMinutes();
//     let hour = date.getMinutes();
//     // let is_true = done_hour_hourly!==hour;
//     let is_true = hour >= (done_hourly.hour + n) || is_later_day(done_hourly.date, done_hourly.speedup);
//     if(is_true) done_hourly.hour = hour;
//     return is_true;
// }
// function true_every_n_ms(n, speedup=1) {
//     let wait = 60*60*1000/speedup;
//     let date = new Date();
//     let diff = now.getTime() - thn.getTime();
//     if(diff > wait) {
//         done_hourly.htime = date;
//         return 1;
//     }
//     return false;
// }
// function is_later_day(thn, speedup=1) {
//     let now = new Date();
//     let since = now.getTime() - thn.getTime();
//     return (now - since) > (24*60*60*100/speedup);
// }
// function time_since_hour() {
//     let now = new Date();
//     let hour = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         now.getHours()
//         ,0,0);
//     return diff(now, hour);
//      // difference in milliseconds
//     function diff(now, thn) {
//         let since = now.getTime() - thn.getTime();
//     }
// }
// function time_since() {
//     let now = new Date();
//     let midnight = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         0,0,0);
//     let noontime = midnight + 12;
//     let hourtime = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         now.getHours()
//         ,0,0);
//     let since_midnight = diff(now, midnight);
//     let since_noon = diff(now, midnight, +12*60*60*1000);
//     let since_hour = diff(now, hourtime);
//     return [now, since_midnight, since_noon, since_hour];
//      // difference in milliseconds
//     function diff(now, thn, offset=0) {
//         let since = now.getTime() - (thn.getTime() + offset);
//     }
// }
function refresh_negotiator(time) {
    console.log(`refresh_negotiator(${time})`);
    console.log(`refresh_negotiator(${new Date(time).toLocaleString()})`);
    // $(`#negotiator-0`).attr('hidden', false);
    // $(`#negotiator-1`).attr('hidden', false);
    // $(`#negotiator-2`).attr('hidden', false);
    // $(`#negotiator-0`).css('pointerEvents', 'auto');
    // $(`#negotiator-1`).css('pointerEvents', 'auto');
    // $(`#negotiator-2`).css('pointerEvents', 'auto');
    // $(`#negotiator-0>i`).css('color', '#b8860b');
    // $(`#negotiator-1>i`).css('color', '#b8860b');
    // $(`#negotiator-2>i`).css('color', '#b8860b');
    for(let i=0; i<3; i++) {
        // $(`#negotiator-${i}`).attr('hidden', false);
        $(`#negotiator-${i}`).css('pointerEvents', 'auto');
        $(`#negotiator-${i}>i`).css('color', '#b8860b');
    }
}

function load_user() {
    // window.localStorage.setItem('user', JSON.stringify({id: 'tester'}));
    let user_data = window.localStorage.getItem('user');
    console.log(user_data);
    user_data = JSON.parse(user_data);
    console.log(user_data);
    user.name = user_data.name;
    user.email = user_data.email;
    user.id = user_data.id;
    console.log(user);
    return user;
}

function load_updated_data() {
    // console.log(`load_updated_data()`);
    let population = retrieve_scorecard(`population/total`) || 0;
    let enrolled = retrieve_scorecard(`enrolled/total`) || 0;
    people_db.people.population = population;
    if(enrolled > people_db.people.enrolled)
        people_db.people.enrolled = enrolled;
    // console.log(people_db);
}

function load_saved_data(i=1, j=1) {
    load_user();
    let db = window.localStorage.getItem(user.id);
    // console.log(db);
    if(db) db = JSON.parse(db);
    console.log(db);
    let active = retrieve_scorecard(`active`);
    if(i===undefined) i = active.i;
    if(j===undefined) j = active.j;
    [ tile.i, tile.j ] = [ i, j ]; 
    // Object.assign(tile, {i, j});
    // let game_data = {scorecard, people_db, canvas_db, build_db};
    let game_data_top = retrieve_scorecard(`build/space-${i}-${j}`);
    if(!game_data_top) return;
    else tile.level = game_data_top.level || 0;
    let game_data = retrieve_scorecard(`build/space-${i}-${j}/${tile.level}`);
    if(!game_data && !game_data_top.scorecard) return;
    if(!game_data) game_data = game_data_top; // older versions
    load_scorecard_saved_data(game_data.scorecard);
    load_people_saved_data(game_data.people);
    load_canvas_saved_data(game_data.canvas_db);
    load_build_saved_data(game_data.build_db);
    load_minigames_saved_data(game_data.minigames);
    load_routines_schedule(game_data.done_routinely);
    load_tile_levels(game_data);
    load_updated_data();
    version_handling();
    runtime_handling();

    // encapsulation
    function load_scorecard_saved_data(_scorecard) {
        Object.assign(scorecard, _scorecard);
        set_collection(scorecard);
    }
    function load_people_saved_data(ipeople) {
        if(!ipeople) ipeople = people_db.people;
        people_db.people = _people = ipeople;
        if(people_db.people.enrolled < 50)
            people_db.people.enrolled = 50;
        set_people(_people);
    }
    function load_canvas_saved_data(_canvas_db) {
        if(!_canvas_db) return;
        update_locked_spaces(_canvas_db.locked);
        canvas_db.locked  = _locked = _canvas_db.locked;
        canvas_db.blocked = _blocked = _canvas_db.blocked;
        canvas_db.pieces  = _pieces = _canvas_db.pieces;
        for(let i=0; i<_pieces.length; i++) {
            loadTile(_pieces[i], i, {load:1});
        }
    }
    function load_build_saved_data(_build_db) {
        if(!_build_db) return;
        build_db.current_era  = current_era = _build_db.current_era;
        build_db.unlocked_db  = Object.assign(unlocked_db, _build_db.unlocked_db);
        // build_db.unlocking_db  = Object.assign(unlocking_db, _build_db.unlocking_db);
        let techtree_length = Math.min(unlocking_db_full.length, 6 + 2*tile.level);
        build_db.unlocking_db  = Object.assign(unlocking_db, unlocking_db_full.slice(0, techtree_length));
        document.getElementById('era').textContent = current_era + 1;
        for(let name in unlocked_db) {
            for(let i in unlocked_db[name]) {
                if(unlocked_db[name][i]) $(`#lib-${name}-${i}`).prop('disabled', false);
                if(unlocked_db[name][i]) $(`#mini-${name}`).prop('hidden', false);
            }
        }
    }
    function load_tile_levels(data) {
        if(!data) return;
        tile.version = data.version || 0;
        // Object.assign(tile, _levels);
        // tile.level = data.level;
        tile.sides = data.sides;
        // tile.pending = (data && data.main) ? data.main.pending : 0;
        document.getElementById('level').textContent = tile.level+1;
        // if(tile.pending) $('#level-up').prop('hidden', false);
    }
    function load_routines_schedule(data) {
        if(!data) return;
        Object.keys(done_routinely).map(key =>
            done_routinely[key] = new Date( done_routinely[key]));
        // Object.assign(done_routinely, data);
    }
    function load_minigames_saved_data(data) {
        if(!data) return;
        Object.assign(minigames, data);
    }
    function update_locked_spaces(new_locked) {
        for(let loc of _locked) {
            // console.log(loc)
            if(new_locked.includes(loc)) continue;
            unlock_space(loc);
        }
    }
    function runtime_handling() {
        runtime.overall = game_data_top.runtime||0;
        runtime.currlevel = game_data.runtime||0;
    }
}

function save_data(i, j) {
    if(!i && i!==0) i = tile.i;
    if(!j && j!==0) j = tile.j;
    console.log(`save_data(${i}, ${j})`);
    save_scorecard_data();
    save_canvas_data();
    save_build_data();
    let people = people_db.people;
    let level = tile.level, sides = tile.sides;
    let version = VERSION, done = 0;
    // let main = { pending: tile.pending };
    // store current level data
    let game_data = {scorecard, people, canvas_db, build_db, done_routinely, level, done, version, sides, minigames};
    game_data.runtime = runtime.currlevel;
    store_scorecard(`build/space-${i}-${j}/${tile.level}`, game_data);
    // store top level data
    game_data = retrieve_scorecard(`build/space-${i}-${j}`);
    if(!game_data) game_data = {};
    game_data = { level: tile.level, sides: game_data.sides, runtime: runtime.overall };
    store_scorecard(`build/space-${i}-${j}`, game_data);

    // encapsulation
    function save_scorecard_data() {
        Object.assign(scorecard, get_collection());
    }
    function save_canvas_data() {
        canvas_db.locked  = _locked;
        canvas_db.blocked = _blocked;
        canvas_db.pieces  = _pieces;
    }
    function save_build_data() {
        build_db.current_era  = current_era;
        build_db.unlocked_db  = unlocked_db;
        build_db.unlocking_db  = unlocking_db;
    }
}

function store_scorecard(key='galleons', value=0) {
    let pathkey = `${info.project}`;
    let db = window.localStorage.getItem(user.id);
    // console.log(db);
    if(!db) db = {}; else db = JSON.parse(db);
    if(!db[pathkey]) db[pathkey] = {};
    if(!db[pathkey].scorecard) db[pathkey].scorecard = {};
    db[pathkey].scorecard[key] = value;
    // console.log(db);
    window.localStorage.setItem(user.id, JSON.stringify(db));
}
function retrieve_scorecard(key) {
    let pathkey = `${info.project}`;
    let db = window.localStorage.getItem(user.id);
    // console.log(db);
    if(!db) db = {}; else db = JSON.parse(db);
    if(!db[pathkey]) return;
    if(!db[pathkey].scorecard) return;
    if(key===undefined) return db[pathkey].scorecard;
    return db[pathkey].scorecard[key];
}

function console_log(obj1, obj2) {
    // console.log(obj1, obj2);
    document.getElementById("console1").innerHTML = objToString(obj1);
    document.getElementById("console2").innerHTML = objToString(obj2);
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    document.getElementById("console3").innerHTML = `screen-width: ${screen.width}, screen-height: ${screen.height}, zoom: ${browserZoomLevel}%`;
}

function objToString(obj) {
    return Object.keys(obj).map(key => key+' : '+obj[key]).join('\n');
}


function delay(seconds, speedup=1) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000/speedup));
}
function round(num, digits=0) {
    let factor = Math.pow(10, digits);
    return Math.round(num*factor)/factor;
}
function random(min, max, round=0) {
    let number = Math.random() * (max - min) + min;
    let rounder = Math.pow(10, round);
    return round===0 ? Math.round(number) : Math.round(number*rounder)/rounder;
}
