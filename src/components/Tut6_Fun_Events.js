import React from "react";

function Tut6_Events() {
  function clickHandeler() {
    console.log("Button Cliked");
  }

  return (
    <div>
      <button onClick={clickHandeler}>click</button> // Event handeler is
      function not a function call.
    </div>
  );
}
export default Tut6_Events;
