import React from 'react';
import { WHY_US_POINTS, MISSION_STATEMENT } from '../../constants';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#050e1d]">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#233554_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose WebFlick?
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light italic border-l-4 border-neon-cyan pl-6">
              "{MISSION_STATEMENT}"
            </p>
            
            <div className="space-y-8">
              {WHY_US_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-sapphire-800 border border-sapphire-700 flex items-center justify-center text-neon-green">
                      {point.icon}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-neon-cyan/20 blur-[100px] rounded-full"></div>
             <motion.div 
               className="relative bg-sapphire-900 border border-sapphire-700 rounded-2xl p-8 shadow-2xl"
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-xs text-gray-500 font-mono">deployment_status: success</div>
               </div>
               
               <div className="space-y-4 font-mono text-sm">
                 <div className="flex">
                   <span className="text-neon-purple mr-2">➜</span>
                   <span className="text-neon-cyan">git</span>
                   <span className="text-white ml-2">commit -m "Optimize conversion funnel"</span>
                 </div>
                 <div className="text-gray-500">Processing...</div>
                 <div className="flex">
                   <span className="text-neon-green mr-2">✓</span>
                   <span className="text-white">Performance Score:</span>
                   <span className="text-neon-green ml-2">99/100</span>
                 </div>
                 <div className="flex">
                   <span className="text-neon-green mr-2">✓</span>
                   <span className="text-white">SEO Score:</span>
                   <span className="text-neon-green ml-2">100/100</span>
                 </div>
                 <div className="flex">
                   <span className="text-neon-green mr-2">✓</span>
                   <span className="text-white">Accessibility:</span>
                   <span className="text-neon-green ml-2">100/100</span>
                 </div>
                 <div className="text-gray-500 mt-4">Deploying to production...</div>
                 <div className="text-neon-cyan animate-pulse">Live: https://webflick.agency</div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;