import React from "react";
import { createRoot } from "react-dom/client";
import score from "./Score";
import QuizQuestions from "./data/questions";
import QuestionCard from "./CardQuestions";
import WelcomeCard from "./WelcomeCard";
import "./style.css";
//
function App() {
  return (
    <>
      <WelcomeCard />
      <QuestionCard />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
