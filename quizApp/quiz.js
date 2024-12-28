const questions = [
    {
        question:"What is my favourite color?",
        answers:[
            {text:"Red", correct:false},
            {text:"blue", correct:false},
            {text:"Green", correct:true},
            {text:"Purple", correct:false},
        ]
    },
    {
        question:"where do i see us in five years?",
        answers:[
                {text:"married😂", correct:false},
                {text:"stilll dating😊", correct:false},
                {text:"probably engaged😊💖", correct:true},
                {text:"apart💔😢", correct:false},
            

        ]
    },
    {
        question:"What is the thing that most people dont know about me?",
        answers:[
            {text:"i'm shy",correct:false},
            {text:"i love you",correct:false},
            {text:"i cry easily",correct:true},
            {text:"i'm a girl😂",correct:false},
        ]
    },
    {
        question:"What is my father's name🤣🤣🤣",
        answers:[
            {text:"Leornard",correct:true},
            {text:"Joseph",correct:false},
            {text:"Peter",correct:false},
            {text:"Thomas",correct:false},
        ]
    }



]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score =0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
     handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();