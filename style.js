 var questionBank = [
    {
        question : 'In which year did &quot;Caravan Palace&quot; release their first album? ',
        option : ['2000','2008','2015','2004'],
        answer : '2008'
    },
    {
        question : 'Which of the following is not a prosecutor in the &quot;Ace Attorney&quot; video game series?',
        option : ['Godot','Jake Marshall','Miles Edgeworth','Jacques Portsman'],
        answer : 'Jake Marshall'
    },
    {
        question : 'Which of his six wives was Henry VIII married to the longest?',
        option : ['Anne Boleyn','Jane Seymour','Catherine Parr','Catherine of Aragon'],
        answer : 'Catherine of Aragon'
    },
 ]

 var question = document.getElementById('question');
 var quizContainer = document.getElementById('quiz-container');
 var scorecard = document.getElementById('scorecard');
 var option0 = document.getElementById('option0')
 var option1 = document.getElementById('option1')
 var option2 = document.getElementById('option2')
 var option3 = document.getElementById('option3')
 var next = document.querySelector('.next')
 var points = document.getElementById('score') 
 var span = document.querySelectorAll('span')
 var i=0
//  var score = 0;

 function displayQuestion(){
    for (var  a= 0;  a< span.length;a++){
        span[a].style.background = 'none';  
    }
    question.innerHTML= questionBank[i].question;
    option0.innerHTML = `<button onclick = "calcScore(this)">${questionBank[i].option[0]}</button>`
    option1.innerHTML = questionBank[i].option[1]
    option2.innerHTML = questionBank[i].option[2]
    option3.innerHTML = questionBank[i].option[3]
}
    // calculate score
    // && score<questionBank.length
function calcScore(e){
        if(e.innerHTML=== questionBank[i].answer){
            // score = score+1;
            document.getElementById(e.id).style.background = 'limegreen';
        }
        else{
            document.getElementById(e.id).style.background = 'tomato';
            calcScore()

        }
        setTimeout(nextQuestion,300)
    }

    // display nextQuestion
function nextQuestion(){
    if(i<questionBank.length-1){
         i=i+1
         displayQuestion()
    }
    else{
        points.innerHTML = score+ '/'+ questionBank.length;
        quizContainer.style.display = 'none'
    }
}
     displayQuestion()




























     // next button

// next.addEventListener('click',nextQuestion);

// function backToQuiz(){
//     location.reload();
// }

// check answer
// function checkAnswer(){
//     var answerBank = document.getElementById('answerBank')
//     var answers = document.getElementById('answers')
//     answerBank.style.display= 'block'
//     scoreboard.style.display= 'block'
//     for (let a = 0; a < questionBank.length; a++) {
//         var list = document.createElement('li')
//         list.innerHTML = questionBank[a].answer;
//         answers.appendChild(list)
//     }
// }