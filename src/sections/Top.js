// Components
import ATag from "../components/ATag";

export default function Top() {
  return (
    <section className="top">
      <p className="hi">Hi!</p>

      <h1>I'm a frontend software engineer.</h1>

      <p>
        ✨{" "}
        <ATag
          href="https://www.linkedin.com/in/kelby-hawn/"
          linkText="Open to work"
          className="light"
        />
      </p>
      <p className="past-work">
        Previously at{" "}
        <ATag href="https://code.org" linkText="Code.org" className="light" /> •
        Co-founder at{" "}
        <ATag href="https://dolly.com" linkText="Dolly" className="light" />
      </p>
    </section>
  );
}
