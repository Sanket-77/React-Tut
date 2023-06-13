import React from "react";
//  JSX expresion must have one parent element.
//  WE can replace the enclosing div tag with React.fragment and 
// that will prevent the extra node from being added to the DOM.

function Tut15_fragmentDemo() {
  return (
    <React.Fragment>
      <div> Fragment Demo</div>
      <p>This describ the fragment demo component</p>
    </React.Fragment>
  );
}

export default Tut15_fragmentDemo;
