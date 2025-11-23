import ProjectPage from "../components/ProjectPage";

const Laina = () => {
  const repo_url = "https://github.com/laina-defi/laina";
  const website_url = "https://laina-de.fi/";
  const title = "Laina DeFi";

  return (
    <ProjectPage title={title} repo_url={repo_url} website_url={website_url} header_img='/laina.png'>
      <h2 className='text-lg mb-2 mt-6'>Introduction</h2>
      <p className='font-light mb-2'>This project is my baby. It all started in late 2023 when Stellar smart contract platforms (at that time it was called Soroban) testing phase was coming to an end. I had long been a fan of Stellar and I really liked their vision on how they built the smart contract platform. At that time I started to learn about it and build small projects. In early 2024 I was grinding like crazy to learn everything about Soroban and I was getting more and more comfortable with it. When Stellar announced $100 million fund for Soroban adoption I knew this is a chance I cannot miss.</p>
      <p className='font-light mb-2'>During the summer of 2024 I started to design and develop the first MVP smart contracts for Laina. I quickly realized that this project is too big for just one developer so I asked a guy who I knew to be an amazing developer to join me as an co-founder. Luckily he said yes without knowing a lot about me at that point. From that point forward we have been steadily developing Laina forward and against what is usually said about co-founders we have become good friends while working together.</p>
      <p className='font-light mb-2'>It wasn't all smooth sailing. Our first funding application to Stellar Community Fund (SCF) was rejected as being too hard to understand and also as they were unsure if we are capable of builing such project (mainly due to us not telling anything about ourselves 😄). After that we took part in a week long kickstarter hosted by Stellar from which we managed to win a $10,000 award to build a minimal MVP to test it out. People really liked it and in the next round of SCF we happened to be the top-voted project out of the 73 projects that got through to the voting phase. This resulted in us getting a development grant of $115,000 to build and launch Laina.</p>
      <p className='font-light mb-2'>If you got this far, I want to thank you for listening to my yapping ❤️. Here's the pitch:</p>
      <p className="font-light mb-2">Laina is a low fee, trustless, and easy-to-use decentralized loan platform.</p>
      <p className='font-light mb-2'>We are focusing on making a simple and efficient DeFi product, where there is minimal need for token swapping or liquidity other than what is used for lending. Our vision is to change DeFi by making it accessible and understandable for everyone, regardless of their technical knowledge or financial status. By providing efficient single-token lending pools, we eliminate the complexities often associated with multi-token systems.</p>
      <h2 className='text-lg mb-2 mt-6'>Nerd Section 🤓</h2>
      <p className='font-light mb-2'>As a short introduction the logic of Laina is based on decentralized, ownerless, and trustless smart contracts deployed on Stellar blockchain. The frontend is built using Astro and React. There is also a rust program called liquidation bot, which monitors the active loans in the contract and tries to liquidate unhealthy (under collateralized) loans to keep the protocol safe for users.</p>
      <p className='font-light mb-2'>Like mentioned the smart contracts are running on Stellar. They are written in rust and compiled to wasm which are then deployed to and executed on Stellar. In our architecture we have two main contracts: loan manager and lending pool. Loan manager is the "boss contract", which handles loan creation, repayments, liquidations etc. It also deploys the instances of lending pool contract for given tokens. This is why we say our system is using single-token lending pools. This smart contract architecture was decided as we wanted to minimize liquidity fragmentation inside our protocol and it allows practically unlimited scaling in number of tokens our system can handle.</p>
      <p className='font-light mb-2'>The frontend is 95% your everyday React stuff. But it is currently still an Astro app that just hydrates the React components. This is more of an technical debt thing as we started out with Astro, but over time React has been taking more and more role in the app. As of this we are not really getting the benefits of Astro and we will likely change this to be purely React in an upcoming UI rework.</p>
      <p className='font-light mb-2'>The liquidation bot is built using tokio. It monitors events from an public Stellar RPC which are emitted from our contracts. It then fetches the loans found in events from our contracts and stores them in a Postgres database. We use Diesel ORM as our query builder. The bot is also fetching time-weighted average prices for the tokens and using this data it filters loans that are close to liquidation. For such loans, the bot then tries to liquidate them bit by bit untill the loan is again overcollaterialized.</p>
      <p className='font-light mb-2'></p>
      <p className='font-light mb-2'></p>
    </ProjectPage>
  );
};

export default Laina;
