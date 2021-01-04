// The array of questions for the game.
const questions = [
    { q: 'A _______ is a predefined action that we can call or invoke in our code (after we declare it earlier in the code', 
    answer:{ 
        a: 'element', 
        b: 'loop', 
        c: 'function', 
        d: 'attribute' }, 
        correctA: 'function'
        },  

    { q: 'Which of the following is the appropriate syntax for a for loop?', 
    answer:{ 
        a: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        b: 'for([condition]; [initial expression];  [increment expression]) {statement}', 
        c: 'for([initial expression]; [increment expression]; [condition]; ) {statement}', 
        d: 'for([condition]; [increment expression], [initial expression]; ) {statement}' },
        correctA: 'for([initial expression]; [condition]; [increment expression]) {statement}'
        }, 

    { q: 'What does the return statement do?', 
    answer:{ 
        a: 'it returns a value, and continues executing the function', 
        b: 'it does not return a value, but it continues executiting the function', 
        c: 'it does not return a value, and it ends function execution right then and there', 
        d: 'it returns a value, but it ends function execution right then and there' },
        correctA: 'it returns a value, but it ends function execution right then and there'
    }, 

    { q: 'What syntax would you use to stop the page from refreshing and removing input page information', 
    answer:{ 
        a: 'event.preventDefault();', 
        b: 'event.stopload();', 
        c: 'event.freezeInput();', 
        d: 'event.stopPropagation();' },
        correctA: 'event.preventDefault();'
    }, 

    { q: 'With the use of ______, we can set up the click event listener on a parent element and then, through that single event listener, determine which child elements were clicked.', 
    answer:{ 
        a: 'event listeners', 
        b: 'event target', 
        c: 'event delegation', 
        d: 'event interface' },
        correctA: 'event delegation'
    } 
  ];


  //Starting Quiz to get begin questions
var page = document.querySelector("#page-content");
    document.getElementById("start-quiz").onclick= function startQuiz(){

        var removeH2 = document.getElementById("desc");
        removeH2.parentNode.removeChild(removeH2);

        var removeStart = document.getElementById("start-quiz");
        removeStart.parentNode.removeChild(removeStart);

        //createQuestions();
        createAnswerButtons();

        //popupateQuestions(questions);
        //timer();
        //begQuiz();
};

function createAnswerButtons (){

    var actionContainerEl = document.createElement("div");
    console.log(actionContainerEl.setAttribute);

    //create answer1 button
    var answer1El = document.createElement("button");
    answer1El.textContent = "";
    answer1El.className = "btn";
    actionContainerEl.appendChild(answer1El);

   // create answer2 button
    var answer2El = document.createElement("button");
    answer2El.textContent = "";
    answer2El.className = "btn" ;
    actionContainerEl.appendChild(answer2El);

    // create answer3 button
    var answer3El = document.createElement("button");
    answer3El.textContent = "";
    answer3El.className = "btn";
    actionContainerEl.appendChild(answer3El);

    // create answer4 button
    var answer4El = document.createElement("button");
    answer4El.textContent = "";
    answer4El.className = "btn";
    actionContainerEl.appendChild(answer4El);

    document.querySelector('#answer-list').appendChild(actionContainerEl);



if (answer4El.textContent = ""){
    begQuiz();
}

    var questionIndex = 0;
var currQuestion = questions[questionIndex];

function begQuiz() {
    popupateQuestions(currQuestion);
    console.log(currQuestion);
  };

function popupateQuestions(questions){

    var question0 = questions.q;  
    page.querySelector("#header").textContent = question0;

   // if (questionIndex<questionIndex.length){

    var answer0a = questions.answer.a;
    answer1El.textContent = answer0a;

    var answer0b = questions.answer.b;
    answer2El.textContent = answer0b;

    var answer0c = questions.answer.c;
    answer3El.textContent = answer0c;

    var answer0d = questions.answer.d;
    answer4El.textContent = answer0d;

//}
//else allDone
    
};
    
}; 

var questionIndex = 0;
var currQuestion = questions[questionIndex];

function begQuiz() {
    popupateQuestions(currQuestion);
    console.log(currQuestion);
  };

function popupateQuestions(questions){

    var question0 = questions.q;  
    page.querySelector("#header").textContent = question0;

   // if (questionIndex<questionIndex.length){

    var answer0a = questions.answer.a;
    answer1El.textContent = answer0a;

    var answer0b = questions.answer.b;
    answer2El.textContent = answer0b;

    var answer0c = questions.answer.c;
    answer3El.textContent = answer0c;

    var answer0d = questions.answer.d;
    answer4El.textContent = answer0d;

//}
//else allDone
    
};