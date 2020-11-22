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

const info = { project: 'Punjabi' };
const user = { id: 'na', name: '', email: '' };
const tile = { i: 1, j: 1, level: 0, sides: [0, 0, 0] };

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
const unlocked_db = {
    coins: [1, 0, 0],
    supplies: [1, 0, 0],
    happiness: [0, 0, 0],
    harness: [0, 0, 0],
    stone:  [1, 0], lumber: [0, 0], iron:  [0, 0], dye:  [0, 0],
    form: [0], negotiation: [0], harness: [0], chatbot: [0],
    chalkboard: [0], puzzle: [0], falling: [0], shooting: [0],
    paintball: [0], tower: [0], quiz: [0], math: [0],
};

const unlocking_db_bak = [
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

const unlocking_db = [
    // stone era
    { cost: {stone:  0, lumber: 0 },       gain: { coins: 0,    temps: 5 } },
    { cost: {stone: 10, lumber: 0 },       gain: { coins: 1,    temps: 10 } },
    { cost: {stone: 20, lumber: 0 },       gain: { lumber: 0,   temps: 5 } },
    // lumber era
    { cost: {stone:  0, lumber: 20 },      gain: { supplies: 1,     temps: 10} },
    { cost: {stone: 30, lumber: 20 },      gain: { trading: 0,      temps: 5 } },
    { cost: {stone: 30, lumber: 30 },      gain: { none: 0,         temps: 5 } },
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
};

function timenow() {
    return (new Date).getTime();
}
function deleteAllProgress() {
    store_scorecard(`build/space-${tile.i}-${tile.j}`, '');
}
function deleteLevelProgress() {
    let game_data = retrieve_scorecard(`build/space-${tile.i}-${tile.j}`);
    delete game_data.build_db; delete game_data.canvas_db;
    Object.assign(game_data.people, { housed: 0, used: 0, temps: 0 });
    game_data.people.max += 50;
    game_data.scorecard.coins += 2000;
    game_data.scorecard.supplies += 6000;
    store_scorecard(`build/space-${tile.i}-${tile.j}`, game_data);
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
        alert('Not enough resources!\n'+list.join('\n')); 
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
    console.log(`ready(${piece.entity}, ${location})..0`)
    if(!piece || !piece.entity) return;
    console.log(`ready(${piece.entity})..1`)
    if(piece.entity.collected) return 0;
    console.log(`ready(${piece.entity})..2`)
    let current_time = timenow();
    let duration = current_time - piece.entity.start_time;
    let isel = piece.entity.isel || 0;
    console.log(`location = ${location})`)
    console.log(`duration(${duration})..2`)
    console.log(`current_time(${current_time})..2`)
    console.log(`piece.entity.start_time(${piece.entity.start_time})..2`)
    console.log(`piece.entity.duration[isel]=${piece.entity.duration[isel]})..2`)
    console.log(`ready(${piece.entity})..3`)
    let divisor = 1000/_game_speedx;
    let remaining = -(duration/divisor - piece.entity.duration[isel]*60)/_game_speedx;
    console.log(`time remaining = ${remaining} seconds ...2i`)
    if(duration/divisor > piece.entity.duration[isel]*60) {
        return true;
    }
    // if(duration/1000 > piece.entity.duration[isel]*60) {
    //     return true;
    // }
    console.log(`ready(${piece.entity})..4`)
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
            unlock_era(mode); // check and update
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
            if(instantiate) {
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
function unlock_era(mode={build:1,alert:0}) {
    // console.log(`............................unlock_era(${mode})..............`)
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
        alert(`Unable to unlock!\n` + messages.join('\n'));
        return;
    }
    deduct_dependencies_era(next_era_db);
    enable_unlocked(next_era_db.gain);
    current_era++;
    document.getElementById('era').textContent = current_era;
    // if(mode.build) {
    //     unpopulate_all();
    //     populate_era();
    // }
    // if(current_era>=unlocking_db.length-1) {
    //     tile.level++;
    // }
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
    add_building(house, 0, 0, 0);
    add_building(house, 0, 0, 1);
    add_building(house, 0, 0, 6);
    if(have_resources1(1)) add_building(house, 0, 0, 7);  else if(have_resources1(0)) add_building(0, 0, 0, 7);
    if(have_resources1(1)) add_building(house, 0, 0, 12); else if(have_resources1(0)) add_building(0, 0, 0, 12);
    if(have_resources1(1)) add_building(house, 0, 0, 13); else if(have_resources1(0)) add_building(0, 0, 0, 13);
    if(have_resources1(1)) add_building(house, 0, 0, 18); else if(have_resources1(0)) add_building(0, 0, 0, 18);
    if(have_resources1(1)) add_building(house, 0, 0, 19); else if(have_resources1(0)) add_building(0, 0, 0, 19);
    if(have_resources1(1)) add_building(house, 0, 0, 24); else if(have_resources1(0)) add_building(0, 0, 0, 24);
    if(have_resources1(1)) add_building(house, 0, 0, 25); else if(have_resources1(0)) add_building(0, 0, 0, 25);
    if(have_resources1(1)) add_building(house, 0, 0, 30); else if(have_resources1(0)) add_building(0, 0, 0, 24);
    if(have_resources1(1)) add_building(house, 0, 0, 31); else if(have_resources1(0)) add_building(0, 0, 0, 25);
    add_building(supplies, 0, 0, 2);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 0, 8);  else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 8);
    if(have_resources2(production,1)) add_building(production, 0, 0, 14); else if(have_resources2(production,0)) add_building(production, 0, 0, 14);
    if(have_resources2(production,1)) add_building(production, 0, 0, 22); else if(have_resources2(production,0)) add_building(production, 0, 0, 22);
    if(have_resources2(production,1)) add_building(production, 0, 0, 23); else if(have_resources2(production,0)) add_building(production, 0, 0, 23);
    if(have_resources2(production,1)) add_building(production, 0, 0, 27); else if(have_resources2(production,0)) add_building(production, 0, 0, 27);
    if(have_resources2(production,1)) add_building(production, 0, 0, 28); else if(have_resources2(production,0)) add_building(production, 0, 0, 28);
    if(have_resources2(production,1)) add_building(production, 0, 0, 29); else if(have_resources2(production,0)) add_building(production, 0, 0, 29);
    if(have_resources2(production,1)) add_building(production, 0, 0, 33); else if(have_resources2(production,0)) add_building(production, 0, 0, 33);
    if(have_resources2(production,1)) add_building(production, 0, 0, 34); else if(have_resources2(production,0)) add_building(production, 0, 0, 34);
    if(have_resources2(production,1)) add_building(production, 0, 0, 35); else if(have_resources2(production,0)) add_building(production, 0, 0, 35);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 0, 14); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 14);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 0, 13); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 13);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 0, 26); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 26);
    if(have_resources2(supplies,1)) add_building(supplies, 0, 0, 32); else if(have_resources2(supplies,0)) add_building(supplies, 0, 0, 26);
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
    return addTile(index, level, variant, location, {ready:0});
}

function display_unlocked(gain) {
    if(gain.form!==undefined) $(document.getElementById('mini-form')).prop('hidden', false);
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
    if(gain.form!==undefined) unlocked_db.form[gain.form] = 1;
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
    let game_data = retrieve_scorecard(`build/space-${i}-${j}`);
    if(!game_data) return;
    load_scorecard_saved_data(game_data.scorecard);
    load_people_saved_data(game_data.people);
    load_canvas_saved_data(game_data.canvas_db);
    load_build_saved_data(game_data.build_db);
    load_tile_levels(game_data);
    load_updated_data();
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
        build_db.unlocking_db  = Object.assign(unlocking_db, _build_db.unlocking_db);
        document.getElementById('era').textContent = current_era;
        for(let name in unlocked_db) {
            for(let i in unlocked_db[name]) {
                if(unlocked_db[name][i]) $(`#lib-${name}-${i}`).prop('disabled', false);
            }
        }
    }
    function load_tile_levels(data) {
        if(!data) return;
        // Object.assign(tile, _levels);
        tile.level = data.level;
        tile.sides = data.sides;
        document.getElementById('level').textContent = tile.level;
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
    let game_data = {scorecard, people, canvas_db, build_db, level, sides};
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
