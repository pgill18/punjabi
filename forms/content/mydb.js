// const rawdb = require('./rawdb.js').rawdb;
// const util = require('util');

// const content_database = {};
// content_database.forms = [];

// for(let i in forms_rawdb) {
//     content_database.forms[i] = build_form_content(i);
// }

// console.log(util.inspect(content_database, {depth:10}))

const forms_db = [];

for(let i in forms_rawdb) {
    forms_db[i] = build_form_content(i);
}

function build_form_content(i) {
    let seq1 = forms_rawdb[i].sequences1.map(entry => {let field={}; field[entry.name]=entry.word; return field});
    let seq2 = forms_rawdb[i].sequences2.map(entry => {let field={}; field[entry.name]=entry.pword; return field});
    return [seq1, seq2];
}
