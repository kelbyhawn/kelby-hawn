// Dependencies
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Components
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Top from "./sections/Top";
import Projects from "./sections/Projects";
import ATag from "./components/ATag";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
