import "./App.css";
import { Home } from "./routes";

import { Keypad } from "./components";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Keypad keyPressed={(e) => console.log(e)} /> */}
    </div>
  );
}

export default App;
