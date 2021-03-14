var synth = window.speechSynthesis;
var voices = [];

setTimeout(function() { synth = window.speechSynthesis; voices = synth.getVoices(); }, 200);
