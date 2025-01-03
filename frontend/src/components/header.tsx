import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="App sticky top-0 backdrop-blur-lg z-10 flex justify-between items-center w-full font-custom">
      <header className="App-header absolute left-1/2 transform -translate-x-1/2">
        <div className="outline outline-1 rounded-full center m-5 py-5 px-8 flex justify-between text-sm w-96">
          <a href="/" className="hover:text-teal-200 transition-colors duration-300">Home</a>
          <a href="" className="hover:text-teal-200 transition-colors duration-300">About</a>
          <a href="" className="hover:text-teal-200 transition-colors duration-300">Projects</a>
          <a href="" className="hover:text-teal-200 transition-colors duration-300">Contact</a>
        </div>
      </header>
      <div className="flex ml-auto text-white mt-5 mb-5 px-14">
        <a href="https://github.com/Teolhyn">
          <FontAwesomeIcon icon={faSquareGithub} className="size-10" />
        </a>
        <a href='https://www.linkedin.com/in/teemuhynna/'>
          <FontAwesomeIcon icon={faLinkedin} className="size-10 mx-5" />
        </a>
        <a href='mailto:teemu.hynna@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} className="size-10" />
        </a>
      </div>
    </div>
  );
}



