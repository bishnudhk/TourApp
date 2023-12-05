import React, { useState } from "react";

export default function Apps() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("july 21 2029 ");
  date.setDate(date.getDate() + 1);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Count: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <span>
        {count === 0
          ? "today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <p>{date.toDateString()}</p>
    </div>
  );
}
