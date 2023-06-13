// useEffect => the effect hook let you perform side effects in functional component
// it is close replacement for componentDidMount(), componentDidUpdate(), componentWillUpdate()
// it is used for causing side effect in functional component.
// useEffect is a React Hook that lets you synchronize a component with an external system.
// It runs after the first render and after every update of component.



import React, { useEffect, useState } from "react";

function Tut24_useEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} Times`;
  });









  
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Cliked {count} times</button>
    </>
  );
}
export default Tut24_useEffect;
