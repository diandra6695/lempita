import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f8f8f8] scroll-behavior-smooth">
      <div className="container mx-auto font-Inter">
        <Navbar />
        <Hero />
        <Menu />
        <Testimoni />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
