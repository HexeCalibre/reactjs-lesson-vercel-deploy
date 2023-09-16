import React, { useState } from "react";

const ClickCountComponent = () => {
  //   let clickCount = 0;

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // clickCount = clickCount + 1;
    // alert("Click Count = " + clickCount);

    //not recommended approach
    // setClickCount(clickCount + 1);
    // setClickCount(clickCount + 1);

    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Click Counter App</h2>
      <p>
        <button onClick={handleClick}>Click</button>
      </p>
      <p>
        <label>
          Click Count: <b>{clickCount}</b>
        </label>
      </p>
    </div>
  );
};

export default ClickCountComponent;
