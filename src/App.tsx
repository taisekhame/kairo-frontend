import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 gradient-bg" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Team />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
