import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Karl</span>
        👋
        <br />
        A Software Engineer from Ireland.
        <br />
        Click + drag to fly around & check out my work!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        I've collaborated with a range of companies,<br />picking up a diverse set of skills along the journey
        </p>

        <Link to='/services' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Throughout the years, I’ve guided several personal<br />& professional projects to success.<br />Interested in learning more?
        </p>

        <Link to='/works' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Got a project to tackle or need a skilled developer?<br/>Contact me today!
      </p>

      <a href="http://localhost:5173/portfolio#Contact" className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </a>
      {/* <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link> */}
    </div>
    );
  }

  return null;
};

export default HomeInfo