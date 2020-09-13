const util = require('util');

const dataset = [
	['kaala', 	'black', 	{type: 'color', 	attach: 'kaaley', 	alt: ['pakka']}],
	['chitta', 	'white', 	{type: 'color', 	attach: 'chittey', 	alt: ['gora']}],
	['laal', 	'red', 		{type: 'color', 	attach: 'laal', 	alt: ['ratta']}],
	['harra', 	'green', 	{type: 'color', 	attach: 'harrey', 	alt: ['harra']}],
	['neela', 	'blue', 	{type: 'color', 	attach: 'neeley', 	alt: ['neela']}],
	['peela', 	'yellow', 	{type: 'color', 	attach: 'peeley', 	alt: ['peela']}],
	['khatta', 	'orange', 	{type: 'color', 	attach: 'khattey', 	alt: ['santri']}],
	['jaamni', 	'purple', 	{type: 'color', 	attach: 'jaamni', 	alt: ['jaamni']}],
	['slati', 	'gray', 	{type: 'color', 	attach: 'slati', 	alt: ['slati']}],
	['bhoora', 	'brown', 	{type: 'color', 	attach: 'bhurrey', 	alt: ['boohra']}],
];

let quiz1 = create_quiz1();
let quiz2 = create_quiz2();
take_quiz_repeatedly(quiz1, 'pname', 5);
// take_quiz_repeatedly(quiz2, 'ename', 5);

function take_quiz_repeatedly(quiz, name='pname', max_count=5, min_certainity=0.5, increment=0.1, {each=3, average=3, pass=true}={}) {
	console.log(quiz);
	let results_all = [];
	let certainity = min_certainity;
	for(let i=0; i<max_count; i++) {
		let results1 = take_quiz1(quiz, certainity, name);
		// console.log('results1: ', results1)
		results_all.push(results1);
		certainity += increment;
	}
	let overall = check_results(results_all, {each, average});
	console.log({each: overall.each, average: overall.average, pass: overall.pass});
}

function check_results(results_coll, options) {
	let counter = [];
	for(let results_one of results_coll) {
		let {correct, incorrect, total, results} = results_one;
		for(let i=0; i<results.length; i++) {
			let [pname, ename, choices, question, expected, answer, result] = results[i];
			if(result) { if(counter[i]) counter[i]++; else counter[i] = 1; }
		}
	}
	console.log(counter);
	let each = counter.slice(0).sort()[0];
	let total = counter.reduce((a,b) => a+b,0);
	let average = total/results_coll[0].results.length;
	let pass = each>=options.each && average>=options.average;
	return {each, average, pass};
}

function take_quiz1(quiz, certainity=1, name='pname') {
	let score = { correct: 0, incorrect: 0, total: quiz.length, results: [] };
	for(let i=0; i<quiz.length; i++) {
		let {pname, ename, choices} = quiz[i];
		let expected = name==='pname' ? pname : ename;
		let question = name==='pname' ? ename : pname;
		let pindex = choices.indexOf(expected);
		let index  = Math.random()>certainity ? random(0, choices.length-1) : pindex;
		// let index  = pindex;
		let answer = choices[index];
		console.log(`--------------${i}----------------------`)
		console.log(`question: ${question}  [${expected}]`)
		console.log(`choices: ${choices}`)
		console.log(`answer: ${answer}`)
		console.log(`index: ${index}`)
		let result = answer===expected ? 1 : 0;
		console.log(result ? "Passed" : "FAILED --------------")
		if(result) score.correct++;
		else score.incorrect++;
		score.results.push([pname, ename, choices, question, expected, answer, result])
	}
	console.log("score: ", { correct: score.correct, incorrect: score.incorrect, total: score.total });
	console.log("score.results: ", util.inspect(score.results, {breakLength:200}));
	return score;
}

function create_quiz1() {
	let quiz = [];
	for(let i=0; i<dataset.length; i++) {
		let [pname, ename, obj] = dataset[i];
		let dataset_minus = dataset.filter(row => row[0]!==pname);
		let dataset_minus_list = dataset_minus.map(row => row[0]);
		console.log(`..... ${ename}............`);
		// console.log(dataset_minus_list);
		dataset_minus_list.unshift(pname);
		let subset_list = dataset_minus_list.slice(0,4);
		let choices = shuffle(subset_list);
		console.log(choices);
		console.log(choices.indexOf(pname))
		console.log(ename);
		// let subset = subset_random(dataset_minus, 4);
		// let subset_list = subset.map(row => row[1]);
		// let choices = mix_unique(subset_list, pname, 4);
		// let choices = shuffle(mix_unique(subset_list, ename, 4));
		console.log(`pname=${pname}, ename=${ename}, choices=${choices}`);
		quiz.push({pname, ename, choices})
	}
	return quiz;
}


function create_quiz2() {
	let quiz = [];
	for(let i=0; i<dataset.length; i++) {
		let [pname, ename, obj] = dataset[i];
		let dataset_minus = dataset.filter(row => row[1]!==ename);
		let dataset_minus_list = dataset_minus.map(row => row[1]);
		console.log(`..... ${ename}............`);
		// console.log(dataset_minus_list);
		dataset_minus_list.unshift(ename);
		let subset_list = dataset_minus_list.slice(0,4);
		let choices = shuffle(subset_list);
		console.log(choices);
		console.log(choices.indexOf(ename))
		console.log(pname);
		// let subset = subset_random(dataset_minus, 4);
		// let subset_list = subset.map(row => row[1]);
		// let choices = mix_unique(subset_list, pname, 4);
		// let choices = shuffle(mix_unique(subset_list, ename, 4));
		console.log(`pname=${pname}, ename=${ename}, choices=${choices}`);
		quiz.push({pname, ename, choices})
	}
	return quiz;
}

function create_quiz2() {
	let quiz = [];
	for(let i=0; i<dataset.length; i++) {
		let [pname, ename, obj] = dataset[i];
		let dataset_minus = dataset.filter(row => row[0]!==pname);
		let dataset_minus_list = dataset_minus.map(row => row[1]);
		console.log(`..... ${ename}............`);
		// console.log(dataset_minus_list);
		dataset_minus_list.unshift(ename);
		let subset_list = dataset_minus_list.slice(0,4);
		let choices = shuffle(subset_list);
		console.log(choices);
		console.log(choices.indexOf(ename))
		console.log(pname);
		// let subset = subset_random(dataset_minus, 4);
		// let subset_list = subset.map(row => row[1]);
		// let choices = mix_unique(subset_list, pname, 4);
		// let choices = shuffle(mix_unique(subset_list, ename, 4));
		console.log(`pname=${pname}, ename=${ename}, choices=${choices}`);
		quiz.push({pname, ename, choices})
	}
	return quiz;
}


function subset_random(data, length) {
	let output = [];
	for(let i=0; i<length; i++) {
		// console.log(`${random(0,data.length-1)}`)
		output.push(data[random(0,data.length-1)]);
	}
	return output;
}

function mix_unique(list, item, len) {
	return push_unique(list, item).slice(0,len);
}

function push_unique(list, item) {
	if(list.indexOf(item) === -1) list.unshift(item);
	return list;
}

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}

function stringify(obj) {
	return JSON.stringify(obj);
}

function random(min, max, digits=0) {
	let rand = min + Math.random() * (max - min);
	if(digits===undefined) return rand;
	if(digits===0) return Math.round(rand);
	let factor = Math.pow(10,digits);
	return Math.round(rand*factor)/factor;
}

function random_int(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

function random_float(min, max) {
	return min + Math.random() * (max - min);
}
