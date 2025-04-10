import { useEffect, useState } from 'react';
import '../index.css';
import Hero from "../components/hero";
import Technologies from '../components/technologies';
import Experience from '../components/experience';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <div className='lg:flex justify-between mx-auto min-h-screen items-start py-12 gap-10 max-w-7xl'>

        <div
          className={`transition-all duration-800 transform
            ${loaded ? 'translate-y-0' : 'translate-y-800'}
          `}
        >
          <Experience />
        </div>

        <div>
          <div
            className={`transition-all duration-800 transform
              ${loaded ? 'translate-y-0' : '-translate-y-0'}
            `}
          >
            <Hero />
          </div>

          <div
            className={`mt-5 transition-all duration-800 transform
              ${loaded ? 'translate-x-0' : 'translate-x-400'}
            `}
          >
            <Technologies />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;

