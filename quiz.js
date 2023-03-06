const start = document.getElementById("start");
const startcontainer = document.getElementById("startcontainer");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const scoreNumber = document.getElementById("score");
const answersList = document.getElementById("answersList");

// create our questions
let questions = [
    {
        category : "Politics",
        question : "The Self-Determination Act to improve access to legal gender and name change presented in Germany on June 30, 2020, is supposed to replace the",
        choiceA : "Article 175",
        choiceB : "Transsexuals Act",
        choiceC : "The Age of Consent for queer people",
        correct : "B",
        context : "The Transsexuals Act (in German: Transsexuellen Gesetz TSG) was passed on September 10th 1980 and defines under which conditions trans people are allowed to change their legal name and gender marker. These conditions include the transphobic and dehumanizing practices of requiring people to be unmarried, to not be able to reproduce (to have undergone sterilization), and to have had surgeries of the external genitalia. According to the TSG trans people also need to undergo examinations from two doctors or therapists, a practice that pathologizes and dehumanizes trans people. The Transsexuals Act has been ruled unconstitutional because it harms the dignity and bodies of trans people and is, therefore, to be replaced by the Self-Determination Act."
    },{
        category : "Politics",
        question : 'To avoid using "transphobia" which falsely frames prejudice and hate against Trans people, as an uncontrollable fear disorder, it is instead recommended to use:',
        choiceA : "Trans misanthropie",
        choiceB : "Trans misia",
        choiceC : "Trans terror",
        correct : "B",
        context : "The suffix -misia means hatred, and is the opposite of the suffix -philia. More information can be found here: <a href='https://diversitypride.org/misiapledge.html' target = '_blank'>https://diversitypride.org/misiapledge.html</a>"
    },{
        category : "Politics",
        question : "The unfair EU Dublin Regulation means:",
        choiceA : "Refugees should apply for asylum from their home countries.",
        choiceB : "Refugees can never become Europeans.",
        choiceC : "Refugees must apply for asylum in the first country of entry or arrival.",
        correct : "C",
        context : "The Dublin regulation was first implemented in 1997 and states that people seeking asylum must do so in the EU country that they first entered. The rule shows a lack of solidarity and means that people seeking asylum cannot decide autonomously where they want to apply for asylum. It also acts as a way for rich European countries like Germany to dump the load on countries like Greece, Spain and Italy. Dublin deportations are a common and perfidious practice in countries like Germany."
    },{
        category : "Politics",
        question : "What does Alt-Text mean?",
        choiceA : "Literature of the Alt-Right.",
        choiceB : "Reading between the lines in your ex's message.",
        choiceC : "Text to describe an online image for people with impaired vision.",
        correct : "C",
        context : "Short for alternative text. To challenge the reproduction of ableism in online spaces including alt-text is advised because screenreaders used by blind and visually imparied people will read out the text instead of the image. Whenever you include images online make sure you add alt-text. There are resources online explaining how to write effective alt-text. "
    },{
        category : "Politics",
        question : "Last year, 2022, how much did the EU pay Frontex for their criminal work at the borders?",
        choiceA : "300 million Euros",
        choiceB : "754 million Euros",
        choiceC : "2.1 billion Euros",
        correct : "B",
        context : "You can find more information about Frontex crimes here: <a href='https://abolishfrontex.org/' target = '_blank'>https://abolishfrontex.org/</a>"
    },{
        category : "Politics",
        question : "What is the name of the platz in front of New Yorck Bethanien",
        choiceA : "Carlo Giuliani Platz",
        choiceB : "Marielle Franco Platz",
        choiceC : "Esther Bejarano Platz",
        correct : "B",
        context : "Marielle Franco was a Black and bisexual Brazilian sociologist and politician. She fought for the rights of young Black people, women, people living in Favelas, the LGBTIQ+ community and against police violence. Franco was assassinated on March 14th 2019 in Rio de Janeiro."
    },{
        category : "Politics",
        question : "When was <i>Paragraph 175</i> (a provision of the German Criminal Code that criminalized homosexual acts) finally deleted?",
        choiceA : "1975",
        choiceB : "1984",
        choiceC : "1994",
        correct : "C",
        context : "Homosexuality was criminalized in Germany for 123 years. The Nazis used §175 to persecute and intern and kill thousands of gay men in concentration camps. During this period approximately 50.000 gay men were convicted for homosexual acts. After 1945 §175 remained in place until 1994 when it was abolished. Though in the GDR this happened earlier and in different stages, and starting in the 1950s homosexual acts between consenting adults ceased to be punished."
    },{
        category : "Politics",
        question : "How may European Countries still demand forced sterilization, in order for Transpeople to achieve legal recognition and access to Trans-healthcare?",
        choiceA : "5",
        choiceB : "9",
        choiceC : "13",
        correct : "B",
        context : "<img src='img/map_europe.png'></img><br>Find a better resolution of the map here: <a href='https://tgeu.org/wp-content/uploads/2020/05/MapB_TGEU2020_PRINT-1.pdf' target = '_blank'>https://tgeu.org/wp-content/uploads/2020/05/MapB_TGEU2020_PRINT-1.pdf</a>"
    },{
        category : "Queer Trivia and Terminologies",
        question : "Which of these statements is false?",
        choiceA : "Kai-Kai is queer-slang for sexual attraction between two drag queens",
        choiceB : "Kai-Kai is a town in Cameroon",
        choiceC : "Kai-Kai is queer-slang for saying bye.",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "In English queer-slang, Who is a Zucchini?",
        choiceA : "A person who is new to queer relationships",
        choiceB : "A partner in a queer platonic relationship",
        choiceC : "A Straight person who kisses queer people at parties",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "In children programs, which Teletubby was accused of being queer and of promoting homosexuality by a Polish politician?",
        choiceA : "Dipsy",
        choiceB : "Laa Laa",
        choiceC : "Tinky Winky",
        correct : "C",
        context : "In 2007, a Polish government official Ewa Sowinska started an invesitgation into Tinky Winky's sexuality. And before her, in 1999, US Christian fundamentalist Jerry Falwell suggested that the show's creators intended Tinky Winky to be a gay role mode."
    },{
        category : "Queer Trivia and Terminologies",
        question : "Following these accusations, How was the accused Tele Tubby punished?",
        choiceA : "The producers took away the accused Teletubby's favorite purse.",
        choiceB : "The accused Teletubby was no longer allowed to operate the squirting Tubby Custard Machine.",
        choiceC : "The accused Teletubby was no longer allowed to sleep in the Tubbytronic-Superdome.  ",
        correct : "A",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "How many colors are there in the inclusive queer flag also sometimes called the progressive rainbow flag?",
        choiceA : "11",
        choiceB : "12",
        choiceC : "16",
        correct : "B",
        context : "The progressive rainbow flag includes 12 colors representing, besides the 6 colors of the rainbow flag, the colors of the trans flag, the colors black and brown to represent marginalized LGBTQ people of color, as well as those living with AIDS/HIV and those who died from AIDS/HIV complications, and the Intersex flag.<br><img src='img/flag.png'></img>"
    },{
        category : "Queer Trivia and Terminologies",
        question : "What does the P. in the name of queer legend, Marsha P. Johnson, stand for?",
        choiceA : "Patsy on the rocks",
        choiceB : "Pay it no mind",
        choiceC : "Pray for revolution",
        correct : "B",
        context : "Marsha P. Johnson is a legendary queer activist from New York City. She was one of the central figures during the Stonewall Riots and fought, together with trans activist Sylvia Rivera, for the rights of poor Trans people of color and against the white-washing of the gay liberation movement in the United States. Together with Rivera she founded the group Street Transvestite Action Revolutionaries (STAR) that supported queer youth and sexworkers."
    },{
        category : "Queer Trivia and Terminologies",
        question : "How many European Countries, one of which is Germany, still officially Pathologize Transpeople by categorizing Transidentity as a mental health disorder?",
        choiceA : "7",
        choiceB : "11",
        choiceC : "16",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "What does Endosex mean?",
        choiceA : "The last fuck before a break-up",
        choiceB : "Sex that is focused on orgasm.",
        choiceC : "A person born with a body that fits into the binary of male/female",
        correct : "C",
        context : "An endosex person is someone whose innate sex characteristics fit normative medical or social ideas for female or male bodies. The word endosex is an antonym of intersex."
/*     },{
        category : "Queer Trivia and Terminologies",
        question : "What is the name of the very famous Arab poet, from the 8th century, who wrote graphic homosexual poetry?",
        imgSrc : "img/js.png",
        choiceA : "Rumi",
        choiceB : "Abu Nawwas",
        choiceC : "Kahlil Gibran",
        correct : "B",
        context : "" */
    },{
        category : "Queer Trivia and Terminologies",
        question : "What is a FART?",
        choiceA : "Feminist against the right to transition",
        choiceB : "Feminism appropriating ridiculous transphobe",
        choiceC : "Feminist Association of Racist Terfs",
        correct : "B",
        context : "Some call them TERFs, we call them FARTs! And we strongly dislike them. Ewe!"
    },{
        category : "Queer Trivia and Terminologies",
        question : "Which country in the world has LGBTIQ-free zones, where LGBTIQ people are banned?",
        imgSrc : "img/js.png",
        choiceA : "Saudi Arabia",
        choiceB : "Kenya",
        choiceC : "Poland",
        correct : "C",
        context : 'As of February 2020, around 100 municipalities and five voivodeships (provinces) which amount to almost the third of Poland, officially declared themselves as "against" "LGBT ideology" or passed "pro-family" Charters, pledging to refrain from encouraging tolerance or funding NGOs working for LGBT rights. These resolutions have been characterized as "LGBT-free zones." Some repealed this after threats of the EU to withold funding.'
    },{
        category : "Berlin's Queer Scene!",
        question : "The first Internationalist Queer Pride Berlin happened on:",
        choiceA : "24 July 2021",
        choiceB : "26 August 2020",
        choiceC : "27 June 2021",
        correct : "A",
        context : "The Internationalist Queer Pride Berlin (IQPB) is annual pride march for liberation organized by a network of individuals, radical queer groups (including FACQ), and queer members from Berlin's radical political collectives. More info here: <a href='https://iqpberlin.org/en/' target = '_blank'>https://iqpberlin.org/en/</a>"
    },{
        category : "Berlin's Queer Scene!",
        question : "When did Gayhane start?",
        choiceA : "1996",
        choiceB : "1999",
        choiceC : "2004",
        correct : "B",
        context : "Gayhane is a monthly BIPoC queer party and performance night that takes place at SO36. The music is predominantly West Asian and North African, with a major focus on Kurdish, Turkish and Arabic music."
    },{
        category : "Berlin's Queer Scene!",
        question : "How many Cs (letter C) are there in FACQ's FULL name?",
        choiceA : "1",
        choiceB : "3",
        choiceC : "4",
        correct : "B",
        context : "Front of anti-Colonial anti-Capitalist anti-Cistem Queers"
    },{
        category : "Berlin's Queer Scene!",
        question : "What does Kuà mean in Casa Kuà?",
        choiceA : "Strength in Arabic, the word قوة Kuwwa",
        choiceB : "Trans* in Mandarin",
        choiceC : "Coffee because BIPoC queers love coffee",
        correct : "B",
        context : "Casa Kuà is a Trans* Inter* Queer Community & Health Centre in Berlin, this space that we love so much is organised by trans* and non binary BIPoCs to make health more accessible to other trans*, inter*, non binary and queer people, and especially for those affected by racism."
    },{
        category : "Berlin's Queer Scene!",
        question : "When was Les MigraS founded?",
        choiceA : "1999",
        choiceB : "2006",
        choiceC : "2010",
        correct : "A",
        context : "LesMigraS is engaged in antidiscrimination and antiviolence work, offers counselling and a space for self-empowerment for LGBTIQA+ & BIPOC in Berlin."    
    },{
        category : "Berlin's Queer Scene!",
        question : "Every year in October in Berlin, there is an event series by ACAB, what does ACAB stand for?",
        choiceA : "Decentralized Actions Against the Police.",
        choiceB : "Assembly for Climate Action Berlin.",
        choiceC : "Anti Colonial Alliance Berlin.",
        correct : "C",
        context : ""    
    },{
        category : "Berlin's Queer Scene!",
        question : "What does Cutie mean in Cutie BIPOC?",
        choiceA : "A play on Queers drinking Tea",
        choiceB : "from Q, T and I (queer, trans and inter)",
        choiceC : "from Cute, for all the cutie BIPoC queers in Berlin",
        correct : "B",
        context : ""    
    },{
        category : "Anti-Colonial Politics",
        question : "Homosexuality was declared illegal in Tanzania when it was under German colonial rule. Today, homosexuality in Tanzania is:",
        choiceA : "Decriminalized",
        choiceB : "Punishable by death",
        choiceC : "Punishable with life imprisonment",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "In Samoan culture, there are words for...",
        choiceA : "two genders",
        choiceB : "three genders",
        choiceC : "four genders",
        correct : "C",
        context : "The third and fourth genders of <i>fa'afafine</i> and <i>fa'afatama</i> have always existed within Samoan society. When translated literally, they mean 'in the manner of women' (<i>fa'a fafine</i>) and 'in the manner of man' (<i>fa'a fatama</i>); these genders are fluid and move between the traditional world of men and women. <i>Fa'afafines</i> and <i>fa'afatamas</i> have specific roles in Samoan society, in an interesting contrast to transgenderism in Western society, which is yet to be widely accepted."
    },{
        category : "Anti-Colonial Politics",
        question : "In which country, was homosexuality declared illegal when it was under German colonial rule?",
        choiceA : "Togo in 1884",
        choiceB : "Uruguay in 1875",
        choiceC : "Mallorca in 1714",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "Instated under German colonization, in Namibia it is a crime since the1880s to...",
        choiceA : "Be homosexual",
        choiceB : "Have anal sex",
        choiceC : "Have threesomes",
        correct : "B",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "What happened on the 12th of October 1492?",
        choiceA : "The birthday of the murderer Christopher Colombus",
        choiceB : "The start of the colonisation of Abya Yala and Turtle Island.",
        choiceC : "Spain declared itself a colonial power",
        correct : "B",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "What else happened in 1492?",
        choiceA : "The Alhambra Decree ordering the expulsion of Jews from Spain.",
        choiceB : "The Amazigh language was banned across North Africa.",
        choiceC : "The enslavement trade became legal. ",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "In 2022, anti-colonial and anti-racist campaigners managed to change the name of a square in Wedding to Manga Bell Platz. What does Manga Bell mean?",
        choiceA : "Emily and Rudolf Manga Bell",
        choiceB : "The bell of a liberation church in South Africa",
        choiceC : "From the German word Mangan, in memory of metals stolen from German colonies in Africa",
        correct : "A",
        context : "Emily and Rudolf Manga Bell were Duala resistance leaders who fought against German colonialism in Cameroon."
    },{
        category : "Anti-Colonial Politics",
        question : "How many of the forcefully displaced people & refugees worldwide come from Ex European Colonies?",
        choiceA : "34 %",
        choiceB : "63 %",
        choiceC : "96 %",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "When did the glorious Haitian Revolution start?",
        choiceA : "1791",
        choiceB : "1818",
        choiceC : "1912",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "She wrote what is known to be the first academic study of Afro-German history, and she has a street in Kreuzberg named after her. What is her name?",
        choiceA : "Audre Lorde",
        choiceB : "May Ayim",
        choiceC : "Natasha A. Kelly",
        correct : "B",
        context : "May Ayim was one of the most influential founding figures of Afro-Deutsch studies in Germany, and a poet, educator, and activist."
    },{
        category : "Anti-Colonial Politics",
        question : "To which culture of the Oaxaca region (Mexico) do the 'muxe', considered a third gender (or non-binary), belong?",
        choiceA : "Zapotec",
        choiceB : "Mixtec",
        choiceC : "Mixe",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : 'What did the "Free Britney" Movement free Britney from?',
        choiceA : "A conservatorship by her father ",
        choiceB : "Britney's instagram account",
        choiceC : "Copyright industry",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "What was the name of the Afro-German musical trio popular in the 90s?",
        choiceA : "ABC",
        choiceB : "XOXO",
        choiceC : "TicTacToe",
        correct : "C",
        context : "TicTacToe was a musical trio originally conisisting of three Afro German women Lee, Ricki, and Jazzy. Their songs addressed topics such as racism, sexism, and sexual self-determination. "
    },{
        category : "Pop Culture",
        question : "What was the name of the show, that was arguably the beginning of celebrity reality TV, starring Paris Hilton and Nicole Ritchie?",
        choiceA : "The Real Life",
        choiceB : "The Good Life",
        choiceC : "The Simple Life",
        correct : "C",
        context : ""
    },{
        category : "Pop Culture",
        question : "Which girl group was Beyoncé part of?",
        choiceA : "TLC",
        choiceB : "Destiny's Child",
        choiceC : "Take That ",
        correct : "B",
        context : ""
    },{
        category : "Pop Culture",
        question : "She is a black trans singer, known as the Queen of Reggaeton. What is her name?",
        choiceA : "Ivy Queen",
        choiceB : "Tokischa",
        choiceC : "Mykki Blanco",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "Who was the best friend of <i>La Veneno</i> (an iconic Spanish trans woman, actress, celebrity & sex worker)?",
        choiceA : "Antoñita la Fantástica",
        choiceB : "Paca La Piraña",
        choiceC : "Malena Gracia",
        correct : "B",
        context : ""
    },{
        category : "Pop Culture",
        question : "What is the name of the queer South African duo who made African rap with post-apartheid house music?",
        choiceA : "FAKA",
        choiceB : "Ibeyi",
        choiceC : "Dope Saint Jude",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "What was the name of the debut album from the secretly queer, and secretly lipsync'ing, 80's pop group Locomia?",
        choiceA : "Party time",
        choiceB : "Corazon",
        choiceC : "Taiyo",
        correct : "C",
        context : ""
    },{
        category : "Geography",
        question : "What is Wallampu?",
        choiceA : "A series of mountains between India and Pakistan",
        choiceB : "The land of Mapuche people under Argentina and Chile's rule",
        choiceC : "The land of First Nations under Canadian rule",
        correct : "B",
        context : ""

    },{
        category : "Geography",
        question : "Where does the Spree river end?",
        choiceA : "In the River Havel",
        choiceB : "In the canals of Spreewald",
        choiceC : "In Lake Constance",
        correct : "A",
        context : ""
    },{
        category : "Geography",
        question : "Bammelecke, where many Berlin queer people like to go in the summer, is on which river?",
        choiceA : "The Spree",
        choiceB : "The Dahme",
        choiceC : "The Volga",
        correct : "B",
        context : ""
            },{
        category : "Geography",
        question : "Which river flows through Iraq's capital Baghdad?",
        choiceA : "The Baghdad River",
        choiceB : "The Euphrates",
        choiceC : "The Tigris",
        correct : "C",
        context : ""
    },{
        category : "Geography",
        question : "Zanzibar has big historical importance, what country did it become today?",
        imgSrc : "img/js.png",
        choiceA : "Mozambique",
        choiceB : "Tanzania",
        choiceC : "Kenya",
        correct : "B",
        context : "In 1964 Zanzibar, together with Pemba Island and some other smaller islands, joined with Tanganyika on the mainland to form the United Republic of Tanzania."
    },{
        category : "Geography",
        question : "Singapore has only one land border. Which country is that?",
        choiceA : "Indonesia",
        choiceB : "Vietnam",
        choiceC : "Malaysia",
        correct : "C",
        context : ""
        },{
        category : "Geography",
        question : "Decathlon appropriated the name of the Quechua people. Which country has the highest population of Quechua speakers?",
        choiceA : "Brazil",
        choiceB : "Chile",
        choiceC : "Peru",
        correct : "C",
        context : "Quechua is spoken by 8,4 million people world wide as first language. It is official state langugage in Bolivia and Peru. Approximately 4,38 million people in Peru speak Quechua as their first language (amounting to over 25%) while Bolivia comes second with 23% of the population."
    },{
        category : "Geography",
        question : "There are two Kreuzbergs, which one is Möbel Olfe in?",
        choiceA : "36",
        choiceB : "46",
        choiceC : "61",
        correct : "A",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : "The term Kink has roots in",
        choiceA : "Old British English",
        choiceB : "60s US English",
        choiceC : "Old Nordic or Norse languages",
        correct : "C",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : "In Kink play, what does Figging mean?",
        choiceA : "To wear a fig leaf around the ass",
        choiceB : "To insert a piece of ginger in the anus",
        choiceC : "To play with a whip",
        correct : "B",
        context : "We also didn't know what it is, but now we all do! Spicey!"
    },{
        category : "Sex, Sexuality, and Kink",
        question : 'What is "futomomo"?',
        choiceA : "The Japanese term for asexual",
        choiceB : 'A Shibari term meaning "fat leg", because of how the leg looks tied',
        choiceC : "A brand producing gender-inclusive sex-toys",
        correct : "B",
        context : "In Shibari rope bondage futomomo is a technique used to tie together a bent leg. "
    },{
        category : "Sex, Sexuality, and Kink",
        question : 'In safer sex, what two things do NOT go together?',
        choiceA : "Latex condoms and Oil-based lubricant",
        choiceB : "Vibrators and Showers",
        choiceC : "Kissing and eating",
        correct : "A",
        context : "Oil damages the latex and thus the condom!"
    },{
        category : "Sex, Sexuality, and Kink",
        question : "What is Philemaphobia?",
        choiceA : "Fear of Phallic things",
        choiceB : "Fear of Kissing",
        choiceC : "Fear of Rimming",
        correct : "B",
        context : "See, this is a proper use of the term -phobia. It is not hatred, it is mild to moderate anxiety that is common among young and inexperienced kissers."
    },{
        category : "Sex, Sexuality, and Kink",
        question : 'What is the name of the flinta play party at Quälgeist?',
        choiceA : "Honey and Spice",
        choiceB : "Fire and Ice",
        choiceC : "Honey and Ice",
        correct : "A",
        context : ""
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    category.innerHTML = q.category;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    startcontainer.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = 30 - count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
            revealAnswers(questions);
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        revealAnswers(questions);
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#8EFF8C";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#FF7575";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    // let img = (scorePerCent >= 80) ? "img/5.png" :
    //           (scorePerCent >= 60) ? "img/4.png" :
    //           (scorePerCent >= 40) ? "img/3.png" :
    //           (scorePerCent >= 20) ? "img/2.png" :
    //           "img/1.png";
    
    // scoreDiv.innerHTML = "<img src="+ img +">";
    scoreNumber.innerHTML ="<b>"+ scorePerCent + "%</b>";
}

// list all answers automatically
function revealAnswers(arr){
    const list = document.getElementById("answersList");
    let content = ""
    arr.forEach((item, index) => {
        try {
            let q = item;
            content+="<hr><p class = 'revealQuestion'>"+ q.question+"</p>" +"<p class = 'revealChoice'>A) "+ q.choiceA+ "</p> "+"<p class = 'revealChoice'>B) "+ q.choiceB+ "</p> "+"<p class = 'revealChoice'>C) "+ q.choiceC+ "</p > "+"<p class = 'revealCorrectLetter'>The correct answer is:<b> "+ q.correct+ "</b><p>"+"<p class = 'revealContext'>"+ q.context+ "<p>";
        } catch (Error) {
            console.log(Error);
        }
        list.innerHTML = content
    });

}