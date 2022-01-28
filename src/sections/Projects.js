// Components
import ATag from "../components/ATag"

export default function Projects() {
  return (
    <section id="side-projects" className="side-projects">
      <h3><strong>Side Projects</strong> <span>↓</span></h3>

      <div>
        <ATag href="https://codepen.io/kelbyhawn" text="CodePen" />
        <p><small>Mini JS & React projects for practice and reference.</small></p>
      </div>

      <div>
        <ATag href="https://supersimpleloremipsum.com" text="Super Simple Lorem Ipsum" />
        <p><small>A no-frills Lorem Ipsum resource.</small></p>
      </div>

      <div>
        <ATag href="https://easyascii.com" text="easyASCII" />
        <p><small>A simple, easy-to-use list of ASCII codes.</small></p>
      </div>
      
      <div>
        <ATag href="https://kh-react-sandbox.netlify.app" text="React Sandbox" />
        <p><small>Learning React with a mix of components and dependencies.</small></p>
      </div>
    </section>
  )
}