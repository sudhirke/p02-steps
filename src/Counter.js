import { useState } from "react";

export default function Counter() {
  //state for this component
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(5);

  const date = new Date("May 24 2024");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  return (
    <>
      <div className="steps">
        <div>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(e.target.valueAsNumber)}
          ></input>
          <span>{step}</span>
          <button onClick={() => setStep(step + 1)}>+</button>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />{" "}
          <button onClick={() => setCount(count + step)}>+</button>
        </div>

        <p>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${count} days ago was`}{" "}
          {date.toDateString()}
        </p>
        {count >= 0 || step >= 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
