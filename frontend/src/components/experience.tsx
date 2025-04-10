import { useState } from "react";

export default function Experience() {
  const [isWork, setIsWork] = useState(true); // Toggle between 'work' and 'education'

  const toggleMode = (mode: "work" | "education"): void => {
    setIsWork(mode === "work");
  };

  return (
    <div className="font-manrope text-black max-w-3xl">
      <div className="bg-white outline-3 outline-black p-10 shadow-xl min-h-10/12">
        <p className="text-4xl font-bold text-left">&lt;Experience /&gt;</p>
        <div className="container my-4 flex justify-center items-center">
          <label className="flex justify-center items-center space-x-2 swap swap-rotate">
            <input type="checkbox" defaultChecked checked={isWork} onChange={() => toggleMode(isWork ? "education" : "work")} className="transition-all toggle checked:bg-black checked:text-white bg-black text-white" />
          </label>
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${isWork ? "opacity-100" : "opacity-0"
            }`}
        >
          {isWork && (
            <div className="tracking-tight leading-5"><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-4">
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
                  <div className="text-lg/6 font-black">Founder & Developer | Laina</div>
                </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
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
                </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
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
                </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
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
                </div>
                <hr className="bg-black" />
              </li>
            </ul></div>
          )}
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${!isWork ? "opacity-100" : "opacity-0"
            }`}
        >
          {!isWork && (
            <div className="tracking-tight leading-5"><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-4">
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
                  <div className="text-lg font-black">International Project Management Association Certificate D</div>
                </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
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
                  <div className="text-lg font-black">MSc in Industrial Physics</div>
                </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
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
                  <div className="text-lg font-black">BSc in applied Physics</div>
                </div>
                <hr className="bg-black" />
              </li>
            </ul></div>
          )}
        </div>
      </div>
    </div>
  );
}

