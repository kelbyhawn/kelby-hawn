// Components
import SideProject from "../components/SideProject"

export default function Projects() {
  return (
    <section id="side-projects" className="side-projects">
      <h3><strong>Side Projects</strong> <span>↓</span></h3>

      <SideProject
        href="https://codepen.io/kelbyhawn"
        linkText="CodePen"
        description="Mini JS & React projects for practice and reference." />
      
      <SideProject
        href="https://supersimpleloremipsum.com"
        linkText="Super Simple Lorem Ipsum"
        description="A no-frills Lorem Ipsum resource." />
      
      <SideProject
        href="https://easyascii.com"
        linkText="easyASCII"
        description="A simple, easy-to-use list of ASCII codes." />
      
      <SideProject
        href="https://kh-react-sandbox.netlify.app"
        linkText="React Sandbox"
        description="Learning React with a mix of components and dependencies." />
      
    </section>
  )
}