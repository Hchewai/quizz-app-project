import QuizQuestions from "./data/questions";
function QuestionCard() {
  const mappedQuestions = QuizQuestions.map((QuizQuestion) => (
    <li key={QuizQuestion.id}>{QuizQuestion.question}</li>
  ));

  return (
    <>
      <ul>{mappedQuestions}</ul>
    </>
  );
}

export default QuestionCard;
