const forms_rawdb = [
{
    sentences1: "who did it | |",
    sentences2: "kihne kita eh | |",
    sequences1: [
      { word: 'who', pword: 'kihne', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'did', pword: 'kita', verb: 1, type: 'verb', name: 'action' },
      { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' }
    ],
    sequences2: [
      { word: 'who', pword: 'kihne', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'did', pword: 'kita', verb: 1, type: 'verb', name: 'action' },
      { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' }
    ],
    phrase_sentences1: [ 'who did it' ],
    phrase_sentences2: [ 'kihne kita eh' ],
    phrase_sequences1: [
      [
        { word: 'who', pword: 'kihne', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'did', pword: 'kita', verb: 1, type: 'verb', name: 'action' },
        { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' }
      ]
    ],
    phrase_sequences2: [
      [
        { word: 'who', pword: 'kihne', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'did', pword: 'kita', verb: 1, type: 'verb', name: 'action' },
        { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' }
      ]
    ],
},
{
    sentences1: "someone took it | i dont know | who",
    sentences2: "koi eh lai_giya | mein jaanda nahin | kaun",
    sequences1: [
      { word: 'someone', pword: 'koi', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'took', pword: 'lai_giya', verb: 1, type: 'verb', name: 'action' },
      { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' },
      { word: 'i', pword: 'mein', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'dont', pword: 'nahin', mainverb: 1, type: 'main', name: 'main' },
      { word: 'know', pword: 'jaanda', verb: 1, type: 'verb', name: 'action' },
      { word: 'who', pword: 'kaun', pronoun: 1, type: 'pronoun', name: 'subect' }
    ],
    sequences2: [
      { word: 'someone', pword: 'koi', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' },
      { word: 'took', pword: 'lai_giya', verb: 1, type: 'verb', name: 'action' },
      { word: 'i', pword: 'mein', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'know', pword: 'jaanda', verb: 1, type: 'verb', name: 'action' },
      { word: 'dont', pword: 'nahin', mainverb: 1, type: 'main', name: 'main' },
      { word: 'who', pword: 'kaun', pronoun: 1, type: 'pronoun', name: 'subect' }
    ],
    phrase_sentences1: [ 'someone took it', 'i dont know', 'who' ],
    phrase_sentences2: [ 'koi eh lai_giya', 'mein jaanda nahin', 'kaun' ],
    phrase_sequences1: [
      [
        { word: 'someone', pword: 'koi', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'took', pword: 'lai_giya', verb: 1, type: 'verb', name: 'action' },
        { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' }
      ],
      [
        { word: 'i', pword: 'mein', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'dont', pword: 'nahin', mainverb: 1, type: 'main', name: 'main' },
        { word: 'know', pword: 'jaanda', verb: 1, type: 'verb', name: 'action' }
      ],
      [ { word: 'who', pword: 'kaun', pronoun: 1, type: 'pronoun', name: 'subect' } ]
    ],
    phrase_sequences2: [
      [
        { word: 'someone', pword: 'koi', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'it', pword: 'eh', determiner: 1, type: 'determiner', name: 'noun_mod_det' },
        { word: 'took', pword: 'lai_giya', verb: 1, type: 'verb', name: 'action' }
      ],
      [
        { word: 'i', pword: 'mein', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'know', pword: 'jaanda', verb: 1, type: 'verb', name: 'action' },
        { word: 'dont', pword: 'nahin', mainverb: 1, type: 'main', name: 'main' }
      ],
      [ { word: 'who', pword: 'kaun', pronoun: 1, type: 'pronoun', name: 'subect' } ]
    ],
},
{
    sentences1: "what happened | |",
    sentences2: "ki hoia | |",
    sequences1: [
      { word: 'what', pword: 'ki', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'happened', pword: 'hoia', verb: 1, type: 'verb', name: 'action' }
    ],
    sequences2: [
      { word: 'what', pword: 'ki', pronoun: 1, type: 'pronoun', name: 'subect' },
      { word: 'happened', pword: 'hoia', verb: 1, type: 'verb', name: 'action' }
    ],
    phrase_sentences1: [ 'what happened' ],
    phrase_sentences2: [ 'ki hoia' ],
    phrase_sequences1: [
      [
        { word: 'what', pword: 'ki', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'happened', pword: 'hoia', verb: 1, type: 'verb', name: 'action' }
      ]
    ],
    phrase_sequences2: [
      [
        { word: 'what', pword: 'ki', pronoun: 1, type: 'pronoun', name: 'subect' },
        { word: 'happened', pword: 'hoia', verb: 1, type: 'verb', name: 'action' }
      ]
    ],
},
];
