// quizzes3
// let MAX_CHOICES = 4;
// let MAX_QUIZES = 10;
let quizzes3 = [];
quizzes3.push(content_quizzes3_quiz1());
quizzes3.push(content_quizzes3_quiz2());
quizzes3.push(content_quizzes3_quiz3());
quizzes3.push(content_quizzes3_quiz4());
quizzes3.push(content_quizzes3_quiz5());
quizzes3.push(content_quizzes3_quiz6());
quizzes3.push(content_quizzes3_quiz7());
quizzes3.push(content_quizzes3_quiz8());
quizzes3.push(content_quizzes3_quiz9());
quizzes3.push(content_quizzes3_quiz10());
quizzes3.push(content_quizzes3_quiz11());
quizzes3.push(content_quizzes3_quiz12());
quizzes3.push(content_quizzes3_quiz13());
quizzes3.push(content_quizzes3_quiz14());
quizzes3.push(content_quizzes3_quiz15());
quizzes3.push(content_quizzes3_quiz16());


function content_quizzes3_quiz1() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]", header: "Verb-[be]" };
  let options = { random: true, count: [12] };
  let quiz = build_choices([
    ["it was",  "eh si"],
    ["it is", "eh hai"],
    ["it will be",  "eh hovey_ga"],
    ["i was", "mein si"],
    ["i am",  "mein haan"],
    ["i will be", "mein hovaan_ga"],
    ["you were",  "tusi si"],
    ["you are", "tusi ho"],
    ["you will be", "tusi hovo_ge"],
    ["he was",  "oh si"],
    ["he is", "oh hai"],
    ["he will be",  "oh hovey_ga"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz2() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]-2", header: "Verb-[be]-2" };
  let options = { random: true, count: [12] };
  let quiz = build_choices([
    ["they were", "oh si"],
    ["they are",  "oh han"],
    ["they will be",  "oh hovun_ge"],
    ["we were", "asi si"],
    ["we are",  "asi haan"],
    ["we will be",  "asi hovaan_ge"],
    ["she was", "oh si"],
    ["she is",  "oh hai"],
    ["she will be", "oh hovey_gi"],
    ["it was",  "eh si"],
    ["it is", "eh hai"],
    ["it will be",  "eh hovey_ga"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz3() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [9] };
  let quiz = build_choices([
    ["it had",  "iss kol_si"],
    ["it has",  "iss kol_hai"],
    ["it will have",  "iss kol_hovey_ga"],
    ["i had", "mere kol_si"],
    ["i have",  "mere kol_hai"],
    ["i will have", "mere kol_hovey_ga"],
    ["you had", "tuhadey kol_si"],
    ["you have",  "tuhadey kol_hai"],
    ["you will have", "tuhadey kol_hovey_ga"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz4() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-2", header: "Verb-[have]-2" };
  let options = { random: true, count: [12] };
  let quiz = build_choices([
    ["he had",  "oh_de kol_si"],
    ["he has",  "oh_de kol_hai"],
    ["he will have",  "oh_de kol hovey_ga"],
    ["they had",  "ohna_de kol_si"],
    ["they have", "ohna_de kol_hai"],
    ["they will have",  "ohna_de kol_hovey_ga"],
    ["we had",  "saadey kol_si"],
    ["we have", "saadey kol_hai"],
    ["we will have",  "saadey kol_hovey_ga"],
    ["she had",  "oh_de kol_si"],
    ["she has",  "oh_de kol_hai"],
    ["she will have",  "oh_de kol hovey_ga"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz5() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[do]", header: "Verb-[do]" };
  let options = { random: true, count: [9] };
  let quiz = build_choices([
    ["it did",  "isney keeta"],
    ["it does", "eh karda hai"],
    ["it will do",  "eh karda vega"],
    ["i did", "mein keeta"],
    ["i do",  "mein kardey haan"],
    ["i will do", "mein karda vaange"],
    ["you did", "tusi keeta"],
    ["you do",  "tusi kardey ho"],
    ["you will do", "tusi karda vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz6() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[do]-2", header: "Verb-[do]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he did",  "oh keeta"],
    ["he does", "oh karda hai"],
    ["he will do",  "oh karda vega"],
    ["they did",  "oh keeta"],
    ["they do", "oh kardey han"],
    ["they will do",  "oh karda vaange"],
    ["we did",  "asi keeta"],
    ["we do", "asi kardey haan"],
    ["we will do",  "asi karda vaange"],
    ["she did", "oh keeta"],
    ["she does",  "oh kardi hai"],
    ["she will do", "oh karda vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz7() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say]", header: "Verb-[say]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it said", "eh kiha"],
    ["it says", "eh kehnda hai"],
    ["it will say", "eh keh vega"],
    ["i said",  "mein kiha"],
    ["i say", "mein kenhdey haan"],
    ["i will say",  "mein keh vaange"],
    ["you said",  "tusi kiha"],
    ["you say", "tusi kenhdey ho"],
    ["you will say",  "tusi keh vaange"],
    ["he said", "oh kiha"],
    ["he says", "oh kehnda hai"],
    ["he will say", "oh keh vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz8() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say]-2", header: "Verb-[say]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they said", "oh kiha"],
    ["they say",  "oh kenhdey han"],
    ["they will say", "oh keh vaange"],
    ["we said", "asi kiha"],
    ["we say",  "asi kenhdey haan"],
    ["we will say", "asi keh vaange"],
    ["she said",  "oh kiha"],
    ["she says",  "oh kehndi hai"],
    ["she will say",  "oh keh vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz9() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]-2", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got",  "eh liaia"],
    ["it gets", "eh liaunda hai"],
    ["it will get", "eh lia vega"],
    ["i got", "mein liaye"],
    ["i get", "mein liaundey haan"],
    ["i will get",  "mein lia vaange"],
    ["you got", "tusi liaye"],
    ["you get", "tusi liaundey ho"],
    ["you will get",  "tusi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz10() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]-2", header: "Verb-[get]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got",  "oh liaia"],
    ["he gets", "oh liaunda hai"],
    ["he will get", "oh lia vega"],
    ["they got",  "oh liaye"],
    ["they get",  "oh liaundey han"],
    ["they will get", "oh lia vaange"],
    ["we got",  "asi liaye"],
    ["we get",  "asi liaundey haan"],
    ["we will get", "asi lia vaange"],
    ["she got", "oh liaii"],
    ["she gets",  "oh liaundi hai"],
    ["she will get",  "oh lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz11() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it made", "eh banaiya"],
    ["it makes",  "eh banaunda hai"],
    ["it will make",  "eh bana vega"],
    ["i made",  "mein banaiya"],
    ["i make",  "mein banaundey haan"],
    ["i will make", "mein bana vaange"],
    ["you made",  "tusi banaiya"],
    ["you make",  "tusi banaundey ho"],
    ["you will make", "tusi bana vaange"],
    ["he made", "oh banaiya"],
    ["he makes",  "oh banaunda hai"],
    ["he will make",  "oh bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz12() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]-2", header: "Verb-[make]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they made", "oh banaiya"],
    ["they make", "oh banaundey han"],
    ["they will make",  "oh bana vaange"],
    ["we made", "asi banaiya"],
    ["we make", "asi banaundey haan"],
    ["we will make",  "asi bana vaange"],
    ["she made",  "oh banaiya"],
    ["she makes", "oh banaundi hai"],
    ["she will make", "oh bana vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz13() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it went to",  "eh giya"],
    ["it goes to",  "eh janda hai"],
    ["it will go to", "eh ja vega"],
    ["i went to", "mein gaye"],
    ["i go to", "mein jandey haan"],
    ["i will go to",  "mein ja vaange"],
    ["you went to", "tusi gaye"],
    ["you go to", "tusi jandey ho"],
    ["you will go to",  "tusi ja vaange"],
    ["he went to",  "oh giya"],
    ["he goes to",  "oh janda hai"],
    ["he will go to", "oh ja vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz14() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]-2", header: "Verb-[go]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they went to",  "oh gaye"],
    ["they go to",  "oh jandey han"],
    ["they will go to", "oh ja vaange"],
    ["we went to",  "asi gaye"],
    ["we go to",  "asi jandey haan"],
    ["we will go to", "asi ja vaange"],
    ["she went to", "oh gayi"],
    ["she goes to", "oh jandi hai"],
    ["she will go to",  "oh ja vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz15() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[know]", header: "Verb-[know]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it knew", "eh jaaneya"],
    ["it knows",  "eh jaanda hai"],
    ["it will know",  "eh jaan vega"],
    ["i knew",  "mein jaaneya"],
    ["i know",  "mein jaandey haan"],
    ["i will know", "mein jaan vaange"],
    ["you knew",  "tusi jaaneya"],
    ["you know",  "tusi jaandey ho"],
    ["you will know", "tusi jaan vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz16() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[know]-2", header: "Verb-[know]-2" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he knew", "oh jaaneya"],
    ["he knows",  "oh jaanda hai"],
    ["he will know",  "oh jaan vega"],
    ["they knew", "oh jaaneya"],
    ["they knows",  "oh jaanda hai"],
    ["they will know",  "oh jaan vega"],
    ["she knew", "oh jaaneya"],
    ["she knows",  "oh jaanda hai"],
    ["she will know",  "oh jaan vega"],
  ], options);
  return {info, quiz};
}


// function content_quizzes3_quiz1() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]", header: "Verb-[be]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["it was",	"eh si"],
//     ["it is",	"eh hai hai"],
//     ["it will be",	"eh hai vega"],
//     ["i were",	"mein si"],
//     ["i are",	"mein han haan"],
//     ["i will be",	"mein hai vaange"],
//     ["you were",	"tusi si"],
//     ["you are",	"tusi han ho"],
//     ["you will be",	"tusi hai vaange"],
//     ["he was",	"oh si"],
//     ["he is",	"oh hai hai"],
//     ["he will be",	"oh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz2() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]-2", header: "Verb-[be]-2" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they were",	"oh si"],
//     ["they are",	"oh han han"],
//     ["they will be",	"oh hai vaange"],
//     ["we were",	"asi si"],
//     ["we are",	"asi han haan"],
//     ["we will be",	"asi hai vaange"],
//     ["she was",	"oh si"],
//     ["she is",	"oh hai hai"],
//     ["she will be",	"oh hai vegi"],
//     ["it was",	"eh si"],
//     ["it is",	"eh hai hai"],
//     ["it will be",	"eh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz3() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]-3", header: "Verb-[be]-3" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["i were",	"mein si"],
//     ["i are",	"mein han haan"],
//     ["i will be",	"mein hai vaange"],
//     ["you were",	"tusi si"],
//     ["you are",	"tusi han ho"],
//     ["you will be",	"tusi hai vaange"],
//     ["he was",	"oh si"],
//     ["he is",	"oh hai hai"],
//     ["he will be",	"oh hai vega"],
//     ["they were",	"oh si"],
//     ["they are",	"oh han han"],
//     ["they will be",	"oh hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz4() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]-4", header: "Verb-[be]-4" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we were",	"asi si"],
//     ["we are",	"asi han haan"],
//     ["we will be",	"asi hai vaange"],
//     ["she was",	"oh si"],
//     ["she is",	"oh hai hai"],
//     ["she will be",	"oh hai vegi"],
//     ["it was",	"eh si"],
//     ["it is",	"eh hai hai"],
//     ["it will be",	"eh hai vega"],
//     ["i were",	"mein si"],
//     ["i are",	"mein han haan"],
//     ["i will be",	"mein hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz5() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be]-5", header: "Verb-[be]-5" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["you were",	"tusi si"],
//     ["you are",	"tusi han ho"],
//     ["you will be",	"tusi hai vaange"],
//     ["he was",	"oh si"],
//     ["he is",	"oh hai hai"],
//     ["he will be",	"oh hai vega"],
//     ["they were",	"oh si"],
//     ["they are",	"oh han han"],
//     ["they will be",	"oh hai vaange"],
//     ["we were",	"asi si"],
//     ["we are",	"asi han haan"],
//     ["we will be",	"asi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz6() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[be,have]", header: "Verb-[be,have]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she was",	"oh si"],
//     ["she is",	"oh hai hai"],
//     ["she will be",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz7() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-2", header: "Verb-[have]-2" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz8() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-3", header: "Verb-[have]-3" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz9() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-4", header: "Verb-[have]-4" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz10() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-5", header: "Verb-[have]-5" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz11() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-6", header: "Verb-[have]-6" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz12() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-7", header: "Verb-[have]-7" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz13() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-8", header: "Verb-[have]-8" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz14() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-9", header: "Verb-[have]-9" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz15() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-10", header: "Verb-[have]-10" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz16() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-11", header: "Verb-[have]-11" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz17() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-12", header: "Verb-[have]-12" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz18() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-13", header: "Verb-[have]-13" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz19() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-14", header: "Verb-[have]-14" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//     ["he had",	"oh kol_si"],
//     ["he has",	"oh kol_hai hai"],
//     ["he will have",	"oh hai vega"],
//     ["they had",	"oh kol_si"],
//     ["they have",	"oh kol_hai han"],
//     ["they will have",	"oh hai vaange"],
//     ["we had",	"asi kol_si"],
//     ["we have",	"asi kol_hai haan"],
//     ["we will have",	"asi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

// function content_quizzes3_quiz20() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]-15", header: "Verb-[have]-15" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had",	"oh kol_si"],
//     ["she has",	"oh kol_hai hai"],
//     ["she will have",	"oh hai vegi"],
//     ["it had",	"eh kol_si"],
//     ["it has",	"eh kol_hai hai"],
//     ["it will have",	"eh hai vega"],
//     ["i had",	"mein kol_si"],
//     ["i have",	"mein kol_hai haan"],
//     ["i will have",	"mein hai vaange"],
//     ["you had",	"tusi kol_si"],
//     ["you have",	"tusi kol_hai ho"],
//     ["you will have",	"tusi hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes3_quiz21() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz22() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz23() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz24() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz25() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz26() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz27() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz28() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz29() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz30() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz31() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz32() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it had",	"eh kol_si"],
    ["it has",	"eh kol_hai hai"],
    ["it will have",	"eh hai vega"],
    ["i had",	"mein kol_si"],
    ["i have",	"mein kol_hai haan"],
    ["i will have",	"mein hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz33() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have]", header: "Verb-[have]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you had",	"tusi kol_si"],
    ["you have",	"tusi kol_hai ho"],
    ["you will have",	"tusi hai vaange"],
    ["he had",	"oh kol_si"],
    ["he has",	"oh kol_hai hai"],
    ["he will have",	"oh hai vega"],
    ["they had",	"oh kol_si"],
    ["they have",	"oh kol_hai han"],
    ["they will have",	"oh hai vaange"],
    ["we had",	"asi kol_si"],
    ["we have",	"asi kol_hai haan"],
    ["we will have",	"asi hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz34() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[have,do]", header: "Verb-[have,do]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she had",	"oh kol_si"],
    ["she has",	"oh kol_hai hai"],
    ["she will have",	"oh hai vegi"],
    ["it did",	"eh keeta"],
    ["it does",	"eh karda hai"],
    ["it will do",	"eh karda vega"],
    ["i did",	"mein keeta"],
    ["i do",	"mein kardey haan"],
    ["i will do",	"mein karda vaange"],
    ["you did",	"tusi keeta"],
    ["you do",	"tusi kardey ho"],
    ["you will do",	"tusi karda vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz35() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[do]", header: "Verb-[do]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he did",	"oh keeta"],
    ["he does",	"oh karda hai"],
    ["he will do",	"oh karda vega"],
    ["they did",	"oh keeta"],
    ["they do",	"oh kardey han"],
    ["they will do",	"oh karda vaange"],
    ["we did",	"asi keeta"],
    ["we do",	"asi kardey haan"],
    ["we will do",	"asi karda vaange"],
    ["she did",	"oh keeta"],
    ["she does",	"oh kardi hai"],
    ["she will do",	"oh karda vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz36() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[do]", header: "Verb-[do]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it did",	"eh keeta"],
    ["it does",	"eh karda hai"],
    ["it will do",	"eh karda vega"],
    ["i did",	"mein keeta"],
    ["i do",	"mein kardey haan"],
    ["i will do",	"mein karda vaange"],
    ["you did",	"tusi keeta"],
    ["you do",	"tusi kardey ho"],
    ["you will do",	"tusi karda vaange"],
    ["he did",	"oh keeta"],
    ["he does",	"oh karda hai"],
    ["he will do",	"oh karda vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz37() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[do,say]", header: "Verb-[do,say]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they did",	"oh keeta"],
    ["they do",	"oh kardey han"],
    ["they will do",	"oh karda vaange"],
    ["we did",	"asi keeta"],
    ["we do",	"asi kardey haan"],
    ["we will do",	"asi karda vaange"],
    ["she did",	"oh keeta"],
    ["she does",	"oh kardi hai"],
    ["she will do",	"oh karda vegi"],
    ["it said",	"eh kiha"],
    ["it says",	"eh kehnda hai"],
    ["it will say",	"eh keh vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz38() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say]", header: "Verb-[say]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i said",	"mein kiha"],
    ["i say",	"mein kenhdey haan"],
    ["i will say",	"mein keh vaange"],
    ["you said",	"tusi kiha"],
    ["you say",	"tusi kenhdey ho"],
    ["you will say",	"tusi keh vaange"],
    ["he said",	"oh kiha"],
    ["he says",	"oh kehnda hai"],
    ["he will say",	"oh keh vega"],
    ["they said",	"oh kiha"],
    ["they say",	"oh kenhdey han"],
    ["they will say",	"oh keh vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz39() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say]", header: "Verb-[say]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we said",	"asi kiha"],
    ["we say",	"asi kenhdey haan"],
    ["we will say",	"asi keh vaange"],
    ["she said",	"oh kiha"],
    ["she says",	"oh kehndi hai"],
    ["she will say",	"oh keh vegi"],
    ["it said",	"eh kiha"],
    ["it says",	"eh kehnda hai"],
    ["it will say",	"eh keh vega"],
    ["i said",	"mein kiha"],
    ["i say",	"mein kenhdey haan"],
    ["i will say",	"mein keh vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz40() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say]", header: "Verb-[say]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you said",	"tusi kiha"],
    ["you say",	"tusi kenhdey ho"],
    ["you will say",	"tusi keh vaange"],
    ["he said",	"oh kiha"],
    ["he says",	"oh kehnda hai"],
    ["he will say",	"oh keh vega"],
    ["they said",	"oh kiha"],
    ["they say",	"oh kenhdey han"],
    ["they will say",	"oh keh vaange"],
    ["we said",	"asi kiha"],
    ["we say",	"asi kenhdey haan"],
    ["we will say",	"asi keh vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz41() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[say,get]", header: "Verb-[say,get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she said",	"oh kiha"],
    ["she says",	"oh kehndi hai"],
    ["she will say",	"oh keh vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz42() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz43() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz44() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz45() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz46() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz47() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz48() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz49() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz50() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz51() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz52() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz53() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz54() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz55() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz56() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz57() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz58() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz59() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz60() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz61() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz62() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
    ["it got",	"eh liaia"],
    ["it gets",	"eh liaunda hai"],
    ["it will get",	"eh lia vega"],
    ["i got",	"mein liaye"],
    ["i get",	"mein liaundey haan"],
    ["i will get",	"mein lia vaange"],
    ["you got",	"tusi liaye"],
    ["you get",	"tusi liaundey ho"],
    ["you will get",	"tusi lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz63() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[get]", header: "Verb-[get]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got",	"oh liaia"],
    ["he gets",	"oh liaunda hai"],
    ["he will get",	"oh lia vega"],
    ["they got",	"oh liaye"],
    ["they get",	"oh liaundey han"],
    ["they will get",	"oh lia vaange"],
    ["we got",	"asi liaye"],
    ["we get",	"asi liaundey haan"],
    ["we will get",	"asi lia vaange"],
    ["she got",	"oh liaii"],
    ["she gets",	"oh liaundi hai"],
    ["she will get",	"oh lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz64() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz65() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz66() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz67() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz68() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz69() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz70() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz71() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz72() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
    ["it made",	"eh banaiya"],
    ["it makes",	"eh banaunda hai"],
    ["it will make",	"eh bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz73() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make]", header: "Verb-[make]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i made",	"mein banaiya"],
    ["i make",	"mein banaundey haan"],
    ["i will make",	"mein bana vaange"],
    ["you made",	"tusi banaiya"],
    ["you make",	"tusi banaundey ho"],
    ["you will make",	"tusi bana vaange"],
    ["he made",	"oh banaiya"],
    ["he makes",	"oh banaunda hai"],
    ["he will make",	"oh bana vega"],
    ["they made",	"oh banaiya"],
    ["they make",	"oh banaundey han"],
    ["they will make",	"oh bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz74() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[make,go]", header: "Verb-[make,go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we made",	"asi banaiya"],
    ["we make",	"asi banaundey haan"],
    ["we will make",	"asi bana vaange"],
    ["she made",	"oh banaiya"],
    ["she makes",	"oh banaundi hai"],
    ["she will make",	"oh bana vegi"],
    ["it went to",	"eh giya"],
    ["it goes to",	"eh janda hai"],
    ["it will go to",	"eh ja vega"],
    ["i went to",	"mein gaye"],
    ["i go to",	"mein jandey haan"],
    ["i will go to",	"mein ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz75() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you went to",	"tusi gaye"],
    ["you go to",	"tusi jandey ho"],
    ["you will go to",	"tusi ja vaange"],
    ["he went to",	"oh giya"],
    ["he goes to",	"oh janda hai"],
    ["he will go to",	"oh ja vega"],
    ["they went to",	"oh gaye"],
    ["they go to",	"oh jandey han"],
    ["they will go to",	"oh ja vaange"],
    ["we went to",	"asi gaye"],
    ["we go to",	"asi jandey haan"],
    ["we will go to",	"asi ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz76() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she went to",	"oh gayi"],
    ["she goes to",	"oh jandi hai"],
    ["she will go to",	"oh ja vegi"],
    ["it went to",	"eh giya"],
    ["it goes to",	"eh janda hai"],
    ["it will go to",	"eh ja vega"],
    ["i went to",	"mein gaye"],
    ["i go to",	"mein jandey haan"],
    ["i will go to",	"mein ja vaange"],
    ["you went to",	"tusi gaye"],
    ["you go to",	"tusi jandey ho"],
    ["you will go to",	"tusi ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz77() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he went to",	"oh giya"],
    ["he goes to",	"oh janda hai"],
    ["he will go to",	"oh ja vega"],
    ["they went to",	"oh gaye"],
    ["they go to",	"oh jandey han"],
    ["they will go to",	"oh ja vaange"],
    ["we went to",	"asi gaye"],
    ["we go to",	"asi jandey haan"],
    ["we will go to",	"asi ja vaange"],
    ["she went to",	"oh gayi"],
    ["she goes to",	"oh jandi hai"],
    ["she will go to",	"oh ja vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz78() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it went to",	"eh giya"],
    ["it goes to",	"eh janda hai"],
    ["it will go to",	"eh ja vega"],
    ["i went to",	"mein gaye"],
    ["i go to",	"mein jandey haan"],
    ["i will go to",	"mein ja vaange"],
    ["you went to",	"tusi gaye"],
    ["you go to",	"tusi jandey ho"],
    ["you will go to",	"tusi ja vaange"],
    ["he went to",	"oh giya"],
    ["he goes to",	"oh janda hai"],
    ["he will go to",	"oh ja vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz79() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they went to",	"oh gaye"],
    ["they go to",	"oh jandey han"],
    ["they will go to",	"oh ja vaange"],
    ["we went to",	"asi gaye"],
    ["we go to",	"asi jandey haan"],
    ["we will go to",	"asi ja vaange"],
    ["she went to",	"oh gayi"],
    ["she goes to",	"oh jandi hai"],
    ["she will go to",	"oh ja vegi"],
    ["it went to",	"eh giya"],
    ["it goes to",	"eh janda hai"],
    ["it will go to",	"eh ja vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz80() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i went to",	"mein gaye"],
    ["i go to",	"mein jandey haan"],
    ["i will go to",	"mein ja vaange"],
    ["you went to",	"tusi gaye"],
    ["you go to",	"tusi jandey ho"],
    ["you will go to",	"tusi ja vaange"],
    ["he went to",	"oh giya"],
    ["he goes to",	"oh janda hai"],
    ["he will go to",	"oh ja vega"],
    ["they went to",	"oh gaye"],
    ["they go to",	"oh jandey han"],
    ["they will go to",	"oh ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz81() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we went to",	"asi gaye"],
    ["we go to",	"asi jandey haan"],
    ["we will go to",	"asi ja vaange"],
    ["she went to",	"oh gayi"],
    ["she goes to",	"oh jandi hai"],
    ["she will go to",	"oh ja vegi"],
    ["it went with",	"eh naal giya"],
    ["it goes with",	"eh naal janda hai"],
    ["it will go with",	"eh naal ja vega"],
    ["i went with",	"mein naal gaye"],
    ["i go with",	"mein naal jandey haan"],
    ["i will go with",	"mein naal ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz82() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go]", header: "Verb-[go]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you went with",	"tusi naal gaye"],
    ["you go with",	"tusi naal jandey ho"],
    ["you will go with",	"tusi naal ja vaange"],
    ["he went with",	"oh naal giya"],
    ["he goes with",	"oh naal janda hai"],
    ["he will go with",	"oh naal ja vega"],
    ["they went with",	"oh naal gaye"],
    ["they go with",	"oh naal jandey han"],
    ["they will go with",	"oh naal ja vaange"],
    ["we went with",	"asi naal gaye"],
    ["we go with",	"asi naal jandey haan"],
    ["we will go with",	"asi naal ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz83() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[go,know]", header: "Verb-[go,know]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she went with",	"oh naal gayi"],
    ["she goes with",	"oh naal jandi hai"],
    ["she will go with",	"oh naal ja vegi"],
    ["it knew",	"eh jaaneya"],
    ["it knows",	"eh jaanda hai"],
    ["it will know",	"eh jaan vega"],
    ["i knew",	"mein jaaneya"],
    ["i know",	"mein jaandey haan"],
    ["i will know",	"mein jaan vaange"],
    ["you knew",	"tusi jaaneya"],
    ["you know",	"tusi jaandey ho"],
    ["you will know",	"tusi jaan vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes3_quiz84() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Verb-[know]", header: "Verb-[know]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he knew",	"oh jaaneya"],
    ["he knows",	"oh jaanda hai"],
    ["he will know",	"oh jaan vega"],
    ["they knew",	"oh jaaneya"],
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

// module.exports.quizzes3 = quizzes3;
// 	