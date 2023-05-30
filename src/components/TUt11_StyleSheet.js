import React from "react";
import "./myStyles.css";

const heading = {
  fontSize: "75px",
  color: "blue",
};

function TUt11_StyleSheet(props) {
  let className = props.primary ? "primary" : " ";

  return (
    <div className="container">
      {/* create .css file  and import in component */}
      <h1 className={`${className} font-xl `}>StyleSheets</h1>

      {/* // use style method directoly in heading */}
      <h2 style={heading}>Inline</h2>
    </div>
  );
}
export default TUt11_StyleSheet;
