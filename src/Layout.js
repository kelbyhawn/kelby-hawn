// Dependencies
import {Link} from "react-router-dom"
import { HashLink } from "react-router-hash-link";

// Components
import Top from "./sections/Top";
import Projects from "./sections/Projects";
import ATag from "./components/ATag";

// Assets
import logo from "./assets/kh-logo.svg";

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Kelby Hawn logo" /></Link>

        <nav>
          <ul>
            <li>
              <HashLink smooth to="#side-projects" className="light">Projects</HashLink>
            </li>
            <li>
              <ATag href="https://github.com/kelbyhawn" className="light" linkText="GitHub" />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Top />
        <Projects />
      </main>

      <footer>
        <p>©{year} <small>Kelby Hawn</small> <span>•</span> <ATag href="https://github.com/kelbyhawn" linkText="GitHub" /></p>
      </footer>
    </>
  );
}
