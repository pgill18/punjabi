const whiteboard_db = [];

for(let i in whiteboard_rawdb) {
    whiteboard_db[i] = build_whiteboard_content(i);
}

function build_whiteboard_content(i) {
    let seq1 = whiteboard_rawdb[i].sequences1.map(entry => {let field={}; field[entry.name]=entry.word; return field});
    let seq2 = whiteboard_rawdb[i].sequences1.map(entry => {let field={}; field[entry.name]=entry.pword; return field});
    return [seq1, seq2];
}



const whiteboard_db_long_orig = [
  {
      "origlines": [
        [ "Many", "people", "don’t", "know", "this" ],
        [ "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē" ],
        [ "ਬਹੁਤ", "ਸਾਰੇ", "ਲੋਕ", "ਇਹ", "ਨਹੀਂ", "ਜਾਣਦੇ" ],
      ],
      "dims": 2,
  },
  {
      "origlines": [
        [ "But", "many", "people", "do" ],
        [ "Par", "bahuta", "lōka", "jāṇadē", "han" ],
        [ "ਪਰ", "ਬਹੁਤ", "ਸਾਰੇ", "ਲੋਕ", "ਜਾਣਦੇ", "ਹਨ" ],
      ],
      "dims": 2,
  },
  {
      "origlines": [
        [ "As", "you", "may", "have", "thought" ],
        [ "Jiven", "tusin", "sochia", "hovega" ],
        [ "ਜਿਵੇਂ", "ਤੁਸੀਂ", "ਸੋਚਿਆ", "ਹੋਵੇਗਾ" ],
      ],
      "dims": 2,
  },
];

const rawdb = [
  [ [ 'Who', 'did', 'it?' ], [ 'Kisanē', 'kītā?' ], [ 'ਕਿਸਨੇ', 'ਕੀਤਾ?' ] ],
  [ [ 'What', 'happened?' ], [ 'Kī', "hō'i'ā?" ], [ 'ਕੀ', 'ਹੋਇਆ?' ] ],
  [ [ 'What', 'is', 'this?' ], [ 'Iha', 'kī', 'hai?' ], [ 'ਇਹ', 'ਕੀ', 'ਹੈ?' ] ],
  [ [ 'This', 'thing', 'is', 'big/small' ], [ 'Iha', 'cīza', 'vaḍī/chōṭī', 'hai' ], [ 'ਇਹ', 'ਚੀਜ਼', 'ਵੱਡੀ/ਛੋਟੀ', 'ਹੈ' ] ],
  [ [ 'They', 'are', 'good', 'people' ], [ 'Uha', 'cagē', 'lōka', 'hana' ], [ 'ਉਹ', 'ਚੰਗੇ', 'ਲੋਕ', 'ਹਨ' ] ],
  [ [ 'Many', 'people', 'don’t', 'know', 'this' ], [ 'Bahuta', 'sārē', 'lōka', 'iha', 'nahīṁ', 'jāṇadē' ], [ 'ਬਹੁਤ', 'ਸਾਰੇ', 'ਲੋਕ', 'ਇਹ', 'ਨਹੀਂ', 'ਜਾਣਦੇ' ] ],
  [ [ 'She', 'did/said', 'the', 'same' ], [ 'Usanē', 'uhī', 'kītā' ], [ 'ਉਸਨੇ', 'ਉਹੀ', 'ਕੀਤਾ' ] ],
  [ [ 'Someone', 'else', 'did', 'it' ], [ 'Kisē', 'hōra', 'nē', 'kītā' ], [ 'ਕਿਸੇ', 'ਹੋਰ', 'ਨੇ', 'ਕੀਤਾ' ] ],
  [ [ 'How', 'many', 'children', 'does', 'she', 'have?' ], [ 'Usadē', 'kinē', 'bacē', 'hana?' ], [ 'ਉਸਦੇ', 'ਕਿੰਨੇ', 'ਬੱਚੇ', 'ਹਨ?' ] ],
  [ [ 'She', 'has', 'one', 'child' ], [ 'Usadā', 'ika', 'bacā', 'hai' ], [ 'ਉਸਦਾ', 'ਇੱਕ', 'ਬੱਚਾ', 'ਹੈ' ] ],
  [ [ 'How', 'much', 'water', 'is', 'there?' ], [ 'Kinā', 'pāṇī', 'hai?' ], [ 'ਕਿੰਨਾ', 'ਪਾਣੀ', 'ਹੈ?' ] ],
  [ [ 'There', 'is', 'much', 'water', 'here' ], [ 'Ithē', 'bahuta', 'sārā', 'pāṇī', 'hai' ], [ 'ਇਥੇ', 'ਬਹੁਤ', 'ਸਾਰਾ', 'ਪਾਣੀ', 'ਹੈ' ] ],
  [ [ 'Many', 'people', 'live', 'here' ], [ 'Ithē', 'bahuta', 'sārē', 'lōka', 'rahidē', 'hana' ], [ 'ਇੱਥੇ', 'ਬਹੁਤ', 'ਸਾਰੇ', 'ਲੋਕ', 'ਰਹਿੰਦੇ', 'ਹਨ' ] ],
  [ [ 'Don’t', 'touch', 'it!' ], [ 'Isa', 'nū', 'nā', 'chūhō!' ], [ 'ਇਸ', 'ਨੂੰ', 'ਨਾ', 'ਛੂਹੋ!' ] ],
  [ [ 'There', 'is', 'someone', 'in', 'the', 'garden' ], [ 'Bāga', 'vica', "kō'ī", 'hai' ], [ 'ਬਾਗ', 'ਵਿਚ', 'ਕੋਈ', 'ਹੈ' ] ],
  [ [ 'There', 'is/are', 'no', 'here' ], [ 'Ithē', 'hana/nahīṁ', 'hana', 'ithē' ], [ 'ਇੱਥੇ', 'ਹਨ/ਨਹੀਂ', 'ਹਨ', 'ਇਥੇ' ] ],
  [ [ 'There', 'are', 'no', 'ghosts' ], [ 'Ithē', "kō'ī", 'bhūta', 'nahīṁ', 'hana' ], [ 'ਇੱਥੇ', 'ਕੋਈ', 'ਭੂਤ', 'ਨਹੀਂ', 'ਹਨ' ] ],
  [ [ 'There', 'are', 'many', 'kinds', 'of', 'nuts' ], [ 'Ithē', 'anēka', 'kisamāṁ', 'dē', 'girīdāra', 'hana' ], [ 'ਇੱਥੇ', 'ਅਨੇਕ', 'ਕਿਸਮਾਂ', 'ਦੇ', 'ਗਿਰੀਦਾਰ', 'ਹਨ' ] ],
  [ [ 'It’s', 'mine' ], [ 'Iha', 'mērā', 'hai' ], [ 'ਇਹ', 'ਮੇਰਾ', 'ਹੈ' ] ],
  [ [ 'I', 'want', 'to', 'know', 'more' ], [ 'Maiṁ', 'hōra', 'jāṇanā', 'cāhudā', 'hāṁ' ], [ 'ਮੈਂ', 'ਹੋਰ', 'ਜਾਣਨਾ', 'ਚਾਹੁੰਦਾ', 'ਹਾਂ' ] ],
  [ [ 'I', 'want', 'to', 'see', 'more' ], [ 'Maiṁ', 'hōra', 'vēkhaṇā', 'cāhudā', 'hāṁ' ], [ 'ਮੈਂ', 'ਹੋਰ', 'ਵੇਖਣਾ', 'ਚਾਹੁੰਦਾ', 'ਹਾਂ' ] ],
  [ [ 'She', 'doesn’t', 'live', 'here', 'anymore' ], [ 'Uha', 'huṇa', 'ithē', 'nahīṁ', 'rahidī' ], [ 'ਉਹ', 'ਹੁਣ', 'ਇਥੇ', 'ਨਹੀਂ', 'ਰਹਿੰਦੀ' ] ],
  [ [ 'I', 'want', 'one', 'more' ], [ 'Mainū', 'ika', 'hōra', 'cāhīdā', 'hai' ], [ 'ਮੈਨੂੰ', 'ਇੱਕ', 'ਹੋਰ', 'ਚਾਹੀਦਾ', 'ਹੈ' ] ],
  [ [ 'He', 'did', 'it', 'like', 'this' ], [ 'Usanē', 'isa', 'nū', 'kītā', 'isa', "tar'hāṁ" ], [ 'ਉਸਨੇ', 'ਇਸ', 'ਨੂੰ', 'ਕੀਤਾ', 'ਇਸ', 'ਤਰ੍ਹਾਂ' ] ],
  [ [ 'It', 'happened', 'like', 'this' ], [ 'Iha', 'isa', "tar'hāṁ", "hō'i'ā" ], [ 'ਇਹ', 'ਇਸ', 'ਤਰ੍ਹਾਂ', 'ਹੋਇਆ' ] ],
  [ [ 'She', 'sang', 'like', 'this' ], [ 'Usanē', 'isa', 'tarāṁ', "gā'i'ā" ], [ 'ਉਸਨੇ', 'ਇਸ', 'ਤਰਾਂ', 'ਗਾਇਆ' ] ]
];

const whiteboard_db_long = rawdb.map(origlines => {return {origlines, dims:2}});

const whiteboard_db_levels = [];

whiteboard_db_levels[1] = [
  {
      "origlines": [
        [ "I", "won", "a", "pencil" ],
        [ "Mein", "ik", "pencil", "jitti" ]
      ],
      "dims": 2,
  }
];
whiteboard_db_levels[2] = [
  {
      "origlines": [
        [ "I", "won", "a", "green", "pencil" ],
        [ "Mein", "ik", "hari", "pencil", "jitti" ]
      ],
      "dims": 2,
  }
];
whiteboard_db_levels[3] = [
  {
      "origlines": [
        [ "I", "won", "a", "green", "pencil", "yesterday" ],
        [ "Mein", "kal", "ik", "hari", "pencil", "jitti" ]
      ],
      "dims": 2,
  }
];
whiteboard_db_levels[4] = [
  {
      "origlines": [
        [ "Many", "people", "don’t", "know", "this" ],
        [ "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē" ]
      ],
      "dims": 2,
  }
];

whiteboard_db_levels[0] = whiteboard_db_levels[4];


const whiteboard_db_temp = [
  {
      "origlines": [
        [ "Many", "people", "don’t", "know", "this" ],
        [ "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē" ]
      ],
      "dims": 2,
  }
];

// const whiteboard_db_temp1 = [
//     { // only second line is shuffled
//       "origlines": [
//         [ "Line", "one" ],
//         [ "Pehli", "pankti" ],
//         [ "line", "two" ],
//         [ "dooji", "pankti." ],
//       ],
//       "dims": 2,
//     },
//     { // each line shuffled individually
//       "origlines": [
//         [ "Line", "one" ],
//         [ "Pehli", "pankti" ],
//         [ "line", "two" ],
//         [ "dooji", "pankti." ],
//       ],
//       "dims": 2,
//     },
//     { // all lines shuffled as one paragraph
//       "origlines": [
//         [ "Line", "one" ],
//         [ "Pehli", "pankti" ],
//         [ "line", "two" ],
//         [ "dooji", "pankti." ],
//       ],
//       "dims": 2,
//     },
// ];



// const whiteboard_db_temp = [
//     {
//       "origlines": [
//         [ "Many", "people", "don’t", "know", "this" ],
//         [ "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē" ]
//       ],
//       "original": [ 
//         "Many", "people", "don’t", "know", "this",
//         "Bahuta", "sārē", "lōka", "iha", "nahīṁ", "jāṇadē"
//       ],
//       "model": [
//         "people", "don’t", "know", "this", "Many",
//         "sārē", "lōka", "iha", "jāṇadē", "nahīṁ", "Bahuta",
//       ],
//       "dims": 2,
//     }
// ];
