import { useState } from "react";

export default function Experience() {
  const [isWork, setIsWork] = useState(true); // Toggle between 'work' and 'education'

  const toggleMode = (mode: "work" | "education"): void => {
    setIsWork(mode === "work");
  };

  return (
    <div className="min-h-screen font-manrope text-white">
      <div className="bg-black/30 outline outline-white rounded-2xl mx-10 md:mx-auto p-10 drop-shadow-md backdrop-blur-xs">
        <p className="text-4xl font-bold text-left">Experience</p>
        <div className="container my-4 flex justify-center items-center">
          <label className="flex justify-center items-center space-x-2 swap swap-rotate">
            <input type="checkbox" defaultChecked checked={isWork} onChange={() => toggleMode(isWork ? "education" : "work")} className="transition-all toggle checked:bg-white checked:text-black bg-white text-black" />
          </label>
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${isWork ? "opacity-100" : "opacity-0"
            }`}
        >
          {isWork && (
            <div><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-4">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">6/2024 - Present</time>
                  <div className="text-lg font-black">Founder & Developer | Laina</div>
                  Designed and developed a smart contracts based decentralized lending & borrowing platform on the Stellar blockchain.
                </div>
                <hr className="bg-white" />
              </li>
              <li>
                <hr className="bg-white" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">11/2023 - Present</time>
                  <div className="text-lg font-black">Data Management Expert & Research Coordinator | University of Turku</div>
                  Deployed a research data storage. Gave training on data management and FAIR principles. Coordinated the largest solar energy research project in Finland. Build models for solar energy production approximation using Python.
                </div>
                <hr className="bg-white" />
              </li>
              <li>
                <hr className="bg-white" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">1/2023 - 11/2023</time>
                  <div className="text-lg font-black">Project Manager | Medicortex</div>
                  Kickstarted a new project. Ran a research team of two persons in the combined field of biotechnology and electromagnetism. Wrote multiple funding applications to Business Finland and U.S. Department of Defence.
                </div>
                <hr className="bg-white" />
              </li>
              <li>
                <hr className="bg-white" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">10/2022-1/2023</time>
                  <div className="text-lg font-black">Production Engineer | Revvity</div>
                  Helped in the development of medical-grade mass-spectrometer as a specialist. Developed ion path models using SIMION and Lua.
                </div>
                <hr className="bg-white" />
              </li>
            </ul></div>
          )}
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${!isWork ? "opacity-100" : "opacity-0"
            }`}
        >
          {!isWork && (
            <div><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-4">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2023</time>
                  <div className="text-lg font-black">IPMA-D</div>
                  International Project Management Association certificate level D. Completed during my employment at Medicortex.
                </div>
                <hr className="bg-white" />
              </li>
              <li>
                <hr className="bg-white" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2022</time>
                  <div className="text-lg font-black">MSc Physics</div>
                  Major in industrial and materials physics. Minors in mathematics, computer science, and business. My thesis studied physical spiking neural networks and it gave promising results on potential synapse materials that were able to recognize hand written digits.
                </div>
                <hr className="bg-white" />
              </li>
              <li>
                <hr className="bg-white" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2020</time>
                  <div className="text-lg font-black">BSc Physics</div>
                  Wrote my thesis about phase-field simulations.
                </div>
                <hr className="bg-white" />
              </li>
            </ul></div>
          )}
        </div>
      </div>
    </div>
  );
}

