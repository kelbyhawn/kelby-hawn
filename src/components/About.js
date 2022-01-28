// Assets
import me from "../assets/me.png"

export default function About() {
  return (
    <section id="about" className="about">
        <h3><strong>About Me</strong> <span>↓</span></h3>
        <img src={me} alt="Kelby Hawn" />
        <p>I'm a front-end + UI developer with a background in design. After <a href="https://www.crunchbase.com/person/kelby-hawn" target="_blank" rel="noreferrer">co-founding two successful startups</a> as a product/web designer, I've switched fully into code mode and spent 2021 on sabbatical learning JavaScript, React, and other front-end technologies.</p>

        <p>I love translating design into code and solving problems in a practical and mindful way while collaborating with others. I also enjoy helping people <a href="https://www.instagram.com/tidywithkelby/" target="_blank" rel="noreferrer">tidy up</a> and am a member and volunteer at <a href="https://seattleinsight.org/" target="_blank" rel="noreferrer">SIMS</a>.</p>
    </section>
  )
}