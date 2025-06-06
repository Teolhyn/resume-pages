import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../index.css';
import Hero from "../components/hero";
import ProjectGridCard from '../components/projectgridcard';
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
        <h1 className='text-lg font-bold mb-2'>Links</h1>
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
        <h1 className='text-lg font-bold mb-2'>Work and Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ProjectGridCard
            projectUrl='https://laina-de.fi'
            title='Laina DeFi'
            description="Laina is a decentralized lending and borrowing platform offering low fees and trustless transactions. Built on Stellar's smart contract platform, Soroban, it uses Rust for smart contracts. The front end, developed with React and Astro, connects to the blockchain via TypeScript binding RPC calls."
            technologies={['Rust', 'ReactJS', 'TypeScript', 'Smart Contracts']}
          />
          <ProjectGridCard
            projectUrl='https://github.com/Teolhyn/homeassistant-custom-ui'
            title='Custom Homeassistant UI'
            description="Still in very early stages. Custom UI for my own home automation. Connected to Home Assistant through websocket."
            technologies={['ReactJS', 'TypeScript', 'WebSocket']}
          />
          <ProjectGridCard
            projectUrl='https://kumpisähkö.fi'
            title='Electricity price calculator'
            description="Web app that calculates your electricity bill for both constant priced and spot priced electricity, based on consumption data from Fingrid Datahub. It also evaluates how well your electricity usage is optimized."
            technologies={['Next.js', 'ReactJS', 'PostgreSQL', 'Prisma', 'Neon']}
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

