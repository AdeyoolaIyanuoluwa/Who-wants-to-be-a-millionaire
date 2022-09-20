 const questionBank = [
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

//  let question = document.getElementById('question');
//  let quizContainer = document.getElementById('quiz-container');
 let option0 = document.getElementById('option0')
 let option1 = document.getElementById('option1')
 let option2 = document.getElementById('option2')
 let option3 = document.getElementById('option3')
 let span = document.querySelectorAll('span')
 let a = 0


 const displayQuestion = () => {
    questionBank.map((_,a)=>{
        span[a].style.background = 'none'; 
    })
    question.innerHTML= questionBank[a].question;
    option0.innerHTML = questionBank[a].option[0]
    option1.innerHTML = questionBank[a].option[1]
    option2.innerHTML = questionBank[a].option[2]
    option3.innerHTML = questionBank[a].option[3]

}

const calcScore =(e)=>{
        if(e.innerHTML=== questionBank[a].answer){
            document.getElementById(e.id).style.background = 'limegreen';
        }
        else{
            document.getElementById(e.id).style.background = 'tomato';
                alert("game over")
                calcScore()
                    
        }
        setTimeout(nextQuestion,300)
    }

const nextQuestion = () =>{
    if(a<questionBank.length){
         a=a+1
         displayQuestion()
    }
    // else if (a>questionBank.question){
    //     alert("Game over")
    //     // quizContainer.style.display = 'none'
    // }
    
}

const fifty = ()=>{
    option2.innerHTML = ""
    option3.innerHTML = ""
        
}

     displayQuestion()

























//  var next = document.querySelector('.next')
//  var points = document.getElementById('score') 
//  var scorecard = document.getElementById('scorecard');

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
//  let Question = question.value;
//  let quizContainer = quiz-container.value;
//  let option0 = option0.value;
//  let option1 = option1.value;
//  let option2 = option2.value;
//  let option3 = option3.value;
//  let span = document.querySelectorAll('span')
//  let i=0
 // for (let  a= 0;  a< span.length;a++){
    //     span[a].style.background = 'none';  
    // }
    // if(a<questionBank.length+1)
    // points.innerHTML = score+ '/'+ questionBank.length;