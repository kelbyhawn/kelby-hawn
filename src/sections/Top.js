// Components
import ATag from "../components/ATag"

export default function Top() {
  return (
    <section className="top">
      <p className="hi">Hi!</p>

      <h1>I'm a front-end developer with an eye for design.</h1>

      <p>✨ Currently works at <ATag href="https://code.org" linkText="Code.org" className="light" /></p>
    </section>
  )
}
