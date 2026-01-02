import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-sapphire-950/80 backdrop-blur-sm"
        ></motion.div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-sapphire-900 border border-sapphire-700 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-sapphire-800 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Start Your Project</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-sapphire-800 border border-sapphire-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-sapphire-800 border border-sapphire-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                <select className="w-full bg-sapphire-800 border border-sapphire-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors">
                  <option>Custom Development</option>
                  <option>Shopify Store</option>
                  <option>WordPress Website</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-sapphire-800 border border-sapphire-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
              
              <button className="w-full bg-neon-cyan text-sapphire-900 font-bold py-4 rounded-lg hover:bg-white transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;