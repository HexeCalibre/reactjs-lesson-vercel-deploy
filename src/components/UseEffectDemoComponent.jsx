import React, { useState, useEffect } from "react";

const UseEffectDemoComponent = () => {
  console.log("render");
  const [greeting, setGreeting] = useState("");

  //Mount
  // useEffect(() => {
  //   console.log("Mount");
  // }, []);

  //Change
  // useEffect(() => {
  //   console.log("greeting useEffect called");
  // }, [greeting]);

  //UnMount
  // useEffect(() => {
  //   return () => {
  //     console.log("UnMount");
  //   };
  // }, [greeting]);

  return (
    <div>
      <h2>Use Effect Demo Component</h2>
      <p>
        <button onClick={(e) => setGreeting("Hi")}>Say Hi</button>
      </p>

      <p>
        <button onClick={(e) => setGreeting("Hello")}>Say Hello</button>
      </p>
      <p>{greeting}</p>
    </div>
  );
};

export default UseEffectDemoComponent;
