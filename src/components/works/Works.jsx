import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AnDAPT",
    img: "../andaptDescriber.png",
    desc: "AnDAPT specializes in providing power solutions for FPGAs & SoCs in the semi conductor industry. I led a comprehensive redevelopment of AnDAPT's website, modernising their previously older frontend & backend systems.",
    btn: <a href="https://www.andapt.com/" target="_blank">View Live Site</a>
  },
  {
    id: 2,
    title: "Flowte",
    img: "../flowteDescriber.png",
    desc: "Flowte provides solutions for software, e-commerce, POS, & CRM systems for sports stadiums. I collaborated with Flowte to redesign key website sections & managed database migration, upgrading their architecture to modern standards.",
    btn: <a href="https://www.flowte.com/" target="_blank">View Live Site</a>
  },
  {
    id: 3,
    title: "Tallon Antiques",
    img: "../tallonAntiquesDescriber.png",
    desc: "Tallon Antiques is an antique seller specialising in unique & interesting vintage rarities. I am currently developing a bespoke website & e-commerce platform to compliment their unique style.",
    btn: <a href="https://www.tallonantiques.com/" target="_blank">View Live Site</a>
  },
  {
    id: 4,
    title: "The Driving Coach",
    img: "../drivingCoachDescriber.png",
    desc: "The Driving Coach is an Irish driving instructor based in Dublin, Ireland. I developed a unique website to allow for customers to easily discover & contact the business.",
    btn: "No Longer Active"
  },
  {
    id: 5,
    title: "Pocket Botanist",
    img: "../pocketBotanistDescriber.png",
    desc: "Developed an Android app with a custom TensorFlow model for plant & disease identification with image recognition. Integrated Firebase for cataloguing & built a 3D-printed device to track soil moisture & signal watering needs via an LED.",
    btn: <a href="https://github.com/Tallon1/PocketBotanist" target="_blank">View GitHub</a>
  },
  {
    id: 6,
    title: "Chess Engine",
    img: "../chessEngineDescriber.png",
    desc: "This Chess Engine was built using Netbeans IDE for a college project, utilising immutable methodologies. The game allowed for player VS player gameplay, & player vs AI gameplay, which I built on the minimax algorithm.",
    btn: <a href="https://github.com/Tallon1/ChessEngine" target="_blank">View GitHub</a>
  },
  {
    id: 7,
    title: "Hands Off Application",
    img: "../handsOffDescriber.png",
    desc: "Developed a hands-free display control system using OpenCV-based motion tracking, aimed at reducing contact with public touchscreens during the pandemic.",
    btn: <a href="https://github.com/Tallon1/HandsOff" target="_blank">View GitHub</a>
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="work_section">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="Project Image" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              {item.btn}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;