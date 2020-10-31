let MAX_CHOICES = 4;
let MAX_QUIZES = 12;
// let quizes = [];

// quizes.push(content_quiz1());
// quizes.push(content_quiz2());
// quizes.push(content_quiz3());
// quizes.push(content_quiz4());
// quizes.push(content_quiz5());
// quizes.push(content_quiz6());
// quizes.push(content_quiz7());
// quizes.push(content_quiz8());
// quizes.push(content_quiz9());
// quizes.push(content_quiz10());

// function content_quiz1() {
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

// hands, mouth, eyes, head, ears, nose, face, teeth, fingers, skin, bones, blood  Body parts
// long, round, flat, thin, hard, soft, sharp, smooth, heavy   Physical
// sky, the Earth, sun, moon, stars, ground, during the day, at night, day  Environmental
// be on something, at the top, at the bottom, in the middle, in front of, around  Spatial / physical
// water, fire Fire and water
// creature, grow, egg, tail, wings, feathers  Biological
// children, men, women, be born, mother, father, wife, husband  Biosocial
// wood, stone Materials
// know (someone), be called "Knowing" and "naming"
// hold, make, kill, breathe, sleep, sit, lie, stand, play, laugh, sing  "Doing"

function build_choices(data, options) {
  if(options.count) {
    data = data.slice(0, options.count[0]);
  }
  let choices = [], index = 0;
  for(let row of data) {
    choices.push(row[1])
  }
  for(let row of data) {
    this_choices = choices.slice(0);
    remove_item(row[1], this_choices);
    this_choices = shuffle(this_choices);
    this_choices.unshift(row[1]);
    this_choices = this_choices.slice(0, MAX_CHOICES);
    this_choices = shuffle(this_choices);
    row[2] = this_choices.slice(0, MAX_CHOICES);
    row[3] = index++;
  }
  if(options.random) data = shuffle(data);
  return data;
}
function remove_item(item, list) {
  let index = list.indexOf(item);
  if(index < 0) return list;
  list.splice(index, 1);
  return list;
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
