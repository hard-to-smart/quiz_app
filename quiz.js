// import questions from './questions.js'

// const start = document.getElementById('start-section')
// let currentQuestion=0;
// let correctAnswerCount=0;

// start.addEventListener('click', ()=>startQuiz())

// // start the function
// function startQuiz(){
//     start.style.display = "none";
//     changeQuestion()
//     setInterval(changeQuestion, 5000);
// }


// function addTimer() {
//     const timerSpace = document.getElementById("timer");
//     let timeLeft = 5;
//     const timer = setInterval(() => {
        
//     timerSpace.innerHTML = timeLeft--;
//         if (timeLeft < 1 ) {
//             clearInterval(timer);
//         }
//     }, 1000);
//     currentQuestion++;

   
// }

  
  


// function changeQuestion() {
//     const questionBox = document.querySelector("h2");
//     const optionsBox = document.querySelectorAll("li");
//     if(currentQuestion >= questions.length ){
//         endQuiz()
//         return;
//     }
//     questionBox.textContent = questions[currentQuestion].question;
//     // console.log(questions[currentQuestion].question);
//     // console.log(currentQuestion)
//     // for( let i = 0; i< 4 ; i++ ) {
//     //     optionsBox[i].textContent = questions[currentQuestion].options[i];
//     //     optionsBox[i].classList.add("color-li");
//     //     optionsBox[i].addEventListener("click", function(){
//     //         console.log(questions[currentQuestion].options[i])
//     //         if (questions[currentQuestion].options[i] == questions[currentQuestion].answer) {
//     //             correctAnswerCount++;
//     //         }
//     //     });

//     // }   
//     optionsBox.forEach((option, index)=>{
//         option.textContent = questions[currentQuestion].options[index];
//         option.classList.add("color-li");
        
//         option.addEventListener("click", function(){
            
//             console.log("Option clicked:" , questions[currentQuestion].question)
//             // if (questions[currentQuestion].options[index] == questions[currentQuestion].answer) {
//             //     correctAnswerCount++;
//             // }

//         });

//     });
//         addTimer()



// }
// function endQuiz(){
//     alert(`quiz ended` + correctAnswerCount)

// }

import questions from './questions.js'

const start = document.getElementById('start-section');
const timerSpace = document.getElementById("timer");
const questionSpace = document.querySelector('h2');
const optionsSpace = document.querySelectorAll('li');

let currectQuestion = 0;
let correctAnswerCount = 0;

start.addEventListener('click', ()=>{
    start.style.display = "none";
    timerSpace.style.display="block";
    addTimer()
})

function addTimer(){
    let time = 5;
    const timer = setInterval(()=>{
        timerSpace.innerHTML = time--;
        if(currectQuestion.length ==questions.length){
            return resultSection()
        }
        if(time < 0){
            clearInterval(timer)
            currectQuestion++;
        }
        else{
            // changeQuestion()
        }

    }, 1000)

}

function changeQuestion(){
    questionSpace.innerHTML = questions[currectQuestion].question;
    optionsSpace.forEach(( option, index) => {
        option.textContent = questions[currectQuestion].options[index];
        option.classList.add("color-li")
    })
    optionsSpace.forEach((option)=>{
        option.addEventListener('click', ()=>{
            option.classList.add('li-selected')
            if(option.textContent == questions[currectQuestion].answer)
            console.log(questions[currectQuestion].answer)
        })
    })

}

function resultSection(){
    const result = document.getElementById("")
}
