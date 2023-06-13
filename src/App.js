import "./App.css";
import Message from "./components/Tut4_State_Method";
import Counter from "./components/Tut5_setState_Counter";
import Tut7_EventBind from "./components/Tut7_EventBind";
import Tut10_List_Rendering from "./components/Tut10_List_Rendering";
import Tut12_Form from "./components/Tut12_Form";
import Tut16_Parentcomp from "./components/Tut16_Parentcomp";
import Tut17_RefsDemo from "./components/Tut17_RefsDemo";
import Tut22_Hero from "./components/Tut22_Hero";
import Tut22_ErrorBoundry from "./components/Tut22_ErrorBoundry";
import Pcount from "./components/Pcount";
import Tut20_Comp_C from "./components/Tut20_Comp_C";
import { UserProvider } from "./components/Tut20_UserContext";
import Tut23_UseState from "./components/Tut23_UseState";
import Tut24_useEffect from "./components/Tut24_useEffect";
import Tut26_useReducer from "./components/Tut26_useReducer";

//  App component represents the view we see in browser.

function App() {
  return (
    <div className="containerx">
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Tut7_EventBind /> */}
      {/* <Tut10_List_Rendering /> */}
      {/* <Tut12_Form /> */}
      {/* <Tut16_Parentcomp /> */}
      {/* <Tut17_RefsDemo /> */}
      {/* <Tut22_ErrorBoundry>
        <Tut22_Hero heroname={"batman"} />
      </Tut22_ErrorBoundry>
      <Tut22_ErrorBoundry>
        <Tut22_Hero heroname={"superman"} />
      </Tut22_ErrorBoundry>
      <Tut22_ErrorBoundry>
        <Tut22_Hero heroname={"joker"} />
      </Tut22_ErrorBoundry> */}
      {/* <Pcount /> */}
      {/* <UserProvider value="shubham and sumit">
        <Tut20_Comp_C />
      </UserProvider> */}
      {/* <Tut23_UseState /> */}
      {/* <Tut24_useEffect /> */}
      <Tut26_useReducer />
    </div>
  );
}

export default App;
