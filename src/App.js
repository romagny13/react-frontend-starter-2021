import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(async () => {
    console.log(process.env.NODE_ENV);

    function testAsync() {
      return setTimeout(() => {
        console.log("transform-runtime ok");
      }, 2000);
    }
    await testAsync();
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
