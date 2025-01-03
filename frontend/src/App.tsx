import './index.css';
import Header from "./components/header";
import Technologies from "./components/technologies";
import Hero from "./components/hero";
import Experience from "./components/experience"
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Technologies></Technologies>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default App;
