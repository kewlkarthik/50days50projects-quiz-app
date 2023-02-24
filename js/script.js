const quizData = [
    {
        question: "Which tool allows you to upload images to S3 using programming language-specific APIs?",
        a: "AWS Management Console (Browser)",
        b: "AWS Software Developer Kit (SDK)",
        c: "AWS Command Line Interface (CLI)",
        d: "Integrated Development Environments (IDE)",
        correct: "b",
    },
    {
        question: "Which AWS service helps you to automatically deploy code to AWS Fargate?",
        a: "AWS Cloud9",
        b: "AWS CodePipeline",
        c: "AWS CodeDeploy",
        d: "AWS CodeCommit",
        correct: "c",
    },
    {
        question: "Your company has an application for internal use only, which is running on an EC2 instance. For security reasons, you need to block all other incoming requests to the EC2 instance. Which of the following will help you do this?",
        a: "IAM Policy",
        b: "IAM MFA",
        c: "Security Group",
        d: "Internet Gateways",
        correct: "c",
    },
    {
        question: "Which AWS service helps you to protect from SQL injection attacks?",
        a: "AWS WAF",
        b: "AWS KMS",
        c: "AWS Shield",
        d: "AWS ELB",
        correct: "a",
    },
    {
        question: "A company wants to set up an SSL security certificate for its website to use HTTPS protocol. Which AWS service can be used to deploy SSL Server Certificate?",
        a: "Amazon Route 53",
        b: "AWS Trusted Advisor",
        c: "AWS License Manager",
        d: "AWS Certificate Manager",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = `<${currentQuiz+1}/${quizData.length}> \n\n ${currentQuizData.question}`
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
})