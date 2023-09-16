import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseCallbackDemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const calculate = useCallback(
    (num) => {
      console.log("calling calculate");
      for (let i = 0; i <= 1000000000; i++) {}
      return num * 2;
    },
    [number]
  );

  useEffect(() => {
    console.log("use effect called");
  }, [calculate]);

  return (
    <div>
      <h2>Use Callback Demo</h2>
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
    </div>
  );
};

export default UseCallbackDemoComponent;
