import { useState } from "react";
import QuizQuestions from "./data/questions";
function QuestionCard() {
  

//State section
  const [currentQuestion, setCurrentQuestion] = useState(0);


  function startQuiz(event){

  }


  function nextQuestion(event){

  }
  // const mappedQuestions = QuizQuestions.map((QuizQuestion) => (
  //   <li key={QuizQuestion.id}>
  //     {QuizQuestion.question}
  //     <ul>
  //       {QuizQuestion.answers.map((answer) => (
  //         <li key={answer}>{answer}</li>
  //       ))}
  //     </ul>
  //   </li>

  // ));
  return (
    <div className="question-card">
      <ul>{currentQuestion}</ul>
      <button className="next-button" onChange={nextQuestion}>Next Question</button>
    </div>
  );
}
export default QuestionCard;
