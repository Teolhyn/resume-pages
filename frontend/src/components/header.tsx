import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="App sticky top-0 backdrop-blur-lg z-10 flex justify-between items-center w-full font-manrope tracking-tighter h-20">
      <header className="absolute left-1/2 transform -translate-x-1/2 min-h-16 mt-5 mb-5">
        <div className="outline outline-white rounded-full center m-5 py-5 px-12 flex justify-between text-sm w-80">
          <Link to="/" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">Home</Link>
          <Link to="/about" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">About</Link>
          <Link to="/projects" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">Projects</Link>
        </div>
      </header>
      <div className="flex ml-auto justify-between items-center w-64 text-white mt-5 mb-5 px-14">
        <a href="https://github.com/Teolhyn">
          <FontAwesomeIcon icon={faSquareGithub} href='https://github.com/Teolhyn' size='2x' className="transition-opacity duration-100 invisible hover:opacity-60 hidden md:visible" />
          <span className='sr-only'>Go to github.com/Teolhyn</span>
        </a>
        <a href='https://www.linkedin.com/in/teemuhynna/'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className="transition-opacity duration-100 invisible hover:opacity-60 hidden md:visible" />
          <span className='sr-only'>Go to linkedin.com/in/teemuhynna</span>
        </a>
        <a href='mailto:teemu@hynnaconsulting.fi'>
          <FontAwesomeIcon icon={faEnvelope} size='2x' className="transition-opacity duration-100 invisible hover:opacity-60 hidden md:visible" />
          <span className='sr-only'>Send email to teemu@hynnaconsulting.fi</span>
        </a>
      </div>
    </div>
  );
}



