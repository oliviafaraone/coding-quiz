//Starting Quiz to get begin questions
var page = document.querySelector("#page-content");

  document.getElementById("start-quiz").onclick= function startQuiz(){

      page.querySelector("#header").textContent = "Test Question Input";

      var removeH2 = document.getElementById("desc");
      removeH2.parentNode.removeChild(removeH2);

      var removeStart = document.getElementById("start-quiz");
      removeStart.parentNode.removeChild(removeStart);

      //createQuestions();

      createAnswerButtons();

   console.log("testy test test")
  };

  

// The array of questions for the game.
var questions = [
    { q: 'A _______ is a predefined action that we can call or invoke in our code (after we declare it earlier in the code', 
    a:{ 
        a: '', 
        b: '', 
        c: 'function', 
        d: '' },
        correctA: '3'
        },  

    { q: 'Which of the following is the appropriate syntax for a for loop?', 
    a:{ 
        a: '', 
        b: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        c: '', 
        d: '' },
        correctA: '2'
        }, 

    { q: 'What does the return statement do?', 
    a:{ 
        a: '', 
        b: '', 
        c: '', 
        d: 'it returns a value, but it also ends function execution right then and there' },
        correctA: '4'
    }, 

    { q: 'What syntax would you use to stop the page default of refreshing and removing input page information', 
    a:{ 
        a: 'event.preventDefault();', 
        b: '', 
        c: '', 
        d: '' },
        correctA: '1'
    }, 

    { q: 'With the use of ______, we can set up the click event listener on a parent element and then, through that single event listener, determine which child elements were clicked.', 
    a:{ 
        a: '', 
        b: '', 
        c: 'event delegation', 
        d: '' },
        correctA: '3'
    } 
  ];

var test= "test";
  function createAnswerButtons(){
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "questions";
    
     // create answer1 button
     var answer1El = document.createElement("button");
     //answer1El.textContent = "TEST";
     //questions.a.a;
     //answer1El.className = "btn a1-btn";
     //answer1El.setAttribute('type', 'button');
     answer1El.innerText="TEST";
     actionContainerEl.appendChild(answer1El);
     // create answer2 button
     console.log('does this work');
     return answer1El;
    

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

  


  // We start the game with a score of 0.
  //var score = 0;
  
  // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     //var answer = confirm(questions[i].q);
//     var answer = 
  
//     // Compare answers
//     if (
//       (answer === true && questions[i].a === 't') ||
//       (answer === false && questions[i].a === 'f')
//     ) {
//       // Increase score
//       score++;
//       // Alert the user
//       alert('Correct!');
//     } else {
//       alert('Wrong!');
//     }
//   }
  