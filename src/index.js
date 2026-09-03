import React from "react";
import { createRoot } from "react-dom/client";
import score from "./score";
import QuizQuestions from "./questions";

function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
