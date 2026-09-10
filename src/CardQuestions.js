import QuizQuestions from "./data/questions";
function QuestionCard() {
  const mappedQuestions = QuizQuestions.map((QuizQuestion) => (
    <li key={QuizQuestion.id}>{QuizQuestion.question}</li>
  ));

  return (
    <div className="question-card">
      <ul>{mappedQuestions}</ul>
    </div>
  );
}

export default QuestionCard;
