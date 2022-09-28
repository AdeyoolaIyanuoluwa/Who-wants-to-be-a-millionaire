 const allQuestion = [
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
 let points = document.getElementById('display');
 let a = 0
 let price = 1000

let song = new Audio("./sound/correct-answer.mp3")
let song1 = new Audio("./sound/wrong-answer-audio.mp3")
let song2 = new Audio("./sound/lets-play.mp3")
let song3 = new Audio("./sound/50-50_sound.mp3")

 const displayQuestion = () => {
    allQuestion.map((_,a)=>{
        span[a].style.background = '#090863'; 
    })
    question.innerHTML= allQuestion[a].question;
    option0.innerHTML = allQuestion[a].option[0]
    option1.innerHTML = allQuestion[a].option[1]
    option2.innerHTML = allQuestion[a].option[2]
    option3.innerHTML = allQuestion[a].option[3]

}

const checkAnswer =(e)=>{
        if(e.innerHTML=== allQuestion[a].answer){
            price+=1000
            document.getElementById(e.id).style.background = 'limegreen';
            song.play()
            setTimeout(nextQuestion,300)
        }
        if(e.innerHTML!== allQuestion[a].answer){
            document.getElementById(e.id).style.background = 'tomato';
            song1.play()
            setTimeout(() => {
                window.location.href = "over.html"
            }, 3000);
            // overLay.innerHTML = `Congratulatons you have won $ ${price}`
        }
    }
    
const gameOver = () =>{
        price+=5000
        overLay.innerHTML = `
        <h1 class="text-light text">GAME OVER</h1>
        <h1><i>Congratulations</i></h1>
        <h1 ><i>you have won</i></h1>
        <h1 class="text-success fw-bold">$ ${price}</h1>
        <img class="restart-img" onclick="restart()" src="./images/restart-removebg-preview.png" height="55px" alt="">`
    }
    

const nextQuestion = () =>{
    if(a<allQuestion.length - 1){
         a=a+1
         displayQuestion()
         points.innerHTML = `$ ${price}`;
    }
    else{
        setTimeout(() => {
            window.location.href = "gameover.html"
        }, 2000);
    }
    
}

const fifty = ()=>{
    option0.innerHTML = "....."
    option3.innerHTML = "....."
    btn.innerHTML = `<img src="./images/50-50-used.png" alt="">`
    btn.onclick = ""
    song3.play()
}
 
const phoneAfriend = ()=>{
        friendImg.innerHTML= `<img src="./images/phone-a-friend-used.png" alt="">`
        friendImg.onclick = ""
}
const audience = ()=>{
        Audience.innerHTML= `<img src="./images/ask-the-audience-used.png" alt="">`
        Audience.onclick = ""
}

const started=()=>{
    window.location.href = "game.html"
}
const playSong=()=>{
    song2.play()
}
const walkAway=()=>{
    window.location.href = "index.html"
    // location.reload()
}
const restart = () =>{
    window.location.href = "index.html"
}


displayQuestion()


