import { useState } from "react";
import QuizQuestions from "./data/questions";
function QuestionCard() {
  //State section
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [chosenAnswer, setChosenAnswer] = useState(null);

  // For determining what question the user is on
  const handleNextQuestion = () => {
 
 chosenAnswer === null ? 
 alert("Please Select an answer") : 
 setCurrentQuestion(currentQuestion => currentQuestion + 1); 
  };

  const handleChosenAnswer = (currentAnswer) =>{
   if(currentAnswer === QuizQuestions[currentQuestion].correctAnswer) {
    setChosenAnswer(currentAnswer)
    console.log("Correct")
   }   
   else{
    console.log("Wrong")
   }

  }

  // creating the answer buttons/options
    const answerButtons = () => {
      return(
      QuizQuestions[currentQuestion].answers.map(currentAnswer => 
        
          <li key={currentAnswer}>
            <button onClick={() => handleChosenAnswer(currentAnswer)}>{currentAnswer}</button>
          </li>
        
      //return something
      )
      )
}

  return (
    <div className="question-card">
      <ul>{QuizQuestions[currentQuestion].question}</ul>

      <ul>
 {answerButtons()}
</ul>

      <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}
export default QuestionCard;
