import "../portfolio.scss"
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Services from "../components/services/Services";
import Works from "../components/works/Works";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";

const Portfolio = () => {
  return (<div>
    <Cursor />
    <section id="Homepage" >
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services />
    </section>
    <section id="My Work">
      <Parallax type="my_work"/>
    </section>
    <Works />
    <section id="Contact">
      <Contact />
    </section>
  </div>
  )
}

export default Portfolio