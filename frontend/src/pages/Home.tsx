import '../index.css';
import Technologies from "../components/technologies";
import Hero from "../components/hero";
import Experience from "../components/experience"

function Home() {
  return (
    <div className="App">
      <Hero></Hero>
      <Technologies></Technologies>
      <Experience></Experience>
    </div>
  );
}

export default Home;
