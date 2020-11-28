function spaces(count, space='') {
    for(let i=0; i<count; i++) space += '&nbsp;';
    return space;
}
function capitalizeFirstLetter(string) {
    if(typeof string!=='string') return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
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

function lowercase(string) {
    if(typeof string==='string') return string.toLowerCase();
    else return string;
}
function uppercase(string) {
    if(typeof string==='string') return string.toUpperCase();
    else return string;
}
function obj2string(obj) {
    let array = Object.entries(obj).map(([key,value]) => value+' '+key);
    return array.join(', ');
}
