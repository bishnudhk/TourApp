import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const messages = ["learn react", "Apply for jobs ", "Invest your new income "];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "dhakal" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //this is good
    // setStep(step - 1) //it's bad
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    // setTest({ name: "chelsea" });
  }

  return (
    <div>
      {/* <button className="close"> */}
      <IoClose className="close" onClick={() => setIsOpen((is) => !is)} />
      {/* </button> */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
