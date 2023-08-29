import About from "./Components/About";

import Experiances from "./Components/Experiances";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Home></Home>

      <About></About>

      <Projects></Projects>

      <Experiances></Experiances>
    </div>
  );
}

export default App;
