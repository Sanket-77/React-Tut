import React, { Component } from "react";
import { UserConsumer } from "./Tut20_UserContext";

export class Tut20_Comp_F extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default Tut20_Comp_F;

// UserProvider in app.js

// function App() {
//   return (
//     <div className='containerx'>
//       <UserProvider value='Sanket'>
//         < Tut20_Comp_C />
//       </UserProvider>
//     </div>
//   );
// }
