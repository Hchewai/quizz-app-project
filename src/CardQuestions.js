import { useState } from "react";
import QuizQuestions from "./data/questions";
function QuestionCard() {
  //State section
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [chosenAnswer, setChosenAnswer] = useState(null);

  // For determining what question the user is on
  const handleNextQuestion = () => {
    if (chosenAnswer === null) {
      alert("Please select an answer");
    } else {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
  };

  // For determining if the answer is right
  const handleAnswerClick = () => {};

  return (
    <div className="question-card">
      <ul></ul>
      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
}
export default QuestionCard;
