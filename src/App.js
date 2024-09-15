import NavBar from "./Components/navbar";
import Intro from "./Components/intro";
import About from "./Components/about";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/contacts";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
