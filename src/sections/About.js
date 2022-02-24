// Components
import ATag from "../components/ATag"

// Assets
import me from "../assets/kelby-hawn.png"

export default function About() {
  return (
    <section id="about" className="about">
        <h3>About Me <span>↓</span></h3>
        <img src={me} alt="Kelby Hawn" />
        <p>I'm a front-end + UI developer with a background in design. After <ATag href="https://www.crunchbase.com/person/kelby-hawn" linkText="co-founding two successful startups" /> as a product/web designer, I've switched fully into code mode and spent 2021 on sabbatical learning JavaScript, React, and other front-end technologies.</p>

        <p>I love translating design into code and solving problems in a practical and mindful way while collaborating with others. I also enjoy helping people <ATag href="https://www.instagram.com/tidywithkelby/" linkText="tidy up" /> and am a member and volunteer at <ATag href="https://seattleinsight.org/" linkText="SIMS" />.</p>
    </section>
  )
}