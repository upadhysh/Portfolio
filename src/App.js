import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <main className="text-gray-400 bg-gray-900 body-font">
      {<Navbar />}
      {<About />}
      {<Projects />}
      {<Skills />}
      {<Testimonials />}
      {<Contact />}
    </main>
    </div>
  );
}

export default App;
