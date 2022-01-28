// Dependencies
import { HashLink } from "react-router-hash-link";
import smoothscroll from 'smoothscroll-polyfill';

// Components
import Top from "./sections/Top";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ATag from "./components/ATag";

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
            <ATag href="https://www.linkedin.com/in/kelby-hawn/" linkText="LinkedIn" />
          </li>
          <li>
            <ATag href="https://github.com/kelbyhawn" linkText="GitHub" />
          </li>
          <li>
            <ATag href="https://codepen.io/kelbyhawn" linkText="CodePen" />
          </li>
        </ul>
      </footer>
    </>
  );
}