var synonyms = [['tuhaanu', 'tuhanu'], ['thonu', 'tuhanu'], ['asanu', 'saanu'], ['sanu', 'saanu'], ['ai', 'hai']];

var conversations_chatbot = [
    [
        {
            q: "how are you doing?",
            a: "kiddan",
            x: "how_is_it",
            al: ["kiddan"],
            ql: ["how_is_it"],
            synonyms: [["kiddan","kidan"],["kiddan","kidaan"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "doing good",
            a: "theek thaak",
            x: "good good",
            al: ["theek", "thaak"],
            ql: ["good", "good"],
            synonyms: [["theek","thik"],["thaak","thak"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when did you get here?",
            a: "kaddon aye",
            x: "when arrived",
            al: ["kaddon", "aye"],
            ql: ["when", "arrived"],
            synonyms: [["kaddon","kadon"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "got here yesterday",
            a: "kal aye si",
            x: "yesterday arrived did",
            al: ["kal", "aye", "si"],
            ql: ["yesterday", "arrived", "did"],
            synonyms: [["kal","kall"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when are you leaving?",
            a: "kaddon jana",
            x: "when leaving",
            al: ["kaddon", "jana"],
            ql: ["when", "leaving"],
            synonyms: [["kaddon","kadon"],["jana","jaana"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "leaving tomorrow",
            a: "kal jana",
            x: "tomorrow leaving",
            al: ["kal", "jana"],
            ql: ["tomorrow", "leaving"],
            synonyms: [["kal","kall"],["jana","jaana"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "okay good",
            a: "theek hai",
            x: "good is",
            al: ["theek", "hai"],
            ql: ["good", "is"],
            synonyms: [["theek","thik"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "see you later then",
            a: "phir milde haan",
            x: "again meet be",
            al: ["phir", "milde", "haan"],
            ql: ["again", "meet", "be"],
            synonyms: [["phir","fir"],["milde","mildey"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "greetings",
            a: "sat sri akaal",
            x: "true venerable timeless",
            al: ["sat", "sri", "akaal"],
            ql: ["true", "venerable", "timeless"],
            synonyms: [["sri","shri"],["akaal","akal"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "greetings",
            a: "sat sri akaal",
            x: "true venerable timeless",
            al: ["sat", "sri", "akaal"],
            ql: ["true", "venerable", "timeless"],
            synonyms: [["sri","shri"],["akaal","akal"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "how are you doing?",
            a: "ki haal hai",
            x: "what situation is",
            al: ["ki", "haal", "hai"],
            ql: ["what", "situation", "is"],
            synonyms: [["haal","hal"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "doing great",
            a: "theek thaak ji",
            x: "good good respectfully",
            al: ["theek", "thaak", "ji"],
            ql: ["good", "good", "respectfully"],
            synonyms: [["theek","thik"],["thaak","thak"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "+ how about you?",
            a: "tuhade ki haal",
            x: "your's what situation",
            al: ["tuhade", "ki", "haal"],
            ql: ["your's", "what", "situation"],
            synonyms: [["tuhade","tuhadē"],["tuhade","thode"],["haal","hal"],].concat(synonyms),
            match: 0.1, plus: 1
        },
        {
            q: "we are doing well too",
            a: "assi vi theek thaak haan",
            x: "we too good good be",
            al: ["assi", "vi", "theek", "thaak", "haan"],
            ql: ["we", "too", "good", "good", "be"],
            synonyms: [["assi","asi"],["theek","thik"],["thaak","thak"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "good to hear that",
            a: "theek hi chahide hai",
            x: "good sure wanted is",
            al: ["theek", "hi", "chahide", "hai"],
            ql: ["good", "sure", "wanted", "is"],
            synonyms: [["theek","thik"],["chahide","chahidē"],["chahide","chahidey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "see you around",
            a: "phir milde haan",
            x: "again meet be",
            al: ["phir", "milde", "haan"],
            ql: ["again", "meet", "be"],
            synonyms: [["phir","fir"],["milde","mildey"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "how did you arrive, in a car?",
            a: "kiven aye, car te aye si?",
            x: "how arrived, car on arrived did?",
            al: ["kiven", "aye", "car", "te", "aye", "si"],
            ql: ["how", "arrived", "car", "on", "arrived", "did"],
            synonyms: [["kiven","kivē"],["kiven","kivey"],["te","tē"],["te","tey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, we came in a car?",
            a: "hanji car te aye haan",
            x: "yes-ji car on arrived be",
            al: ["hanji", "car", "te", "aye", "haan"],
            ql: ["yes-ji", "car", "on", "arrived", "be"],
            synonyms: [["te","tē"],["te","tey"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "where are you staying?",
            a: "kithe rukey ho?",
            x: "where staying you're?",
            al: ["kithe", "rukey", "ho"],
            ql: ["where", "staying", "you're"],
            synonyms: [["kithe","kithē"],["kithe","kithey"],["rukey","rukē"],["rukey","ruke"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "we are staying in a hotel",
            a: "hotel ch rukey haan",
            x: "hotel in staying be",
            al: ["hotel", "ch", "rukey", "haan"],
            ql: ["hotel", "in", "staying", "be"],
            synonyms: [["rukey","rukē"],["rukey","ruke"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "is it comfortable?",
            a: "comfortable hai sab?",
            x: "comfortable is everyone?",
            al: ["comfortable", "hai", "sab"],
            ql: ["comfortable", "is", "everyone"],
            synonyms: [["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes its good",
            a: "hanji theek hai",
            x: "yes-ji good is",
            al: ["hanji", "theek", "hai"],
            ql: ["yes-ji", "good", "is"],
            synonyms: [["theek","thik"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "tell me if you need anything",
            a: "koi lod hove ta dasio",
            x: "any need happens then reach_out",
            al: ["koi", "lod", "hove", "ta", "dasio"],
            ql: ["any", "need", "happens", "then", "reach_out"],
            synonyms: [["lod","lodh"],["lod","lorh"],["hove","hovē"],["hove","hovey"],["ta","taan"],["dasio","daseo"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "okay then, we will head out",
            a: "changa ji, assi chalde haan",
            x: "okay respectfully, we leaving be",
            al: ["changa", "ji", "assi", "chalde", "haan"],
            ql: ["okay", "respectfully", "we", "leaving", "be"],
            synonyms: [["changa","changga"],["assi","asi"],["chalde","chaldē"],["chalde","chaldey"],["haan","aan"],["haan","eyn"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "okay, leaving?",
            a: "ashaa, challe?",
            x: "okay, leaving?",
            al: ["ashaa", "challe"],
            ql: ["okay", "leaving"],
            synonyms: [["ashaa","achha"],["challe","challē"],["challe","challey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, when are you heading out?",
            a: "haan ji, tusi kaddon jana hai?",
            x: "be respectfully, y'all when leaving are?",
            al: ["haan", "ji", "tusi", "kaddon", "jana", "hai"],
            ql: ["be", "respectfully", "y'all", "when", "leaving", "are"],
            synonyms: [["haan","aan"],["haan","eyn"],["tusi","tussi"],["kaddon","kadon"],["jana","jaana"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "we are going tomorrow",
            a: "assi kal jana hai",
            x: "we tomorrow leaving is",
            al: ["assi", "kal", "jana", "hai"],
            ql: ["we", "tomorrow", "leaving", "is"],
            synonyms: [["assi","asi"],["kal","kall"],["jana","jaana"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when are you coming again?",
            a: "phir kaddon ayongey?",
            x: "again when will_come?",
            al: ["phir", "kaddon", "ayongey"],
            ql: ["again", "when", "will_come"],
            synonyms: [["phir","fir"],["kaddon","kadon"],["ayongey","ayongē"],["ayongey","aayoge"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "we will come next year",
            a: "agley saal avangey",
            x: "next year will_come",
            al: ["agley", "saal", "avangey"],
            ql: ["next", "year", "will_come"],
            synonyms: [["agley","aglē"],["agley","agle"],["avangey","avangē"],["avangey","aavangey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "alright, see you next year",
            a: "changa ji, agley saal milangey",
            x: "okay respectfully, next year will_meat",
            al: ["changa", "ji", "agley", "saal", "milangey"],
            ql: ["okay", "respectfully", "next", "year", "will_meat"],
            synonyms: [["changa","changga"],["agley","aglē"],["agley","agle"],["milangey","milangē"],["milangey","milange"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "okay then",
            a: "changa ji",
            x: "okay respectfully",
            al: ["changa", "ji"],
            ql: ["okay", "respectfully"],
            synonyms: [["changa","changga"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "when did you come?",
            a: "kaddon aye",
            x: "when arrived",
            al: ["kaddon", "aye"],
            ql: ["when", "arrived"],
            synonyms: [["kaddon","kadon"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "came yesterday",
            a: "kal aye",
            x: "yesterday arrived",
            al: ["kal", "aye"],
            ql: ["yesterday", "arrived"],
            synonyms: [["kal","kall"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "did kids come with you?",
            a: "bachey vi naal aye?",
            x: "kids too with arrived?",
            al: ["bachey", "vi", "naal", "aye"],
            ql: ["kids", "too", "with", "arrived"],
            synonyms: [["bachey","bachē"],["bachey","bachche"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, kids came with us",
            a: "haan bachey vi naal aye",
            x: "yes kids too with arrived",
            al: ["haan", "bachey", "vi", "naal", "aye"],
            ql: ["yes", "kids", "too", "with", "arrived"],
            synonyms: [["bachey","bachē"],["bachey","bachche"],["aye","aaye"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "they attend school?",
            a: "school jaande hai?",
            x: "school going is?",
            al: ["school", "jaande", "hai"],
            ql: ["school", "going", "is"],
            synonyms: [["jaande","jaandē"],["jaande","jaandey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, they do",
            a: "haan jaande hai?",
            x: "yes going is?",
            al: ["haan", "jaande", "hai"],
            ql: ["yes", "going", "is"],
            synonyms: [["jaande","jaandē"],["jaande","jaandey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "is school going good?",
            a: "school theek chalda hai?",
            x: "school good going is?",
            al: ["school", "theek", "chalda", "hai"],
            ql: ["school", "good", "going", "is"],
            synonyms: [["theek","thik"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, its going good.",
            a: "hanji theek chalda hai",
            x: "yes-ji good going is",
            al: ["hanji", "theek", "chalda", "hai"],
            ql: ["yes-ji", "good", "going", "is"],
            synonyms: [["theek","thik"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "how is weather at your place?",
            a: "tuhade mausam kiddan hai",
            x: "your's weather how_is_it is",
            al: ["tuhade", "mausam", "kiddan", "hai"],
            ql: ["your's", "weather", "how_is_it", "is"],
            synonyms: [["tuhade","tuhadē"],["tuhade","thode"],["kiddan","kidan"],["kiddan","kidaan"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "weather is cold at our place",
            a: "saade mausam thanda hai",
            x: "ours weather cold is",
            al: ["saade", "mausam", "thanda", "hai"],
            ql: ["ours", "weather", "cold", "is"],
            synonyms: [["saade","saadē"],["saade","saadey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "it is warm at ours",
            a: "haan, saade te mausam garam hai",
            x: "be, ours on weather hot is",
            al: ["haan", "saade", "te", "mausam", "garam", "hai"],
            ql: ["be", "ours", "on", "weather", "hot", "is"],
            synonyms: [["haan","aan"],["haan","eyn"],["saade","saadē"],["saade","saadey"],["te","tē"],["te","tey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "our place, it is always cold",
            a: "saade te hamesha thanda rehnda hai",
            x: "ours on always cold stays is",
            al: ["saade", "te", "hamesha", "thanda", "rehnda", "hai"],
            ql: ["ours", "on", "always", "cold", "stays", "is"],
            synonyms: [["saade","saadē"],["saade","saadey"],["te","tē"],["te","tey"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "well, feel free to spend summers with us",
            a: "chalo garmi ch itthe aa jaiya karo",
            x: "alright heat in here come visit do",
            al: ["chalo", "garmi", "ch", "itthe", "aa", "jaiya", "karo"],
            ql: ["alright", "heat", "in", "here", "come", "visit", "do"],
            synonyms: [["itthe","itthē"],["itthe","itthey"],["itthe","ithe"],["itthe","ithē"],["itthe","ithey"],["aa","aa"],["jaiya","jiya"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "sounds good",
            a: "theek hai ji",
            x: "good is respectfully",
            al: ["theek", "hai", "ji"],
            ql: ["good", "is", "respectfully"],
            synonyms: [["theek","thik"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "is everyone alright in india?",
            a: "india vi saare theek hai?",
            x: "india too everyone good is?",
            al: ["india", "vi", "saare", "theek", "hai"],
            ql: ["india", "too", "everyone", "good", "is"],
            synonyms: [["saare","saarē"],["saare","saarey"],["saare","sarey"],["saare","sarē"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, everyone is alright",
            a: "hanji sabh theek hai",
            x: "yes-ji all good are",
            al: ["hanji", "sabh", "theek", "hai"],
            ql: ["yes-ji", "all", "good", "are"],
            synonyms: [["theek","thik"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "are they surviving the cold?",
            a: "thand ton bachey hai?",
            x: "thand from survived are?",
            al: ["thand", "ton", "bachey", "hai"],
            ql: ["thand", "from", "survived", "are"],
            synonyms: [["ton","to"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "yes, they are surviving okay",
            a: "haan, thand ton bachey hai",
            x: "be, thand from survived are",
            al: ["haan", "thand", "ton", "bachey", "hai"],
            ql: ["be", "thand", "from", "survived", "are"],
            synonyms: [["haan","aan"],["haan","eyn"],["ton","to"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when did you go to india?",
            a: "india kaddon gaye si?",
            x: "india when went did?",
            al: ["india", "kaddon", "gaye", "si"],
            ql: ["india", "when", "went", "did"],
            synonyms: [["kaddon","kadon"],["gaye","gayē"],["gaye","gayey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "its been two years",
            a: "do saal ho gaye",
            x: "two year you're went",
            al: ["do", "saal", "ho", "gaye"],
            ql: ["two", "year", "you're", "went"],
            synonyms: [["do","doh"],["gaye","gayē"],["gaye","gayey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when are you going to india?",
            a: "india kaddon jana?",
            x: "india when leaving?",
            al: ["india", "kaddon", "jana"],
            ql: ["india", "when", "leaving"],
            synonyms: [["kaddon","kadon"],["jana","jaana"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "going next year",
            a: "agley saal jana",
            x: "next year leaving",
            al: ["agley", "saal", "jana"],
            ql: ["next", "year", "leaving"],
            synonyms: [["agley","aglē"],["agley","agle"],["jana","jaana"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "alright, good",
            a: "ashaa hai",
            x: "okay is",
            al: ["ashaa", "hai"],
            ql: ["okay", "is"],
            synonyms: [["ashaa","achha"],["hai","ey"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
    [
        {
            q: "gonna give you a slap",
            a: "thappad maarna tere",
            x: "slap hit you",
            al: ["thappad", "maarna", "tere"],
            ql: ["slap", "hit", "you"],
            synonyms: [["thappad","thapad"],["maarna","marna"],["tere","terē"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "i'm gonna give you a slap",
            a: "mein tere thappad maarna",
            x: "i you slap hit",
            al: ["mein", "tere", "thappad", "maarna"],
            ql: ["i", "you", "slap", "hit"],
            synonyms: [["mein","main"],["tere","terē"],["thappad","thapad"],["maarna","marna"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "hit me and watch what happens",
            a: "maar ke tere dekh",
            x: "hit do you watch",
            al: ["maar", "ke", "tere", "dekh"],
            ql: ["hit", "do", "you", "watch"],
            synonyms: [["ke","kē"],["tere","terē"],["dekh","vekh"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "i gave you a slap",
            a: "mein tere thappad maaria si",
            x: "i you slap hit did",
            al: ["mein", "tere", "thappad", "maaria", "si"],
            ql: ["i", "you", "slap", "hit", "did"],
            synonyms: [["mein","main"],["tere","terē"],["thappad","thapad"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when did you hit?",
            a: "kaddon maaria si?",
            x: "when hit did?",
            al: ["kaddon", "maaria", "si"],
            ql: ["when", "hit", "did"],
            synonyms: [["kaddon","kadon"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "i hit you yesterday",
            a: "kal maaria si",
            x: "tomorrow hit did",
            al: ["kal", "maaria", "si"],
            ql: ["tomorrow", "hit", "did"],
            synonyms: [["kal","kall"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "i will hit you too",
            a: "mein vi maarunga",
            x: "i too will_hit",
            al: ["mein", "vi", "maarunga"],
            ql: ["i", "too", "will_hit"],
            synonyms: [["mein","main"],["maarunga","marunga"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "when will you hit?",
            a: "kaddon maarenga?",
            x: "when you_will_hit?",
            al: ["kaddon", "maarenga"],
            ql: ["when", "you_will_hit"],
            synonyms: [["kaddon","kadon"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "i will hit today",
            a: "ajj maarunga",
            x: "today will_hit",
            al: ["ajj", "maarunga"],
            ql: ["today", "will_hit"],
            synonyms: [["maarunga","marunga"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "hit me and watch what happens",
            a: "maar ke ta dekh",
            x: "hit do then watch",
            al: ["maar", "ke", "ta", "dekh"],
            ql: ["hit", "do", "then", "watch"],
            synonyms: [["ke","kē"],["ta","taan"],["dekh","vekh"],].concat(synonyms),
            match: 0.1, plus: 0
        },
        {
            q: "take it ... thwaak",
            a: "aah leh, thwaak",
            x: "here take_it, …",
            al: ["aah", "leh", "thwaak"],
            ql: ["here", "take_it", "…"],
            synonyms: [["leh","le"],].concat(synonyms),
            match: 0.1, plus: 0
        },
    ],
];
