// Components
import ATag from "../components/ATag"

// Assets
import me from "../assets/kelby-hawn.png"

export default function About() {
  return (
    <section id="about" className="about">
        <h3>About Me <span>↓</span></h3>
        <img src={me} alt="Kelby Hawn" />
        <p>I'm a front-end developer + designer with a background in <ATag href="https://www.crunchbase.com/person/kelby-hawn" linkText="startups" />. I love translating design into code and solving problems in a practical and mindful way while collaborating with others. I also enjoy <ATag href="https://www.instagram.com/tidywithkelby/" linkText="helping people tidy up" /> and am a <ATag href="https://seattleinsight.org/" linkText="member and volunteer at SIMS" />.</p>
    </section>
  )
}