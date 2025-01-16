import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="App sticky top-0 backdrop-blur-lg z-10 flex justify-between items-center w-full font-custom tracking-tighter">
      <header className="App-header absolute left-1/2 transform -translate-x-1/2 h-16">
        <div className="outline outline-1 rounded-full center m-5 py-5 px-12 flex justify-between text-sm w-96">
          <Link to="/" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">Home</Link>
          <Link to="/about" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">About</Link>
          <Link to="/projects" className="bg-clip-text text-white text-center select-auto transition-opacity duration-100 hover:opacity-60">Projects</Link>
        </div>
      </header>
      <div className="flex ml-auto text-white mt-5 mb-5 px-14">
        <a href="https://github.com/Teolhyn">
          <FontAwesomeIcon icon={faSquareGithub} className="size-10 transition-opacity duration-100 hover:opacity-60" />
        </a>
        <a href='https://www.linkedin.com/in/teemuhynna/'>
          <FontAwesomeIcon icon={faLinkedin} className="size-10 mx-5 transition-opacity duration-100 hover:opacity-60" />
        </a>
        <a href='mailto:teemu.hynna@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} className="size-10 transition-opacity duration-100 hover:opacity-60" />
        </a>
      </div>
    </div>
  );
}



