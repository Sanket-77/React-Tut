import React from "react";

//  export default React.Memo()
// Avoid re-rendering when there is no change in props and state.
// PureComponent for class component || React.Memo for Functional component

function Tut16_Memo({ name }) {
  console.log("rendering memo compo");
  return <div>{name}</div>;
}

export default React.memo(Tut16_Memo);
