// Dependencies
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Components
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Main from "./sections/Main";
import Hyperlink from "./components/Hyperlink";

export default function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
