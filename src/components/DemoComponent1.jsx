import { useAuthDemo } from "../contexts/AuthContextDemo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DemoComponent1 = () => {
  const [text, setText] = useState("");
  const { message, setMessage } = useAuthDemo();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setMessage(text);
    navigate("/Demo2");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText(value);
  };
  return (
    <>
      <h2>Demo 1 Page</h2>
      {message && <p>Message From Component 2: {message}</p>}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Go to Demo2</button>
    </>
  );
};

export default DemoComponent1;
