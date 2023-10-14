// Components
import ATag from "../components/ATag"

export default function Top() {
  return (
    <section className="top">
      <h1>Hi!</h1>

      <h2>I'm a front-end developer with an eye for design.</h2>

      <h3>✨ Currently works at <ATag href="https://code.org" linkText="Code.org" className="light" /></h3>
    </section>
  )
}
