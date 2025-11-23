import ProjectPage from "../components/ProjectPage";

const HomeassistantUI = () => {
  const repo_url = "https://github.com/Teolhyn/homeassistant-custom-ui";
  const title = "Custom Homeassistant UI"

  return (
    <ProjectPage title={title} repo_url={repo_url} header_img='/homeassistant-1000w.avif'>
      <h2 className='text-lg mb-2 mt-6'>Introduction</h2>
      <p className="font-light mb-2">I started to make this just for fun as I wanted a cool custom UI for my homeassistant. It is not abandoned, but the development of it has been on a <span className='italic'>very</span> long break! It's a React app with a cool swipeable UI and it uses a WebSocket connection to handle commands and datastreams from homeassistant.</p>
      <h2 className='text-lg mb-2 mt-6'>Nerd Section 🤓</h2>
      <p className='font-light mb-2'>Damn.. I think I started the nerdy stuff in the introduction already. But yeah this is still in very early stage but I thought it is still quite cool so I added it here. Now that I am writing this I got a sudden urge to develop this. More coming soon™!</p>
    </ProjectPage>
  );
};

export default HomeassistantUI;
