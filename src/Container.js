// Dependencies
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Components
import Header from "./sections/Header";
import Top from "./sections/Top";
import Projects from "./sections/Projects";
import ATag from "./components/ATag";

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />

      <main>
        <Top />
        <Projects />
      </main>

      <footer>
        <p>
          ©{year} <small>Kelby Hawn</small> <span>•</span>{" "}
          <ATag
            href="https://www.linkedin.com/in/kelby-hawn/"
            linkText="LinkedIn"
          />{" "}
          <span>•</span>{" "}
          <ATag href="https://github.com/kelbyhawn" linkText="GitHub" />
        </p>
      </footer>
    </>
  );
}
