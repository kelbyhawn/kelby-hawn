// Components
import Hyperlink from "../components/Hyperlink";

export default function Top() {
  return (
    <section className="top">
      <p className="hi">Hi!</p>

      <h1>I&apos;m a frontend software engineer.</h1>

      <p>
        ✨{" "}
        <Hyperlink
          href="https://www.linkedin.com/in/kelby-hawn/"
          linkText="Open to work"
          className="light"
        />
      </p>
      <p className="past-work">
        Previously at{" "}
        <Hyperlink
          href="https://code.org"
          linkText="Code.org"
          className="light"
        />{" "}
        • Co-founder at{" "}
        <Hyperlink
          href="https://dolly.com"
          linkText="Dolly"
          className="light"
        />
      </p>
    </section>
  );
}
