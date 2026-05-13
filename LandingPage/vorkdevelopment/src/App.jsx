import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen bg-dark text-white font-roboto'>
      <Header />
      <main>
        <HeroSection />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
