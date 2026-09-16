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

<<<<<<< HEAD
 chosenAnswer === null ? alert("Please Select an answer") : currentQuestion + 1; 
=======
  // For determining if the answer is right
  const handleAnswerClick = () => {};
>>>>>>> 6639a7cbbdca0491b3b3a0f2c120b1cd2ae45156

  return (
    <div className="question-card">
<<<<<<< HEAD
      <ul>{QuizQuestions[currentQuestion].question}</ul>
      <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
=======
      <ul></ul>
      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>
>>>>>>> 6639a7cbbdca0491b3b3a0f2c120b1cd2ae45156
    </div>
  );
}
export default QuestionCard;
