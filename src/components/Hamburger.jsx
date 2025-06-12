import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      {/* Hamburger / Close Button */}
      <button
        className="fixed top-5 right-5 z-50 flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
        onClick={toggleMenu}
      >
        <motion.span
          className="w-8 h-0.5 bg-white rounded origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-8 h-0.5 bg-white rounded"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-8 h-0.5 bg-white rounded origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-lg bg-white/5 flex flex-col items-center justify-center space-y-6 text-white text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button onClick={toggleMenu} className="hover:scale-105 transition">Home</button>
          <button onClick={toggleMenu} className="hover:scale-105 transition">About Me</button>
          <button onClick={toggleMenu} className="hover:scale-105 transition">Projects</button>
          <button onClick={toggleMenu} className="hover:scale-105 transition">Contact</button>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
