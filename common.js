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
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function authorized(password) {
    let today = new Date();
    let [yyyy, mm, dd] = [today.getFullYear(), today.getMonth()-1, today.getDate()];
    let [hour, minute] = [today.getHours(), today.getMinutes()];
    // console.log(`if(${password}==='p${hour+1}${minute+11}'') return true`);
    if(password===`p${hour+1}${minute+11}`) return true;
    if(password===1324) return true;
    return false;
}

function lower(text) { return clean(text, 'lower') }
function upper(text) { return clean(text, 'upper') }
function camel(text) { return clean(text, 'camel') }
function clean(text, icase='') {
    if(!text) return text;
    else text = text.toString().trim();
    switch(icase.toLowerCase()) {
        case 'lower': return text.toLowerCase();
        case 'upper': return text.toUpperCase();
        case 'camel': return capitalizeFirstLetter(text);
    }
    return text;
}
function defined(a) { return (a!==undefined && a!==null) }
