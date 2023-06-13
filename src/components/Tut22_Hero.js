import React from "react";

function Tut22_Hero({ heroname }) {
  if (heroname == "joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroname}</div>;
}
export default Tut22_Hero;
