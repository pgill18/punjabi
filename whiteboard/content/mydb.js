const whiteboard_db = [];

for(let i in whiteboard_rawdb) {
    whiteboard_db[i] = build_whiteboard_content(i);
}

function build_whiteboard_content(i) {
    let seq1 = whiteboard_rawdb[i].sequences1.map(entry => {let field={}; field[entry.name]=entry.word; return field});
    let seq2 = whiteboard_rawdb[i].sequences1.map(entry => {let field={}; field[entry.name]=entry.pword; return field});
    return [seq1, seq2];
}
