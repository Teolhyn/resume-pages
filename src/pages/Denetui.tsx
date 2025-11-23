import ProjectPage from "../components/ProjectPage";

const Denetui = () => {
  const repo_url = "https://github.com/Teolhyn/denetui";
  const title = "Denetui";

  return (
    <ProjectPage title={title} repo_url={repo_url} header_img='/denetui.webp'>
      <h2 className='text-lg mb-2 mt-6'>Introduction</h2>
      <p className="font-light mb-2">Terminal. It is like a cup of hot chocolate in the middle of a dark freezing winter evening. Or like a rocking chair next to a fireplace. That cozy place where you can truly feel one with the machine, which you don't want to leave.</p>
      <p className='font-light mb-2'>But one cannot stay in this magical wonderland if they want to stay up-to-date with the daily-changing, hottest JavaScript frameworks. One day without news and Naxt.JS, Nixt.JS, or Best.JS drops. One cannot allow that to happen.</p>
      <p className='font-light mb-2'>That's why I created <a href={repo_url} target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>denetui</code></a> (Developer News TUI. I know. I am creative 😝). Denetui allows you to read most upvoted daily posts from dev.to without ever leaving your terminal.</p>
      <h2 className='text-lg mb-2 mt-6'>Nerd Section 🤓</h2>
      <p className='font-light mb-2'>The whole idea for this project started because I wanted to learn how to use <a href='https://ratatui.rs/' target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>ratatui</code></a>, which is a rust crate for making terminal user interfaces (TUI). However, I never really liked to do just "Hello, world!" when trying new things, so I thought what would be something that I would actually use myself. That is why I decided to do a sort of developer newspaper in terminal, as I have tried to keep a routine of reading at least one article a day.</p>
      <p className='font-light mb-2'>There is not much to tell about the TUI itself. I just made it look how I liked it and implemented vim bindings as that is what I am used to. The articles are rendered from markdown using <a href='https://github.com/joshka/tui-markdown' target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>tui_markdown</code></a>, but the crate is still work in progress so for example embeddings are not rendered. I will likely contribute to that crate just so mine would look better. Open-source is wonderful! </p>
      <p className='font-light mb-2'>As for the backend, I also wanted to do it in Rust because... well because it is Rust and I like it. I used <a href='https://github.com/tokio-rs/tokio' target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>tokio</code></a> and <a href='https://github.com/tokio-rs/axum' target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>axum</code></a> to create the API. As of now the backend fetches all articles from the day before from <a href='https://dev.to/' className='underline' target='_blank' rel='noopener noreferrer'>dev.to</a> and filters 27 most upvoted ones. It then caches them and serves them from the cache to client. As this is running on my homelab I created a reverse proxy using <a href='https://github.com/caddyserver/caddy' target='_blank' rel='noopener noreferrer'><code className='text-cyan-400'>caddy</code></a> to keep the server safe.</p>
    </ProjectPage>
  );
};

export default Denetui;
