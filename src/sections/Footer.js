// Components
import ATag from "../components/ATag";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
  );
}
