import { useState } from "react";
import QuizQuestions from "./data/questions";
function QuestionCard() {
  

//State section
  const [currentQuestion, setCurrentQuestion] = useState(0);



const handleNextQuestion = () => {


}
 
  return (
    <div className="question-card">
      <ul>{currentQuestion}</ul>
      <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}
export default QuestionCard;


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