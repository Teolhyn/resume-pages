import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../index.css';
import Hero from "../components/hero";
import ProjectGridCard from '../components/projectgridcard';
import ScientificPublication from '../components/ScientificPublication';
// import BlogGridCard from '../components/bloggridcard';

function Home() {
  return (
    <div className='max-w-[74rem] min-h-screen mx-3 xl:mx-auto font-dmsans tracking-tight text-black dark:text-white'>
      <div className='lg:flex justify-between mx-auto items-start pt-12 mb-3 gap-10 max-w-7xl'>
        <div>
          <Hero />
        </div>
      </div>
      <div className='mb-8'>
        <h2 className='text-lg font-bold mb-2'>Links</h2>
        <div>
          <a
            href="https://github.com/Teolhyn"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex gap-1 flex-none mr-5 items-center'
          >
            <FontAwesomeIcon icon={faSquareGithub} size='lg' />
            <span className='sr-only'>Go to github.com/Teolhyn</span>

            <span className='relative group'>
              <span className='mr-1'>Github</span>
              <span className='absolute bottom-0 left-0 w-0 h-[2px] dark:bg-white bg-black rounded-sm transition-all duration-300 group-hover:w-full'></span>
            </span>

            <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' />
          </a>

          <a
            href="https://www.linkedin.com/in/teemuhynna/"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex gap-1 flex-none mr-3 items-center'
          >
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
            <span className='sr-only'>Go to linkedin.com/in/teemuhynna</span>

            <span className='relative group'>
              <span className='mr-1'>LinkedIn</span>
              <span className='absolute bottom-0 left-0 w-0 h-[2px] dark:bg-white bg-black rounded-sm transition-all duration-300 group-hover:w-full'></span>
            </span>

            <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' />
          </a>

          <a
            href="/cv.pdf"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex gap-1 flex-none mr-3 items-center'
          >
            <FontAwesomeIcon icon={faFile} size='lg' />
            <span className='sr-only'>Open CV</span>

            <span className='relative group'>
              <span className='mr-1'>CV</span>
              <span className='absolute bottom-0 left-0 w-0 h-[2px] dark:bg-white bg-black rounded-sm transition-all duration-300 group-hover:w-full'></span>
            </span>

            <FontAwesomeIcon icon={faUpRightFromSquare} size='xs' />
          </a>

        </div>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-2'>About Me</h1>
        <p className='font-light mb-2'>Ever since I was 14 (which was 14 years ago) and my dad bought me an Arduino, showed me a program that made the on-board LED blink, and explained the code to me line by line, I have been hooked to programming. What started from Arduino, quickly transitioned to small games. Games changed to a more academic use, from creating phase-field model in my bachelors thesis to modelling spiking neural networks based on physical memristors for my masters (See Scientific Publications 😉). While in university I also got interested in web development, which then evolved to web3 development due to my interest in all things blockchain. I am still a generalist by heart, but lately I have mainly worked on full-stack applications in both web2 and web3 worlds.</p>
        <p className='font-light'>While tinkering with computers is a passionate hobby of mine, there are also other things in my life. I am a father of a beautiful little girl (and a cat), and a husband to a lovely wife. On my free time I love to do anything outdoors, especially hiking and foraging. During summer days I really like to spend my days at the sea.</p>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-2'>Work and Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ProjectGridCard
            projectUrl='/laina'
            title='Laina DeFi'
            description="Laina (founded by me) is a decentralized lending and borrowing platform offering low fees and trustless transactions. Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts. The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls."
            technologies={['Rust', 'ReactJS', 'TypeScript', 'Smart Contracts']}
            repo_name='laina'
            user_name='laina-defi'
          />
          <ProjectGridCard
            projectUrl='/nolosslottery'
            title='No Loss Lottery'
            description="No Loss Lottery built on Stellar on top of Blend DeFi protocol. This project was built for a Dorahacks hackathon and it achieved 2nd place from almost 300 builders. The hackathon required the project to be built on top of the Stellar Scaffold framework. Contracts are written in rust and frontend is built with React and TypeScript. Wallet connections are handled with Stellar Wallets Kit, which was also a requirement of the hackathon."
            technologies={['Rust', 'ReactJS', 'TypeScript', 'Smart Contracts']}
            repo_name='no-loss-lottery'
            user_name='teolhyn'
          />
          <ProjectGridCard
            projectUrl='/denetui'
            title='Denetui'
            description='A terminal user interface for reading top daily dev.to news in terminal. Built on Rust, hosted backend on dedicated server with Caddy reverse proxy and published binaries in crates.io.'
            technologies={["Rust", "Caddy"]}
            repo_name='denetui'
            user_name='teolhyn'
          />
          <ProjectGridCard
            projectUrl='/kumpisahko'
            title='Electricity price calculator'
            description="Web app that calculates your electricity bill for both constant priced and spot priced electricity, based on consumption data from Fingrid Datahub. It also evaluates how well your electricity usage is optimized."
            technologies={['Next.js', 'ReactJS', 'PostgreSQL', 'Prisma', 'Neon']}
            repo_name='kumpi-sahko'
            user_name='teolhyn'
          />
          <ProjectGridCard
            projectUrl='/homeassistantui'
            title='Custom Homeassistant UI'
            description="Still in very early stages. Custom UI for my own home automation. Connected to Home Assistant through websocket."
            technologies={['ReactJS', 'TypeScript', 'WebSocket']}
            repo_name='homeassistant-custom-ui'
            user_name='teolhyn'
          />
        </div>
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-2'>Scientific Publications</h1>
        <div className='space-y-2'>
          <ScientificPublication
            url='https://doi.org/10.1021/acsaelm.3c01273'
            title='Bioplausible Synaptic Behavior of Al/Gd0.3Ca0.7MnO3/Au Memristive Devices for Unsupervised Spiking Neural Networks'
          />
          <ScientificPublication
            url="https://doi.org/10.1016/j.apenergy.2025.127022"
            title="Performance evaluation of high latitude agrivoltaic systems with vertically mounted bifacial panels"
          />
        </div>
      </div>
      {/* <div> */}
      {/*   <h1 className='text-lg font-bold'>Blog</h1> */}
      {/*   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'> */}
      {/*     <BlogGridCard */}
      {/*       title="My journey with Laina" */}
      {/*       url='/' */}
      {/*       published={new Date('2025-04-11')} */}
      {/*     /> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

export default Home;

