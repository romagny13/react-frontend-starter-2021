import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Sample</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
