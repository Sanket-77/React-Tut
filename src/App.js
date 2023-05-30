import "./App.css";
import Message from "./components/Tut4_State_Method";
import Counter from "./components/Tut5_setState_Counter";
import Tut7_EventBind from "./components/Tut7_EventBind";
import Tut10_List_Rendering from "./components/Tut10_List_Rendering";
import Tut12_Form from "./components/Tut12_Form";

//  App component represents the view we see in browser.

function App() {
  return (
    <div className="containerx">
      <Message />
      <Counter />
      <Tut7_EventBind />
      <Tut10_List_Rendering />
      <Tut12_Form />
    </div>
  );
}

export default App;
