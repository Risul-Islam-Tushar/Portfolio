import About from "./Components/About";
import Contact from "./Components/Contact";

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

      <Contact></Contact>
    </div>
  );
}

export default App;
