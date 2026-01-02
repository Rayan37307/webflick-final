import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "Neon Market",
    category: "Shopify Plus",
    image: "https://picsum.photos/800/600?random=1",
    description: "High-volume streetwear store with custom headless architecture.",
    tech: ["Shopify", "React", "Tailwind"]
  },
  {
    title: "FinTech Dashboard",
    category: "Custom Web App",
    image: "https://picsum.photos/800/600?random=2",
    description: "Real-time financial analytics platform for institutional investors.",
    tech: ["Vue.js", "D3.js", "Firebase"]
  },
  {
    title: "Artisan Coffee",
    category: "WordPress Brand Site",
    image: "https://picsum.photos/800/600?random=3",
    description: "Award-winning design for a global coffee roaster chain.",
    tech: ["WordPress", "GSAP", "PHP"]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-sapphire-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-neon-cyan font-mono text-sm tracking-wider uppercase mb-3">Selected Work</h2>
             <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Recent Projects</h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors">
            View Github <Github className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden bg-sapphire-800 border border-sapphire-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sapphire-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 border border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan hover:text-sapphire-900 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-neon-green font-mono mb-2 uppercase tracking-wider">{project.category}</div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-sapphire-900 rounded text-xs text-gray-300 border border-sapphire-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;