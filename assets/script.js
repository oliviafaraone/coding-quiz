
// The array of questions for the game.
const questions = [
    { q: 'A _______ is a predefined action that we can call or invoke in our code, after we declare it earlier in the code', 
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

    //createAnswerButtons();

  //timer();
    displayQuestion();
};


var questionIndex = 0;
var currQuestion = questions[questionIndex];

function displayQuestion(question) {

    document.querySelector('#answer-list').innerHTML='';

    console.log(questionIndex);
    var question0 = questions[questionIndex].q; 
    page.querySelector("#header").textContent = question0;
    
    var actionContainerEl = document.createElement("div");
    actionContainerEl.id = "cls";

     //create answer1 button
     var answer1El = document.createElement("button");
     var answer0a = questions[questionIndex].answer.a;
     console.log(answer0a);
     answer1El.textContent = answer0a;
     answer1El.className = "btn";
     actionContainerEl.appendChild(answer1El);

    // create answer2 button
     var answer2El = document.createElement("button");
     var answer0b = questions[questionIndex].answer.b;
     answer2El.textContent = answer0b;
     answer2El.className = "btn" ;
     actionContainerEl.appendChild(answer2El);

     // create answer3 button
     var answer3El = document.createElement("button");
     var answer0c = questions[questionIndex].answer.c;
     answer3El.textContent = answer0c;
     answer3El.className = "btn";
     actionContainerEl.appendChild(answer3El);

     // create answer4 button
     var answer4El = document.createElement("button");
     var answer0d = questions[questionIndex].answer.d;
     answer4El.textContent = answer0d;
     answer4El.className = "btn";
     actionContainerEl.appendChild(answer4El);

     document.querySelector('#answer-list').appendChild(actionContainerEl);
     
}



document.getElementById("answer-list").onclick= function nextQuestion(event){
    var userAnswer = event.target.innerHTML;
    var correctA = currQuestion.correctA;
    if (correctA == userAnswer) {
        document.getElementById("answer").innerHTML = "Correct!";
        timeLeft=timeLeft + 10;
    } else {
        document.getElementById("answer").innerHTML = "Wrong!";
        timeLeft=timeLeft - 10;
    }

    questionIndex++;
    console.log(questionIndex);

   displayQuestion();
   
    // if (questionIndex < questionIndex.length){
    //     displayQuestion();
    //  } else {
    //      allDone();
    // };
   
};


//function nextQuestion () {

    // grade the user's answer
    // iterate
  //  currentQuestionIndex++ 
  //  var nextQuestion = questions[questionIndex] // the second question
   // displayQuestion(nextQuestion)
 // }



//Timer that counts down from 75 seconds
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var timeLeft = 75;

function timer() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft >= 0) {
        timerEl.textContent = 'Timer: ' + timeLeft ;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `allDone()` function
        //allDone();
      }
    }, 1000);
  }
  
  

function allDone(){

    removeBtn ();
    timeLeft=timeLeft;

    page.querySelector("#header").textContent = 'All done!' ;

    var scoreInfoEl = document.createElement("div");
    scoreInfoEl.innerHTML = ('Your final score is ' + timeLeft + '.');
    scoreInfoEl.className = "score-info";

    var scoreIn = document.createElement("h3");
    scoreIn.textContent = ('Enter initials: '); 
    scoreIn.className = "score-info";
    scoreInfoEl.appendChild(scoreIn);

    var score = document.createElement("input");
    // score.textContent = ('Enter initials: ');
    score.type= "test";
    scoreInfoEl.appendChild(score);

    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id="sub-score";
    scoreInfoEl.appendChild(submit);


    document.querySelector('#score-form').appendChild(scoreInfoEl);
  
}



// document.getElementById("sub-score").onclick= function highScores(event){

//     location.href=window.location.href='./scores.html';
// };


