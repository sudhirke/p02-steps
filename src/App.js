import { useState } from "react";
import Counter from "./Counter";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Counter />
    </div>
  );
}

function Steps() {
  //state causes component to re-render,  so use carefully.
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //event handler for next button click
  function handleNext() {
    //Move to next step
    //passing callback funcion is the safe way of updating state value
    setStep(step >= messages.length ? 1 : (s) => s + 1);
  }

  //event handler for previous button click
  function handlePrevious() {
    //Move to previous page
    //using callback function is the safe ways of updating state value
    setStep(step === 1 ? 3 : (s) => s - 1);
  }

  /*Created a close button to show hide the UI*/
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
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
    </>
  );
}

export default App;
