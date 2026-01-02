import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Ready to <span className="text-neon-green">scale</span> your vision?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          We are currently accepting new projects for Q4. Let's discuss how we can build your next big win.
        </p>
        <button 
          onClick={onOpenContact}
          className="px-10 py-5 bg-white text-sapphire-900 font-bold text-lg rounded-full hover:bg-neon-cyan transition-colors shadow-lg shadow-white/10 flex items-center mx-auto"
        >
          Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;