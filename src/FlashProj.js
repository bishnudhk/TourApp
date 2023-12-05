import React, { useState } from "react";

export default function FlashProj() {
  return (
    <div>
      <FlashCard />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "what language is react based on ",
    answer: "javascript",
  },
  {
    id: 2,
    question: "what your fav language ",
    answer: "java",
  },
  {
    id: 3,
    question: "what is the main reason to learn js ",
    answer: "Web development",
  },
  {
    id: 4,
    question: "what language is react based on ",
    answer: "javascript",
  },
  {
    id: 5,
    question: "what language is react based on ",
    answer: "javascript",
  },
];

function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} onClick={() => handleClick(question.id)}>
          {" "}
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
