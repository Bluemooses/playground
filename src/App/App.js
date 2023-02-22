import "./App.css";
import Nav from "../Components/Nav/Nav.js";
import Button from "../Components/Button/Button";
import { FunctionalComponentButton } from "../Components/Button/FunctionalComponentButton";
import Day2 from '../Components/Day2/Day2.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Nav></Nav>
      <Button text="Touch me baby"/>
      <FunctionalComponentButton className="some class name" text="Some super duper text"/>
      <Day2></Day2>
    </div>
  );
}

export default App;
