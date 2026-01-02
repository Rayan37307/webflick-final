import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool, TrendingUp } from 'lucide-react';
import { HERO_COPY } from '../../constants';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-xs font-mono uppercase tracking-widest bg-neon-cyan/5">
                Agency 2.0
              </span>
              <span className="h-px w-12 bg-neon-cyan/30"></span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Stop Dreaming.</span>
              <span className="block mt-2">
                Start <span className="text-neon-cyan animate-flicker inline-block">Selling</span>.
              </span>
            </h1>

            <div className="flex space-x-4 mb-8 text-xl md:text-2xl font-light text-gray-400">
              <span className="flex items-center"><PenTool className="w-5 h-5 mr-2 text-neon-green" /> Design</span>
              <span className="text-gray-600">/</span>
              <span className="flex items-center"><Code className="w-5 h-5 mr-2 text-neon-cyan" /> Code</span>
              <span className="text-gray-600">/</span>
              <span className="flex items-center"><TrendingUp className="w-5 h-5 mr-2 text-neon-purple" /> Grow</span>
            </div>

            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed border-l-2 border-neon-cyan/20 pl-6">
              {HERO_COPY.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenContact}
                className="group relative px-8 py-4 bg-neon-cyan text-sapphire-900 font-bold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {HERO_COPY.primaryCta} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:border-gray-400 hover:bg-white/5 transition-all duration-300">
                {HERO_COPY.secondaryCta}
              </button>
            </div>
          </motion.div>

          {/* Visual/Abstract Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Abstract Wireframes */}
              <div className="absolute inset-0 border-2 border-dashed border-gray-700/50 rounded-lg transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 border border-gray-700/50 rounded-lg transform -rotate-3 scale-95 bg-sapphire-800/50 backdrop-blur-sm z-10"></div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-48 h-32 bg-gradient-to-br from-sapphire-800 to-sapphire-900 border border-neon-cyan/20 rounded-xl shadow-2xl z-20 p-4 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded bg-neon-cyan/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+145%</div>
                  <div className="text-xs text-gray-400">Conversion Rate</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-56 h-auto bg-sapphire-800/90 border border-neon-green/20 rounded-xl shadow-2xl z-30 p-4 backdrop-blur-md"
              >
                 <div className="flex items-center mb-3">
                   <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
                 <div className="space-y-2">
                   <div className="h-2 w-3/4 bg-gray-600 rounded opacity-50"></div>
                   <div className="h-2 w-1/2 bg-gray-600 rounded opacity-50"></div>
                   <div className="h-2 w-full bg-neon-green/20 rounded"></div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-neon-cyan rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;