import '../index.css';
import Technologies from "../components/technologies";
import Hero from "../components/hero";
import Experience from "../components/experience"

function Home() {
  return (
    <div className="App">
      <Hero></Hero>
      <Technologies></Technologies>
      <div className='w-4xl mx-auto'>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default Home;
