// let MAX_CHOICES = 4;
// let MAX_QUIZES = 12;
let quizes = [];

// quizes = quizes.concat(quizzes1.slice(0,3));
// quizes = quizes.concat(quizzes2.slice(0,3));
// quizes = quizes.concat(quizzes3.slice(0,3));
// quizes = quizes.concat(quizzes4.slice(0,3));

// console.log(quizes);

const quizzes = [];
quizzes.push(quizzes1.slice(0,9));
quizzes.push(quizzes2.slice(0,10));
quizzes.push(quizzes3.slice(0,11));
quizzes.push(quizzes4.slice(0,12));

// console.log(quizzes);

quizes = quizes.concat(quizzes[0]);
quizes = quizes.concat(quizzes[1]);
quizes = quizes.concat(quizzes[2]);
quizes = quizes.concat(quizzes[3]);

// console.log(quizes);

// temporaily keep the old behavior
quizes = quizzes1;
