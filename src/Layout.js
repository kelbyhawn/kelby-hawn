// Dependencies
import { HashLink } from "react-router-hash-link";
import smoothscroll from 'smoothscroll-polyfill';

// Section Components
import Top from "./components/Top";
import About from "./components/About";
import Projects from "./components/Projects";

// Assets
import logo from "./assets/kh-logo.svg";


export default function Layout() {
  const year = new Date().getFullYear();

  // Allows for smooth scrolling in Safari
  smoothscroll.polyfill();

  return (
    <>
      <header>
        <HashLink smooth to="#top"><img src={logo} alt="Kelby Hawn logo" /></HashLink>

        <div className="wrapper">
          <nav>     
            <ul>
              <li>
                <HashLink smooth to="#about" className="light">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="#side-projects" className="light">Side Projects</HashLink>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>

      <main>
        <Top />
        <About />
        <Projects />
      </main>

      <footer>            
        <p>©{year} <small>Kelby Hawn</small></p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kelby-hawn/" target="_blank" rel="noreferrer"><strong>LinkedIn</strong></a>
          </li>
          <li>
            <a href="https://github.com/kelbyhawn" target="_blank" rel="noreferrer"><strong>GitHub</strong></a>
          </li>
          <li>
            <a href="https://codepen.io/kelbyhawn" target="_blank" rel="noreferrer"><strong>CodePen</strong></a>
          </li>
        </ul>
      </footer>
    </>
  );
}