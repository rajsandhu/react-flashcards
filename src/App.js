import React from "react";
import "./App.css";
import Flashcard from "./flashcard.js";

function App() {
  return (
    <div className="App">
      <Flashcard
        question="Sample Question Term"
        answer="Sample Answer"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/1024px-Clouds_over_the_Atlantic_Ocean.jpg"
      />
    </div>
  );
}

export default App;
