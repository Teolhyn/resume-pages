import { useState } from "react";

function timelineRightContainer(title: String, content: String) {
  if (!title || !content) {
    throw new Error("Both 'title' and 'content' are required!");
  }

  return (
    <div className="pt-3 pl-12 relative w-1/2 left-1/2 bg-inherit after:content-[''] after:absolute after:w-6 after:h-6 after:bg-white after:border-black after:top-4 after:rounded-full after:z-1 after:left-[-8px]">
      <div className="pt-5 pr-8 pl-2 pb-2 outline outline-white outline-1 text-white relative rounded-md">
        <h2 className="text-lg mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

function timelineLeftContainer(title: String, content: String) {
  if (!title || !content) {
    throw new Error("Both 'title' and 'content' are required!");
  }

  return (
    <div className="pt-3 pr-10 relative w-1/2 left-0 bg-inherit after:content-[''] after:absolute after:w-6 after:h-6 after:right-[-16px] after:bg-white after:border-black after:top-4 after:rounded-full after:z-1">
      <div className="pt-5 pr-8 pl-2 pb-2 outline outline-1 outline-white relative rounded-md text-white">
        <h2 className="text-lg mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

function workTimeline() {
  return (
    <div className="relative max-w-[896px] min-w-[896px] m-0 after:absolute after:w-2 after:content-[''] after:bg-white after:top-0 after:bottom-0 after:left-1/2 after:ml-[-3] after:rounded-md">
      {timelineRightContainer("6/2024 - Present | Founder & Developer | Laina", "Designed and developed a smart contracts based decentralized lending & borrowing platform on the Stellar blockchain.")}
      {timelineLeftContainer("11/2023 - Present | Data Management Expert & Research Coordinator | University of Turku", "Deployed a research data storage. Gave training on data management and FAIR principles. Coordinated the largest solar energy research project in Finland. Build models for solar energy production approximation using Python.")}
      {timelineRightContainer("1/2023 - 11/2023 | Project Manager | Medicortex", "Kickstarted a new project. Ran a research team of two persons in the combined field of biotechnology and electromagnetism. Wrote multiple funding applications to Business Finland and U.S. Department of Defence.")}
      {timelineLeftContainer("10/2022-1/2023 | Production Engineer | Revvity", "Helped in the development of medical-grade mass-spectrometer as a specialist. Developed ion path models using SIMION and Lua.")}
    </div>
  )
}

function educationTimeline() {
  return (
    <div className="relative max-w-[896px] min-w-[896px] m-0 after:absolute after:w-2 after:content-[''] after:bg-white after:top-0 after:bottom-0 after:left-1/2 after:ml-[-3] after:rounded-md">
      {timelineRightContainer("2023 | IPMA-D", "International Project Management Association certificate level D. Completed during my employment at Medicortex.")}
      {timelineLeftContainer("2022 | MSc Physics", "Major in industrial and materials physics. Minors in mathematics, computer science, and business. My thesis studied physical spiking neural networks and it gave promising results on potential synapse materials that were able to recognize hand written digits.")}
      {timelineRightContainer("2020 | BSc Physics", "Wrote my thesis about phase-field simulations.")}
    </div>
  )
}

export default function Experience() {
  const [isWork, setIsWork] = useState(true);

  type Mode = 'work' | 'education';

  const toggleMode = (mode: Mode): void => {
    setIsWork(mode === 'work');
  };

  return (
    <div className="pt-12 pb-44 tracking-tighter">
      <p className='text-4xl mb-10 font-bold text-white max-w-4xl mx-auto font-custom'>Experience & Education</p>
      <div className="flex flex-col items-center justify-center h-screen font-custom">
        <div className="flex space-x-4 mb-4 outline outline-1 outline-white p-2 rounded-full">
          <button
            onClick={() => toggleMode('work')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${isWork ? 'bg-white text-black' : 'text-white'
              }`}
          >
            Work
          </button>
          <button
            onClick={() => toggleMode('education')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${!isWork ? 'bg-white text-black' : 'text-white'
              }`}
          >
            Education
          </button>
        </div>
        <div
          className={`h-screen rounded-lg`}
        >
          {isWork ? (workTimeline()) : (educationTimeline())}
        </div>
      </div>
    </div>
  );
}
