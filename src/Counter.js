import { useState } from "react";

export default function Counter() {
  //state for this component
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(5);

  const date = new Date("May 24 2024");
  date.setDate(date.getDate() + count);

  //    setStep(step >= messages.length ? 1 : (s) => s + 1);

  return (
    <>
      <div className="steps">
        <div>
          <button onClick={() => setStep((s) => s - 1)}>-</button> Step:{step}{" "}
          <button onClick={() => setStep(step + 1)}>+</button>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button> Count:
          {count} <button onClick={() => setCount(count + step)}>+</button>
        </div>

        <p>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${count} days ago was`}{" "}
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}
