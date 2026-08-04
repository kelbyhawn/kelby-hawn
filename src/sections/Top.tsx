// Components
import Link from "next/link";

export default function Top() {
  return (
    <section className="top">
      <p className="hi">Hi!</p>

      <h1>I&apos;m a frontend software engineer.</h1>

      <p>
        ✨{" "}
        <Link
          href="https://www.linkedin.com/in/kelby-hawn/"
          className="light"
          target="_blank"
        >
          Open to work
        </Link>
      </p>
      <p className="past-work">
        Previously at{" "}
        <Link href="https://code.org" className="light" target="_blank">
          CodeAI
        </Link>{" "}
        <span style={{ fontStyle: "italic" }}>(formerly Code.org)</span> &
        Co-founder at{" "}
        <Link href="https://dolly.com" className="light" target="_blank">
          Dolly
        </Link>{" "}
        <span style={{ fontStyle: "italic" }}>(now TaskRabbit Delivery)</span>
      </p>
    </section>
  );
}
