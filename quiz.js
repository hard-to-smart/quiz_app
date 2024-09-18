import questions from './questions.js'

console.log(questions)

const start = document.getElementById('start-section')

start.addEventListener('click', ()=>startQuiz())
function startQuiz(){
    setInterval(changeQuestion, 10000);
    start.style.display = "none";
    addTimer();

}


function addTimer() {
    let timeLeft = 10;
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
        timeLeft--;
    }, 1000);
    const timerSpace = document.createElement("span");
    timerSpace.innerHTML = timeLeft;
    document.body.appendChild(timerSpace);
}



let currentQuestion=0;
let correctAnswerCount=0;
function changeQuestion() {
    const questionBox = document.querySelector("h2");
    const optionsBox = document.querySelectorAll("li");
    if(currentQuestion >= questions.length ){
        endQuiz()
        return;
    }
    questionBox.textContent = questions[currentQuestion].question;
    console.log(questions[currentQuestion].question);
    console.log(currentQuestion)
    // for( let i = 0; i< 4 ; i++ ) {
    //     optionsBox[i].textContent = questions[currentQuestion].options[i];
    //     optionsBox[i].classList.add("color-li");
    //     optionsBox[i].addEventListener("click", function(){
    //         console.log(questions[currentQuestion].options[i])
    //         if (questions[currentQuestion].options[i] == questions[currentQuestion].answer) {
    //             correctAnswerCount++;
    //         }
    //     });
    // }   
    optionsBox.forEach((option, index)=>{
        option.textContent = questions[currentQuestion].options[index];
        option.classList.add("color-li");

        option.replaceWith(option.cloneNode(true));

        option.addEventListener("click", function(){
            console.log("Option clicked:" , questions[currentQuestion].options[index])
            if (questions[currentQuestion].options[index] == questions[currentQuestion].answer) {
                correctAnswerCount++;
            }

        });
        currentQuestion = (currentQuestion + 1);

    });

}
function endQuiz(){
    alert(`quiz ended` + correctAnswerCount)

}






