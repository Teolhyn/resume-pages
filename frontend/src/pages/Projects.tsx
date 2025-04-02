import ProjectCard from "../components/projectcard.tsx";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-240px)]">

      <div className="p-10">
        <div className="flex gap-8 justify-center flex-wrap">
          <ProjectCard
            projectUrl="https://laina-de.fi"
            title="Laina"
            description="Laina is a decentralized lending and borrowing platform offering low fees and trustless transactions.
                  Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts.
                  The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls.
"
            image_url="/project avatar non clip border.png"
            preview={true}
          />
          <ProjectCard
            projectUrl="https://github.com/Teolhyn/photography-portfolio-platform"
            title="Custom Homeassistant UI"
            description="Still in very early stages. Custom UI for my own home automation. Connected to Home Assistant through websocket."
            image_url="/homeassistant.png"
            preview={false}
          />
          <ProjectCard
            projectUrl="https://draftphotography.netlify.app"
            title="Photography portfolio"
            description="Still in very early stages. Custom photography portfolio built on React using Contentful as headless content management system, allowing users to easily
            upload their content without worrying about code or styling."
            image_url="/photoportfolio2.png"
            preview={true}
          />
        </div>
      </div>
    </div >
  )
};

export default Projects;
