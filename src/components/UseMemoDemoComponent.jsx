import React, { useMemo, useState } from "react";

const UseMemoDemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // const value = calculate(number);
  const value = useMemo(() => {
    return calculate(number);
  }, [number]);

  function calculate(num) {
    console.log("calling calculate");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  return (
    <div>
      <h2>Use Memo Demo</h2>
      <p>
        <label>First Number </label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
      </p>
      <p>
        <label>Second Number </label>
        <input
          type="number"
          name="number2"
          value={number2}
          onChange={(e) => {
            setNumber2(parseInt(e.target.value));
          }}
        />
      </p>
      <p>{value}</p>
    </div>
  );
};

export default UseMemoDemoComponent;
