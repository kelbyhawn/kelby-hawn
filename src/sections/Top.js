// Components
import ATag from "../components/ATag"

export default function Top() {
  return (
    <section className="top">
      <h1>Hi!</h1>

      <h2>I'm a design-minded gal who <ATag href="https://codepen.io/kelbyhawn" linkText="loves to code" className="light" />.</h2>
      
      <h3>✨ <ATag href="https://www.linkedin.com/in/kelby-hawn/" linkText="Currently works at Code.org" className="light" /></h3>
    </section> 
  )
}