import QuizQuestions from "./questions";
function QuestionCard() {
  return (
    <div className="question-card">
      <h2>First Question: {QuizQuestions.firstQuestion.question}</h2>
      <p>Is it:</p>
    </div>
  );
}

export default QuestionCard;
