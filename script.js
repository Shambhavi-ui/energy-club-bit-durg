feather.replace()
function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('quiz-result');
    const answers = {
        q1: 'b',
        q2: 'c',
        q3: 'c',
        q4:  'b',
        q5:  'b',
    };
    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const selectedAnswer = quizForm.elements[question].value;
        if (selectedAnswer === answers[question]) {
            score++;
        }
    }

    resultContainer.textContent = `You scored ${score} out of ${totalQuestions}`;
}
