import  { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import WhyUs from './components/Sections/WhyUs';
import Portfolio from './components/Sections/Portfolio';
import CTASection from './components/Sections/CTASection';
import Footer from './components/Layout/Footer';
import ContactModal from './components/UI/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <div className="min-h-screen bg-sapphire-900 text-slate-200 selection:bg-neon-cyan selection:text-sapphire-900">
      <Navbar onOpenContact={toggleContact} />
      
      <main>
        <Hero onOpenContact={toggleContact} />
        <Services />
        <WhyUs />
        <Portfolio />
        <CTASection onOpenContact={toggleContact} />
      </main>

      <Footer />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;