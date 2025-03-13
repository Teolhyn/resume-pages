const About = () => {
  return (
    <div className="min-h-[calc(100vh-272px)]">
      <div className="font-manrope text-white max-w-4xl min-w-2xs mx-4 sm:mx-4 md:mx-auto p-10 md:flex justify-center drop-shadow-lg outline outline-white my-8 rounded-2xl backdrop-blur-xs bg-black/30">
        <img src="./img2.jpeg" alt="Teemu Hynnä" loading="lazy" className="size-64 mr-10 rounded-lg mt-1" />
        <div>
          <h1 className="text-4xl font-bold mb-1 mt-5 mx-10 md:mx-0 md:mt-0">About me</h1>
          <p className="text-lg tracking-tight mx-10 md:mx-0">
            <p>I am a full-stack software developer with a background in applied and computational physics, now fully transitioning into software development. My expertise lies in problem-solving, efficient coding, and architecting scalable applications, backed by strong knowledge of version control, CI/CD workflows, and modern web technologies.</p>

            <p>Currently, I work at the University of Turku, where I apply my analytical mindset to tackle complex challenges. Beyond my professional role, I am the creator of <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://laina-de.fi">Laina</a>, a decentralized finance project that won a $10,000 award in the <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://communityfund.stellar.org/kickstart"> Stellar Kickstart</a> competition. Through Laina, I have gained hands-on experience in blockchain development, smart contracts, and financial technology, reinforcing my passion for cutting-edge innovation.</p>

            <p>I have a solid foundation in Rust, TypeScript, Python, and React, among other technologies, and I am constantly exploring new tools and frameworks to expand my skill set. My approach to software development is pragmatic, detail-oriented, and focused on delivering efficient, user-friendly solutions. I thrive in collaborative environments and enjoy working on projects that push technical boundaries while solving real-world problems.</p>

            <p>I am eager to contribute my skills to impactful projects, continue growing as a developer, and build software that makes a difference.</p>
          </p>
        </div>
      </div>
    </div>
  )
};

export default About;
