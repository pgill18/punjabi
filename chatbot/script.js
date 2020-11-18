var avatar_chatbot = { me: 'chatbot/img/king2.jpg', you: 'chatbot/img/assistant2.png', they: 'chatbot/img/they2.png', sys: 'chatbot/img/sys2.png' };
var score_chatbot = { points: 0, joined: 0 };
var settings_chatbot = { font_size: 16, speedup: 2, hints: 2, prompt: 1, mult: 1, feedback: 1, duplex: 1, expert: 0, quiet: 1, test: 0 };
var data_chatbot = { hint_text: '', hint_tooltip: 'Will reduce points earned', answer: '' };
var status_chatbot = { closed: 0 };

function formatAMPM_chatbot(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
async function insertChat_chatbot(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM_chatbot(new Date());
    // let other_avatar = (who==='you') ? you.avatar : sys.avatar;
    let avatar_other = (who==='you') ? avatar_chatbot.you : avatar_chatbot.sys;
    $('.chatbot_hint').removeClass('chatbot_hint');
    let tooltip =  `data-toggle="tooltip" data-placement="top" title="${data_chatbot.hint_tooltip}"`;

    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="chatbot-msj chatbot-macro">' +
                        '<div class="chatbot-avatar"><img class="img-circle" style="width:100%;" src="'+ avatar_chatbot.me +'" /></div>' +
                            '<div class="chatbot-text chatbot-text-l">' +
                                '<p class="msg-text" style="font-size:16px; color:#292f33">'+ text + '</p>' + '<b class="tbd"></b>' +
                                `<a><small class="chatbot_hint" ${tooltip} data-util="" onclick="launchUtilModal_chatbot(this,'Hint')">Hint</small></a>` +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    } else if (who == "they") {
        control = '<li style="width:100%;">' +
                        '<div class="chatbot-msj-rta chatbot-macro" style="background: white !important">' +
                            '<div class="chatbot-text chatbot-text-r">' +
                                '<p class="msg-text" style="font-size:16px; color:#292f33">'+text+'</p>' +
                                `<a><small class="chatbot_hint" ${tooltip} data-util="" onclick="launchUtilModal_chatbot(this,'Hint')">Hint</small></a>` +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="chatbot-avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+avatar_chatbot.they+'" /></div>' +                                
                  '</li>';
    } else {
        control = '<li style="width:100%;">' +
                        '<div class="chatbot-msj-rta chatbot-macro">' +
                            '<div class="chatbot-text chatbot-text-r">' +
                                '<p class="msg-text" style="font-size:16px; color:#292f33">'+text+'</p>' +
                                `<a><small class="chatbot_hint" ${tooltip} data-util="" onclick="launchUtilModal_chatbot(this,'Hint')">Hint</small></a>` +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="chatbot-avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+avatar_other+'" /></div>' +                                
                  '</li>';
    }
    return setTimeout(
        function(){                        
            $("#chatbot-ul").append(control).scrollTop($("#chatbot-ul").prop('scrollHeight'));
            setFontSize_chatbot(settings_chatbot.font_size);
        }, time);
    
}

function resetChat_chatbot(){
    $("#chatbot-ul").empty();
}

var synonyms = [['tuhaanu', 'tuhanu'], ['thonu', 'tuhanu'], ['asanu', 'saanu'], ['sanu', 'saanu'], ['ai', 'hai']];

// var conversations_chatbot = [
//     [
//         {q: 'greetings', a: 'sat sri akaal', ql: ['true', 'venerable', 'eternal'], al: ['sat', 'sri', 'akaal'], synonyms, match: 0.1 },
//         {q: 'how are you doing?', a: 'ki haal hai ji?', ql: ['what', 'situation', 'is it', 'with-respect'], al: ['ki', 'haal', 'hai', 'ji'], synonyms, match: 0.1 },
//         {q: 'it is a wonderful day', a: 'bada sohna din hai', ql: ['very', 'beautiful', 'day', 'it is'], al: ['bada', 'sohna', 'din', 'hai'], synonyms: [['bahut', 'bada']].concat(synonyms), match: 0.1 },
//         {q: 'this is a wonderful place', a: 'badi sohni jagah hai', ql: ['very', 'beautiful', 'place', 'it is'], al: ['badi', 'sohni', 'jagah', 'hai'], synonyms: [['bahut', 'badi']].concat(synonyms), match: 0.1 },
//         {q: "i am happy to meet ya'll", a: 'tuhanu mil ke bahut khushi hoi', ql: ["ya'll", 'after_meeting', 'very', 'happy', 'felt'], al: ['tuhanu', 'mil_ke', 'bahut', 'khushi', 'hoi'], synonyms: [['badi', 'bahut']].concat(synonyms), match: 0.1 },
//         {q: 'we are here to recruit people', a: 'asi ithe aaye haan, saanu kamm lai bande chhidey ai', ql: ['we', 'here', 'come', 'ay', 'to us', 'work', 'for', 'people', 'need', 'ay'], al: ['asi', 'ithe', 'aaye', 'haan', 'saanu', 'kamm', 'lai', 'bande', 'chhidey', 'ai'], synonyms: synonyms, match: 0.1 },
//     ],
//     [
//         {q: "Hi, how are you doing?", a: "Hā'i, tusīṁ kivēṁ hō?", ql: ["Hā'i,","tusīṁ","kivēṁ","hō?"], al: ["Hā'i,","tusīṁ","kivēṁ","hō?"], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "I'm doing great. How about you?", a: "Maiṁ vadhī'ā kara rihā hāṁ. Tuhāḍē bārē kivēṁ?", ql: ["Maiṁ","vadhī'ā","kara","rihā","hāṁ.","Tuhāḍē","bārē","kivēṁ?"], al: ["Maiṁ","vadhī'ā","kara","rihā","hāṁ.","Tuhāḍē","bārē","kivēṁ?"], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "Not too bad.", a: "Bahuta māṛā nahīṁ.", ql: ["Bahuta","māṛā","nahīṁ."], al: ["Bahuta","māṛā","nahīṁ."], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "Do you come to this restaurant often?", a: "Kī tusīṁ akasara isa raisaṭōraiṇṭa vica ā'undē hō?", ql: ["Kī","tusīṁ","akasara","isa","raisaṭōraiṇṭa","vica","ā'undē","hō?"], al: ["Kī","tusīṁ","akasara","isa","raisaṭōraiṇṭa","vica","ā'undē","hō?"], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "I've been here a couple of times, but I don't come on a regular basis. What have you been up to?", a: "Maiṁ ithē ka'ī vāra ā'i'ā hāṁ, para maiṁ niyamita taura'tē nahīṁ ā'undā. Tusīṁ kī karana ga'ē hō?", ql: ["Maiṁ","ithē","ka'ī","vāra","ā'i'ā","hāṁ,","para","maiṁ","niyamita","taura'tē","nahīṁ","ā'undā.","Tusīṁ","kī","karana","ga'ē","hō?"], al: ["Maiṁ","ithē","ka'ī","vāra","ā'i'ā","hāṁ,","para","maiṁ","niyamita","taura'tē","nahīṁ","ā'undā.","Tusīṁ","kī","karana","ga'ē","hō?"], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "I'm pretty busy at work these days, but otherwise, everything is great.", a: "Maiṁ ajakal'ha kama vica kāfī rujhi'ā hō'i'ā hāṁ, para nahīṁ tāṁ sabha kujha vadhī'ā hai.", ql: ["Maiṁ","ajakal'ha","kama","vica","kāfī","rujhi'ā","hō'i'ā","hāṁ,","para","nahīṁ","tāṁ","sabha","kujha","vadhī'ā","hai."], al: ["Maiṁ","ajakal'ha","kama","vica","kāfī","rujhi'ā","hō'i'ā","hāṁ,","para","nahīṁ","tāṁ","sabha","kujha","vadhī'ā","hai."], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "Well, have a good evening.", a: "Achā, cagī śāma hōvē.", ql: ["Achā,","cagī","śāma","hōvē."], al: ["Achā,","cagī","śāma","hōvē."], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//         {q: "You too.", a: "Tusīṁ vī.", ql: ["Tusīṁ","vī."], al: ["Tusīṁ","vī."], synonyms: [['tuhada', 'tuhaada']].concat(synonyms), match: 0.1},
//     ],
// ];

// var conversations_chatbot = [
//     [
//         {q: 'greetings', a: 'sat sri akaal', qpl: ['greetings'], apl: ['sat sri akaal'], ql: ['true', 'venerable', 'eternal'], al: ['sat', 'sri', 'akaal'], synonyms, match: 0.1 },
//         {q: 'how are you doing?', a: 'ki haal hai ji?', qpl: ['what situation', 'is it (respectfully)'], apl: ['ki haal', 'hai ji'], ql: ['what', 'situation', 'is it', 'with-respect'], al: ['ki', 'haal', 'hai', 'ji'], synonyms, match: 0.1 },
//         {q: 'it is a wonderful day', a: 'bada sohna din hai', qpl: ['very', 'beautiful day', 'it is'], apl: ['bada', 'sohna din', 'hai'], ql: ['very', 'beautiful', 'day', 'it is'], al: ['bada', 'sohna', 'din', 'hai'], synonyms: [['bahut', 'bada']].concat(synonyms), match: 0.1 },
//         {q: 'this is a wonderful place', a: 'badi sohni jagah hai', qpl: ['very', 'beautiful place', 'it is'], apl: ['badi', 'sohni jagah', 'hai'], ql: ['very', 'beautiful', 'place', 'it is'], al: ['badi', 'sohni', 'jagah', 'hai'], synonyms: [['bahut', 'badi']].concat(synonyms), match: 0.1 },
//         {q: "i am happy to meet ya'll", a: 'tuhanu mil ke bahut khushi hoi', qpl: ["after meeting ya'll", 'have happy feeling'], apl: ['tuhanu mil ke', 'bahut khushi hoi'], ql: ["ya'll", 'after_meeting', 'very', 'happiness', 'have'], al: ['tuhanu', 'mil_ke', 'bahut', 'khushi', 'hoi'], synonyms: [['badi', 'bahut']].concat(synonyms), match: 0.1 },
//         {q: 'we are here to recruit people', a: 'asi ithe aaye haan, saanu kamm lai bande chhidey ai', qpl: ['we', 'have come here', 'ay', 'to us', 'for work', 'need people'], apl: ['asi', 'ithe aaye', 'haan', 'saanu', 'kamm lai', 'bande chhidey ai'], ql: ['we', 'here', 'come', 'ay', 'to us', 'work', 'for', 'people', 'need', 'ay'], al: ['asi', 'ithe', 'aaye', 'haan', 'saanu', 'kamm', 'lai', 'bande', 'chhidey', 'ai'], synonyms: synonyms, match: 0.1 },
//     ],
// ];

function launchUtilModal_chatbot(_this, title, {text, size=''}={}) {
    if(!text) text = $(_this).prop('data-util');
    if(!text) text = data_chatbot.hint_text;
    if(title) $(`#utilModalTitle`).text(title);
    // if(text) $(`#utilModalBodyText`).text(text);
    let html = text+`<br><small style="color:silver">*Hints reduce points earned</small>`;
    if(text) $(`#utilModalBodyText`).html(html);
    $(`#utilModal`).modal('show');
}

function typeAnswer_chatbot(debug) {
    if(!debug) return;
    $(".chatbot-mytext").val(data_chatbot.answer);
    const ke = new KeyboardEvent('keydown', {
        bubbles: true, cancelable: true, keyCode: 13
    });
    // document.body.dispatchEvent(ke);
    document.getElementsByClassName("chatbot-mytext")[0].dispatchEvent(ke);
}
function addJoined_chatbot(debug) {
    if(!debug) return;
    score_chatbot.points = 100;
    typeAnswer_chatbot(debug);
}

function readKey_chatbot() {
    return new Promise(resolve => {
        window.addEventListener('keypress', resolve, {once:true});
    });
}

function keyboard_chatbot() {
    return new Promise(resolve => {
        $(".chatbot-mytext").on("keydown", function(e){
            console.log(`here...keydown()`)
            if (e.which == 13){
                var text = $(this).val();
                if (text !== ""){
                    // insertChat_chatbot("me", text);              
                    $(this).val('');
                    $(".chatbot-mytext").off("keydown");
                    console.log(`enter found after "${text}"...resolving`)
                    resolve(text);
                }
                else console.log(`enter found after "${text}"...empty, not resolving`)
            }
            if(status_chatbot.closed) {
                $(".chatbot-mytext").off("keydown");
                console.log(`status_chatbot.closed...resolving`)
                resolve('');
            }
        });
    });
}
function cleanup_words_chatbot(word, synonyms) {
    word = word.replace(/\s+/g, ' '); // replace multiple whitespaces by just one
    word = word.replace(/(\w)_(\w)/g, '$1 $2'); // one underscore means two words separated by whitespace
    word = word.replace(/__/g, '_'); // two underscores means jusr one underscore
    if(synonyms) {
        for(let [source, target] of synonyms) {
            word = word.replace(RegExp(`\\b${source}\\b`), target);
        }
    }
    // console.log(`--------cleanup_words_chatbot(${word})----------`);
    return word;
}
async function launch_standalone_chatbot(count, expertize, _this) {
    let total = parseInt($(_this).prop('data-enrolled')) || 0;
    let credits = 3 - total;
    return launch_chatbot(count, expertize, total, enrolled);
}

async function launch_chatbot_top(count, expertize, _this) {
    let total = parseInt($(_this).prop('data-enrolled')) || 0;
    let credits = 3 - total;
    if(credits <= 0) if(confirm('You have used up all your tickets. Come back later!\nPress "cancel" if you want to try anyway (using borrowed tickets)./')) return;

    let enrolled = await launch_chatbot(i, count, expertize);
    total = (parseInt($(_this).prop('data-enrolled')) || 0) + enrolled;
    $(_this).prop('data-enrolled', total);
    // console.log(_this);
    // console.log($(_this).prop('data-enrolled'));
    $(_this).find('a').text(total);
    $(_this).find('a').css('color', 'dimgray');
    credits = 3 - total;
    let color = credits<=0 ? 'lightgray' : credits<=1 ? '#6699cc' : credits<=2 ? 'yellowgreen' : credits<=2 ? 'yellow' : 'orange';
    $(_this).find('i').css('color', color);
}

async function launch_chatbot(i, difficulty, expertize) {
    score_chatbot.points = 0; score_chatbot.joined = 0;
    $("#joinModalPoints").text(0);
    $("#joinModalJoined").text(0);
    $("#joinModalJoined").parent().css('background', '');
    resetChat_chatbot();

    status_chatbot.closed = 0;
    $('#chatbotModal').modal({backdrop: 'static', keyboard: false});
    $('#chatbotModal').on('hide.bs.modal', () => {
        status_chatbot.closed = 1;
        $(".chatbot-mytext").keydown();
    });
    let enrolled = await run_chatbot(i, difficulty, expertize);
    console.log(`ending launch_chatbot(${i}, ${difficulty}, ${expertize}) ...`)
    return enrolled
}
async function close_chatbot_modal() {
    status_chatbot.closed = 1;
    $(".chatbot-mytext").keydown();
    $('#chatbotModal').modal('hide');
    status_chatbot.closed = 1;
}

async function run_chatbot(inx, difficulty, expertize=1) {
    let index = 0, score = 0;
    let conversations = conversations_chatbot;
    let conversation = conversations[0];
    let converse = conversation.slice(0); //conversation.slice(0, sents_count);
    // let sents_count = difficulty>conversation.length ? conversation.length : difficulty<3 ? 3 : difficulty;
    let sents_count = difficulty + 1;
    if(difficulty>10) sents_count = 10 + round(difficulty/5);
    let count = 0, score10 = 0, length = 0, clear_chat = true;

    for(let attempt=1; attempt<10; attempt++) {
        let opening = (attempt%2) ? "they" : "me";
        for(let ci=0; ci<conversations.length; ci++) {
            let converse = conversations[ci];
            let score1 = 0, dia = 0;  let turn = opening;
            for(let i=0; i<converse.length; i++, dia++) {
                if(converse[i]===undefined) continue;
                if(!converse[i].plus) if(i>0) turn = (turn==='me') ? 'they' : 'me';
                console.log(`--------------- converse.plus = ${converse.plus}`)
                await delays(1);
                if(clear_chat) if(!settings_chatbot.expert && !settings_chatbot.duplex && (settings_chatbot.prompt!==1)) {
                    await delays(5); resetChat_chatbot();
                }
                if(settings_chatbot.duplex) {
                    if(turn==='they') {
                        // console.log(`................. ${i}. ${converse[i].a} ..................`)
                        insertChat_chatbot("they", converse[i].a, 0);
                        continue;
                        // delay(1); i++; dia++;
                    }
                    data_chatbot.hint_text = converse[i].a;
                    // $('.chatbot_hint').prop(`data-util`, converse[i].a);
                }
                // let [_count, _score, _scorex, _length, _clear] = await one_run_chatbot(i);
                let [_score10, _score1, _score, _length, _joined_now, _clear_chat] = await one_run_chatbot(i, converse, 100/sents_count);
                if(status_chatbot.closed) return Math.floor(count);
                score1 += _score1;   score += _score;
                score10 += _score10;   length += _length;
                console.log(`-------------`)
                console.log(`overall-normalized-score = ${score1}, overall-sentences-count = ${sents_count}`);
                console.log(`overall-progress = score/sentences-count = ${score1/sents_count}`)
                // console.log(`i = ${i} ... sentence-normalized-score = ${_score1}, sentence-length = ${_length}`)
                clear_chat = _clear_chat;
                // let count_so_far = count + (score1/sents_count); //*settings_chatbot.mult;
                let count_so_far = count + _joined_now;
                if(count_so_far >= 1) {
                    count = count_so_far; break;
                }
            }
            // count += score1/sents_count; //*settings_chatbot.mult;
            console.log(`overall count = ${count}, overall score = ${score1} from ${dia+1} dialogues.`)
            // insertChat_chatbot("you", `Your total score from this conversation was ${round(score, 3)} out of ${length}`, 0);
            if(count >= 0.8 && score_chatbot.points < 50) { count = 1; break; } // make sure points have reached 100 and rolled over
            if(expertize <= 3) break; // repeat first conversation again and again
            if(ci >= conversations.length-1) break; // to avoid reaching the logic below at the end of final iteration
            if(confirm('You have not completed enrolling in this attempt. Would you like to continue? If you do, you will have a "new" conversation. These points will carry over.')) {
                resetChat_chatbot();
                insertChat_chatbot("sys", `<b>Starting a new conversation ...<b>`, 0);
                await delays(1);
                insertChat_chatbot("sys", `Imagine, it is a new day. Let's start afresh. Take a deep breath ...`, 0);
                await delays(2);
                resetChat_chatbot();
            } else {
                break;
            }
        }
        if(count >= 1) break;
        if(confirm('You have not completed enrolling in this attempt. Would you like to continue? If you do, you will have this same conversation(s) in a new setting. These points will carry over.')) {
            resetChat_chatbot();
            insertChat_chatbot("sys", `<b>Starting a new conversation ...<b>`, 0);
            await delays(1);
            insertChat_chatbot("sys", `Imagine, it is a new day. Let's start afresh. Take a deep breath ...`, 0);
            await delays(2);
            resetChat_chatbot();
        } else {
            break;
        }
    }
    count = Math.floor(count);

    //-- Clear Chat
    resetChat_chatbot();
    let exclaim = count>0 ? 'Congratulation!' : 'Too bad!';
    let people = count>1 ? 'persons' : 'person';
    insertChat_chatbot("you", `${exclaim} You enrolled ${count} ${people}`, 0);
    insertChat_chatbot("you", `Your total score was ${round(score, 3)} out of ${length}`, 1);
    insertChat_chatbot("sys", `This conversation has concluded.`, 0);
    return count;

    // await delays(3);
    switch(count) {
        case 1: 
            insertChat_chatbot("you", 'You did well. You enrolled 1 person. Congratulations!', 3); break;
        case 0:
            insertChat_chatbot("you", 'You did poorly. Nobody is onboard. Better luck next time!', 3); break;
        default: 
            insertChat_chatbot("you", `You were brilliant. You enrolled ${count} people. Congratulations!`, 3);
    }

}


async function one_run_chatbot(i, converse, max_points=100) {
    let cobj = converse[i];
    let qlist = cobj.ql;
    let alist = cobj.al;
    if(settings_chatbot.prompt===1) { alist = [cobj.a]; qlist = [cobj.x]; }
    if(settings_chatbot.prompt===2) { alist = cobj.apl || cobj.al; qlist = cobj.qpl || cobj.ql; }
    // let synonyms = cobj.synonyms;
    let maxLength = Math.max(qlist.length, alist.length);
    let minlength = Math.min(qlist.length, alist.length);
    console.log(`-----------------------------------------`);
    console.log(`  one_run_chatbot(${i}, ${converse[i].q}, ${max_points})`);

    // let summary = `question: ${cobj.ql}<br>answer: ${cobj.al}`
    let summary = `"<em>${cobj.q}" &nbsp; you may say next in punjabi</em>`
    if(!settings_chatbot.expert) insertChat_chatbot("you", summary, 0);

    await delays(1);

    let clear_chat = true;
    let joined_now = 0;
    let score = 0, startpoints = score_chatbot.points;
    for(let i=0; i<alist.length; i++) {
        let qword = qlist[i] || '..';
        let aword = alist[i] || '..';
        let hword = alist[i] || '..';

        let text = `"${qword}"`;
        if(settings_chatbot.hints>=3) text += `<br>answer is "${aword}"`;
        else if(settings_chatbot.hints>=2) text += `<br>hint is "${hword}"`;
        let literal = `"<em>${qword}" &nbsp; literal for translation in punjabi</em>`
        if(settings_chatbot.hints>=3) insertChat_chatbot("you", aword, 0);
        else if(settings_chatbot.hints>=2) insertChat_chatbot("you", literal, 0);
        data_chatbot.hint_text = aword;
        // $('.chatbot_hint').prop(`data-util`, aword);

        await delays(1);
        let answer = getAutoAnswer_chatbot(i, aword, alist);
        data_chatbot.answer = answer;
        if(status_chatbot.closed) return [];
        if(!settings_chatbot.test) answer = await keyboard_chatbot();
        answer = answer.trim();
        console.log('...');
        console.log(`=> answer = ${answer}`)
        insertChat_chatbot("me", answer, 0);

        await delays(1);
        let roger = `roger "${answer}"`;
        // insertChat_chatbot("they", roger, 0);
        alen = answer.split(/\b\s+\b/).length;
        let astrlen = answer.length;
        let fulllen = alist.join(' ').length;
        // if answer length is approximately same, its good enough as full answer
        if(Math.abs(fulllen-astrlen) <= 2) alen = alist.length;
        if(settings_chatbot.prompt!==3) alen = 1; // alen matters in words-mode only
        // console.log(`alen = ${alen}`);
        if(alen > 1) {
            aword = alist.slice(i, i+alen).join(' ');
            qword = qlist.slice(i, i+alen).join(' ');
            i = i+alen-1; // advance the loop by extra words found
            // console.log(`alen > 1 ----- aword = ${aword}, qword = ${qword}, i = ${i} -------`)
            if(alen > alist.length) alen = alist.length;
            if(alen===alist.length) clear_chat = false; // if talking in full sentences don't clear them
        }
        console.log(`alen = ${alen} --> answer = ${answer}, expected = ${aword}, i = ${i}`)
        answer = cleanup_words_chatbot(answer, cobj.synonyms)
        aword = cleanup_words_chatbot(aword)
        qword = cleanup_words_chatbot(qword)

        // let out = LevenshteinDistance(answer, aword);
        let length = Math.max(answer.length, aword.length);
        let apoints = max_points * alen/alist.length * settings_chatbot.mult;
        let out = length;
        [out, answer, aword] = LevenshteinDistanceEnhanced(answer, aword, cobj.synonyms);

        // let myscore = (length-out)/length;
        let myscore = (length-out)/length * alen;
        let mypoints = round(apoints*myscore/alen, 0);
        console.log(`LevenshteinDistance(${answer}, ${aword}) = ${out}, myscore=(length-out)/length=${myscore}`);
        score += myscore;
        score_chatbot.points += mypoints;
        console.log(`points = ${mypoints} ... total points = ${score_chatbot.points}`)
        if(score_chatbot.points>=100) { 
            score_chatbot.joined++; score_chatbot.points -= 100; startpoints -= 100; joined_now++;
            $("#joinModalPoints").parent().css('color', 'dimgray');
            $("#joinModalJoined").parent().css('color', 'darkgreen');
            $("#joinModalJoined").parent().css('background', '#98f6b0');
            // $("#joinModalJoined").parent().css('background', 'palegoldenrod');
        } else if(score_chatbot.points>=80) { 
            $("#joinModalPoints").parent().css('color', 'saddlebrown');
        } else if(score_chatbot.points>=50) { 
            $("#joinModalPoints").parent().css('color', 'black');
        } else {
            $("#joinModalPoints").parent().css('color', 'dimgray');
            $("#joinModalJoined").parent().css('background', '');
        }
        $("#joinModalPoints").text(Math.floor(score_chatbot.points));
        $("#joinModalJoined").text(score_chatbot.joined);

        let tooltip =  `data-toggle="tooltip" data-placement="left" title="${aword}"`;
        if(0) insertChat_chatbot("you", text, 0); // TBD
        else if(myscore===1*alen) $('.tbd').html(`<i class="material-icons" style="font-size:24px; color:limegreen; padding: 0px 0 0 20px" ${tooltip}>check</i>`);
        else if(myscore>=0.80*alen) $('.tbd').html(`<i class="material-icons" style="font-size:24px; color:darkkhaki; padding: 0px 0 0 20px" ${tooltip}>check</i>`);
        else if(myscore>=0.70*alen) $('.tbd').html(`<i class="material-icons" style="font-size:18px; color:darkorange; padding: 0px 0 0 20px" ${tooltip}>priority_high</i>`);
        else $('.tbd').html(`<i class="material-icons" style="font-size:18px; color:red; padding: 0px 0 0 20px" ${tooltip}>clear</i>`);

        $('.tbd').removeClass('tbd');
        //
        if(settings_chatbot.feedback) {
            if(settings_chatbot.feedback>1) insertChat_chatbot("you", `LevenshteinDistance(${answer}, ${aword}) = ${out}, myscore=(length-out)/length=${myscore}`, 0);
            // Response here
            let response = '';
            if(out === 0) {
                response = `<a style="color:MEDIUMSEAGREEN">Correct<a><br>${myscore} score, ${mypoints} points`;
            } else if(out > 0 && mypoints<1 && settings_chatbot.mult===2) {
                response = `<a style="color:CRIMSON">Incorrect<a>, actually it is "${aword}"<br>${myscore} score, ${mypoints} points`;
            } else if(out > 0 && mypoints<2 && settings_chatbot.mult===5) {
                response = `<a style="color:CRIMSON">Incorrect<a>, actually it is "${aword}"<br>${myscore} score, ${mypoints} points`;
            } else if(out > 0 && mypoints<5 && settings_chatbot.mult===10) {
                response = `<a style="color:CRIMSON">Incorrect<a>, actually it is "${aword}"<br>${myscore} score, ${mypoints} points`;
            } else {
                response = `<a style="color:black">Partially correct<a>, actually it is "${aword}"<br>${myscore} score, ${mypoints} points`;
            }
            insertChat_chatbot("sys", response);
        }              
    }
    let score1 = score/maxLength;
    console.log('..')
    console.log(`sentence score = ${score}, score-normalized = ${score1}`)
    console.log(`joined-now = ${joined_now}, points = ${score_chatbot.points}, startpoints = ${startpoints}`)

    let score10 = Math.round(score1*10);
    if(!settings_chatbot.expert && !settings_chatbot.quiet) {
      switch(score10) {
        case 10: 
            if(clear_chat) insertChat_chatbot("you", `<a style="color:MEDIUMSEAGREEN">Correct<a><br>${round(score*settings_chatbot.mult,3)} score, got you ${round(score_chatbot.points-startpoints,1)} points`); break;
        case 9:
            if(clear_chat) insertChat_chatbot("you", `<a style="color:black">Partially correct<a><br>${round(score*settings_chatbot.mult,3)} score, got you ${round(score_chatbot.points-startpoints,1)} points`); break;
        default: 
            if(clear_chat) insertChat_chatbot("you", `<a style="color:CRIMSON">Incorrect<a><br>${round(score*settings_chatbot.mult,3)} score, got you ${round(score_chatbot.points-startpoints,1)} points`); break;
      }
    }
    // if(clear_chat) await delays(5);
    await delays(1)
    return [score10, score1, score, alist.length, joined_now, clear_chat];
}

function LevenshteinDistanceEnhanced(_answer, _aword, synonyms) {
    let answer=_answer, aword=_aword;
    let out = LevenshteinDistance(answer, aword);
    console.log(`synonyms=`, synonyms);
    if(!synonyms) return [out, answer, aword];
    // console.log(`synonyms=`, synonyms);
    // try replacing each synonym to see what one sticks
    for(let [source, target] of synonyms) {
        let answer1 = answer.replace(RegExp(`\\b${target}\\b`), source);
        let out1 = LevenshteinDistance(answer1, aword);
        console.log(`out = ${out}, answer1 = ${answer1}, aword = ${aword}`)
        if(out1 < out) { answer = answer1; out = out1; }
    }
    for(let [source, target] of synonyms) {
        let answer1 = answer.replace(RegExp(`\\b${source}\\b`), target);
        let out1 = LevenshteinDistance(answer1, aword);
        console.log(`out = ${out}, answer1 = ${answer1}, aword = ${aword}`)
        if(out1 < out) { answer = answer1; out = out1; }
    }
    return [out, answer, aword];
}

function getAutoAnswer_chatbot(i, aword, alist) {
    let len = 2, answer = aword;
    let mode = { distortion: 0, test: 2 };
    let option = (settings_chatbot.prompt===3) ? 2 : 1;
    // switch(mode.test) {
    switch(option) {
        case 0: return aword;
        case 1: return distorted_chatbot(aword, mode.distortion);
        case 2:
            len = alist.length - i;
            if(len>2) len = random(2, len-1);
            answer = alist.slice(i, i+len).join(' ');
            return distorted_chatbot(answer, mode.distortion);
        case 3:
            len = alist.length;
            answer = alist.slice(i, i+len).join(' ');
    // console.log(`-=-=-=-=-=-= answer-outword = ${answer}, aword = ${aword}`);
            return distorted_chatbot(answer, mode.distortion);
    }
    // console.log(`outword = ${outword}, inword = ${inword}`);
    return aword;
}

function distorted_chatbot(inword, distortion=0.1) {
    let threshhold = 1 - distortion;
    let outword = inword.split('').map(c => Math.random()>threshhold? 'a' : c).join('');
    // console.log(`outword = ${outword}, inword = ${inword}`);
    return outword;
}
function delays(seconds, speedup=1) {
    if(speedup <= 1) speedup = settings_chatbot.speedup;
    return delay(seconds, speedup);
}

function delay(seconds, speedup=2) {
  return new Promise(resolve => setTimeout(resolve, seconds*1000/speedup));
}
function round(num, digits=0) {
  let factor = Math.pow(10, digits);
  return Math.round(num*factor)/factor;
}
function random(min, max, round=0) {
  let number = Math.random() * (max - min) + min;
  let rounder = Math.pow(10, round);
  return round===0 ? Math.round(number) : Math.round(number*rounder)/rounder;
}

// main1a();
// main2a();
// main3a();

//we are here to recruit people', a: 'asi ithe aaye haan, saanu kamm lai bande chhidey ai

// function main3a() {
//     console.log("tuhanu mil ke bahut khushi hoi " + LevenshteinDistance("tuhanu mil ke bahut khushi hoi","tuhanu mil ke bahut khushi hoi"));
//     console.log("Choice A ", LevenshteinDistance("tuhanu mil ke bahut khushi hoi","tusanu mil ke bahut khushi hoi"));
//     console.log("Choice B ", LevenshteinDistance("tuhanu mil ke bahut khushi hoi","tuhanu mil ke khushi hoi"));
//     console.log("Choice C ", LevenshteinDistance("tuhanu mil ke bahut khushi hoi","kihnu khushi hoi"));
// }

// function main2a() {
//     console.log("we are here to recruit people " + LevenshteinDistance("we are here to recruit people","we are here to recruit people"));
//     console.log("Choice A " + LevenshteinDistance("we are here to recruit people","we are here to enroll people"));
//     console.log("Choice B " + LevenshteinDistance("we are here to recruit people","we came here to recruit people"));
//     console.log("Choice C " + LevenshteinDistance("we are here to recruit people","we need to enroll people"));
// }

// function main1a() {
//     console.log("Hello World " + LevenshteinDistance("Hello","World"));
//     console.log("Choice A " + LevenshteinDistance("THE BROWN FOX JUMPED OVER THE RED COW","THE RED COW JUMPED OVER THE GREEN CHICKEN"));
//     console.log("Choice B " + LevenshteinDistance("THE BROWN FOX JUMPED OVER THE RED COW","THE RED COW JUMPED OVER THE RED COW"));
//     console.log("Choice C " + LevenshteinDistance("THE BROWN FOX JUMPED OVER THE RED COW","THE RED FOX JUMPED OVER THE BROWN COW"));
// }

function LevenshteinDistance(a, b) {
    var rowLen = a.length;
    var colLen = b.length;
    var maxLen = Math.max(rowLen, colLen);
    // Step 1
    if (rowLen === 0 || colLen === 0) { return maxLen; }
    /// Create the two vectors
    var v0 = Array(rowLen + 1).fill(0);
    var v1 = Array(rowLen + 1).fill(0);
    /// Step 2    /// Initialize the first vector
    for (var i = 1; i <= rowLen; i++) { v0[i] = i; }
    // Step 3    /// For each column
    for (var j = 1; j <= colLen; j++) {
        /// Set the 0'th element to the column number
        v1[0] = j;
        // Step 4    /// For each row
        for (var i = 1; i <= rowLen; i++) {
            // Step 5
            var cost = (a[i - 1] == b[j - 1]) ? 0 : 1;
            // Step 6    /// Find minimum
            v1[i] = Math.min(v0[i] + 1, Math.min(v1[i - 1] + 1, v0[i - 1] + cost));
        }
        /// Swap the vectors
        var vTmp = v0;
        v0 = v1,  v1 = vTmp;
    }
    // Step 7
    /// The vectors were swapped one last time at the end of the last loop,
    /// that is why the result is now in v0 rather than in v1
    return v0[rowLen];
}

function setFontSize_chatbot(size) {
    $('.msg-text').css({ 'font-size': size+'px' });
    $('.msg-text').css({ 'line-height': (size+2)+'px' });
}
function chatbotFontSizeChange(_this) {
    settings_chatbot.font_size = parseInt($(_this).val());
    setFontSize_chatbot(settings_chatbot.font_size);
    console.log(settings_chatbot);
}
function chatbotHintsSettingsChange(_this) {
    settings_chatbot.hints = parseInt($('#inlineFormHintsSelect').val());
    console.log(settings_chatbot.hints);
    switch(settings_chatbot.hints) {
        case 2: settings_chatbot.mult = 0.5; break;
        case 3: settings_chatbot.mult = 0.25; break;
        default: settings_chatbot.mult = 1;
    }
    console.log(settings_chatbot);
}
function chatbotPromptsSettingsChange(_this) {
    settings_chatbot.prompt = parseInt($('#inlineFormPromptsSelect').val());
    console.log(settings_chatbot.prompt);
    // switch(settings_chatbot.prompt) {
    //     case 2: settings_chatbot.mult = 0.5; break;
    //     case 3: settings_chatbot.mult = 0.25; break;
    //     default: settings_chatbot.mult = 1;
    // }
    console.log(settings_chatbot);
}
function chatbotFeedbackSettingsChange(_this) {
    if(_this.checked) {
        settings_chatbot.feedback = 1;
    } else {
        settings_chatbot.feedback = 0;        
    }
    console.log(settings_chatbot);
}
function chatbotModeSettingsChange(_this, name='') {
    if(_this.checked) {
        settings_chatbot[name] = 1;
    } else {
        settings_chatbot[name] = 0;        
    }
    console.log(settings_chatbot);
}
