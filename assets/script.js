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

// The array of questions for the game.
var questions = [
    { q: 'A _______ is a predefined action that we can call or invoke in our code (after we declare it earlier in the code', 
    a:{ 
        1: '', 
        2: '', 
        3: 'function', 
        4: '' },
        correctA: '3'
        },  

    { q: 'Which of the following is the appropriate syntax for a for loop?', 
    a:{ 
        1: '', 
        2: 'for([initial expression]; [condition]; [increment expression]) {statement}', 
        3: '', 
        4: '' },
        correctA: '2'
        }, 

    { q: 'What does the return statement do?', 
    a:{ 
        1: '', 
        2: '', 
        3: '', 
        4: 'it returns a value, but it also ends function execution right then and there' },
        correctA: '4'
    }, 

    { q: 'What syntax would you use to stop the page default of refreshing and removing input page information', 
    a:{ 
        1: 'event.preventDefault();', 
        2: '', 
        3: '', 
        4: '' },
        correctA: '1'
    }, 

    { q: 'With the use of ______, we can set up the click event listener on a parent element and then, through that single event listener, determine which child elements were clicked.', 
    a:{ 
        1: '', 
        2: '', 
        3: 'event delegation', 
        4: '' },
        correctA: '3'
    } 
  ];


  
  // We start the game with a score of 0.
  //var score = 0;
  
  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    //var answer = confirm(questions[i].q);
    var answer = 
  
    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
  