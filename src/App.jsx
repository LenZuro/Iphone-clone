import Hero from "./componets/Hero";
import Highlights from "./componets/Highlights";
import Navbar from "./componets/Navbar";
import Model from "./componets/Model";
import Features from "./componets/Features";
import Footer from "./componets/Footer";
import HowItWorks from "./componets/HowItWorks";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
