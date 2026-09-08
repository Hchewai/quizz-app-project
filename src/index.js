import React from "react";
import { createRoot } from "react-dom/client";
import score from "./score";
import QuizQuestions from "./questions";
import QuestionCard from "./CardQuestions";
import WelcomeCard from "./welcomeCard";
import "./style.css";

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
