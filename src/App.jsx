import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-[#171d50] h-auto w-full overflow-hidden ">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
