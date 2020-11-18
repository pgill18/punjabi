// quizzes4
// let MAX_CHOICES = 4;
// let MAX_QUIZES = 10;
let quizzes4 = [];
quizzes4.push(content_quizzes4_quiz1());
// quizzes4.push(content_quizzes4_quiz2());
quizzes4.push(content_quizzes4_quiz3());
// quizzes4.push(content_quizzes4_quiz4());
quizzes4.push(content_quizzes4_quiz5());
quizzes4.push(content_quizzes4_quiz6());
// quizzes4.push(content_quizzes4_quiz7());
quizzes4.push(content_quizzes4_quiz8());
// quizzes4.push(content_quizzes4_quiz9());
quizzes4.push(content_quizzes4_quiz10());
// quizzes4.push(content_quizzes4_quiz11());
quizzes4.push(content_quizzes4_quiz12());
// quizzes4.push(content_quizzes4_quiz13());
quizzes4.push(content_quizzes4_quiz14());
quizzes4.push(content_quizzes4_quiz15());
// quizzes4.push(content_quizzes4_quiz16());
quizzes4.push(content_quizzes4_quiz17());


function content_quizzes4_quiz1() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Simple-[man]", header: "Simple-[man]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it was a man",	"[eh] ik aadmi si"],
    ["it is a man",	"[eh] ik aadmi hai"],
    ["it will be a man",	"[eh] ik aadmi hovey_ga"],
    // ["i was a man",	"mein ik aadmi si"],
    ["i am a man",	"mein ik aadmi haan"],
    ["i will be a man",	"mein ik aadmi hovaan_ga"],
    ["you were two men",	"tusi doh aadmi si"],
    ["you are two men",	"tusi doh aadmi ho"],
    ["you will be two men",	"tusi doh aadmi hovo_ge"],
    ["he was a man",	"oh [ik] aadmi si"],
    ["he is a man",	"oh [ik] aadmi hai"],
    ["he will be a man",	"oh [ik] aadmi hovey_ga"],
    ["they were two men", "oh doh aadmi si"],
    ["they are two men",  "oh doh aadmi han"],
    ["they will be two men",  "oh doh aadmi hovun_ge"],
    ["we were two men", "asi doh aadmi si"],
    ["we are two men",  "asi doh aadmi haan"],
    ["we will be two men",  "asi doh aadmi hovaan_ge"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz2() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Simple-[man,child]", header: "Simple-[man,child]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz3() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Simple-[child]", header: "Simple-[child]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it was a child",  "[eh] ik bachcha si"],
    ["it is a child", "[eh] ik bachcha hai"],
    ["it will be a child",  "[eh] ik bachcha hovey_ga"],
    ["i was a child",	"mein doh bachchey si"],
    ["i am a child",	"mein doh bachchey han haan"],
    ["i will be a child",	"mein doh bachchey hai vaange"],
    ["you were two children",	"tusi doh bachchey si"],
    ["you are two children",	"tusi doh bachchey han ho"],
    ["you will be two children",	"tusi doh bachchey hai vaange"],
    ["he was a child",	"oh ik bachcha si"],
    ["he is a child",	"oh ik bachcha hai hai"],
    ["he will be a child",	"oh ik bachcha hai vega"],
    ["they were two children",	"oh doh bachchey si"],
    ["they are two children",	"oh doh bachchey han han"],
    ["they will be two children",	"oh doh bachchey hai vaange"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz4() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Simple-[woman]", header: "Simple-[woman]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["it was two women",	"eh doh auratan si"],
//     ["it is two women",	"eh doh auratan hai hai"],
//     ["it will be two women",	"eh doh auratan hai vega"],
//     ["i were two women",	"mein doh auratan si"],
//     ["i are two women",	"mein doh auratan han haan"],
//     ["i will be two women",	"mein doh auratan hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz5() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Simple-[woman]", header: "Simple-[woman]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it was two women",  "eh doh auratan si"],
    ["it is two women", "eh doh auratan hai hai"],
    ["it will be two women",  "eh doh auratan hai vega"],
    ["i was a woman",  "mein doh auratan si"],
    ["i am a woman", "mein doh auratan han haan"],
    ["i will be a woman", "mein doh auratan hai vaange"],
    ["you were two women",	"tusi doh auratan si"],
    ["you are two women",	"tusi doh auratan han ho"],
    ["you will be two women",	"tusi doh auratan hai vaange"],
    ["she was a woman",	"oh aurat si"],
    ["she is a woman",	"oh aurat hai hai"],
    ["she will be a woman",	"oh aurat hai vega"],
    ["they were two women",	"oh doh auratan si"],
    ["they are two women",	"oh doh auratan han han"],
    ["they will be two women",	"oh doh auratan hai vaange"],
    ["we were two women",	"asi doh auratan si"],
    ["we are two women",	"asi doh auratan han haan"],
    ["we will be two women",	"asi doh auratan hai vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz6() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-be,have-[woman,time]", header: "Pvn-be,have-[woman,time]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    // ["she was a woman",	"oh ik aurat si"],
    // ["she is a woman",	"oh ik aurat hai hai"],
    // ["she will be a woman",	"oh ik aurat hai vegi"],
    ["it had time",	"eh samah kol_si"],
    ["it has time",	"eh samah kol_hai hai"],
    ["it will have time",	"eh samah hai vega"],
    ["i had time",	"mein samah kol_si"],
    ["i have time",	"mein samah kol_hai haan"],
    ["i will have time",	"mein samah hai vaange"],
    ["you had time",	"tusi samah kol_si"],
    ["you have time",	"tusi samah kol_hai ho"],
    ["you will have time",	"tusi samah hai vaange"],
    ["he had time", "oh samah kol_si"],
    ["he has time", "oh samah kol_hai hai"],
    ["he will have time", "oh samah hai vega"],
    ["they had time", "oh samah kol_si"],
    ["they have time",  "oh samah kol_hai han"],
    ["they will have time", "oh samah hai vaange"],
    ["we had time", "asi samah kol_si"],
    ["we have time",  "asi samah kol_hai haan"],
    ["we will have time", "asi samah hai vaange"],
    ["she had time",  "oh samah kol_si"],
    ["she has time",  "oh samah kol_hai hai"],
    ["she will have time",  "oh samah hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz7() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[time]", header: "Pvn-have-[time]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["he had time",	"oh samah kol_si"],
//     ["he has time",	"oh samah kol_hai hai"],
//     ["he will have time",	"oh samah hai vega"],
//     ["they had time",	"oh samah kol_si"],
//     ["they have time",	"oh samah kol_hai han"],
//     ["they will have time",	"oh samah hai vaange"],
//     ["we had time",	"asi samah kol_si"],
//     ["we have time",	"asi samah kol_hai haan"],
//     ["we will have time",	"asi samah hai vaange"],
//     ["she had time",	"oh samah kol_si"],
//     ["she has time",	"oh samah kol_hai hai"],
//     ["she will have time",	"oh samah hai vegi"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz8() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[year]", header: "Pvn-have-[year]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two years",	"eh doh saalan kol_si"],
    ["it has two years",	"eh doh saalan kol_hai hai"],
    ["it will have two years",	"eh doh saalan hai vega"],
    ["i had two years",	"mein doh saalan kol_si"],
    ["i have two years",	"mein doh saalan kol_hai haan"],
    ["i will have two years",	"mein doh saalan hai vaange"],
    ["you had a year",	"tusi ik saal kol_si"],
    ["you have a year",	"tusi ik saal kol_hai ho"],
    ["you will have a year",	"tusi ik saal hai vaange"],
    ["he had two years",	"oh doh saalan kol_si"],
    ["he has two years",	"oh doh saalan kol_hai hai"],
    ["he will have two years",	"oh doh saalan hai vega"],
    ["they had two years",  "oh doh saalan kol_si"],
    ["they have two years", "oh doh saalan kol_hai han"],
    ["they will have two years",  "oh doh saalan hai vaange"],
    ["we had two years",  "asi doh saalan kol_si"],
    ["we have two years", "asi doh saalan kol_hai haan"],
    ["we will have two years",  "asi doh saalan hai vaange"],
    ["she had two years", "oh doh saalan kol_si"],
    ["she has two years", "oh doh saalan kol_hai hai"],
    ["she will have two years", "oh doh saalan hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz9() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[year,way]", header: "Pvn-have-[year,way]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had two years",	"oh doh saalan kol_si"],
//     ["they have two years",	"oh doh saalan kol_hai han"],
//     ["they will have two years",	"oh doh saalan hai vaange"],
//     ["we had two years",	"asi doh saalan kol_si"],
//     ["we have two years",	"asi doh saalan kol_hai haan"],
//     ["we will have two years",	"asi doh saalan hai vaange"],
//     ["she had two years",	"oh doh saalan kol_si"],
//     ["she has two years",	"oh doh saalan kol_hai hai"],
//     ["she will have two years",	"oh doh saalan hai vegi"],
//     ["it had way",	"eh rasta kol_si"],
//     ["it has way",	"eh rasta kol_hai hai"],
//     ["it will have way",	"eh rasta hai vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz10() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[way]", header: "Pvn-have-[way]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had way",  "eh rasta kol_si"],
    ["it has way",  "eh rasta kol_hai hai"],
    ["it will have way",  "eh rasta hai vega"],
    ["i had way",	"mein rasta kol_si"],
    ["i have way",	"mein rasta kol_hai haan"],
    ["i will have way",	"mein rasta hai vaange"],
    ["you had way",	"tusi rasta kol_si"],
    ["you have way",	"tusi rasta kol_hai ho"],
    ["you will have way",	"tusi rasta hai vaange"],
    ["he had way",	"oh rasta kol_si"],
    ["he has way",	"oh rasta kol_hai hai"],
    ["he will have way",	"oh rasta hai vega"],
    ["they had way",	"oh rasta kol_si"],
    ["they have way",	"oh rasta kol_hai han"],
    ["they will have way",	"oh rasta hai vaange"],
    ["we had way",  "asi rasta kol_si"],
    ["we have way", "asi rasta kol_hai haan"],
    ["we will have way",  "asi rasta hai vaange"],
    ["she had way", "oh rasta kol_si"],
    ["she has way", "oh rasta kol_hai hai"],
    ["she will have way", "oh rasta hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz11() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[way,day]", header: "Pvn-have-[way,day]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had way",	"asi rasta kol_si"],
//     ["we have way",	"asi rasta kol_hai haan"],
//     ["we will have way",	"asi rasta hai vaange"],
//     ["she had way",	"oh rasta kol_si"],
//     ["she has way",	"oh rasta kol_hai hai"],
//     ["she will have way",	"oh rasta hai vegi"],
//     ["it had two days",	"eh doh dinan kol_si"],
//     ["it has two days",	"eh doh dinan kol_hai hai"],
//     ["it will have two days",	"eh doh dinan hai vega"],
//     ["i had two days",	"mein doh dinan kol_si"],
//     ["i have two days",	"mein doh dinan kol_hai haan"],
//     ["i will have two days",	"mein doh dinan hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz12() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[day]", header: "Pvn-have-[day]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two days", "eh doh dinan kol_si"],
    ["it has two days", "eh doh dinan kol_hai hai"],
    ["it will have two days", "eh doh dinan hai vega"],
    ["i had two days",  "mein doh dinan kol_si"],
    ["i have two days", "mein doh dinan kol_hai haan"],
    ["i will have two days",  "mein doh dinan hai vaange"],
    ["you had two days",	"tusi doh dinan kol_si"],
    ["you have two days",	"tusi doh dinan kol_hai ho"],
    ["you will have two days",	"tusi doh dinan hai vaange"],
    ["he had two days",	"oh doh dinan kol_si"],
    ["he has two days",	"oh doh dinan kol_hai hai"],
    ["he will have two days",	"oh doh dinan hai vega"],
    ["they had two days",	"oh doh dinan kol_si"],
    ["they have two days",	"oh doh dinan kol_hai han"],
    ["they will have two days",	"oh doh dinan hai vaange"],
    ["we had day",	"asi din kol_si"],
    ["we have day",	"asi din kol_hai haan"],
    ["we will have day",	"asi din hai vaange"],
    ["she had two days",  "oh doh dinan kol_si"],
    ["she has two days",  "oh doh dinan kol_hai hai"],
    ["she will have two days",  "oh doh dinan hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz13() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[day,thing]", header: "Pvn-have-[day,thing]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had two days",	"oh doh dinan kol_si"],
//     ["she has two days",	"oh doh dinan kol_hai hai"],
//     ["she will have two days",	"oh doh dinan hai vegi"],
//     ["it had two things",	"eh doh cheezan kol_si"],
//     ["it has two things",	"eh doh cheezan kol_hai hai"],
//     ["it will have two things",	"eh doh cheezan hai vega"],
//     ["i had a thing",	"mein ik cheez kol_si"],
//     ["i have a thing",	"mein ik cheez kol_hai haan"],
//     ["i will have a thing",	"mein ik cheez hai vaange"],
//     ["you had two things",	"tusi doh cheezan kol_si"],
//     ["you have two things",	"tusi doh cheezan kol_hai ho"],
//     ["you will have two things",	"tusi doh cheezan hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz14() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[thing]", header: "Pvn-have-[thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two things", "eh doh cheezan kol_si"],
    ["it has two things", "eh doh cheezan kol_hai hai"],
    ["it will have two things", "eh doh cheezan hai vega"],
    ["i had a thing", "mein ik cheez kol_si"],
    ["i have a thing",  "mein ik cheez kol_hai haan"],
    ["i will have a thing", "mein ik cheez hai vaange"],
    ["you had two things",  "tusi doh cheezan kol_si"],
    ["you have two things", "tusi doh cheezan kol_hai ho"],
    ["you will have two things",  "tusi doh cheezan hai vaange"],
    ["he had two things",	"oh doh cheezan kol_si"],
    ["he has two things",	"oh doh cheezan kol_hai hai"],
    ["he will have two things",	"oh doh cheezan hai vega"],
    ["they had two things",	"oh doh cheezan kol_si"],
    ["they have two things",	"oh doh cheezan kol_hai han"],
    ["they will have two things",	"oh doh cheezan hai vaange"],
    ["we had two things",	"asi doh cheezan kol_si"],
    ["we have two things",	"asi doh cheezan kol_hai haan"],
    ["we will have two things",	"asi doh cheezan hai vaange"],
    ["she had two things",	"oh doh cheezan kol_si"],
    ["she has two things",	"oh doh cheezan kol_hai hai"],
    ["she will have two things",	"oh doh cheezan hai vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz15() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[life]", header: "Pvn-have-[life]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had life",	"eh zindgi kol_si"],
    ["it has life",	"eh zindgi kol_hai hai"],
    ["it will have life",	"eh zindgi hai vega"],
    ["i had life",	"mein zindgi kol_si"],
    ["i have life",	"mein zindgi kol_hai haan"],
    ["i will have life",	"mein zindgi hai vaange"],
    ["you had life",	"tusi zindgi kol_si"],
    ["you have life",	"tusi zindgi kol_hai ho"],
    ["you will have life",	"tusi zindgi hai vaange"],
    ["he had life",	"oh zindgi kol_si"],
    ["he has life",	"oh zindgi kol_hai hai"],
    ["he will have life",	"oh zindgi hai vega"],
    ["they had life", "oh zindgi kol_si"],
    ["they have life",  "oh zindgi kol_hai han"],
    ["they will have life", "oh zindgi hai vaange"],
    ["we had life", "asi zindgi kol_si"],
    ["we have life",  "asi zindgi kol_hai haan"],
    ["we will have life", "asi zindgi hai vaange"],
    ["she had life",  "oh zindgi kol_si"],
    ["she has life",  "oh zindgi kol_hai hai"],
    ["she will have life",  "oh zindgi hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz16() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[life,hand]", header: "Pvn-have-[life,hand]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had life",	"oh zindgi kol_si"],
//     ["they have life",	"oh zindgi kol_hai han"],
//     ["they will have life",	"oh zindgi hai vaange"],
//     ["we had life",	"asi zindgi kol_si"],
//     ["we have life",	"asi zindgi kol_hai haan"],
//     ["we will have life",	"asi zindgi hai vaange"],
//     ["she had life",	"oh zindgi kol_si"],
//     ["she has life",	"oh zindgi kol_hai hai"],
//     ["she will have life",	"oh zindgi hai vegi"],
//     ["it had two hands",	"eh doh hathan kol_si"],
//     ["it has two hands",	"eh doh hathan kol_hai hai"],
//     ["it will have two hands",	"eh doh hathan hai vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz17() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[hand]", header: "Pvn-have-[hand]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two hands",  "eh doh hathan kol_si"],
    ["it has two hands",  "eh doh hathan kol_hai hai"],
    ["it will have two hands",  "eh doh hathan hai vega"],
    ["i had two hands",	"mein doh hathan kol_si"],
    ["i have two hands",	"mein doh hathan kol_hai haan"],
    ["i will have two hands",	"mein doh hathan hai vaange"],
    ["you had two hands",	"tusi doh hathan kol_si"],
    ["you have two hands",	"tusi doh hathan kol_hai ho"],
    ["you will have two hands",	"tusi doh hathan hai vaange"],
    ["he had two hands",	"oh doh hathan kol_si"],
    ["he has two hands",	"oh doh hathan kol_hai hai"],
    ["he will have two hands",	"oh doh hathan hai vega"],
    ["they had hand",	"oh hath kol_si"],
    ["they have hand",	"oh hath kol_hai han"],
    ["they will have hand",	"oh hath hai vaange"],
    ["we had two hands",  "asi doh hathan kol_si"],
    ["we have two hands", "asi doh hathan kol_hai haan"],
    ["we will have two hands",  "asi doh hathan hai vaange"],
    ["she had two hands", "oh doh hathan kol_si"],
    ["she has two hands", "oh doh hathan kol_hai hai"],
    ["she will have two hands", "oh doh hathan hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz18() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[hand,child]", header: "Pvn-have-[hand,child]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had two hands",	"asi doh hathan kol_si"],
//     ["we have two hands",	"asi doh hathan kol_hai haan"],
//     ["we will have two hands",	"asi doh hathan hai vaange"],
//     ["she had two hands",	"oh doh hathan kol_si"],
//     ["she has two hands",	"oh doh hathan kol_hai hai"],
//     ["she will have two hands",	"oh doh hathan hai vegi"],
//     ["it had a child",	"eh ik bachcha kol_si"],
//     ["it has a child",	"eh ik bachcha kol_hai hai"],
//     ["it will have a child",	"eh ik bachcha hai vega"],
//     ["i had two children",	"mein doh bachchey kol_si"],
//     ["i have two children",	"mein doh bachchey kol_hai haan"],
//     ["i will have two children",	"mein doh bachchey hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz19() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[child]", header: "Pvn-have-[child]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had a child",  "eh ik bachcha kol_si"],
    ["it has a child",  "eh ik bachcha kol_hai hai"],
    ["it will have a child",  "eh ik bachcha hai vega"],
    ["i had two children",  "mein doh bachchey kol_si"],
    ["i have two children", "mein doh bachchey kol_hai haan"],
    ["i will have two children",  "mein doh bachchey hai vaange"],
    ["you had two children",	"tusi doh bachchey kol_si"],
    ["you have two children",	"tusi doh bachchey kol_hai ho"],
    ["you will have two children",	"tusi doh bachchey hai vaange"],
    ["he had two children",	"oh doh bachchey kol_si"],
    ["he has two children",	"oh doh bachchey kol_hai hai"],
    ["he will have two children",	"oh doh bachchey hai vega"],
    ["they had two children",	"oh doh bachchey kol_si"],
    ["they have two children",	"oh doh bachchey kol_hai han"],
    ["they will have two children",	"oh doh bachchey hai vaange"],
    ["we had two children",	"asi doh bachchey kol_si"],
    ["we have two children",	"asi doh bachchey kol_hai haan"],
    ["we will have two children",	"asi doh bachchey hai vaange"],
    ["she had two children",  "oh doh bachchey kol_si"],
    ["she has two children",  "oh doh bachchey kol_hai hai"],
    ["she will have two children",  "oh doh bachchey hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz20() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[child,eye]", header: "Pvn-have-[child,eye]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had two children",	"oh doh bachchey kol_si"],
//     ["she has two children",	"oh doh bachchey kol_hai hai"],
//     ["she will have two children",	"oh doh bachchey hai vegi"],
//     ["it had an eye",	"eh ik akh kol_si"],
//     ["it has an eye",	"eh ik akh kol_hai hai"],
//     ["it will have an eye",	"eh ik akh hai vega"],
//     ["i had two eyes",	"mein doh akhan kol_si"],
//     ["i have two eyes",	"mein doh akhan kol_hai haan"],
//     ["i will have two eyes",	"mein doh akhan hai vaange"],
//     ["you had two eyes",	"tusi doh akhan kol_si"],
//     ["you have two eyes",	"tusi doh akhan kol_hai ho"],
//     ["you will have two eyes",	"tusi doh akhan hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz21() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[eye]", header: "Pvn-have-[eye]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had an eye", "eh ik akh kol_si"],
    ["it has an eye", "eh ik akh kol_hai hai"],
    ["it will have an eye", "eh ik akh hai vega"],
    ["i had two eyes",  "mein doh akhan kol_si"],
    ["i have two eyes", "mein doh akhan kol_hai haan"],
    ["i will have two eyes",  "mein doh akhan hai vaange"],
    ["you had two eyes",  "tusi doh akhan kol_si"],
    ["you have two eyes", "tusi doh akhan kol_hai ho"],
    ["you will have two eyes",  "tusi doh akhan hai vaange"],
    ["he had eye",	"oh akh kol_si"],
    ["he has eye",	"oh akh kol_hai hai"],
    ["he will have eye",	"oh akh hai vega"],
    ["they had two eyes",	"oh doh akhan kol_si"],
    ["they have two eyes",	"oh doh akhan kol_hai han"],
    ["they will have two eyes",	"oh doh akhan hai vaange"],
    ["we had two eyes",	"asi doh akhan kol_si"],
    ["we have two eyes",	"asi doh akhan kol_hai haan"],
    ["we will have two eyes",	"asi doh akhan hai vaange"],
    ["she had two eyes",	"oh doh akhan kol_si"],
    ["she has two eyes",	"oh doh akhan kol_hai hai"],
    ["she will have two eyes",	"oh doh akhan hai vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz22() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[place]", header: "Pvn-have-[place]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two places",	"eh doh jagahan kol_si"],
    ["it has two places",	"eh doh jagahan kol_hai hai"],
    ["it will have two places",	"eh doh jagahan hai vega"],
    ["i had two places",	"mein doh jagahan kol_si"],
    ["i have two places",	"mein doh jagahan kol_hai haan"],
    ["i will have two places",	"mein doh jagahan hai vaange"],
    ["you had two places",	"tusi doh jagahan kol_si"],
    ["you have two places",	"tusi doh jagahan kol_hai ho"],
    ["you will have two places",	"tusi doh jagahan hai vaange"],
    ["he had place",	"oh jagah kol_si"],
    ["he has place",	"oh jagah kol_hai hai"],
    ["he will have place",	"oh jagah hai vega"],
    ["they had two places", "oh doh jagahan kol_si"],
    ["they have two places",  "oh doh jagahan kol_hai han"],
    ["they will have two places", "oh doh jagahan hai vaange"],
    ["we had two places", "asi doh jagahan kol_si"],
    ["we have two places",  "asi doh jagahan kol_hai haan"],
    ["we will have two places", "asi doh jagahan hai vaange"],
    ["she had a place", "oh ik jagah kol_si"],
    ["she has a place", "oh ik jagah kol_hai hai"],
    ["she will have a place", "oh ik jagah hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz23() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[place,work]", header: "Pvn-have-[place,work]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had two places",	"oh doh jagahan kol_si"],
//     ["they have two places",	"oh doh jagahan kol_hai han"],
//     ["they will have two places",	"oh doh jagahan hai vaange"],
//     ["we had two places",	"asi doh jagahan kol_si"],
//     ["we have two places",	"asi doh jagahan kol_hai haan"],
//     ["we will have two places",	"asi doh jagahan hai vaange"],
//     ["she had a place",	"oh ik jagah kol_si"],
//     ["she has a place",	"oh ik jagah kol_hai hai"],
//     ["she will have a place",	"oh ik jagah hai vegi"],
//     ["it had work",	"eh kamm kol_si"],
//     ["it has work",	"eh kamm kol_hai hai"],
//     ["it will have work",	"eh kamm hai vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz24() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[work]", header: "Pvn-have-[work]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had work", "eh kamm kol_si"],
    ["it has work", "eh kamm kol_hai hai"],
    ["it will have work", "eh kamm hai vega"],
    ["i had work",	"mein kamm kol_si"],
    ["i have work",	"mein kamm kol_hai haan"],
    ["i will have work",	"mein kamm hai vaange"],
    ["you had work",	"tusi kamm kol_si"],
    ["you have work",	"tusi kamm kol_hai ho"],
    ["you will have work",	"tusi kamm hai vaange"],
    ["he had work",	"oh kamm kol_si"],
    ["he has work",	"oh kamm kol_hai hai"],
    ["he will have work",	"oh kamm hai vega"],
    ["they had work",	"oh kamm kol_si"],
    ["they have work",	"oh kamm kol_hai han"],
    ["they will have work",	"oh kamm hai vaange"],
    ["we had work", "asi kamm kol_si"],
    ["we have work",  "asi kamm kol_hai haan"],
    ["we will have work", "asi kamm hai vaange"],
    ["she had work",  "oh kamm kol_si"],
    ["she has work",  "oh kamm kol_hai hai"],
    ["she will have work",  "oh kamm hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz25() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[work,week]", header: "Pvn-have-[work,week]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had work",	"asi kamm kol_si"],
//     ["we have work",	"asi kamm kol_hai haan"],
//     ["we will have work",	"asi kamm hai vaange"],
//     ["she had work",	"oh kamm kol_si"],
//     ["she has work",	"oh kamm kol_hai hai"],
//     ["she will have work",	"oh kamm hai vegi"],
//     ["it had two weeks",	"eh doh haftey kol_si"],
//     ["it has two weeks",	"eh doh haftey kol_hai hai"],
//     ["it will have two weeks",	"eh doh haftey hai vega"],
//     ["i had two weeks",	"mein doh haftey kol_si"],
//     ["i have two weeks",	"mein doh haftey kol_hai haan"],
//     ["i will have two weeks",	"mein doh haftey hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz26() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[week]", header: "Pvn-have-[week]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two weeks",  "eh doh haftey kol_si"],
    ["it has two weeks",  "eh doh haftey kol_hai hai"],
    ["it will have two weeks",  "eh doh haftey hai vega"],
    ["i had two weeks", "mein doh haftey kol_si"],
    ["i have two weeks",  "mein doh haftey kol_hai haan"],
    ["i will have two weeks", "mein doh haftey hai vaange"],
    ["you had a week",	"tusi ik hafta kol_si"],
    ["you have a week",	"tusi ik hafta kol_hai ho"],
    ["you will have a week",	"tusi ik hafta hai vaange"],
    ["he had two weeks",	"oh doh haftey kol_si"],
    ["he has two weeks",	"oh doh haftey kol_hai hai"],
    ["he will have two weeks",	"oh doh haftey hai vega"],
    ["they had two weeks",	"oh doh haftey kol_si"],
    ["they have two weeks",	"oh doh haftey kol_hai han"],
    ["they will have two weeks",	"oh doh haftey hai vaange"],
    ["we had two weeks",	"asi doh haftey kol_si"],
    ["we have two weeks",	"asi doh haftey kol_hai haan"],
    ["we will have two weeks",	"asi doh haftey hai vaange"],
    ["she had two weeks", "oh doh haftey kol_si"],
    ["she has two weeks", "oh doh haftey kol_hai hai"],
    ["she will have two weeks", "oh doh haftey hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz27() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[week,point]", header: "Pvn-have-[week,point]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had two weeks",	"oh doh haftey kol_si"],
//     ["she has two weeks",	"oh doh haftey kol_hai hai"],
//     ["she will have two weeks",	"oh doh haftey hai vegi"],
//     ["it had point",	"eh mudda kol_si"],
//     ["it has point",	"eh mudda kol_hai hai"],
//     ["it will have point",	"eh mudda hai vega"],
//     ["i had point",	"mein mudda kol_si"],
//     ["i have point",	"mein mudda kol_hai haan"],
//     ["i will have point",	"mein mudda hai vaange"],
//     ["you had point",	"tusi mudda kol_si"],
//     ["you have point",	"tusi mudda kol_hai ho"],
//     ["you will have point",	"tusi mudda hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz28() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[point]", header: "Pvn-have-[point]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had point",  "eh mudda kol_si"],
    ["it has point",  "eh mudda kol_hai hai"],
    ["it will have point",  "eh mudda hai vega"],
    ["i had point", "mein mudda kol_si"],
    ["i have point",  "mein mudda kol_hai haan"],
    ["i will have point", "mein mudda hai vaange"],
    ["you had point", "tusi mudda kol_si"],
    ["you have point",  "tusi mudda kol_hai ho"],
    ["you will have point", "tusi mudda hai vaange"],
    ["he had point",	"oh mudda kol_si"],
    ["he has point",	"oh mudda kol_hai hai"],
    ["he will have point",	"oh mudda hai vega"],
    ["they had point",	"oh mudda kol_si"],
    ["they have point",	"oh mudda kol_hai han"],
    ["they will have point",	"oh mudda hai vaange"],
    ["we had point",	"asi mudda kol_si"],
    ["we have point",	"asi mudda kol_hai haan"],
    ["we will have point",	"asi mudda hai vaange"],
    ["she had point",	"oh mudda kol_si"],
    ["she has point",	"oh mudda kol_hai hai"],
    ["she will have point",	"oh mudda hai vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz29() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[government]", header: "Pvn-have-[government]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two governments",	"eh doh sarkaran kol_si"],
    ["it has two governments",	"eh doh sarkaran kol_hai hai"],
    ["it will have two governments",	"eh doh sarkaran hai vega"],
    ["i had two governments",	"mein doh sarkaran kol_si"],
    ["i have two governments",	"mein doh sarkaran kol_hai haan"],
    ["i will have two governments",	"mein doh sarkaran hai vaange"],
    ["you had two governments",	"tusi doh sarkaran kol_si"],
    ["you have two governments",	"tusi doh sarkaran kol_hai ho"],
    ["you will have two governments",	"tusi doh sarkaran hai vaange"],
    ["he had two governments",	"oh doh sarkaran kol_si"],
    ["he has two governments",	"oh doh sarkaran kol_hai hai"],
    ["he will have two governments",	"oh doh sarkaran hai vega"],
    ["they had two governments",  "oh doh sarkaran kol_si"],
    ["they have two governments", "oh doh sarkaran kol_hai han"],
    ["they will have two governments",  "oh doh sarkaran hai vaange"],
    ["we had government", "asi sarkar kol_si"],
    ["we have government",  "asi sarkar kol_hai haan"],
    ["we will have government", "asi sarkar hai vaange"],
    ["she had two governments", "oh doh sarkaran kol_si"],
    ["she has two governments", "oh doh sarkaran kol_hai hai"],
    ["she will have two governments", "oh doh sarkaran hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz30() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[government,group]", header: "Pvn-have-[government,group]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they had two governments",	"oh doh sarkaran kol_si"],
//     ["they have two governments",	"oh doh sarkaran kol_hai han"],
//     ["they will have two governments",	"oh doh sarkaran hai vaange"],
//     ["we had government",	"asi sarkar kol_si"],
//     ["we have government",	"asi sarkar kol_hai haan"],
//     ["we will have government",	"asi sarkar hai vaange"],
//     ["she had two governments",	"oh doh sarkaran kol_si"],
//     ["she has two governments",	"oh doh sarkaran kol_hai hai"],
//     ["she will have two governments",	"oh doh sarkaran hai vegi"],
//     ["it had two groups",	"eh doh tolian kol_si"],
//     ["it has two groups",	"eh doh tolian kol_hai hai"],
//     ["it will have two groups",	"eh doh tolian hai vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz31() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[group]", header: "Pvn-have-[group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two groups", "eh doh tolian kol_si"],
    ["it has two groups", "eh doh tolian kol_hai hai"],
    ["it will have two groups", "eh doh tolian hai vega"],
    ["i had a group",	"mein ik toli kol_si"],
    ["i have a group",	"mein ik toli kol_hai haan"],
    ["i will have a group",	"mein ik toli hai vaange"],
    ["you had two groups",	"tusi doh tolian kol_si"],
    ["you have two groups",	"tusi doh tolian kol_hai ho"],
    ["you will have two groups",	"tusi doh tolian hai vaange"],
    ["he had two groups",	"oh doh tolian kol_si"],
    ["he has two groups",	"oh doh tolian kol_hai hai"],
    ["he will have two groups",	"oh doh tolian hai vega"],
    ["they had two groups",	"oh doh tolian kol_si"],
    ["they have two groups",	"oh doh tolian kol_hai han"],
    ["they will have two groups",	"oh doh tolian hai vaange"],
    ["we had two groups", "asi doh tolian kol_si"],
    ["we have two groups",  "asi doh tolian kol_hai haan"],
    ["we will have two groups", "asi doh tolian hai vaange"],
    ["she had two groups",  "oh doh tolian kol_si"],
    ["she has two groups",  "oh doh tolian kol_hai hai"],
    ["she will have two groups",  "oh doh tolian hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz32() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[group,problem]", header: "Pvn-have-[group,problem]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we had two groups",	"asi doh tolian kol_si"],
//     ["we have two groups",	"asi doh tolian kol_hai haan"],
//     ["we will have two groups",	"asi doh tolian hai vaange"],
//     ["she had two groups",	"oh doh tolian kol_si"],
//     ["she has two groups",	"oh doh tolian kol_hai hai"],
//     ["she will have two groups",	"oh doh tolian hai vegi"],
//     ["it had two problems",	"eh doh musibatan kol_si"],
//     ["it has two problems",	"eh doh musibatan kol_hai hai"],
//     ["it will have two problems",	"eh doh musibatan hai vega"],
//     ["i had problem",	"mein musibat kol_si"],
//     ["i have problem",	"mein musibat kol_hai haan"],
//     ["i will have problem",	"mein musibat hai vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz33() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have-[problem]", header: "Pvn-have-[problem]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it had two problems", "eh doh musibatan kol_si"],
    ["it has two problems", "eh doh musibatan kol_hai hai"],
    ["it will have two problems", "eh doh musibatan hai vega"],
    ["i had problem", "mein musibat kol_si"],
    ["i have problem",  "mein musibat kol_hai haan"],
    ["i will have problem", "mein musibat hai vaange"],
    ["you had two problems",	"tusi doh musibatan kol_si"],
    ["you have two problems",	"tusi doh musibatan kol_hai ho"],
    ["you will have two problems",	"tusi doh musibatan hai vaange"],
    ["he had two problems",	"oh doh musibatan kol_si"],
    ["he has two problems",	"oh doh musibatan kol_hai hai"],
    ["he will have two problems",	"oh doh musibatan hai vega"],
    ["they had a problem",	"oh ik musibat kol_si"],
    ["they have a problem",	"oh ik musibat kol_hai han"],
    ["they will have a problem",	"oh ik musibat hai vaange"],
    ["we had two problems",	"asi doh musibatan kol_si"],
    ["we have two problems",	"asi doh musibatan kol_hai haan"],
    ["we will have two problems",	"asi doh musibatan hai vaange"],
    ["she had two problems",  "oh doh musibatan kol_si"],
    ["she has two problems",  "oh doh musibatan kol_hai hai"],
    ["she will have two problems",  "oh doh musibatan hai vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz34() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-have,do-[problem,thing]", header: "Pvn-have,do-[problem,thing]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she had two problems",	"oh doh musibatan kol_si"],
//     ["she has two problems",	"oh doh musibatan kol_hai hai"],
//     ["she will have two problems",	"oh doh musibatan hai vegi"],
//     ["it did two things",	"eh doh cheezan keeta"],
//     ["it does two things",	"eh doh cheezan karda hai"],
//     ["it will do two things",	"eh doh cheezan karda vega"],
//     ["i did two things",	"mein doh cheezan keeta"],
//     ["i do two things",	"mein doh cheezan kardey haan"],
//     ["i will do two things",	"mein doh cheezan karda vaange"],
//     ["you did two things",	"tusi doh cheezan keeta"],
//     ["you do two things",	"tusi doh cheezan kardey ho"],
//     ["you will do two things",	"tusi doh cheezan karda vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz35() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-do-[thing]", header: "Pvn-do-[thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it did two things", "eh doh cheezan keeta"],
    ["it does two things",  "eh doh cheezan karda hai"],
    ["it will do two things", "eh doh cheezan karda vega"],
    ["i did two things",  "mein doh cheezan keeta"],
    ["i do two things", "mein doh cheezan kardey haan"],
    ["i will do two things",  "mein doh cheezan karda vaange"],
    ["you did two things",  "tusi doh cheezan keeta"],
    ["you do two things", "tusi doh cheezan kardey ho"],
    ["you will do two things",  "tusi doh cheezan karda vaange"],
    ["he did two things",	"oh doh cheezan keeta"],
    ["he does two things",	"oh doh cheezan karda hai"],
    ["he will do two things",	"oh doh cheezan karda vega"],
    ["they did thing",	"oh cheez keeta"],
    ["they do thing",	"oh cheez kardey han"],
    ["they will do thing",	"oh cheez karda vaange"],
    ["we did two things",	"asi doh cheezan keeta"],
    ["we do two things",	"asi doh cheezan kardey haan"],
    ["we will do two things",	"asi doh cheezan karda vaange"],
    ["she did two things",	"oh doh cheezan keeta"],
    ["she does two things",	"oh doh cheezan kardi hai"],
    ["she will do two things",	"oh doh cheezan karda vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz36() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-do-[part]", header: "Pvn-do-[part]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it did a part",	"eh ik hissa keeta"],
    ["it does a part",	"eh ik hissa karda hai"],
    ["it will do a part",	"eh ik hissa karda vega"],
    ["i did two parts",	"mein doh hissey keeta"],
    ["i do two parts",	"mein doh hissey kardey haan"],
    ["i will do two parts",	"mein doh hissey karda vaange"],
    ["you did two parts",	"tusi doh hissey keeta"],
    ["you do two parts",	"tusi doh hissey kardey ho"],
    ["you will do two parts",	"tusi doh hissey karda vaange"],
    ["he did two parts",	"oh doh hissey keeta"],
    ["he does two parts",	"oh doh hissey karda hai"],
    ["he will do two parts",	"oh doh hissey karda vega"],
    ["they did two parts",  "oh doh hissey keeta"],
    ["they do two parts", "oh doh hissey kardey han"],
    ["they will do two parts",  "oh doh hissey karda vaange"],
    ["we did two parts",  "asi doh hissey keeta"],
    ["we do two parts", "asi doh hissey kardey haan"],
    ["we will do two parts",  "asi doh hissey karda vaange"],
    ["she did two parts", "oh doh hissey keeta"],
    ["she does two parts",  "oh doh hissey kardi hai"],
    ["she will do two parts", "oh doh hissey karda vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz37() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-do,say-[part,thing]", header: "Pvn-do,say-[part,thing]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they did two parts",	"oh doh hissey keeta"],
//     ["they do two parts",	"oh doh hissey kardey han"],
//     ["they will do two parts",	"oh doh hissey karda vaange"],
//     ["we did two parts",	"asi doh hissey keeta"],
//     ["we do two parts",	"asi doh hissey kardey haan"],
//     ["we will do two parts",	"asi doh hissey karda vaange"],
//     ["she did two parts",	"oh doh hissey keeta"],
//     ["she does two parts",	"oh doh hissey kardi hai"],
//     ["she will do two parts",	"oh doh hissey karda vegi"],
//     ["it said thing",	"eh cheez kiha"],
//     ["it says thing",	"eh cheez kehnda hai"],
//     ["it will say thing",	"eh cheez keh vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz38() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-say-[thing]", header: "Pvn-say-[thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it said thing", "eh cheez kiha"],
    ["it says thing", "eh cheez kehnda hai"],
    ["it will say thing", "eh cheez keh vega"],
    ["i said two things",	"mein doh cheezan kiha"],
    ["i say two things",	"mein doh cheezan kenhdey haan"],
    ["i will say two things",	"mein doh cheezan keh vaange"],
    ["you said two things",	"tusi doh cheezan kiha"],
    ["you say two things",	"tusi doh cheezan kenhdey ho"],
    ["you will say two things",	"tusi doh cheezan keh vaange"],
    ["he said a thing",	"oh ik cheez kiha"],
    ["he says a thing",	"oh ik cheez kehnda hai"],
    ["he will say a thing",	"oh ik cheez keh vega"],
    ["they said two things",	"oh doh cheezan kiha"],
    ["they say two things",	"oh doh cheezan kenhdey han"],
    ["they will say two things",	"oh doh cheezan keh vaange"],
    ["we said two things",  "asi doh cheezan kiha"],
    ["we say two things", "asi doh cheezan kenhdey haan"],
    ["we will say two things",  "asi doh cheezan keh vaange"],
    ["she said two things", "oh doh cheezan kiha"],
    ["she says two things", "oh doh cheezan kehndi hai"],
    ["she will say two things", "oh doh cheezan keh vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz39() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-say-[thing,fact]", header: "Pvn-say-[thing,fact]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["we said two things",	"asi doh cheezan kiha"],
//     ["we say two things",	"asi doh cheezan kenhdey haan"],
//     ["we will say two things",	"asi doh cheezan keh vaange"],
//     ["she said two things",	"oh doh cheezan kiha"],
//     ["she says two things",	"oh doh cheezan kehndi hai"],
//     ["she will say two things",	"oh doh cheezan keh vegi"],
//     ["it said two facts",	"eh doh sachaian kiha"],
//     ["it says two facts",	"eh doh sachaian kehnda hai"],
//     ["it will say two facts",	"eh doh sachaian keh vega"],
//     ["i said two facts",	"mein doh sachaian kiha"],
//     ["i say two facts",	"mein doh sachaian kenhdey haan"],
//     ["i will say two facts",	"mein doh sachaian keh vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz40() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-say-[fact]", header: "Pvn-say-[fact]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it said two facts", "eh doh sachaian kiha"],
    ["it says two facts", "eh doh sachaian kehnda hai"],
    ["it will say two facts", "eh doh sachaian keh vega"],
    ["i said two facts",  "mein doh sachaian kiha"],
    ["i say two facts", "mein doh sachaian kenhdey haan"],
    ["i will say two facts",  "mein doh sachaian keh vaange"],
    ["you said two facts",	"tusi doh sachaian kiha"],
    ["you say two facts",	"tusi doh sachaian kenhdey ho"],
    ["you will say two facts",	"tusi doh sachaian keh vaange"],
    ["he said fact",	"oh sachai kiha"],
    ["he says fact",	"oh sachai kehnda hai"],
    ["he will say fact",	"oh sachai keh vega"],
    ["they said two facts",	"oh doh sachaian kiha"],
    ["they say two facts",	"oh doh sachaian kenhdey han"],
    ["they will say two facts",	"oh doh sachaian keh vaange"],
    ["we said two facts",	"asi doh sachaian kiha"],
    ["we say two facts",	"asi doh sachaian kenhdey haan"],
    ["we will say two facts",	"asi doh sachaian keh vaange"],
    ["she said a fact", "oh ik sachai kiha"],
    ["she says a fact", "oh ik sachai kehndi hai"],
    ["she will say a fact", "oh ik sachai keh vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz41() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-say,get-[fact,time]", header: "Pvn-say,get-[fact,time]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["she said a fact",	"oh ik sachai kiha"],
//     ["she says a fact",	"oh ik sachai kehndi hai"],
//     ["she will say a fact",	"oh ik sachai keh vegi"],
//     ["it got time",	"eh samah liaia"],
//     ["it gets time",	"eh samah liaunda hai"],
//     ["it will get time",	"eh samah lia vega"],
//     ["i got time",	"mein samah liaye"],
//     ["i get time",	"mein samah liaundey haan"],
//     ["i will get time",	"mein samah lia vaange"],
//     ["you got time",	"tusi samah liaye"],
//     ["you get time",	"tusi samah liaundey ho"],
//     ["you will get time",	"tusi samah lia vaange"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz42() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[time]", header: "Pvn-get-[time]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got time", "eh samah liaia"],
    ["it gets time",  "eh samah liaunda hai"],
    ["it will get time",  "eh samah lia vega"],
    ["i got time",  "mein samah liaye"],
    ["i get time",  "mein samah liaundey haan"],
    ["i will get time", "mein samah lia vaange"],
    ["you got time",  "tusi samah liaye"],
    ["you get time",  "tusi samah liaundey ho"],
    ["you will get time", "tusi samah lia vaange"],
    ["he got time",	"oh samah liaia"],
    ["he gets time",	"oh samah liaunda hai"],
    ["he will get time",	"oh samah lia vega"],
    ["they got time",	"oh samah liaye"],
    ["they get time",	"oh samah liaundey han"],
    ["they will get time",	"oh samah lia vaange"],
    ["we got time",	"asi samah liaye"],
    ["we get time",	"asi samah liaundey haan"],
    ["we will get time",	"asi samah lia vaange"],
    ["she got time",	"oh samah liaii"],
    ["she gets time",	"oh samah liaundi hai"],
    ["she will get time",	"oh samah lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz43() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[year]", header: "Pvn-get-[year]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got two years",	"eh doh saalan liaia"],
    ["it gets two years",	"eh doh saalan liaunda hai"],
    ["it will get two years",	"eh doh saalan lia vega"],
    ["i got two years",	"mein doh saalan liaye"],
    ["i get two years",	"mein doh saalan liaundey haan"],
    ["i will get two years",	"mein doh saalan lia vaange"],
    ["you got a year",	"tusi ik saal liaye"],
    ["you get a year",	"tusi ik saal liaundey ho"],
    ["you will get a year",	"tusi ik saal lia vaange"],
    ["he got two years",	"oh doh saalan liaia"],
    ["he gets two years",	"oh doh saalan liaunda hai"],
    ["he will get two years",	"oh doh saalan lia vega"],
    ["they got two years",  "oh doh saalan liaye"],
    ["they get two years",  "oh doh saalan liaundey han"],
    ["they will get two years", "oh doh saalan lia vaange"],
    ["we got two years",  "asi doh saalan liaye"],
    ["we get two years",  "asi doh saalan liaundey haan"],
    ["we will get two years", "asi doh saalan lia vaange"],
    ["she got two years", "oh doh saalan liaii"],
    ["she gets two years",  "oh doh saalan liaundi hai"],
    ["she will get two years",  "oh doh saalan lia vegi"],
  ], options);
  return {info, quiz};
}

// function content_quizzes4_quiz44() {
//   let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[year,way]", header: "Pvn-get-[year,way]" };
//   let options = { random: true, count: [18] };
//   let quiz = build_choices([
//     ["they got two years",	"oh doh saalan liaye"],
//     ["they get two years",	"oh doh saalan liaundey han"],
//     ["they will get two years",	"oh doh saalan lia vaange"],
//     ["we got two years",	"asi doh saalan liaye"],
//     ["we get two years",	"asi doh saalan liaundey haan"],
//     ["we will get two years",	"asi doh saalan lia vaange"],
//     ["she got two years",	"oh doh saalan liaii"],
//     ["she gets two years",	"oh doh saalan liaundi hai"],
//     ["she will get two years",	"oh doh saalan lia vegi"],
//     ["it got way",	"eh rasta liaia"],
//     ["it gets way",	"eh rasta liaunda hai"],
//     ["it will get way",	"eh rasta lia vega"],
//   ], options);
//   return {info, quiz};
// }

function content_quizzes4_quiz45() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[way]", header: "Pvn-get-[way]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got way",  "eh rasta liaia"],
    ["it gets way", "eh rasta liaunda hai"],
    ["it will get way", "eh rasta lia vega"],
    ["i got way",	"mein rasta liaye"],
    ["i get way",	"mein rasta liaundey haan"],
    ["i will get way",	"mein rasta lia vaange"],
    ["you got way",	"tusi rasta liaye"],
    ["you get way",	"tusi rasta liaundey ho"],
    ["you will get way",	"tusi rasta lia vaange"],
    ["he got way",	"oh rasta liaia"],
    ["he gets way",	"oh rasta liaunda hai"],
    ["he will get way",	"oh rasta lia vega"],
    ["they got way",	"oh rasta liaye"],
    ["they get way",	"oh rasta liaundey han"],
    ["they will get way",	"oh rasta lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz46() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[way,day]", header: "Pvn-get-[way,day]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got way",	"asi rasta liaye"],
    ["we get way",	"asi rasta liaundey haan"],
    ["we will get way",	"asi rasta lia vaange"],
    ["she got way",	"oh rasta liaii"],
    ["she gets way",	"oh rasta liaundi hai"],
    ["she will get way",	"oh rasta lia vegi"],
    ["it got two days",	"eh doh dinan liaia"],
    ["it gets two days",	"eh doh dinan liaunda hai"],
    ["it will get two days",	"eh doh dinan lia vega"],
    ["i got two days",	"mein doh dinan liaye"],
    ["i get two days",	"mein doh dinan liaundey haan"],
    ["i will get two days",	"mein doh dinan lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz47() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[day]", header: "Pvn-get-[day]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got two days",	"tusi doh dinan liaye"],
    ["you get two days",	"tusi doh dinan liaundey ho"],
    ["you will get two days",	"tusi doh dinan lia vaange"],
    ["he got two days",	"oh doh dinan liaia"],
    ["he gets two days",	"oh doh dinan liaunda hai"],
    ["he will get two days",	"oh doh dinan lia vega"],
    ["they got two days",	"oh doh dinan liaye"],
    ["they get two days",	"oh doh dinan liaundey han"],
    ["they will get two days",	"oh doh dinan lia vaange"],
    ["we got day",	"asi din liaye"],
    ["we get day",	"asi din liaundey haan"],
    ["we will get day",	"asi din lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz48() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[day,thing]", header: "Pvn-get-[day,thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got two days",	"oh doh dinan liaii"],
    ["she gets two days",	"oh doh dinan liaundi hai"],
    ["she will get two days",	"oh doh dinan lia vegi"],
    ["it got two things",	"eh doh cheezan liaia"],
    ["it gets two things",	"eh doh cheezan liaunda hai"],
    ["it will get two things",	"eh doh cheezan lia vega"],
    ["i got a thing",	"mein ik cheez liaye"],
    ["i get a thing",	"mein ik cheez liaundey haan"],
    ["i will get a thing",	"mein ik cheez lia vaange"],
    ["you got two things",	"tusi doh cheezan liaye"],
    ["you get two things",	"tusi doh cheezan liaundey ho"],
    ["you will get two things",	"tusi doh cheezan lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz49() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[thing]", header: "Pvn-get-[thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got two things",	"oh doh cheezan liaia"],
    ["he gets two things",	"oh doh cheezan liaunda hai"],
    ["he will get two things",	"oh doh cheezan lia vega"],
    ["they got two things",	"oh doh cheezan liaye"],
    ["they get two things",	"oh doh cheezan liaundey han"],
    ["they will get two things",	"oh doh cheezan lia vaange"],
    ["we got two things",	"asi doh cheezan liaye"],
    ["we get two things",	"asi doh cheezan liaundey haan"],
    ["we will get two things",	"asi doh cheezan lia vaange"],
    ["she got two things",	"oh doh cheezan liaii"],
    ["she gets two things",	"oh doh cheezan liaundi hai"],
    ["she will get two things",	"oh doh cheezan lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz50() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[life]", header: "Pvn-get-[life]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got life",	"eh zindgi liaia"],
    ["it gets life",	"eh zindgi liaunda hai"],
    ["it will get life",	"eh zindgi lia vega"],
    ["i got life",	"mein zindgi liaye"],
    ["i get life",	"mein zindgi liaundey haan"],
    ["i will get life",	"mein zindgi lia vaange"],
    ["you got life",	"tusi zindgi liaye"],
    ["you get life",	"tusi zindgi liaundey ho"],
    ["you will get life",	"tusi zindgi lia vaange"],
    ["he got life",	"oh zindgi liaia"],
    ["he gets life",	"oh zindgi liaunda hai"],
    ["he will get life",	"oh zindgi lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz51() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[life,place]", header: "Pvn-get-[life,place]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they got life",	"oh zindgi liaye"],
    ["they get life",	"oh zindgi liaundey han"],
    ["they will get life",	"oh zindgi lia vaange"],
    ["we got life",	"asi zindgi liaye"],
    ["we get life",	"asi zindgi liaundey haan"],
    ["we will get life",	"asi zindgi lia vaange"],
    ["she got life",	"oh zindgi liaii"],
    ["she gets life",	"oh zindgi liaundi hai"],
    ["she will get life",	"oh zindgi lia vegi"],
    ["it got two places",	"eh doh jagahan liaia"],
    ["it gets two places",	"eh doh jagahan liaunda hai"],
    ["it will get two places",	"eh doh jagahan lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz52() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[place]", header: "Pvn-get-[place]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i got two places",	"mein doh jagahan liaye"],
    ["i get two places",	"mein doh jagahan liaundey haan"],
    ["i will get two places",	"mein doh jagahan lia vaange"],
    ["you got two places",	"tusi doh jagahan liaye"],
    ["you get two places",	"tusi doh jagahan liaundey ho"],
    ["you will get two places",	"tusi doh jagahan lia vaange"],
    ["he got two places",	"oh doh jagahan liaia"],
    ["he gets two places",	"oh doh jagahan liaunda hai"],
    ["he will get two places",	"oh doh jagahan lia vega"],
    ["they got place",	"oh jagah liaye"],
    ["they get place",	"oh jagah liaundey han"],
    ["they will get place",	"oh jagah lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz53() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[place,work]", header: "Pvn-get-[place,work]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got two places",	"asi doh jagahan liaye"],
    ["we get two places",	"asi doh jagahan liaundey haan"],
    ["we will get two places",	"asi doh jagahan lia vaange"],
    ["she got two places",	"oh doh jagahan liaii"],
    ["she gets two places",	"oh doh jagahan liaundi hai"],
    ["she will get two places",	"oh doh jagahan lia vegi"],
    ["it got work",	"eh kamm liaia"],
    ["it gets work",	"eh kamm liaunda hai"],
    ["it will get work",	"eh kamm lia vega"],
    ["i got work",	"mein kamm liaye"],
    ["i get work",	"mein kamm liaundey haan"],
    ["i will get work",	"mein kamm lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz54() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[work]", header: "Pvn-get-[work]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got work",	"tusi kamm liaye"],
    ["you get work",	"tusi kamm liaundey ho"],
    ["you will get work",	"tusi kamm lia vaange"],
    ["he got work",	"oh kamm liaia"],
    ["he gets work",	"oh kamm liaunda hai"],
    ["he will get work",	"oh kamm lia vega"],
    ["they got work",	"oh kamm liaye"],
    ["they get work",	"oh kamm liaundey han"],
    ["they will get work",	"oh kamm lia vaange"],
    ["we got work",	"asi kamm liaye"],
    ["we get work",	"asi kamm liaundey haan"],
    ["we will get work",	"asi kamm lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz55() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[work,week]", header: "Pvn-get-[work,week]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got work",	"oh kamm liaii"],
    ["she gets work",	"oh kamm liaundi hai"],
    ["she will get work",	"oh kamm lia vegi"],
    ["it got week",	"eh hafta liaia"],
    ["it gets week",	"eh hafta liaunda hai"],
    ["it will get week",	"eh hafta lia vega"],
    ["i got two weeks",	"mein doh haftey liaye"],
    ["i get two weeks",	"mein doh haftey liaundey haan"],
    ["i will get two weeks",	"mein doh haftey lia vaange"],
    ["you got two weeks",	"tusi doh haftey liaye"],
    ["you get two weeks",	"tusi doh haftey liaundey ho"],
    ["you will get two weeks",	"tusi doh haftey lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz56() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[week]", header: "Pvn-get-[week]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got a week",	"oh ik hafta liaia"],
    ["he gets a week",	"oh ik hafta liaunda hai"],
    ["he will get a week",	"oh ik hafta lia vega"],
    ["they got two weeks",	"oh doh haftey liaye"],
    ["they get two weeks",	"oh doh haftey liaundey han"],
    ["they will get two weeks",	"oh doh haftey lia vaange"],
    ["we got two weeks",	"asi doh haftey liaye"],
    ["we get two weeks",	"asi doh haftey liaundey haan"],
    ["we will get two weeks",	"asi doh haftey lia vaange"],
    ["she got two weeks",	"oh doh haftey liaii"],
    ["she gets two weeks",	"oh doh haftey liaundi hai"],
    ["she will get two weeks",	"oh doh haftey lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz57() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[point]", header: "Pvn-get-[point]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it got point",	"eh mudda liaia"],
    ["it gets point",	"eh mudda liaunda hai"],
    ["it will get point",	"eh mudda lia vega"],
    ["i got point",	"mein mudda liaye"],
    ["i get point",	"mein mudda liaundey haan"],
    ["i will get point",	"mein mudda lia vaange"],
    ["you got point",	"tusi mudda liaye"],
    ["you get point",	"tusi mudda liaundey ho"],
    ["you will get point",	"tusi mudda lia vaange"],
    ["he got point",	"oh mudda liaia"],
    ["he gets point",	"oh mudda liaunda hai"],
    ["he will get point",	"oh mudda lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz58() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[point,government]", header: "Pvn-get-[point,government]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they got point",	"oh mudda liaye"],
    ["they get point",	"oh mudda liaundey han"],
    ["they will get point",	"oh mudda lia vaange"],
    ["we got point",	"asi mudda liaye"],
    ["we get point",	"asi mudda liaundey haan"],
    ["we will get point",	"asi mudda lia vaange"],
    ["she got point",	"oh mudda liaii"],
    ["she gets point",	"oh mudda liaundi hai"],
    ["she will get point",	"oh mudda lia vegi"],
    ["it got two governments",	"eh doh sarkaran liaia"],
    ["it gets two governments",	"eh doh sarkaran liaunda hai"],
    ["it will get two governments",	"eh doh sarkaran lia vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz59() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[government]", header: "Pvn-get-[government]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i got two governments",	"mein doh sarkaran liaye"],
    ["i get two governments",	"mein doh sarkaran liaundey haan"],
    ["i will get two governments",	"mein doh sarkaran lia vaange"],
    ["you got two governments",	"tusi doh sarkaran liaye"],
    ["you get two governments",	"tusi doh sarkaran liaundey ho"],
    ["you will get two governments",	"tusi doh sarkaran lia vaange"],
    ["he got two governments",	"oh doh sarkaran liaia"],
    ["he gets two governments",	"oh doh sarkaran liaunda hai"],
    ["he will get two governments",	"oh doh sarkaran lia vega"],
    ["they got two governments",	"oh doh sarkaran liaye"],
    ["they get two governments",	"oh doh sarkaran liaundey han"],
    ["they will get two governments",	"oh doh sarkaran lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz60() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[government,group]", header: "Pvn-get-[government,group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we got two governments",	"asi doh sarkaran liaye"],
    ["we get two governments",	"asi doh sarkaran liaundey haan"],
    ["we will get two governments",	"asi doh sarkaran lia vaange"],
    ["she got government",	"oh sarkar liaii"],
    ["she gets government",	"oh sarkar liaundi hai"],
    ["she will get government",	"oh sarkar lia vegi"],
    ["it got two groups",	"eh doh tolian liaia"],
    ["it gets two groups",	"eh doh tolian liaunda hai"],
    ["it will get two groups",	"eh doh tolian lia vega"],
    ["i got two groups",	"mein doh tolian liaye"],
    ["i get two groups",	"mein doh tolian liaundey haan"],
    ["i will get two groups",	"mein doh tolian lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz61() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[group]", header: "Pvn-get-[group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you got a group",	"tusi ik toli liaye"],
    ["you get a group",	"tusi ik toli liaundey ho"],
    ["you will get a group",	"tusi ik toli lia vaange"],
    ["he got two groups",	"oh doh tolian liaia"],
    ["he gets two groups",	"oh doh tolian liaunda hai"],
    ["he will get two groups",	"oh doh tolian lia vega"],
    ["they got two groups",	"oh doh tolian liaye"],
    ["they get two groups",	"oh doh tolian liaundey han"],
    ["they will get two groups",	"oh doh tolian lia vaange"],
    ["we got two groups",	"asi doh tolian liaye"],
    ["we get two groups",	"asi doh tolian liaundey haan"],
    ["we will get two groups",	"asi doh tolian lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz62() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[group,problem]", header: "Pvn-get-[group,problem]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she got two groups",	"oh doh tolian liaii"],
    ["she gets two groups",	"oh doh tolian liaundi hai"],
    ["she will get two groups",	"oh doh tolian lia vegi"],
    ["it got two problems",	"eh doh musibatan liaia"],
    ["it gets two problems",	"eh doh musibatan liaunda hai"],
    ["it will get two problems",	"eh doh musibatan lia vega"],
    ["i got two problems",	"mein doh musibatan liaye"],
    ["i get two problems",	"mein doh musibatan liaundey haan"],
    ["i will get two problems",	"mein doh musibatan lia vaange"],
    ["you got problem",	"tusi musibat liaye"],
    ["you get problem",	"tusi musibat liaundey ho"],
    ["you will get problem",	"tusi musibat lia vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz63() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-get-[problem]", header: "Pvn-get-[problem]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he got two problems",	"oh doh musibatan liaia"],
    ["he gets two problems",	"oh doh musibatan liaunda hai"],
    ["he will get two problems",	"oh doh musibatan lia vega"],
    ["they got two problems",	"oh doh musibatan liaye"],
    ["they get two problems",	"oh doh musibatan liaundey han"],
    ["they will get two problems",	"oh doh musibatan lia vaange"],
    ["we got a problem",	"asi ik musibat liaye"],
    ["we get a problem",	"asi ik musibat liaundey haan"],
    ["we will get a problem",	"asi ik musibat lia vaange"],
    ["she got two problems",	"oh doh musibatan liaii"],
    ["she gets two problems",	"oh doh musibatan liaundi hai"],
    ["she will get two problems",	"oh doh musibatan lia vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz64() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[way]", header: "Pvn-make-[way]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it made way",	"eh rasta banaiya"],
    ["it makes way",	"eh rasta banaunda hai"],
    ["it will make way",	"eh rasta bana vega"],
    ["i made way",	"mein rasta banaiya"],
    ["i make way",	"mein rasta banaundey haan"],
    ["i will make way",	"mein rasta bana vaange"],
    ["you made way",	"tusi rasta banaiya"],
    ["you make way",	"tusi rasta banaundey ho"],
    ["you will make way",	"tusi rasta bana vaange"],
    ["he made way",	"oh rasta banaiya"],
    ["he makes way",	"oh rasta banaunda hai"],
    ["he will make way",	"oh rasta bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz65() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[way,thing]", header: "Pvn-make-[way,thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they made way",	"oh rasta banaiya"],
    ["they make way",	"oh rasta banaundey han"],
    ["they will make way",	"oh rasta bana vaange"],
    ["we made way",	"asi rasta banaiya"],
    ["we make way",	"asi rasta banaundey haan"],
    ["we will make way",	"asi rasta bana vaange"],
    ["she made way",	"oh rasta banaiya"],
    ["she makes way",	"oh rasta banaundi hai"],
    ["she will make way",	"oh rasta bana vegi"],
    ["it made two things",	"eh doh cheezan banaiya"],
    ["it makes two things",	"eh doh cheezan banaunda hai"],
    ["it will make two things",	"eh doh cheezan bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz66() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[thing]", header: "Pvn-make-[thing]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i made a thing",	"mein ik cheez banaiya"],
    ["i make a thing",	"mein ik cheez banaundey haan"],
    ["i will make a thing",	"mein ik cheez bana vaange"],
    ["you made two things",	"tusi doh cheezan banaiya"],
    ["you make two things",	"tusi doh cheezan banaundey ho"],
    ["you will make two things",	"tusi doh cheezan bana vaange"],
    ["he made two things",	"oh doh cheezan banaiya"],
    ["he makes two things",	"oh doh cheezan banaunda hai"],
    ["he will make two things",	"oh doh cheezan bana vega"],
    ["they made two things",	"oh doh cheezan banaiya"],
    ["they make two things",	"oh doh cheezan banaundey han"],
    ["they will make two things",	"oh doh cheezan bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz67() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[thing,point]", header: "Pvn-make-[thing,point]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we made two things",	"asi doh cheezan banaiya"],
    ["we make two things",	"asi doh cheezan banaundey haan"],
    ["we will make two things",	"asi doh cheezan bana vaange"],
    ["she made two things",	"oh doh cheezan banaiya"],
    ["she makes two things",	"oh doh cheezan banaundi hai"],
    ["she will make two things",	"oh doh cheezan bana vegi"],
    ["it made point",	"eh mudda banaiya"],
    ["it makes point",	"eh mudda banaunda hai"],
    ["it will make point",	"eh mudda bana vega"],
    ["i made point",	"mein mudda banaiya"],
    ["i make point",	"mein mudda banaundey haan"],
    ["i will make point",	"mein mudda bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz68() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[point]", header: "Pvn-make-[point]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you made point",	"tusi mudda banaiya"],
    ["you make point",	"tusi mudda banaundey ho"],
    ["you will make point",	"tusi mudda bana vaange"],
    ["he made point",	"oh mudda banaiya"],
    ["he makes point",	"oh mudda banaunda hai"],
    ["he will make point",	"oh mudda bana vega"],
    ["they made point",	"oh mudda banaiya"],
    ["they make point",	"oh mudda banaundey han"],
    ["they will make point",	"oh mudda bana vaange"],
    ["we made point",	"asi mudda banaiya"],
    ["we make point",	"asi mudda banaundey haan"],
    ["we will make point",	"asi mudda bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz69() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[point,government]", header: "Pvn-make-[point,government]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she made point",	"oh mudda banaiya"],
    ["she makes point",	"oh mudda banaundi hai"],
    ["she will make point",	"oh mudda bana vegi"],
    ["it made two governments",	"eh doh sarkaran banaiya"],
    ["it makes two governments",	"eh doh sarkaran banaunda hai"],
    ["it will make two governments",	"eh doh sarkaran bana vega"],
    ["i made two governments",	"mein doh sarkaran banaiya"],
    ["i make two governments",	"mein doh sarkaran banaundey haan"],
    ["i will make two governments",	"mein doh sarkaran bana vaange"],
    ["you made two governments",	"tusi doh sarkaran banaiya"],
    ["you make two governments",	"tusi doh sarkaran banaundey ho"],
    ["you will make two governments",	"tusi doh sarkaran bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz70() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[government]", header: "Pvn-make-[government]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he made two governments",	"oh doh sarkaran banaiya"],
    ["he makes two governments",	"oh doh sarkaran banaunda hai"],
    ["he will make two governments",	"oh doh sarkaran bana vega"],
    ["they made government",	"oh sarkar banaiya"],
    ["they make government",	"oh sarkar banaundey han"],
    ["they will make government",	"oh sarkar bana vaange"],
    ["we made two governments",	"asi doh sarkaran banaiya"],
    ["we make two governments",	"asi doh sarkaran banaundey haan"],
    ["we will make two governments",	"asi doh sarkaran bana vaange"],
    ["she made two governments",	"oh doh sarkaran banaiya"],
    ["she makes two governments",	"oh doh sarkaran banaundi hai"],
    ["she will make two governments",	"oh doh sarkaran bana vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz71() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[group]", header: "Pvn-make-[group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it made a group",	"eh ik toli banaiya"],
    ["it makes a group",	"eh ik toli banaunda hai"],
    ["it will make a group",	"eh ik toli bana vega"],
    ["i made two groups",	"mein doh tolian banaiya"],
    ["i make two groups",	"mein doh tolian banaundey haan"],
    ["i will make two groups",	"mein doh tolian bana vaange"],
    ["you made two groups",	"tusi doh tolian banaiya"],
    ["you make two groups",	"tusi doh tolian banaundey ho"],
    ["you will make two groups",	"tusi doh tolian bana vaange"],
    ["he made two groups",	"oh doh tolian banaiya"],
    ["he makes two groups",	"oh doh tolian banaunda hai"],
    ["he will make two groups",	"oh doh tolian bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz72() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[group,problem]", header: "Pvn-make-[group,problem]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they made two groups",	"oh doh tolian banaiya"],
    ["they make two groups",	"oh doh tolian banaundey han"],
    ["they will make two groups",	"oh doh tolian bana vaange"],
    ["we made two groups",	"asi doh tolian banaiya"],
    ["we make two groups",	"asi doh tolian banaundey haan"],
    ["we will make two groups",	"asi doh tolian bana vaange"],
    ["she made two groups",	"oh doh tolian banaiya"],
    ["she makes two groups",	"oh doh tolian banaundi hai"],
    ["she will make two groups",	"oh doh tolian bana vegi"],
    ["it made problem",	"eh musibat banaiya"],
    ["it makes problem",	"eh musibat banaunda hai"],
    ["it will make problem",	"eh musibat bana vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz73() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make-[problem]", header: "Pvn-make-[problem]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i made two problems",	"mein doh musibatan banaiya"],
    ["i make two problems",	"mein doh musibatan banaundey haan"],
    ["i will make two problems",	"mein doh musibatan bana vaange"],
    ["you made two problems",	"tusi doh musibatan banaiya"],
    ["you make two problems",	"tusi doh musibatan banaundey ho"],
    ["you will make two problems",	"tusi doh musibatan bana vaange"],
    ["he made a problem",	"oh ik musibat banaiya"],
    ["he makes a problem",	"oh ik musibat banaunda hai"],
    ["he will make a problem",	"oh ik musibat bana vega"],
    ["they made two problems",	"oh doh musibatan banaiya"],
    ["they make two problems",	"oh doh musibatan banaundey han"],
    ["they will make two problems",	"oh doh musibatan bana vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz74() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-make,go-[problem,man]", header: "Pvn-make,go-[problem,man]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we made two problems",	"asi doh musibatan banaiya"],
    ["we make two problems",	"asi doh musibatan banaundey haan"],
    ["we will make two problems",	"asi doh musibatan bana vaange"],
    ["she made two problems",	"oh doh musibatan banaiya"],
    ["she makes two problems",	"oh doh musibatan banaundi hai"],
    ["she will make two problems",	"oh doh musibatan bana vegi"],
    ["it went to two men",	"eh doh kol aadmi giya"],
    ["it goes to two men",	"eh doh kol aadmi janda hai"],
    ["it will go to two men",	"eh doh kol aadmi ja vega"],
    ["i went to two men",	"mein doh kol aadmi gaye"],
    ["i go to two men",	"mein doh kol aadmi jandey haan"],
    ["i will go to two men",	"mein doh kol aadmi ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz75() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[man]", header: "Pvn-go-[man]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you went to two men",	"tusi doh kol aadmi gaye"],
    ["you go to two men",	"tusi doh kol aadmi jandey ho"],
    ["you will go to two men",	"tusi doh kol aadmi ja vaange"],
    ["he went to man",	"oh kol aadmi giya"],
    ["he goes to man",	"oh kol aadmi janda hai"],
    ["he will go to man",	"oh kol aadmi ja vega"],
    ["they went to two men",	"oh doh kol aadmi gaye"],
    ["they go to two men",	"oh doh kol aadmi jandey han"],
    ["they will go to two men",	"oh doh kol aadmi ja vaange"],
    ["we went to two men",	"asi doh kol aadmi gaye"],
    ["we go to two men",	"asi doh kol aadmi jandey haan"],
    ["we will go to two men",	"asi doh kol aadmi ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz76() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[man,woman]", header: "Pvn-go-[man,woman]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she went to a man",	"oh ik kol aadmi gayi"],
    ["she goes to a man",	"oh ik kol aadmi jandi hai"],
    ["she will go to a man",	"oh ik kol aadmi ja vegi"],
    ["it went to two women",	"eh doh kol auratan giya"],
    ["it goes to two women",	"eh doh kol auratan janda hai"],
    ["it will go to two women",	"eh doh kol auratan ja vega"],
    ["i went to two women",	"mein doh kol auratan gaye"],
    ["i go to two women",	"mein doh kol auratan jandey haan"],
    ["i will go to two women",	"mein doh kol auratan ja vaange"],
    ["you went to two women",	"tusi doh kol auratan gaye"],
    ["you go to two women",	"tusi doh kol auratan jandey ho"],
    ["you will go to two women",	"tusi doh kol auratan ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz77() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[woman]", header: "Pvn-go-[woman]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he went to two women",	"oh doh kol auratan giya"],
    ["he goes to two women",	"oh doh kol auratan janda hai"],
    ["he will go to two women",	"oh doh kol auratan ja vega"],
    ["they went to two women",	"oh doh kol auratan gaye"],
    ["they go to two women",	"oh doh kol auratan jandey han"],
    ["they will go to two women",	"oh doh kol auratan ja vaange"],
    ["we went to two women",	"asi doh kol auratan gaye"],
    ["we go to two women",	"asi doh kol auratan jandey haan"],
    ["we will go to two women",	"asi doh kol auratan ja vaange"],
    ["she went to woman",	"oh kol aurat gayi"],
    ["she goes to woman",	"oh kol aurat jandi hai"],
    ["she will go to woman",	"oh kol aurat ja vegi"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz78() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[place]", header: "Pvn-go-[place]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["it went to two places",	"eh doh nu jagahan giya"],
    ["it goes to two places",	"eh doh nu jagahan janda hai"],
    ["it will go to two places",	"eh doh nu jagahan ja vega"],
    ["i went to two places",	"mein doh nu jagahan gaye"],
    ["i go to two places",	"mein doh nu jagahan jandey haan"],
    ["i will go to two places",	"mein doh nu jagahan ja vaange"],
    ["you went to a place",	"tusi ik nu jagah gaye"],
    ["you go to a place",	"tusi ik nu jagah jandey ho"],
    ["you will go to a place",	"tusi ik nu jagah ja vaange"],
    ["he went to two places",	"oh doh nu jagahan giya"],
    ["he goes to two places",	"oh doh nu jagahan janda hai"],
    ["he will go to two places",	"oh doh nu jagahan ja vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz79() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[place,work]", header: "Pvn-go-[place,work]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["they went to two places",	"oh doh nu jagahan gaye"],
    ["they go to two places",	"oh doh nu jagahan jandey han"],
    ["they will go to two places",	"oh doh nu jagahan ja vaange"],
    ["we went to two places",	"asi doh nu jagahan gaye"],
    ["we go to two places",	"asi doh nu jagahan jandey haan"],
    ["we will go to two places",	"asi doh nu jagahan ja vaange"],
    ["she went to two places",	"oh doh nu jagahan gayi"],
    ["she goes to two places",	"oh doh nu jagahan jandi hai"],
    ["she will go to two places",	"oh doh nu jagahan ja vegi"],
    ["it went to work",	"eh te kamm giya"],
    ["it goes to work",	"eh te kamm janda hai"],
    ["it will go to work",	"eh te kamm ja vega"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz80() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[work]", header: "Pvn-go-[work]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["i went to work",	"mein te kamm gaye"],
    ["i go to work",	"mein te kamm jandey haan"],
    ["i will go to work",	"mein te kamm ja vaange"],
    ["you went to work",	"tusi te kamm gaye"],
    ["you go to work",	"tusi te kamm jandey ho"],
    ["you will go to work",	"tusi te kamm ja vaange"],
    ["he went to work",	"oh te kamm giya"],
    ["he goes to work",	"oh te kamm janda hai"],
    ["he will go to work",	"oh te kamm ja vega"],
    ["they went to work",	"oh te kamm gaye"],
    ["they go to work",	"oh te kamm jandey han"],
    ["they will go to work",	"oh te kamm ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz81() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[work,group]", header: "Pvn-go-[work,group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["we went to work",	"asi te kamm gaye"],
    ["we go to work",	"asi te kamm jandey haan"],
    ["we will go to work",	"asi te kamm ja vaange"],
    ["she went to work",	"oh te kamm gayi"],
    ["she goes to work",	"oh te kamm jandi hai"],
    ["she will go to work",	"oh te kamm ja vegi"],
    ["it went with two groups",	"eh doh tolian naal giya"],
    ["it goes with two groups",	"eh doh tolian naal janda hai"],
    ["it will go with two groups",	"eh doh tolian naal ja vega"],
    ["i went with two groups",	"mein doh tolian naal gaye"],
    ["i go with two groups",	"mein doh tolian naal jandey haan"],
    ["i will go with two groups",	"mein doh tolian naal ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz82() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go-[group]", header: "Pvn-go-[group]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["you went with two groups",	"tusi doh tolian naal gaye"],
    ["you go with two groups",	"tusi doh tolian naal jandey ho"],
    ["you will go with two groups",	"tusi doh tolian naal ja vaange"],
    ["he went with two groups",	"oh doh tolian naal giya"],
    ["he goes with two groups",	"oh doh tolian naal janda hai"],
    ["he will go with two groups",	"oh doh tolian naal ja vega"],
    ["they went with two groups",	"oh doh tolian naal gaye"],
    ["they go with two groups",	"oh doh tolian naal jandey han"],
    ["they will go with two groups",	"oh doh tolian naal ja vaange"],
    ["we went with group",	"asi toli naal gaye"],
    ["we go with group",	"asi toli naal jandey haan"],
    ["we will go with group",	"asi toli naal ja vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz83() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-go,know-[group,time]", header: "Pvn-go,know-[group,time]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["she went with two groups",	"oh doh tolian naal gayi"],
    ["she goes with two groups",	"oh doh tolian naal jandi hai"],
    ["she will go with two groups",	"oh doh tolian naal ja vegi"],
    ["it knew time",	"eh samah jaaneya"],
    ["it knows time",	"eh samah jaanda hai"],
    ["it will know time",	"eh samah jaan vega"],
    ["i knew time",	"mein samah jaaneya"],
    ["i know time",	"mein samah jaandey haan"],
    ["i will know time",	"mein samah jaan vaange"],
    ["you knew time",	"tusi samah jaaneya"],
    ["you know time",	"tusi samah jaandey ho"],
    ["you will know time",	"tusi samah jaan vaange"],
  ], options);
  return {info, quiz};
}

function content_quizzes4_quiz84() {
  let info = { project: "Punjabi", section: "Grammar", topic: "Pvn-know-[time]", header: "Pvn-know-[time]" };
  let options = { random: true, count: [18] };
  let quiz = build_choices([
    ["he knew time",	"oh samah jaaneya"],
    ["he knows time",	"oh samah jaanda hai"],
    ["he will know time",	"oh samah jaan vega"],
    ["they knew time",	"oh samah jaaneya"],
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

// module.exports.quizzes4 = quizzes4;
// 	