import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-[var(--color-brand)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
