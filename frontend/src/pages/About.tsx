const About = () => {
  return (
    <div className="font-custom text-white h-screen max-w-4xl mx-auto py-10 flex">
      <img src="img2.jpeg" alt="Teemu Hynnä" className="size-64 mx-5" />
      <div>
        <h1 className="text-4xl font-bold mb-5">About me</h1>
        <p className="text-lg tracking-tighter">
          I am a full stack software developer transitioning from a background in applied and computational physics
          to pursue a career in full-time software development. I have solid programming and problem-solving skills,
          which along with experience in version control and CI/CD workflows. In addition to my current position at University
          of Turku, I am building <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://laina-de.fi">Laina</a>, a personal project that earned a $10,000 award in the
          <a className="font-bold bg-gradient-to-r from-teal-300 via-blue-300 to-pink-300 bg-clip-text text-transparent text-center select-auto transition-all duration-1000 hover:bg-gradient-to-r hover:from-pink-300 hover:via-blue-300 hover:to-teal-300" href="https://communityfund.stellar.org/kickstart"> Stellar Kickstart</a> competition. I am eager to continue learning, gain hands-on experience, and contribute to meaningful
          software projects.
        </p>
      </div>
    </div>
  )
};

export default About;
