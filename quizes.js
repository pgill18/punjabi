let MAX_CHOICES = 4;
let MAX_QUIZES = 6;
let quizes = [];
quizes.push(content_quiz1());
quizes.push(content_quiz2());
quizes.push(content_quiz3());
// quizes.push(content_quiz1());
// quizes.push(content_quiz2());
// quizes.push(content_quiz3());
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
  let info = { project: "Punjabi", section: "Vocabulary", topic: "Vegitables", header: "Vegitables" };
  let options = { random: true, count: [11] };
  let quiz = build_choices([
    ['Aaloo', 'Potato'],
    ['Gobi',  'Cauliflower'],
    ['Matar', 'Peas'],
    ['Gajar', 'Carrot'],
    ['Mooli', 'Radish'],
    ['Bengan', 'Eggplant'],
    ['Bhindi', 'Okra'],
    ['Daal',    'Pulse'],
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
  let choices = [];
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
