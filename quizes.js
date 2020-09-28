let MAX_CHOICES = 4;
let MAX_QUIZES = 6;
let quizes = [];
quizes.push(content_quiz1());
quizes.push(content_quiz2());
quizes.push(content_quiz3());
quizes.push(content_quiz4());
quizes.push(content_quiz5());
quizes.push(content_quiz6());
// quizes.push(content_quiz1());
// quizes.push(content_quiz2());
// quizes.push(content_quiz3());

function content_quiz1() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Primary Colors", header: "Colors" };
  let options = { random: true, count: [8] };
  let quiz = build_choices([
    ['Kaala', 'Black'],
    ['Laal',  'Red'],
    ['Haraa', 'Green'],
    ['Neela',  'Blue'],
    ['Peela',  'Yellow'],
    ['Chitta', 'White'],
    ['Slati',  'Gray'],
    ['Kesri',  'Saffron'],
    ['Santri', 'Orange'],
    ['Jaamni', 'Purple'],
    ['Gulabi', 'Pink'],
    ['Bhoora', 'Brown'],
    ['Firozi', 'Turquoise'],
  ], options);
  return {info, quiz};
}

function content_quiz2() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Counting", header: "Counting" };
  let options = { random: true, count: [12] };
  let quiz = build_choices([
    ['Ik', 'One'],
    ['Do', 'Two'],
    ['Tinn', 'Three'],
    ['Chaar', 'Four'],
    ['Panj',  'Five'],
    ['Shay',  'Six'],
    ['Satt',  'Seven'],
    ['Athth', 'Eight'],
    ['Nau',   'Nine'],
    ['Duss',  'Ten'],
    ['Giaran',  'Eleven'],
    ['Baaran',  'Twelve'],
    ['Teran',   'Thirteen'],
    ['Chaudan', 'Fourteen'],
    ['Pandran', 'Fifteen'],
    ['Solan',   'Sixteen'],
    ['Sataran', 'Seventeen'],
    ['Thaaran', 'Eighteen'],
    ['Unni',  'Nineteen'],
    ['Veeh',  'Twenty'],
    ['Ikki',  'Twenty-one'],
    ['Baai',  'Twenty-two'],
    ['Teii',  'Twenty-three'],
    ['Chovvi', 'Twenty-four'],
  ], options);
  return {info, quiz};
}

function content_quiz3() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Vegetables", header: "Vegetables" };
  let options = { random: true, count: [11] };
  let quiz = build_choices([
    ['Aaloo', 'Potato'],
    ['Gobi',  'Cauliflower'],
    ['Matar', 'Peas'],
    ['Gajar', 'Carrot'],
    ['Mooli', 'Radish'],
    ['Bengan', 'Eggplant'],
    ['Bhindi', 'Okra'],
    ['Daal',    'Lentil'],
    ['Chholle', 'Gurbanzo-beans'],
    ['Palak', 'Spinach'],
    ['Tumator', 'Tomato'],
    ['Adrik', 'Ginger'],
    ['Lasan', 'Garlic'],
    ['Methi', 'Fenugreek'],
  ], options);
  return {info, quiz};
}

function content_quiz4() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Body", header: "Body" };
  let options = { random: true, count: [8] };
  let quiz = build_choices([
    ['Hath', 'Hands'],
    ['Munh', 'Mouth'],
    ['Akhan', 'Eyes'],
    ['Sirh',  'Head'],
    ['Kann',  'Ears'],
    ['Nakk',  'Nose'],
    ['Chehra',  'Face'],
    ['Dandh',  'Teeth'],
    ['Unglan',  'Fingers'],
    ['Chamdi',  'Skin'],
    ['Haddian',  'Bones'],
    ['Khoon',  'Blood'],
  ], options);
  return {info, quiz};
}

function content_quiz5() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Physical", header: "Physical" };
  let options = { random: true, count: [8] };
  let quiz = build_choices([
    ['Lamba', 'Long'],
    ['Goal', 'Round'],
    ['Chapta', 'Flat'],
    ['Patla',  'Thin'],
    ['Sakhat',  'Hard'],
    ['Pola',  'Soft'],
    ['Tikha',  'Sharp'],
    ['Koola',  'Smooth'],
    ['Bhara',  'Heavy'],
  ], options);
  return {info, quiz};
}

function content_quiz6() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Environmental", header: "Environmental" };
  let options = { random: true, count: [8] };
  let quiz = build_choices([
    ['Asmaan', 'Sky'],
    ['Dharti', 'Earth'],
    ['Sooraj', 'Sun'],
    ['Chand',  'Moon'],
    ['Taarey',  'Stars'],
    ['Zameen',  'Ground'],
    ['Dinney',  'During the day'],
    ['Raati',  'At night'],
    ['Din',  'Day'],
    ['Raat',  'Night'],
  ], options);
  return {info, quiz};
}

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

function content_quizX() {
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Timings, Past Present and Future", header: "Timings" };
  let options = { random: true, count: [8] };
  let quiz = build_choices([
    ['Ajj', 'Today'],
    ['Kal', 'Tomorrow or Yesterday'],
    ['Subah', 'Morning'],
    ['Shaam',  'Evening'],
  ], options);
  return {info, quiz};
}

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
