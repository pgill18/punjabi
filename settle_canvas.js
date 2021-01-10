var PUZZLE_DIFFICULTY = 4;
var PUZZLE_HOVER_TINT = '#58a7d3';

var _stage;
var _canvas;

var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;
var _currentCollectPiece;
var _configuringPiece;

var _mouse;

// var _list = [
//     'blueprint-small.jpg',
//     'blueprint-small2.jpg',
//     'blueprint-large.jpg',
//     'empty-square.jpg',
// ];
var _list = [
    [
        // ['house-top-3.jpg', 'house-top-3.jpg', 'house-top-3.jpg'],
        ['house-top-1.png', 'house-top-1-ready.png', 'house-top-1-running.png'],
        ['house-top-2.jpg', 'house-top-2-ready.jpg', 'house-top-2-running.jpg'],
    ], [
        ['market-icon-1.jpg', 'market-icon-1-ready.jpg', 'market-icon-1-running.jpg'],
        ['market-icon-2.png', 'market-icon-2-ready.png', 'market-icon-2-running.png'],
    ], [
        ['industrial-building-icon-1.png', 'industrial-building-icon-1-ready.png', 'industrial-building-icon-1-running.png'],
    ], [
        ['industrial-building-icon-2.png', 'industrial-building-icon-2-ready.png', 'industrial-building-icon-2-running.png'],
    ], [
        ['industrial-building-icon-3.png', 'industrial-building-icon-3-ready.png', 'industrial-building-icon-3-running.png'],
    ], [
        ['industrial-building-icon-4.png', 'industrial-building-icon-4-ready.jpg', 'industrial-building-icon-4-running.jpg'],
    ], [
        ['decoration-grasslands0.jpg', 'decoration-grasslands0.jpg', 'decoration-grasslands0.jpg'],
        ['decoration-grasslands1.jpg', 'decoration-grasslands1.jpg', 'decoration-grasslands1.jpg'],
        ['decoration-grasslands2.jpg', 'decoration-grasslands2.jpg', 'decoration-grasslands2.jpg'],
    ], [
        ['empty-square.jpg', 'empty-square.jpg', 'empty-square.jpg'],
    ]
];

// var _people = { max: 200, enrolled: 50, housed: 0, used: 0};

// var _content_names = [
//     'coins', 'supplies', 'stone', 'lumber', 'people',
// ];
// var _content_values = [
//     [200, 600],
//     [1000, 3000],
//     [10, 20],
//     [10, 20],
//     [0, 0],
// ];
// var _people_values = [
//     [16, 59],
//     [17, 38],
//     [45, 45],
//     [36, 36],
//     [0, 0],
// ];

var _people; // = people_db.people;
var _people_values; // = people_db.values;

var _images = []; // its a 2d-array
var _images_special = {};

var _game_speedx = 1;
var _delay_speedx = 1;

var _pieces_status = [];
var _status_report = '';

// var _blocked = [1,2,4,5]
var _blocked = [3,4,5,9,10,11,15,16,17];
var _locked_bak = [18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35];
var _locked = [18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35];
var _backagain = false;
var _scorner = 30;
var _selected = 7;
var _has_moved = false;
var _edit_mode = true;
var _pieces_bak = [];

var _canvasOffset = 0;

function init(dificult, imgmain, imgtable){
    'use strict';
    // load smaller images
    if(!imgtable) imgtable = _list;
    for(let imglist of imgtable) {
        let images_row = [];
        for(let variations of imglist) {
            let img_variations = [];
            for(let file of variations) {
                let img = new Image();
                img.setAttribute('crossorigin', 'anonymous');
                img.src = 'content/img/' + file;  
                img_variations.push(img);
            }
            images_row.push(img_variations);
        }
        _images.push(images_row);
    }
    _images_special.locked = _images[6][1][0];
    _images_special.unlocked = _images[6][0][0];
    // document.ontouchmove = function(event){ event.preventDefault(); }
    document.addEventListener("touchmove", function (e) {
      if (e.target == _canvas) { e.preventDefault(); }}, {passive: false});
    _img = new Image();
    _img.addEventListener('load',onImage,false);
    _img.src = imgmain;
    PUZZLE_DIFFICULTY = dificult;
    set_vars();
    loop();
}
function set_vars() {
    _people = people_db.people;
    _people_values = people_db.values;
}
async function loop() {
    if(!_pieces) _pieces = [];
    // await delay(1);
    // for(i=0; i < _pieces.length; i+=1) {
    //     if(_locked.includes(i)) lockTile(i);
    // }
    // let ready = 0;
    let counter = 0;
    while(1) {
        await delay(1, _delay_speedx);
        for(i=0; i < _pieces.length; i+=1) {
            piece = _pieces[i];
            if(!piece.entity) continue;
            // console.log(`loop....1`)
            // console.log(`piece.flagged.=`,piece.entity.flagged)
            if(piece.entity.flagged) continue;
            // console.log(`loop....2`)
            if(piece.entity.collected) continue;
            // console.log(`loop....3`)
            if(!piece.entity) continue;
            // console.log(`loop....4`)
            // console.log(`loop....i=${i}`)
            if(!ready(piece, i)) continue;
            // console.log(`loop....5`)
            piece.entity.flagged = 1;
            changeImage(piece, {ready:1});
            // changeImage(i, {ready:1});
            // console.log(`loop....6`)
            // console.log(`piece.flagged.=`,piece.entity.flagged)
            // console.log(`loop....7`)
        }
        if(counter++===30) {
            load_updated_data();
            refresh_periodic_data();
            // save_data();
            counter = 0;
        }
        update_run_status();
     }

    function timenow() {
        return (new Date).getTime();
    }
    function ready(piece, location=-1) {
        if(!piece || !piece.entity) return;
        if(piece.entity.collected) return 0;
        let current_time = timenow();
        let duration = current_time - piece.entity.start_time;
        let isel = piece.entity.isel || 0;
    // console.log(piece)
    // console.log(`location = ${location})`)
    // console.log(`duration(${duration})..2i`)
    // console.log(`current_time(${current_time})..2i`)
    // console.log(`piece.start_time(${piece.entity.start_time})..2i`)
    // console.log(`piece.duration[isel]=${piece.entity.duration[isel]})..2i`)
    // let remaining = (duration/1000 - piece.entity.duration[isel]*60)/1;
    // console.log(`time remaining = ${-remaining} seconds ...2i`)
    //     if(duration/1000 > piece.entity.duration[isel]*60) {
    //         return true;
    //     }
    // }
        let divisor = 1000/_game_speedx;
        let remaining = -(duration/divisor - piece.entity.duration[isel]*60)/_game_speedx;
        // console.log(`time remaining = ${remaining} seconds ...2i`)
        if(remaining > 0) piece.entity.remaining = Math.floor(remaining);
        else piece.entity.remaining = 0;
        if(duration/divisor > piece.entity.duration[isel]*60) {
            return true;
        }
    }
}
function update_run_status() {
    let report = ''; _pieces_status = [];
    for(let i in _pieces) {
        let piece = _pieces[i];
        let status = 'Idle';
        ready(piece, i);
        // console.log(`0...${i}...${status}`)
        // console.log(`0...${i}...`, piece.entity)
        if(!piece || !piece.entity) continue;
        if(!piece.entity.collected) status = `Ready`;
        let interval = piece.entity.interval;
        let quantity = piece.entity.quantity;
        let intervalplus = (interval>=60) ? round(interval/60)+'h' : interval+'m';
        // console.log(`1...${i}...${status}`)
        let remaining = piece.entity.remaining;
        if(remaining > 0 && piece.entity.running) {
            let hours = Math.floor(remaining/3600);
            let minutes = remaining%3600;
            let seconds = minutes%60;
            minutes = Math.floor(minutes/60);
            status = `<b>Running</b>. [interval ${intervalplus}, quantity ${quantity}]     Time remaining <b>${hours}h: ${minutes}m: ${seconds}s</b>`;
        } else if(!piece.entity.collected) { status = `<b>Ready.</b>   [interval ${intervalplus}, quantity ${quantity}]`; }
        // console.log(`2...${i}...${status} `, remaining)
        _pieces_status.push({i, status});
        report += `Location ${i}        ${status}\n`;
        // console.log(`3...${i}...${status}`)
    }
    _status_report = report;
    // console.log(`_status_report = ${_status_report}`);
    return _status_report;
}
function changeImage(piece, {ready=0, idle=0, running=0}) {
    console.log(`changeImage(piece=${piece}, {ready=${ready}, idle=${idle}, running=${running}}`)
    document.onmousedown = null;
    _canvas.ontouchstart = null;
    // cleanTile(tileindex);
    // let piece = _pieces[tileindex];
    console.log(piece)
    let index = piece.entity.content.index;
    let level = piece.entity.content.level;
    let imgtype = ready ? 1 : running ? 2 : 0;
    changeTile(index, level, imgtype, piece, {ready:1})
    document.onmousedown = _edit_mode ? onPuzzleClick : onPuzzleClick2;
    _canvas.ontouchstart = _edit_mode ? onPuzzleClick : onPuzzleClick2;    
 }
 function changeTile(index=0, level=0, variant=0, piece, {ready=1}={}) {
    let image = _images[index][level][variant];
    // let piece = _pieces[i];
    _stage.clearRect(piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    _stage.drawImage(image, 0, 0, image.width, image.height, piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    _img.src = _canvas.toDataURL();
}
function changeImage_old(tileindex, {ready=0, idle=0, busy=1}) {
    document.onmousedown = null;
    _canvas.ontouchstart = null;
    cleanTile(tileindex);
    let piece = _pieces[tileindex];
    let index = piece.entity.content.index;
    let level = piece.entity.content.level;
    let imgtype = ready ? 1 : idle ? 2 : 0;
    addTile(index, level, imgtype, tileindex, {ready:1})
    document.onmousedown = _edit_mode ? onPuzzleClick : onPuzzleClick2;
    _canvas.ontouchstart = _edit_mode ? onPuzzleClick : onPuzzleClick2;    
 }
function onImage(e){
    'use strict';
    console.log(`onImage(${_backagain})`);
    // if(_backagain) return;
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY);
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY);
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
}
function setCanvas(){
    'use strict';
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _canvas.width = _puzzleWidth;
    _canvas.height = _puzzleHeight;
    _canvas.style.border = "0px solid transparent";
    _stage.strokeStyle = "lightgray";
    _canvasOffset = _canvas.getBoundingClientRect();
}
function initPuzzle(){
    'use strict';
    _pieces_bak = _pieces;
    _pieces = [];
    _mouse = {x:0,y:0};
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
    buildPieces();
    if(!_backagain) shufflePuzzle();
}
function buildPieces(){
    'use strict';
    console.log(`buildPieces(${_backagain})`);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    let squares = PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;
    for(i = 0;i < squares;i+=1){
        piece = {};
        piece.sx = xPos;
        piece.sy = yPos;
        piece.xPos = xPos;
        piece.yPos = yPos;
        _pieces.push(piece);
        xPos += _pieceWidth;
        if(xPos >= _puzzleWidth){
            xPos = 0;
            yPos += _pieceHeight;
        }
        if(_pieces_bak && _pieces_bak[i] && _pieces_bak[i].entity) {
            piece.entity = _pieces_bak[i].entity;
            // piece.content_level = _pieces_bak[i].content_level;
            // piece.content_index = _pieces_bak[i].content_index;
            // piece.content_value = _pieces_bak[i].content_value;
            // piece.content_exists = _pieces_bak[i].content_exists;
            // piece.entity = _pieces_bak[i].entity;
            // piece.duration = _pieces_bak[i].duration;
            // piece.collected = _pieces_bak[i].collected;
            // piece.start_time = _pieces_bak[i].start_time;
            // piece.flagged = _pieces_bak[i].flagged;
            // piece.i = _pieces_bak[i].i;
        }
    }
    // console.log(_pieces);
    if(_backagain) { return; }
    // // if(_backagain) { _backagain = 0; return; }
    // document.onmousedown = shufflePuzzle;
    // _canvas.ontouchstart = shufflePuzzle;
}
function shufflePuzzle(wch){
    'use strict';
    // _pieces = shuffleArray(_pieces);
    _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    // let list = _images.slice(0);
    for(i = 0;i < _pieces.length;i+=1){
        piece = _pieces[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        // _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
        // _stage.strokeRect(xPos, yPos, _pieceWidth,_pieceHeight);
        if(!_blocked.includes(i)) {
            // console.log(`at ${i} have list ${list.length}`)
            // _stage.drawImage(list[0], 0, 0, list[0].width, list[0].height, xPos, yPos, _pieceWidth, _pieceHeight);
            // if(list.length>1) list.shift(); // alternate among all the pieces
            // if(!_locked.includes(i) && i===12) unlockTile(i); //else unlockTile(i);
            // let image = _locked.includes(i) || i===30 ? _images_special.locked : _images_special.unlocked;
            let image = _locked.includes(i) ? _images_special.locked : _images_special.unlocked;
            // if(i==30 && !_people.housed) image = _images_special.locked; //loc 30 image match surroundings if empty canvas
            _stage.drawImage(image, 0, 0, image.width, image.height, xPos, yPos, _pieceWidth, _pieceHeight);            
        } else {
            _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);            
        }
        // _stage.strokeStyle = "green";
        _stage.strokeRect(xPos, yPos, _pieceWidth,_pieceHeight);
        xPos += _pieceWidth;
        if(xPos >= _puzzleWidth){
            xPos = 0;
            yPos += _pieceHeight;
        }
        // console.log(i, piece);
    }
    document.onmousedown = onPuzzleClick;
    _canvas.ontouchstart = onPuzzleClick;

    _backagain = true; // this will prevent reshuffling of pieces
    _img.src = _canvas.toDataURL();
}
function allocate_people(index, level) {
    let needed = _people_values[index][level];
    let roster = _people.enrolled + _people.temps;
    let available = roster - _people.housed;
    // if(_people.temps) available += _people.temps;
    let message = '';
    if(index===0) { // housing building
        if(available >= needed) _people.housed += needed;
        else {
            message = `Not enough people available! Needed ${needed}, found only ${available}.\nNeed more enrollments/temps. `;
            if(available===0 && _people.housed>0) { message += `Used up all current enrollments+temps [${roster}]`; }
            else if(_people.housed>0) { message += `Already housed ${_people.housed} of the people currently on the roster [${roster}]`; }
        }

    } else {
        available = _people.housed - _people.used;
        if(available >= needed) _people.used += needed;        
        else {
            message = `Not enough people available! Needed ${needed}, found only ${available}. \nFirst add more houses. `;
            if(available===0 && _people.used>0) { message += `Used up all currently housed people [${_people.housed}]`; }
            else if(_people.used>0) { message += `Already used up ${_people.used} of the currently housed people [${_people.housed}]`; }
        }
    }
    return [(available >= needed), available, needed, message];
}
function addTile(index=0, level=0, variant=0, i=_scorner, {ready=1}={}) {
    // let image = _images[index][level];
    let image = _images[index][level][variant];
    let piece = _pieces[i];
    let empty = piece.entity ? 0 : 1;
    if(!empty) return alert(`Space ${i} already occupied by ${piece.entity.toString()}`);
    let [found_people, available, needed, message] = allocate_people(index, level);
    if(empty) if(!found_people) return alert(message);
    _stage.drawImage(image, 0, 0, image.width, image.height, piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    if(empty) piece.entity = new EntityObj();
    // piece.content_exists = 1;
    piece.entity.content.level = level;
    piece.entity.content.index = index;
    // piece.entity.content.value = _content_values[index][level] || 0;
    piece.entity.content.people = _people_values[index][level] || 0;
    if(empty) collect_people(needed, index);
    // piece.entity = new Entity({i});
    piece.entity.duration = (index===0 || index===1) ? [5, 15, 60, 4*60, 8*60, 24*60] : [4*60, 8*60, 24*60, 48*60];
    piece.entity.collected = ready ? 0 : 1;
    // piece.entity.start_time = 0;
    piece.entity.i = i;
    console.log(`addTile(index=${index})`)
    console.log(piece);
    _img.src = _canvas.toDataURL();
}
function loadTile(piece, i=_scorner, {load=1}={}) {
    if(!piece || !piece.entity) return;
    let state = 0; // idle
    if(ready(piece, i)) state = 1;
    else if(piece.entity.remaining>0) state = 2;
    let level = piece.entity.content.level;
    let index = piece.entity.content.index;
    let image = _images[index][level][state];
    _stage.drawImage(image, 0, 0, image.width, image.height, piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    if(load) _img.src = _canvas.toDataURL();
}
function lockTile(i=_scorner) {
    let piece = _pieces[i];
    let image = _images_special.locked;
    _stage.drawImage(image, 0, 0, image.width, image.height, piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    _img.src = _canvas.toDataURL();
    console.log(`lockTile(i=${i})`)
}
function unlockTile(i=_scorner) {
    let piece = _pieces[i];
    let image = _images_special.unlocked;
    _stage.drawImage(image, 0, 0, image.width, image.height, piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    _img.src = _canvas.toDataURL();
    console.log(`unlockTile(i=${i})`)
}
function cleanTile(i=_scorner) {
    let piece = _pieces[i];
    _stage.clearRect(piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    // piece.content_exists = 0;
    // piece.content_level = 0;
    // piece.content_index = 0;
    // piece.content_value = 0;
    // piece.entity = null;
    // piece.duration = null;
    _img.src = _canvas.toDataURL();
    console.log(`deleteTile(i=${i})`)
}
function deleteTile(i=_scorner) {
    let piece = _pieces[i];
    if(!piece.entity) {
        console.log(`deleteTile(i=${i}): piece.entity=${piece.entity}`); return;
    }
    _stage.clearRect(piece.sx, piece.sy, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.sx, piece.sy, _pieceWidth,_pieceHeight);
    if(piece.entity.content.index===0) { // housing building
        _people.housed -= piece.entity.content.people;
        collect_people( -piece.entity.content.people, piece.entity.content.index);
    } else {
        _people.used -= piece.entity.content.people;
        collect_people( -piece.entity.content.people, piece.entity.content.index);
    }
    // remove all data
    delete piece.entity;
    _img.src = _canvas.toDataURL();
    console.log(`deleteTile(i=${i})`)
}
function editTiles() {
    _edit_mode = !_edit_mode;
    document.onmousedown = _edit_mode ? onPuzzleClick : onPuzzleClick2;
    _canvas.ontouchstart = _edit_mode ? onPuzzleClick : onPuzzleClick2;    
}
function collect_run(i){
    if(i===1) {
        $('#mini1Modal').modal()
    }
}

function onMouseMove(e) {
    if(e.clientX || e.clientX == 0){
        // console.log(`e.clientX=${e.clientX}, e.clientY=${e.clientY}`)
        let multX = _canvas.width/screen.width; if(multX<1) multX = 1;
        _mouse.x = (e.clientX - _canvasOffset.left) *multX;
        _mouse.y = (e.clientY - _canvasOffset.top) *multX;
        // _mouse.x = (e.clientX) *multX;
        // _mouse.y = (e.clientY) *multX;
        // console.log(`multX=${multX}, _canvasOffset.left=${_canvasOffset.left}, _canvasOffset.top=${_canvasOffset.top}`)
        // console.log(`multX=${multX}, _canvas.offsetLeft=${_canvas.offsetLeft}, _canvas.offsetTop=${_canvas.offsetTop}`)
    }
    else if(e.layerX || e.layerX == 0){
        // console.log(`e.layerX=${e.layerX}, e.layerX=${e.layerY}`)
        let multX = _canvas.width/screen.width; if(multX<1) multX = 1;
        _mouse.x = (e.layerX - _canvas.offsetLeft) *multX;
        _mouse.y = (e.layerY - _canvas.offsetTop) *multX;
        // console.log(`multX=${multX}, _canvas.offsetLeft=${_canvas.offsetLeft}, _canvas.offsetTop=${_canvas.offsetTop}`)
    }
    else if(e.offsetX || e.offsetX == 0){
        // console.log(`e.offsetX`)
        let multX = _canvas.width/screen.width; if(multX<1) multX = 1;
        _mouse.x = (e.offsetX - _canvas.offsetLeft) *multX;
        _mouse.y = (e.offsetY - _canvas.offsetTop) *multX;
        // console.log(`multX=${multX}, _canvas.offsetLeft=${_canvas.offsetLeft}, _canvas.offsetTop=${_canvas.offsetTop}`)
    }
    else {
        // console.log(`e.pageX`)
        let {pageX, pageY} = e.touches ? e.touches[0] : e;
        let multX = _canvas.width/screen.width;
        _mouse.x = (pageX - _canvasOffset.left) *multX;
        _mouse.y = (pageY - _canvasOffset.top) *multX;
        // console.log(`multX=${multX}, _canvasOffset.left=${_canvasOffset.left}, _canvasOffset.top=${_canvasOffset.top}`)
    }
    return _mouse;
}
function onPuzzleClick(e){
    'use strict';
    // console.log(`onPuzzleClick(e)`)
    _mouse = onMouseMove(e);
    _currentPiece = checkPieceClicked();
    if(_currentPiece != null){
        _stage.clearRect(_currentPiece.xPos,_currentPiece.yPos,_pieceWidth,_pieceHeight);
        _stage.save();
        _stage.globalAlpha = 0.9;
        _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
        _stage.restore();
        document.onmousemove = updatePuzzle;
        _canvas.ontouchmove = updatePuzzle;
        document.onmouseup = pieceDropped;
        _canvas.ontouchend = pieceDropped;
    }
}
function onPuzzleClick2(e){
    'use strict';
    // console.log(`onPuzzleClick(e)`)
    _mouse = onMouseMove(e);
    _currentPiece = collectPieceClicked();
    if(_currentPiece != null){
        // alert(`_currentPiece.content_exists = `+_currentPiece.content_exists)
        // if(_currentPiece.content_exists) {
        if(_currentPiece.entity) {
            if(ready(_currentPiece)) { collect(_currentPiece); return; }
            configure(_currentPiece);
            // let qty = prompt("Choices are \n 4-hour => 5 \n 8-hour => 10 \n 24-hour => 20", 5);
            // _configuringPiece = _currentPiece;
            // $('#productionModal').modal()
            // deleteTile(7);
            // addTile(0, 0, 0, 7)
        }
    }
}
// function configure(piece) {
//     document.onmousedown = null;
//     _canvas.ontouchstart = null;    
//     // console.log(`blocked all mouse gestures`);
//     let text = JSON.stringify(piece);
//     console.log(`configure(): `, text);
//     _configuringPiece = piece;
//     $('#miniProductionModal').on('hidden.bs.modal', async function (e) {
//         // await delay(1);
//         document.onmousedown = _edit_mode ? onPuzzleClick : onPuzzleClick2;
//         _canvas.ontouchstart = _edit_mode ? onPuzzleClick : onPuzzleClick2;    
//     });
//     $('#miniProductionModal').modal();
//     // $('#productionModal').modal();
// }
function configure(piece) {
    document.onmousedown = null;
    _canvas.ontouchstart = null;    
    // console.log(`blocked all mouse gestures`);
    let text = JSON.stringify(piece);
    // console.log(`configure(): `, text);
    _configuringPiece = piece;
    let index = piece.entity.content.index;
    let modal_id = (index===0 || index===1) ? 'miniProduction6Modal' : 'miniProduction4Modal';
    if(index===0 || index===1) {
        createMiniProduction6();
    } else {
        createMiniProduction4();
    }
    highlightRunningButton(modal_id, piece);
    $(`#${modal_id}`).on('hidden.bs.modal', async function (e) {
        // await delay(1);
        document.onmousedown = _edit_mode ? onPuzzleClick : onPuzzleClick2;
        _canvas.ontouchstart = _edit_mode ? onPuzzleClick : onPuzzleClick2;    
    });
    $(`#${modal_id}`).modal();
    // $('#productionModal').modal();
}
function highlightRunningButton(modal_id, piece) {
    // console.log('... piece ...', piece)
    if(!piece.entity.running) return;
    $(`#${modal_id}`).find(`#produce-${piece.entity.isel}`).addClass('btn-success');
    $(`#${modal_id}`).find(`#produce-${piece.entity.isel}`).text('Cancel');
    $(`#${modal_id}`).find(`#produce-${piece.entity.isel}`).attr('onclick', `cancel_produce(${piece.entity.isel})`);
}

function collectPieceClicked(){
    'use strict';
    // console.log(_pieces);
    var i;
    var piece;
    for(i = 0;i < _pieces.length;i+=1){
        if(_blocked.includes(i)) continue;
        if(_locked.includes(i)) continue;
        piece = _pieces[i];
        if(_mouse.x < piece.sx || _mouse.x > (piece.sx + _pieceWidth) || _mouse.y < piece.sy || _mouse.y > (piece.sy + _pieceHeight)) {} //PIECE NOT HIT
        else {
            _selected = i; console.log(`1 _selected=${_selected}, _mouse=`, _mouse);
            // if(piece.content_exists) { collect(piece); }
            console.log(`piece=`, piece);
            return piece;
        }
    }
    return null;
}
function checkPieceClicked(){
    'use strict';
    // console.log(_pieces)
    _currentCollectPiece = collectPieceClicked();
    var i;
    var piece;
    for(i = 0;i < _pieces.length;i+=1){
        if(_blocked.includes(i)) continue;
        if(_locked.includes(i)) continue;
        piece = _pieces[i];
        if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {} //PIECE NOT HIT
        // else if(_mouse.x < 0 || _mouse.x > _puzzleWidth || _mouse.y < 0 || _mouse.y > _puzzleHeight) {} //PIECE NOT HIT
        else {
            // _selected = i; console.log(`2 _selected=${_selected}, _mouse=`, _mouse);
            // if(piece.content_exists) console.log(`piece.content_exists=${piece.content_exists}, piece.content_value=${piece.content_value}`);
            // if(piece.content_exists) { let id = "score-people"; scroe(id, piece); }
            // if(piece.content_exists) { collect(piece); }
            // console.log(`piece=`, piece);
            return piece;
        }
        // else { return piece; }
        // console.log(`if(_mouse.x < ${piece.xPos} || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < ${piece.yPos} || _mouse.y > (piece.yPos + _pieceHeight))`);
    }
    return null;
}
function updatePuzzle(e){
    'use strict';
    console.log(`updatePuzzle(e)`)
    _currentDropPiece = null;
    _has_moved = true;
    _mouse = onMouseMove(e);
    _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
    var i;
    var piece;
    for(i = 0;i < _pieces.length;i+=1){
        piece = _pieces[i];
        if(piece == _currentPiece){
            continue;
        }
        _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth,_pieceHeight);
        if(_blocked.includes(i)) continue;
        if(_locked.includes(i)) continue;
        if(_currentDropPiece == null){
            if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)){
                //NOT OVER
            }
            else{
                _currentDropPiece = piece;
                _stage.save();
                _stage.globalAlpha = 0.4;
                _stage.fillStyle = PUZZLE_HOVER_TINT;
                _stage.fillRect(_currentDropPiece.xPos,_currentDropPiece.yPos,_pieceWidth, _pieceHeight);
                _stage.restore();
                // console_log({mx:_mouse.x, my:_mouse.y, pzw: _puzzleWidth, pzh: _puzzleHeight, pcw: _pieceWidth, pch: _pieceHeight}, 
                    // { xps: piece.xPos, xpy: piece.yPos, dpx: _currentDropPiece.xPos, dpy: _currentDropPiece.yPos});
            }
        }
    }
    _stage.save();
    _stage.globalAlpha = 0.6;
    _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
    _stage.restore();
    _stage.strokeRect( _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth,_pieceHeight);
}
function pieceDropped(e){
    'use strict';
    console.log(`pieceDropped(e)`)
    document.onmousemove = null;
    _canvas.ontouchmove = null;
console.log(_pieces)
    document.onmouseup = null;
    _canvas.ontouchend = null;
    console.log(`_has_moved-1 = ${_has_moved}, _currentPiece = `, _currentPiece)
    console.log(`_has_moved-1 = ${_has_moved}, _currentDropPiece = `, _currentDropPiece)
    console.log(`_has_moved-1 = ${_has_moved}, _currentCollectPiece = `, _currentCollectPiece)
    if(_currentDropPiece != null && _has_moved){
        // var tmp = {xPos:_currentPiece.xPos,yPos:_currentPiece.yPos};
        let tmp = Object.assign({}, _currentPiece);
        console.log(`_currentPiece=`,_currentPiece);
        console.log(`_currentPiece.xPos=`,_currentPiece.xPos);
        let currtmp = Object.assign({}, _currentPiece);
        // let tmp = {sx:_currentPiece.sx,sy:_currentPiece.sy, xPos:_currentPiece.xPos,yPos:_currentPiece.yPos};
        console.log(`currtmp-_currentPiece=`,currtmp);
        console.log(`currtmp.xPos=`,currtmp.xPos);
        let droptmp = Object.assign({}, _currentDropPiece);
        console.log(`droptmp-_currentDropPiece=`,droptmp);
        let colltmp = Object.assign({}, _currentCollectPiece);
        console.log(`colltmp-_currentCollectPiece=`,colltmp);
        console.log(`_currentPiece=`,_currentPiece);
        console.log(`_currentCollectPiece=`,_currentCollectPiece);
        console.log(`_currentDropPiece=`,_currentDropPiece);
        _currentPiece.xPos = _currentDropPiece.xPos;
        _currentPiece.yPos = _currentDropPiece.yPos;
        // _currentDropPiece.xPos = tmp.xPos;
        // _currentDropPiece.yPos = tmp.yPos;
        _currentDropPiece.xPos = currtmp.xPos;
        _currentDropPiece.yPos = currtmp.yPos;
        // if(_currentDropPiece.content_exists!==undefined) {
            _currentCollectPiece.entity = droptmp.entity;
            // _currentCollectPiece.content_level = droptmp.content_level;
            // _currentCollectPiece.content_index = droptmp.content_index;
            // _currentCollectPiece.content_value = droptmp.content_value;
            // _currentCollectPiece.content_exists = droptmp.content_exists;
            // _currentCollectPiece.collected = droptmp.collected;
            // _currentCollectPiece.entity = droptmp.entity;
            // _currentCollectPiece.duration = droptmp.duration;
            // _currentCollectPiece.collected = droptmp.collected;
            // _currentCollectPiece.start_time = droptmp.start_time;
            // _currentCollectPiece.flagged = droptmp.flagged;
            // _currentCollectPiece.entity.i = droptmp.i;
        // }
        // if(_currentCollectPiece && _currentCollectPiece.content_exists!==undefined) {
            _currentDropPiece.entity = colltmp.entity;
            // _currentDropPiece.content_level = colltmp.content_level;
            // _currentDropPiece.content_index = colltmp.content_index;
            // _currentDropPiece.content_value = colltmp.content_value;
            // _currentDropPiece.content_exists = colltmp.content_exists;
            // _currentDropPiece.collected = colltmp.collected;
            // _currentDropPiece.entity = colltmp.entity;
            // _currentDropPiece.duration = colltmp.duration;
            // _currentDropPiece.collected = colltmp.collected;
            // _currentDropPiece.start_time = colltmp.start_time;
            // _currentDropPiece.flagged = colltmp.flagged;
            // _currentDropPiece.entity.i = colltmp.i;
        // }
        // if(tmp && tmp.content_exists!==undefined) {
        //     _currentDropPiece.content_level = tmp.content_level;
        //     _currentDropPiece.content_index = tmp.content_index;
        //     _currentDropPiece.content_value = tmp.content_value;
        //     _currentDropPiece.content_exists = tmp.content_exists;
        //     _currentDropPiece.collected = tmp.collected;
        // }
        console.log(`tmp=`,tmp);
    }
    console.log(`_has_moved-2 = ${_has_moved}, _currentPiece = `, _currentPiece)
    console.log(`_has_moved-2 = ${_has_moved}, _currentDropPiece = `, _currentDropPiece)
    console.log(`_has_moved-2 = ${_has_moved}, _currentCollectPiece = `, _currentCollectPiece)
console.log(_pieces)
    resetPuzzleAndCheckWin();
}
function resetPuzzleAndCheckWin(){
    'use strict';
    _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
    var gameWin = true;
    var i;
    var piece;
    for(i = 0;i < _pieces.length;i+=1){
        piece = _pieces[i];
        _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth,_pieceHeight);
        if(piece.xPos != piece.sx || piece.yPos != piece.sy){
            gameWin = false;
        }
    }
    _has_moved = false;
    // if(gameWin){ setTimeout(gameOver,500);  }
}
function gameOver(){
    'use strict';
    document.onmousedown = null;
    _canvas.ontouchstart = null;
    document.onmousemove = null;
    _canvas.ontouchmove = null;
    document.onmouseup = null;
    _canvas.ontouchend = null;
    // alert('You Win!');
    // initPuzzle();
    let msg = "Ready for a bigger challenge?";
    if(confirm(msg))
        init(PUZZLE_DIFFICULTY+1, _img.src)
    else
        init(PUZZLE_DIFFICULTY, _img.src)
}
function shuffleArray(o){
    'use strict';
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
