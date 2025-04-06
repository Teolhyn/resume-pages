import '../index.css';
import Hero from "../components/hero";
import { lazy, Suspense } from 'react';

const Technologies = lazy(() => import("../components/technologies"));
const Experience = lazy(() => import("../components/experience"));

function Home() {
  return (
    <div className="App">
      <Hero />

      <Suspense fallback={<div>Loading Technologies...</div>}>
        <Technologies />
      </Suspense>

      <div className='max-w-4xl mx-auto'>
        <Suspense fallback={<div>Loading Experience...</div>}>
          <Experience />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;

