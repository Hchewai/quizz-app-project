import { useState } from "react";
import QuizQuestions from "./data/questions";
function QuestionCard() {
  

//State section
  const [currentQuestion, setCurrentQuestion] = useState(0);


  //Component rendering section

  const mappedQuestions = QuizQuestions.map((QuizQuestion) => (
    <li key={QuizQuestion.id}>
      {QuizQuestion.question}
      <ul>
        {QuizQuestion.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
    </li>

  ));
  return (
    <div className="question-card">
      <ul>{mappedQuestions}</ul>
    </div>
  );
}
export default QuestionCard;
