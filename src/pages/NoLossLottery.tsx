import ProjectPage from "../components/ProjectPage";

const NoLossLottery = () => {
  const repo_url = "https://github.com/Teolhyn/no-loss-lottery";
  const title = "No Loss Lottery";

  return (
    <ProjectPage title={title} repo_url={repo_url} header_img='/nolosslottery.webp'>
      <h2 className='text-lg mb-2 mt-6'>Introduction</h2>
      <p className="font-light mb-2">This project was built for DoraHacks mini hackathon and it achieved 2nd place out of 300 builders. The assigment was to build any webapp that uses stellar smartcontracts using Stellar Scaffold framework and Stellar Wallets Kit to handle wallet connections.</p>
      <h2 className='text-lg mb-2 mt-6'>Nerd Section 🤓</h2>
      <p className='font-light mb-2'>This is a single smart contract application with React frontend. The smart contracts have a very cleverly done state-based restrictions with the addition of state changes being time-restricted. This design allows the contract to be totally open with the whole endpoint being callable by anyone. For example, anyone can call the the function that transfers the whole contracts balance to Blend to generate yield. This was built with especially safety and trustlessness in mind.</p>
      <p className='font-light mb-2'>As the hackathon had quite strict amount of time and I could only develop this during my daughters naps I really wanted to focus on making the smart contracts perfect and production-ready. Therefore, I pretty much vibe-coded the frontend. There were some modals and slight details Claude couldn't handle so those I did fix myself.</p>
      <p className='font-light mb-2'></p>
    </ProjectPage>
  );
};

export default NoLossLottery;
