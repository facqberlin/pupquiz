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
        imgSrc : "img/html.png",
        choiceA : "Article 175",
        choiceB : "Transsexuals Act",
        choiceC : "The Age of Consent for queer people",
        correct : "B",
        context : ""
    },{
        category : "Politics",
        question : 'To avoid using "transphobia" which falsely frames prejudice and hate against Trans people, as an uncontrollable fear disorder, it is instead recommended to use:',
        imgSrc : "img/css.png",
        choiceA : "Trans misanthropie",
        choiceB : "Trans misia",
        choiceC : "Trans terror",
        correct : "B",
        context : ""
    },{
        category : "Politics",
        question : "The unfair EU Dublin Regulation means:",
        imgSrc : "img/js.png",
        choiceA : "Refugees should apply for asylum from their home countries.",
        choiceB : "Refugees can never become Europeans.",
        choiceC : "Refugees must apply for asylum in the first country of entry or arrival.",
        correct : "C",
        context : ""
    },{
        category : "Politics",
        question : "What does Alt-Text mean?",
        imgSrc : "img/js.png",
        choiceA : "Literature of the Alt-Right.",
        choiceB : "Reading between the lines in your ex's message.",
        choiceC : "Text to describe an online image for people with impaired vision.",
        correct : "C",
        context : ""
    },{
        category : "Politics",
        question : "Last year, 2022, how much did the EU pay Frontex for their criminal work at the borders?",
        imgSrc : "img/js.png",
        choiceA : "300 million Euros",
        choiceB : "754 million Euros",
        choiceC : "2.1 billion Euros",
        correct : "B",
        context : ""
    },{
        category : "Politics",
        question : "What is the name of the platz in front of New Yorck Bethanien",
        imgSrc : "img/js.png",
        choiceA : "Carlo Giuliani Platz",
        choiceB : "Marielle Franco Platz",
        choiceC : "Esther Bejarano Platz",
        correct : "B",
        context : ""
    },{
        category : "Politics",
        question : "When was Paragraph 175 (a provision of the German Criminal Code that criminalized homosexual acts) finally deleted?",
        imgSrc : "img/js.png",
        choiceA : "1975",
        choiceB : "1984",
        choiceC : "1994",
        correct : "C",
        context : ""
    },{
        category : "Politics",
        question : "How may European Countries still demand forced sterilization, in order for Transpeople to achieve legal recognition and access to Trans-healthcare?",
        imgSrc : "img/js.png",
        choiceA : "5",
        choiceB : "9",
        choiceC : "13",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "Which of these statements is false?",
        imgSrc : "img/js.png",
        choiceA : "Kai-Kai is queer-slang for sexual attraction between two drag queens",
        choiceB : "Kai-Kai is a town in Cameroon",
        choiceC : "Kai-Kai is queer-slang for saying bye.",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "In English queer-slang, Who is a Zucchini?",
        imgSrc : "img/js.png",
        choiceA : "A person who is new to queer relationships",
        choiceB : "A partner in a queer platonic relationship",
        choiceC : "A Straight person who kisses queer people at parties",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "In children programs, which Teletubby was accused of being queer and of promoting homosexuality by a Polish politician?",
        imgSrc : "img/js.png",
        choiceA : "Dipsy",
        choiceB : "Laa Laa",
        choiceC : "Tinky Winky",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "Following these accusations, How was the accused Tele Tubby punished?",
        imgSrc : "img/js.png",
        choiceA : "The producers took away the accused Teletubby's favorite purse.",
        choiceB : "The accused Teletubby was no longer allowed to operate the squirting Tubby Custard Machine.",
        choiceC : "The accused Teletubby was no longer allowed to sleep in the Tubbytronic-Superdome.  ",
        correct : "A",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "How many colors are there in the inclusive queer flag also sometimes called the progressive rainbow flag?",
        imgSrc : "img/js.png",
        choiceA : "11",
        choiceB : "12",
        choiceC : "16",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "What does the P. in the name of queer legend, Marsha P. Johnson, stand for?",
        imgSrc : "img/js.png",
        choiceA : "Patsy on the rocks",
        choiceB : "Pay it no mind",
        choiceC : "Pray for revolution",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "How many European Countries, one of which is Germany, still officially Pathologize Transpeople by categorizing Transidentity as a mental health disorder?",
        imgSrc : "img/js.png",
        choiceA : "7",
        choiceB : "11",
        choiceC : "16",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "What does Endosex mean?",
        imgSrc : "img/js.png",
        choiceA : "The last fuck before a break-up",
        choiceB : "Sex that is focused on orgasm.",
        choiceC : "A person born with a body that fits into the binary of male/female",
        correct : "C",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "What is the name of the very famous Arab poet, from the 8th century, who wrote graphic homosexual poetry?",
        imgSrc : "img/js.png",
        choiceA : "Rumi",
        choiceB : "Abu Nawwas",
        choiceC : "Kahlil Gibran",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "What is a FART?",
        imgSrc : "img/js.png",
        choiceA : "Feminist against the right to transition",
        choiceB : "Feminism appropriating ridiculous transphobe",
        choiceC : "Feminist Association of Racist Terfs",
        correct : "B",
        context : ""
    },{
        category : "Queer Trivia and Terminologies",
        question : "Which country in the world has LGBTIQ-free zones, where LGBTIQ people are banned?",
        imgSrc : "img/js.png",
        choiceA : "Saudi Arabia",
        choiceB : "Kenya",
        choiceC : "Poland",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "Homosexuality was declared illegal in Tanzania when it was under German colonial rule. Today, homosexuality in Tanzania is:",
        imgSrc : "img/js.png",
        choiceA : "Decriminalized",
        choiceB : "Punishable by death",
        choiceC : "Punishable with life imprisonment",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "In Samoan culture, there are words for...",
        imgSrc : "img/js.png",
        choiceA : "two genders",
        choiceB : "three genders",
        choiceC : "four genders",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "In which country, was homosexuality declared illegal when it was under German colonial rule?",
        imgSrc : "img/js.png",
        choiceA : "Togo in 1884",
        choiceB : "Uruguay in 1875",
        choiceC : "Mallorca in 1714",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "Instated under German colonization, in Namibia it is a crime since the1880s to...",
        imgSrc : "img/js.png",
        choiceA : "Be homosexual",
        choiceB : "Have anal sex",
        choiceC : "Have threesomes",
        correct : "B",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "What happened on the 12th of October 1492?",
        imgSrc : "img/js.png",
        choiceA : "The birthday of the murderer Christopher Colombus",
        choiceB : "The start of the colonisation of Abya Yala and Turtle Island.",
        choiceC : "Spain declared itself a colonial power",
        correct : "B",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "What else happened in 1492?",
        imgSrc : "img/js.png",
        choiceA : "The Alhambra Decree ordering the expulsion of Jews from Spain.",
        choiceB : "The Amazigh language was banned across North Africa.",
        choiceC : "The enslavement trade became legal. ",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "How many of the forcefully displaced people & refugees worldwide come from Ex European Colonies?",
        imgSrc : "img/js.png",
        choiceA : "34 %",
        choiceB : "63 %",
        choiceC : "96 %",
        correct : "C",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "When did the glorious Haitian Revolution start?",
        imgSrc : "img/js.png",
        choiceA : "1791",
        choiceB : "1818",
        choiceC : "1912",
        correct : "A",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "She wrote what is known to be the first academic study of Afro-German history, and she has a street in Kreuzberg named after her. What is her name?",
        imgSrc : "img/js.png",
        choiceA : "Audre Lorde",
        choiceB : "May Ayim",
        choiceC : "Natasha A. Kelly",
        correct : "B",
        context : ""
    },{
        category : "Anti-Colonial Politics",
        question : "To which culture of the Oaxaca region (Mexico) do the 'muxe', considered a third gender (or non-binary), belong?",
        imgSrc : "img/js.png",
        choiceA : "Zapotec",
        choiceB : "Mixtec",
        choiceC : "Mixe",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "What was the name of the Afro-German musical trio popular in the 90s?",
        imgSrc : "img/js.png",
        choiceA : "ABC",
        choiceB : "XOXO",
        choiceC : "TicTacToe",
        correct : "C",
        context : ""
    },{
        category : "Pop Culture",
        question : "She is a black trans singer, known as the Queen of Reggaeton. What is her name?",
        imgSrc : "img/js.png",
        choiceA : "Ivy Queen",
        choiceB : "Tokischa",
        choiceC : "Mykki Blanco",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "Who was the best friend of La Veneno (an iconic Spanish trans woman, actress, celebrity & sex worker)?",
        imgSrc : "img/js.png",
        choiceA : "Antoñita la Fantástica",
        choiceB : "Paca La Piraña",
        choiceC : "Malena Gracia",
        correct : "B",
        context : ""
    },{
        category : "Pop Culture",
        question : "What is the name of the queer South African duo who made African rap with post-apartheid house music?",
        imgSrc : "img/js.png",
        choiceA : "FAKA",
        choiceB : "Ibeyi",
        choiceC : "Dope Saint Jude",
        correct : "A",
        context : ""
    },{
        category : "Pop Culture",
        question : "What was the name of the debut album from the secretly queer, and secretly lipsync'ing, 80's pop group Locomia?",
        imgSrc : "img/js.png",
        choiceA : "Party time",
        choiceB : "Corazon",
        choiceC : "Taiyo",
        correct : "C",
        context : ""
    },{
        category : "Geography",
        question : "What is Wallampu?",
        imgSrc : "img/js.png",
        choiceA : "A series of mountains between India and Pakistan",
        choiceB : "The land of Mapuche people under Argentina and Chile's rule",
        choiceC : "The land of First Nations under Canadian rule",
        correct : "B",
        context : ""
    },{
        category : "Geography",
        question : "Which river flows through Iraq's capital Baghdad?",
        imgSrc : "img/js.png",
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
        context : ""
    },{
        category : "Geography",
        question : "Decathlon appropriated the name of the Quechua people. Which country has the highest population of Quechua speakers?",
        imgSrc : "img/js.png",
        choiceA : "Brazil",
        choiceB : "Chile",
        choiceC : "Peru",
        correct : "C",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : "The term Kink has roots in",
        imgSrc : "img/js.png",
        choiceA : "Old British English",
        choiceB : "60s US English",
        choiceC : "Old Nordic or Norse languages",
        correct : "C",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : "In Kink play, what does Figging mean?",
        imgSrc : "img/js.png",
        choiceA : "To wear a fig leaf around the ass",
        choiceB : "To insert a piece of ginger in the anus",
        choiceC : "To play with a whip",
        correct : "B",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : 'What is "futomomo"?',
        imgSrc : "img/js.png",
        choiceA : "The Japanese term for asexual",
        choiceB : 'A Shibari term meaning "fat leg", because of how the leg looks tied',
        choiceC : "A brand producing gender-inclusive sex-toys",
        correct : "B",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : 'In safer sex, what two things do NOT go together?',
        imgSrc : "img/js.png",
        choiceA : "Latex condoms and Oil-based lubricant",
        choiceB : "Vibrators and Showers",
        choiceC : "Kissing and eating",
        correct : "A",
        context : ""
    },{
        category : "Sex, Sexuality, and Kink",
        question : "What is Philemaphobia?",
        imgSrc : "img/js.png",
        choiceA : "Fear of Phallic things",
        choiceB : "Fear of Kissing",
        choiceC : "Fear of Rimming",
        correct : "B",
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