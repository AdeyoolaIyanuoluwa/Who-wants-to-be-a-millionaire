 const questionBank = [
    {
        question : 'Photoelectric effect is associated with?',
        option : ['Non-Metals','Gases','Metals','Photosynthesis'],
        answer : 'Metals'
    },
    {
        question : 'Which of these is not a JavaScript library?',
        option : ['jQuery','Angular','React','Immutablejs'],
        answer : 'Angular'
    },
    {
        question : 'Which is a CSS framework?',
        option : ['Popper','Modernizr','Bootstrap','Sass'],
        answer : 'Bootstrap'
    },
    {
        question : 'Which language is closer to the hardware?',
        option : ['Python','Hash','C++','JavaScript'],
        answer : 'C++'
    },
 ]


 let option0 = document.getElementById('option0')
 let option1 = document.getElementById('option1')
 let option2 = document.getElementById('option2')
 let option3 = document.getElementById('option3')
 let span = document.querySelectorAll('button')
 let a = 0


 const displayQuestion = () => {
    questionBank.map((_,a)=>{
        span[a].style.background = 'blue'; 
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
        if(e.innerHTML!== questionBank[a].answer){
            document.getElementById(e.id).style.background = 'tomato';
            calcScore()
        }
        // else{
        //     document.getElementById(e.id).style.background = 'tomato';
        //         alert("game over")
        //         calcScore()
                    
        // }
        setTimeout(nextQuestion,3000)
    }

const nextQuestion = () =>{
    if(a<questionBank.length){
         a=a+1
         displayQuestion()
    }
    // else{
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
    //  let question = document.getElementById('question');
//  let quizContainer = document.getElementById('quiz-container');