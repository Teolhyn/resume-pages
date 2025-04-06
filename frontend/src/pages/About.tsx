const About = () => {
  return (
    <div className="min-h-[calc(100vh-272px)]">
      <div className="font-manrope text-white max-w-4xl min-w-2xs mx-4 sm:mx-4 md:mx-auto p-10 md:flex justify-center drop-shadow-lg outline outline-white my-8 rounded-2xl backdrop-blur-xs bg-black/30">
        <img srcSet="/Teemu-102_cropped-400w.avif 400w, /Teemu-102_cropped-600w.avif 600w, /Teemu-102_cropped-800w.avif 800w, /Teemu-102_cropped-1000w.avif 1000w, /Teemu-102_cropped-1200w.avif 1200w, /Teemu-102_cropped-1600w.avif 1600w, /Teemu-102_cropped-2000w.avif 2000w"
          sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
          src="/Teemu-102_cropped.jpg" alt='Teemu Hynnä' width="3550" height="3550" className="size-64 mr-10 rounded-lg mt-1 aspect-square" />
        <div>
          <h1 className="text-4xl font-bold mb-1 mt-5 md:mt-0">About me</h1>
          <p className="text-lg tracking-tight">
            <p className="mb-2">I am a full-stack software developer with a background in applied and computational physics, now fully transitioning into software development. My expertise lies in problem-solving, efficient coding, and architecting scalable applications, backed by strong knowledge of version control, CI/CD workflows, and modern web technologies.</p>

            <p className="mb-2">Currently, I work at the University of Turku, where I work as a Data manager and research coordinator. Beyond my professional role, I am the founder and developer of <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://laina-de.fi">Laina</a>, a decentralized finance project that has won close to <b>$150,000</b> in awards and funding from <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://communityfund.stellar.org/kickstart"> Stellar Kickstart</a>, <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://communityfund.stellar.org/dashboard/submissions/rec82ws2Gf1GxiiRZ"> Stellar Community Fund</a>, and <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://x.com/in_reflector/status/1877517259549372894?t=7zJFdmYcWv3zpT9KNcR6Mg&s=19"> Reflector Smart Contract competition </a>. Through Laina, I have gained hands-on experience in blockchain development, project management, DevOps, smart contracts, and financial technology, reinforcing my passion for cutting-edge innovation.</p>


            <p className="mb-2">I have a solid foundation in Rust, TypeScript, Python, and React, among other technologies, and I am constantly exploring new tools and frameworks to expand my skill set. My approach to software development is pragmatic, detail-oriented, and focused on delivering efficient, user-friendly solutions. I thrive in collaborative environments and enjoy working on projects that push technical boundaries while solving real-world problems.</p>

            <p>I truly want to contribute my skills to impactful projects, continue growing as a developer, and build software that makes a difference. I offer my expertise both as a <b>full-time employee </b>or as a freelancer through my company <b>Hynnä Consulting Oy</b>.</p>

          </p>
        </div>
      </div>
    </div >
  )
};

export default About;
