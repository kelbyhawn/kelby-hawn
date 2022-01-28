// Components
import ATag from "../components/ATag"

export default function Top() {
  return (
    <section className="top">
      <h1>Hi!</h1>

      <h2>I'm a design-minded gal who loves to <ATag href="https://codepen.io/kelbyhawn" text="code" className="light" />.</h2>
      
      <h3>✨ <ATag href="https://www.linkedin.com/in/kelby-hawn/" text="Currently looking" className="light" /> for an entry-mid level Front-end or UI Developer position</h3>
    </section> 
  )
}