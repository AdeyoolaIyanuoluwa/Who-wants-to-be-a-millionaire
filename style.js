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
    {
        question : 'Who is the creator of Python?',
        option : ['Guido van Rossium','Brendan Eich','Google Inc','Dan Abrahmov'],
        answer : 'Guido van Rossium'
    },
 ]


 let option0 = document.getElementById('option0')
 let option1 = document.getElementById('option1')
 let option2 = document.getElementById('option2')
 let option3 = document.getElementById('option3')
 let span = document.querySelectorAll('button')
 let a = 0
let song = new Audio("correct-answer.mp3")
let song1 = new Audio("wrong-answer-audio.mp3")

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

const checkAnswer =(e)=>{
        if(e.innerHTML=== questionBank[a].answer){
            document.getElementById(e.id).style.background = 'limegreen';
            song.play()
            setTimeout(nextQuestion,6000)
        }
        if(e.innerHTML!== questionBank[a].answer){
            document.getElementById(e.id).style.background = 'tomato';
            song1.play()
            // setTimeout(ans, 6000);
            // window.location.href = "gameover.html"
        }
    }

    // const ans = () =>{

    // }

const nextQuestion = () =>{
    if(a<questionBank.length){
         a=a+1
         displayQuestion()
    }
    
}

const fifty = ()=>{
    option0.innerHTML = ""
    option3.innerHTML = ""
    btn.innerHTML = `<img src="50-50-used.png" alt="">`
        
}
     displayQuestion()
