// Components
import Hyperlink from "../components/Hyperlink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        ©{year} <small>Kelby Hawn</small> <span>•</span>{" "}
        <Hyperlink
          href="https://www.linkedin.com/in/kelby-hawn/"
          linkText="LinkedIn"
        />{" "}
        <span>•</span>{" "}
        <Hyperlink href="https://github.com/kelbyhawn" linkText="GitHub" />
      </p>
    </footer>
  );
}
