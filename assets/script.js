
// The array of questions for the game.
const questions = [
    { q: 'A _______ is a predefined action that we can call or invoke in our code (after we declare it earlier in the code', 
    answer:{ 
        a: 'element', 
        b: 'loop', 
        c: 'function', 
        d: 'attribute' }, 
        correctA: 'c'
        },  

    { q: 'Which of the following is the appropriate syntax for a for loop?', 
    answer:{ 
        a: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        b: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        c: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        d: 'for([initial expression]; [condition]; [increment expression]) {statement}' },
        correctA: 'b'
        }, 

    { q: 'What does the return statement do?', 
    answer:{ 
        a: '', 
        b: '', 
        c: '', 
        d: 'it returns a value, but it also ends function execution right then and there' },
        correctA: 'd'
    }, 

    { q: 'What syntax would you use to stop the page from refreshing and removing input page information', 
    answer:{ 
        a: 'event.preventDefault();', 
        b: 'event.stopload();', 
        c: 'event.freezeInput();', 
        d: 'event.stayPage();' },
        correctA: 'a'
    }, 

    { q: 'With the use of ______, we can set up the click event listener on a parent element and then, through that single event listener, determine which child elements were clicked.', 
    answer:{ 
        a: '', 
        b: '', 
        c: 'event delegation', 
        d: '' },
        correctA: 'c'
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

    //createAnswerButtons2();

    begQuiz();
 
};

var questionIndex = 0;

function begQuiz() {
  var firstQuestion = questions[questionIndex];
  displayQuestion(firstQuestion);
};

function displayQuestion(question) {
    var question0 = question.q; 
    page.querySelector("#header").textContent = question0;

    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "questions";

     //create answer1 button
     var answer1El = document.createElement("button");
     var answer0a = question.answer.a;
     answer1El.textContent = answer0a;
     answer1El.className = "btn";
     actionContainerEl.appendChild(answer1El);

    // create answer2 button
     var answer2El = document.createElement("button");
     var answer0b = question.answer.b;
     answer2El.textContent = answer0b;
     answer2El.className = "btn";
     actionContainerEl.appendChild(answer2El);

     // create answer3 button
     var answer3El = document.createElement("button");
     var answer0c = question.answer.c;
     answer3El.textContent = answer0c;
     answer3El.className = "btn";
     actionContainerEl.appendChild(answer3El);

     // create answer4 button
     var answer4El = document.createElement("button");
     var answer0d = question.answer.d;
     answer4El.textContent = answer0d;
     answer4El.className = "btn";
     actionContainerEl.appendChild(answer4El);

     document.querySelector('#answer-list').appendChild(actionContainerEl);

}

document.getElementById("answer-list").onclick= function nextQuestion(){
    var userAnswer= ;
    if (correctA == userAnswer) {
        document.getElementById("answer").innerHTML = "Correct!";
    } else {
        document.getElementById("answer").innerHTML = "Wrong!";
    }
};

//function nextQuestion () {

    // grade the user's answer
    // iterate
  //  currentQuestionIndex++ 
  //  var nextQuestion = questions[questionIndex] // the second question
   // displayQuestion(nextQuestion)
 // }


function createAnswerButtons2(){

    page.querySelector("#header").textContent = questions.q;

    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "questions";
    
     // create answer1 button
     var answer1El = document.createElement("button");
     const a = questions[0]
     answer1El.textContent = a;
     actionContainerEl.appendChild(answer1El);

    //  // create answer2 button
    //  var answer2El = document.createElement("button");
    //  const b = questions.answer.b
    //  answer2El.textContent = b;
    //  actionContainerEl.appendChild(answer2El);

    //  // create answer3 button
    //  var answer3El = document.createElement("button");
    //  const c = questions.answer.c
    //  answer3El.textContent = c;
    //  actionContainerEl.appendChild(answer3El);

    //  // create answer4 button
    //  var answer4El = document.createElement("button");
    //  const d = questions.answer.d
    //  answer4El.textContent = d;
    //  actionContainerEl.appendChild(answer4El);


     document.querySelector('#quiz-questions').appendChild(actionContainerEl)
     console.log(actionContainerEl);
     console.log(questions);
     return answer1El;
    
;
  }



      
  function createAnswerButtons(){

    page.querySelector("#header").textContent = "A _______ is a predefined action that we can call or invoke in our code (after we declare it earlier in the code";

    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "questions";
    
     // create answer1 button
     var answer1El = document.createElement("button");
     answer1El.textContent = "element";
     actionContainerEl.appendChild(answer1El);

     // create answer2 button
     var answer2El = document.createElement("button");
     answer2El.textContent = "loop";
     actionContainerEl.appendChild(answer2El);

     // create answer3 button
     var answer3El = document.createElement("button");
     answer3El.textContent = "function";
     actionContainerEl.appendChild(answer3El);

     // create answer4 button
     var answer4El = document.createElement("button");
     answer4El.textContent = "attribute";
     actionContainerEl.appendChild(answer4El);


     document.querySelector('#quiz-questions').appendChild(actionContainerEl)
     console.log(actionContainerEl);
    //  return answer1El;
    

  };
  //createAnswerButtons();


// Timer that counts down from 75 seconds
// var timerEl = document.getElementById('timer');
// var startBtn = document.getElementById('start');

// function timer() {
//     var timeLeft = 75;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//       if (timeLeft > 0) {
//         timerEl.textContent = 'Timer: ' + timeLeft ;
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else {
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `allDone()` function
//         allDone();
//       }
//     }, 1000);
//   }
  
  
// function allDone(){
//     var finalScore= 'Your final score is ' + timeLeft + '.';
//     var playerInInput = document.querySelector("input[name='player-initials']").value;

//     var taskInfoEl = document.createElement("div");
//     taskInfoEl.className = "task-info";
//     taskInfoEl.innerHTML =
//       "<h2 class='task-name'>" + finalScore + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
//     listItemEl.appendChild(taskInfoEl);
  
// }

// allDone();





//   function showQuestions(questions, quizContainer){
//     // we'll need a place to store the output and the answer choices
//     var output = [];
//     var answers;

//     // for each question...
//     for(var i=0; i<questions.length; i++){
        
//         // first reset the list of answers
//         userAnswers = [];

//         // for each available answer to this question...
//         for(letter in questions[i].answers){


//             // ...add an html radio button
//             answers.push(
//                 '<label>'
//                     + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                 + '</label>'
//             );
//         }

//         // add this question and its answers to the output
//         output.push(
//             '<div class="question">' + questions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         );
//     }

//     // finally combine our output list into one string of html and put it on the page
//     quizContainer.innerHTML = output.join('');

// }
//   function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	

// 	function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }

  

