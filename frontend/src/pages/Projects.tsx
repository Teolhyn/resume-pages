import ProjectCard from "../components/projectcard.tsx";

const Projects = () => {
  return (
    <div className="min-h-screen">

      <div className="p-10">
        <div className="flex gap-8 justify-center flex-wrap">
          <ProjectCard
            projectUrl="https://laina-de.fi"
            title="Laina"
            description="Laina is a decentralized lending and borrowing platform offering low fees and trustless transactions.
                  Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts.
                  The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls."
            srcSet="/project-avatar-non-clip-border-400w.avif 400w, /project-avatar-non-clip-border-600w.avif 600w, /project-avatar-non-clip-border-800w.avif 800w, /project-avatar-non-clip-border-1000w.avif 1000w, /project-avatar-non-clip-border-1200w.avif 1200w, /project-avatar-non-clip-border-1600w.avif 1600w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
            width="1920"
            height="1080"
            image_url="/project avatar non clip border.png"
            preview={true}
          />
          <ProjectCard
            projectUrl="https://github.com/Teolhyn/photography-portfolio-platform"
            title="Custom Homeassistant UI"
            description="Still in very early stages. Custom UI for my own home automation. Connected to Home Assistant through websocket."
            srcSet="/homeassistant-400w.avif 400w, /homeassistant-600w.avif 600w, /homeassistant-800w.avif 800w, /homeassistant-1000w.avif 1000w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (min-width: 801px) 1000px"
            width="1081"
            height="692"
            image_url="/homeassistant.png"
            preview={false}
          />
          <ProjectCard
            projectUrl="https://draftphotography.netlify.app"
            title="Photography portfolio"
            description="Still in very early stages. Custom photography portfolio built on React using Contentful as headless content management system, allowing users to easily
            upload their content without worrying about code or styling."
            srcSet="/photoportfolio2-400w.avif 400w, /photoportfolio2-600w.avif 600w, /photoportfolio2-800w.avif 800w, /photoportfolio2-1000w.avif 1000w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (min-width: 801px) 1000px"
            width="1066"
            height="676"
            image_url="/photoportfolio2.png"
            preview={true}
          />
        </div>
      </div>
    </div >
  )
};

export default Projects;
