import React from 'react';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';
import { APP_NAME } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sapphire-950 border-t border-sapphire-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-neon-cyan mr-2" />
              <span className="text-xl font-bold text-white font-display">{APP_NAME}</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              WebFlick is a creative digital agency specializing in custom development, e-commerce, and high-performance marketing sites.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Shopify Solutions</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">WordPress Experts</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sapphire-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} WebFlick Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;