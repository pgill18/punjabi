// let MAX_CHOICES = 4;
// let MAX_QUIZES = 10;
const quizzes2 = [];
// quizzes2.push(content_quizzes2_quiz1());
quizzes2.push(content_quizzes2_quiz2());
quizzes2.push(content_quizzes2_quiz3());
quizzes2.push(content_quizzes2_quiz4());
quizzes2.push(content_quizzes2_quiz5());
quizzes2.push(content_quizzes2_quiz6());
quizzes2.push(content_quizzes2_quiz7());
quizzes2.push(content_quizzes2_quiz8());
quizzes2.push(content_quizzes2_quiz9());
quizzes2.push(content_quizzes2_quiz10());
quizzes2.push(content_quizzes2_quiz11());
quizzes2.push(content_quizzes2_quiz12());
quizzes2.push(content_quizzes2_quiz13());
quizzes2.push(content_quizzes2_quiz14());
// quizzes2.push(content_quizzes2_quiz15());
quizzes2.push(content_quizzes2_quiz16());
// quizzes2.push(content_quizzes2_quiz17());
quizzes2.push(content_quizzes2_quiz18());

// function content_quizzes2_quiz1() {
//   let info = { project: "Punjabi", section: "Vocabulary", topic: "Primary Colors", header: "Colors" };
//   let options = { random: true, count: [14] };
//   let quiz = build_choices([
//     ['Kaala', 'Black'],
//     ['Laal',  'Red'],
//     ['Haraa', 'Green'],
//     ['Neela',  'Blue'],
//     ['Peela',  'Yellow'],
//     ['Chitta', 'White'],
//     ['Slati',  'Gray'],
//     ['Kesri',  'Saffron'],
//     ['Santri', 'Orange'],
//     ['Jaamni', 'Purple'],
//     ['Gulabi', 'Pink'],
//     ['Bhoora', 'Brown'],
//     ['Firozi', 'Turquoise'],
//     ['Khakhi', 'Khaki'],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes2_quiz2() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Nouns-1", header: "Nouns-1" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["area",  "elaka"],
    ["book",  "kitaab"],
    ["business", "kamkar"],
    ["case",  "case"],
    ["child",   "bachcha"],
    ["company",   "company"],
    ["country",   "desh"],
    ["day",   "din"],
    ["eye",   "akh"],
    ["fact",  "sachai"],
    ["family",  "parivar"],
    ["government",  "sarkar"],
    ["group",   "toli"],
    ["hand",  "hath"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz3() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Nouns-2", header: "Nouns-2" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["home",  "ghar"],
    ["job",   "noukri"],
    ["life",  "zindgi"],
    ["lot",   "bahut"],
    ["man",   "aadmi"],
    ["money",   "paisa"],
    ["month",   "mahina"],
    ["mother",  "maa"],
    ["mr",  "sri"],
    ["night",   "raat"],
    ["number",  "ankda"],
    ["part",  "hissa"],
    ["people",  "lok"],
    ["place",   "jagah"],
    ["point",   "mudda"],
    ["problem",   "musibat"],
    ["program",   "program"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz4() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Nouns-3", header: "Nouns-3" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["question",  "sawaal"],
    ["right",   "sajja"],
    ["room",  "kamra"],
    ["school",  "school"],
    ["state",   "suba"],
    ["story",   "kahani"],
    ["student", "viarthi"],
    ["study",   "padai"],
    ["system",  "system"],
    ["thing",   "cheez"],
    ["time",  "samah"],
    ["water",   "paani"],
    ["way",   "rasta"],
    ["week",  "hafta"],
    ["woman",   "aurat"],
    ["word",  "shabad"],
    ["work",  "kamm"],
    ["world",   "dunia"],
    ["year",  "saal"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz5() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Verbs-1", header: "Verbs-1" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["ask",   "puchh"],
    ["be",    "hai"],
    ["become",  "ban"],
    ["begin",   "shuru"],
    ["call",  "bula"],
    ["can",   "sakda"],
    ["come",  "aa"],
    ["could",   "sakda-si"],
    ["do",    "kar"],
    ["feel",  "mehsoos"],
    ["find",  "labh"],
    ["get",   "lei"],
    ["give",  "de"],
    ["go",    "ja"],
    ["have",  "lei"],
    ["hear",  "sun"],
    ["help",  "madad"],
    ["keep",  "rakh"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz6() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Verbs-2", header: "Verbs-2" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["know",  "jaan"],
    ["leave",   "chhad"],
    ["let",   "rehen-de"],
    ["like",  "tarah"],
    ["live",  "ji"],
    ["look",  "dekh"],
    ["make",  "bana"],
    ["may",   "ho sakda"],
    ["mean",  "mean"],
    ["might",   "ho sakda"],
    ["move",  "hil"],
    ["need",  "chahida"],
    ["play",  "khed"],
    ["put",   "rakh"],
    ["run",   "bhaj"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz7() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Verbs-3", header: "Verbs-3" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["say",   "keh"],
    ["see",   "dekh"],
    ["seem",  "lagda"],
    ["should",  "karna-chahida"],
    ["show",  "dikha"],
    ["start",   "shuruat"],
    ["take",  "lei"],
    ["talk",  "gal-kar"],
    ["tell",  "dass"],
    ["think",   "soch"],
    ["try",   "koshish"],
    ["turn",  "ghum"],
    ["use",   "vart"],
    ["want",  "chah"],
    ["will",  "karuga"],
    ["work",  "kar"],
    ["would",   "hovega"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz8() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Pronouns", header: "Pronouns" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["it",    "eh"],
    ["I",     "mein"],
    ["you",   "tusi"],
    ["he",    "oh"],
    ["they",  "oh"],
    ["we",    "asi"],
    ["she",   "oh"],
    ["who",   "kaun"],
    ["them",  "ohna"],
    ["me",    "meinu"],
    ["him",   "ohna"],
    ["one",   "koi"],
    ["her",   "oh"],
    ["us",    "saanu"],
    ["something",   "kush"],
    ["nothing",   "kush-ni"],
    ["anything",  "kush-vi"],
    ["himself",   "aap"],
    ["everything",  "sabh-kush"],
    ["someone",   "koi"],
    ["themselves",  "oh-aap"],
    ["everyone",  "har-koi"],
    ["itself",  "eh-hi"],
    ["anyone",  "koi-vi"],
    ["myself",  "mein-vi"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz9() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Adverbs", header: "Adverbs" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["up",  "utte"],
    ["so",  "ta"],
    ["out", "bahar"],
    ["just",  "huney"],
    ["now", "hun"],
    ["how", "kiven"],
    ["then",  "fir"],
    ["more",  "hor"],
    ["also",  "vi"],
    ["here",  "ithey"],
    ["well",  "changa"],
    ["only",  "sirf"],
    ["very",  "bahut"],
    ["even",  "barabar"],
    ["back",  "pichchey"],
    ["there", "othey"],
    ["down",  "thalle"],
    ["still", "haale-vi"],
    ["in",  "vish"],
    ["as",  "jiven"],
    ["too", "vi"],
    ["when",  "kadon"],
    ["never", "kade-na"],
    ["really",  "achcha"],
    ["most",  "jiada"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz10() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Adjectives-1", header: "Adjectives-1" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["able",  "kabil"],
    ["bad",   "bura"],
    ["best",  "vadhia"],
    ["better",  "behtar"],
    ["big",   "vadda"],
    ["black",   "kaala"],
    ["certain", "kujh"],
    ["clear",   "saaf"],
    ["different",   "alag"],
    ["early",   "jaldi"],
    ["easy",  "sokha"],
    ["economic", "arthic"],
    ["federal", "kendri"],
    ["free",  "muft"],
    ["full",  "bharia"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz11() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Adjectives-2", header: "Adjectives-2" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["good",  "changa"],
    ["great",   "mahaan"],
    ["hard",  "sakht"],
    ["high",  "ucha"],
    ["human",   "insaan"],
    ["important",   "khas"],
    ["international",   "antarrashtri"],
    ["large",   "lamba"],
    ["late",  "der-naal"],
    ["little",  "thorha"],
    ["local",   "sathanak"],
    ["long",  "lamba"],
    ["low",   "nivan"],
    ["major",   "vadda"],
    ["military",  "fauj"],
    ["national",  "rashtri"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz12() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Adjectives-3", header: "Adjectives-3" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["new",   "navan"],
    ["old",   "purana"],
    ["only",  "sirf"],
    ["other",   "doosra"],
    ["political",   "rajsi"],
    ["possible",  "sambhav"],
    ["public",  "jantak"],
    ["real",  "asli"],
    ["recent",  "hala-hi"],
    ["right",   "theek"],
    ["small",   "chhotta"],
    ["social",  "samajik"],
    ["special", "khaas"],
    ["strong",  "takda"],
    ["sure",  "yakeenan"],
    ["true",  "sach"],
    ["white",   "chitta"],
    ["whole",   "poora"],
    ["young",   "javan"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz13() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Determiners", header: "Determiners" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["a",     "ik"],
    ["an",    "ik"],
    ["the",   "khaas"],
    ["this",  "eh"],
    ["that",  "oh"],
    ["these", "eh"],
    ["those", "oh"],
    ["my",    "mera/meri"],
    ["her",   "oh"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz14() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Prepositions", header: "Prepositions" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["of",  "da"],
    ["in",  "vich"],
    ["to",  "nu"],
    ["for", "lai"],
    ["with","naal"],
    ["on",  "utte"],
    ["at",  "te"],
    ["from",  "ton"],
    ["by",  "ne"],
    ["about", "baare"],
    ["as",  "vaang"],
    ["into",  "vich"],
    ["like",  "tarah"],
    ["through", "vich-di"],
    ["after", "baad"],
    ["over",  "utte"],
    ["between", "vichale"],
    ["out", "bahar"],
    ["against", "virodh"],
    ["during",  "vichkar"],
    ["without", "bina"],
    ["before",  "pehlan"],
    ["under", "thalle"],
    ["around",  "aas-paas"],
    ["among", "vich"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz16() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Conjunctions", header: "Conjunctions" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["and",   "te"],
    ["that",  "oh"],
    ["but",   "par"],
    ["or",    "jaan"],
    ["as",    "jiven"],
    ["if",    "je"],
    ["when",  "jadon"],
    ["than",  "ton"],
    ["because", "kiyonke"],
    ["while", "jadon"],
    ["where", "jithe"],
    ["after", "baad"],
    ["so",    "taan-ki"],
    ["though",  "jad-ki"],
    ["since", "jad-ton"],
    ["until", "tad-tak"],
    ["whether", "bhaven"],
    ["before",  "pehla"],
    ["although",  "halan-ki"],
    ["nor",   "na-hi"],
    ["like",  "tarah"],
    ["once",  "ik-vaari"],
    ["unless",  "ton-bina"],
    ["now",   "hunh"],
    ["except",  "sivaye"],
  ], options);
  return {info, quiz};
}

function content_quizzes2_quiz18() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Interjections", header: "Interjections" };
  let options = { random: true, count: [14] };
  let quiz = build_choices([
    ["yes", "haan"],
    ["oh",  "oh"],
    ["yeah",  "haan"],
    ["no",  "nahi"],
    ["hey", "oye"],
    ["hi",  "hanji"],
    ["hello", "hanji"],
    ["hmm", "hmm"],
    ["ah",  "ah"],
    ["wow", "balle"],
  ], options);
  return {info, quiz};
}


// function build_choices(data, options) {
//   if(options.count) {
//     data = data.slice(0, options.count[0]);
//   }
//   let choices = [], index = 0;
//   for(let row of data) {
//     choices.push(row[1])
//   }
//   for(let row of data) {
//     this_choices = choices.slice(0);
//     remove_item(row[1], this_choices);
//     this_choices = shuffle(this_choices);
//     this_choices.unshift(row[1]);
//     this_choices = this_choices.slice(0, MAX_CHOICES);
//     this_choices = shuffle(this_choices);
//     row[4] = row[2];
//     row[2] = this_choices.slice(0, MAX_CHOICES);
//     row[3] = index++;
//   }
//   if(options.random) data = shuffle(data);
//   return data;
// }
// function remove_item(item, list) {
//   let index = list.indexOf(item);
//   if(index < 0) return list;
//   list.splice(index, 1);
//   return list;
// }
// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// module.exports.quizzes2 = quizzes2;
