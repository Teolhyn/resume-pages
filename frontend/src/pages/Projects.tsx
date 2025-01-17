const Projects = () => {
  return (
    <div>
      <h1 className="font-custom text-4xl font-bold tracking-tighter text-white max-w-4xl mx-auto py-10 flex">Project portfolio</h1>
      <div className="font-custom tracking-tighter text-white flex flex-col justify-between items-center">
        <div className="flex justify-between w-[896px] h-96 mb-5">
          <a href="https://laina-de.fi" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#313640] outline outline-white outline-1 h-96 rounded-lg w-[400px] transition-all duration-300 hover:scale-105">
              <img src="./laina-de.fi_.png" alt="laina defi website preview" className="size-48 rounded-t-lg w-[400px]" />
              <div className="p-2">
                <h1 className="font-bold text-2xl">Laina</h1>
                <p>
                  Laina is a decentralized lending and borrowing platform offering low fees and trustless transactions.
                  Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts.
                  The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls.
                </p>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="bg-[#313640] outline outline-white outline-1 h-96 rounded-lg w-[400px] transition-all duration-300 hover:scale-105">
              <img src="./portfolio.png" alt="Portfolio website preview" className="size-48 rounded-t-lg w-[400px]" />
              <div className="p-2">
                <h1 className="font-bold text-2xl">Resume site</h1>
                <p>Well. You are already here. This site was built using React and Django.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Projects;
