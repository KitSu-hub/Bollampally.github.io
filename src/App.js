import "./App.css";
import About from "./components/about/about";
import Earnings from "./components/earnings/earnings";
import Homepage from "./components/homepage/homepage";
import Navbar from "./components/navbar/navbar";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";

function App() {
  return (
        <div className="App">
          <Navbar />
          <Homepage/>
          <About />
          <Project />
          <Skills />
          <Earnings />
        </div>
  );
}

export default App;