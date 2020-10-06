class VoiceOver {
    constructor(voice=0) {
        this.voice = voice;
        this.loaded = 0;
        this.topic = 'counting';
        this.audioFiles = [
            "audio/counting/voice0.ogg",
            "audio/counting/voice1.ogg",
            "audio/counting/voice2.ogg",
        ];
        // this.preloadAll();
        this.cacheerr = {};
        this.setPlayer();
    }
    setPlayer() {
        this.player = document.getElementById('player');
        if(!this.player) {
            this.player = document.createElement('audio');
            this.player.id = 'player';
        }
    }
    setTopic(topic=this.topic) {
        console.log(`setTopic(${topic}): this.topic=${this.topic}`)
        topic = topic.toLowerCase();
        for(let i in this.audioFiles) {
            this.audioFiles[i] = this.audioFiles[i].replace(`\/${this.topic}\/`, `\/${topic}\/`)
        }
        // this.preloadAll();
        this.topic = topic;
    }
    preloadAll() {
        this.loaded = 0;
        // we start preloading all the audio files
        for (var i in this.audioFiles) {
            this.preloadAudio(this.audioFiles[i]);
        }
    }
    preloadAudio(url) {
        var audio = new Audio();
        // once this file loads, it will call loadedAudio() 
        // the file will be kept by the browser as cache
        // audio.addEventListener('canplaythrough', this.loadedAudio, false);
        audio.addEventListener('canplaythrough', null, false);
        // audio.type = 'audio/wav';
        audio.type = 'audio/ogg';
        audio.src = url;
        console.log(`preloadAudio(${url}): audio.type=${audio.type}`)
    }
    // loadedAudio() {
    //     // this will be called every time an audio file is loaded
    //     // we keep track of the loaded files vs the requested files
    //     this.loaded++;
    //     if (this.loaded == this.audioFiles.length){
    //       // all have loaded
    //       // init();
    //     }
    //     console.log(`audio files loaded so far...` + this.loaded);
    // }
    // doesUrlExist(url) {
    //     var http = new XMLHttpRequest();
    //     http.open('HEAD', url, false);
    //     http.send();
    //     return http.status!=404;
    // }
    play(index, num=0, startTime=0, endTime=2, voice=this.voice) {
        // [startTime, endTime] = getVoiceStamps(index-1, num, voice);
        let output = getVoiceStamps(index-1, num, voice);
        if(!output) return;
        [startTime, endTime] = output;
        if(!startTime && !endTime) return;
        startTime -= 0.4; endTime += 0.4;
        let delaySec = endTime - startTime;
        let delayMillis = delaySec * 1000;
        // if(!this.doesUrlExist(this.audioFiles[this.voice])) {
        //     console.log(`audio file does not exist, skipping...`, this.audioFiles[this.voice]);
        // }
        let audiofile = this.audioFiles[voice];
        if(this.cacheerr[audiofile]) {
            console.log(`audio file "${audiofile}" not loaded!`);
            // return; // file not available
        }
        let player = this.player;
        player.src = audiofile;
        player.currentTime = startTime;
        player.play();
        setTimeout(function(){
            player.pause();
        }, delayMillis);
        if(!player.readyState) {
            console.log(`audio file "${audiofile}" not loaded! readyState=${player.readyState}`);
            this.cacheerr[audiofile] = 1;
        }
    }
    change_voice(vi) { 
        this.voice = vi;  
    }
}

// var voiceOver = new VoiceOver();


function getVoiceStamps(i=0, num=0, voice=0) {
    if(num !== 1) return [0, 0];
    return getStamps(i);
    // functions
    function getStamps(i) {
        switch(voice) {
            case 0: return stamps0(i);
            case 1: return stamps1(i);
            case 2: return stamps2(i);
        }
        return stamps2(i);
    }
    function stamps0(i) {
        return [
          [1.22247, 1.69431], [2.12077, 2.59499], [3.04807, 3.55615], [4.00943, 4.53014],
          [5.0749, 5.48857],  [6.29327, 6.75379], [7.25844, 7.68379], [8.14061, 8.57184],
          [9.19959, 9.68912], [10.0902, 10.4873], [10.96, 11.4808],   [11.8641, 12.2388],
        ][i];
    }
    function stamps1(i) {
        return [
          [0.327959, 0.726281], [1.32794, 1.75891], [2.25274, 2.64617], [3.25517, 3.75902],
          [4.24653, 4.75669], [5.24735, 5.7349],    [6.41522, 6.69261], [7.29585, 7.80286],
          [8.25891, 8.75832], [9.31499, 9.63737],   [10.3028, 10.7885], [11.3748, 11.7233],
        ][i];
    }
    function stamps2(i) {
        return [
          [0.891474, 1.00687], [2.19646, 2.66896], [3.58968, 3.94129], [4.85122, 5.1939],
          [6.13807, 6.51918],  [7.3759, 7.80367],  [8.6595, 9.08893],  [9.90324, 10.1644],
          [11.0939, 11.4851],  [12.3791, 12.6672], [13.5721, 14.0024], [14.8623, 15.1308],
        ][i];
    }
}
