import Logo from '../assets/Logo.png';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className='relative flex items-center justify-between'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.img
        src={Logo}
        alt='Logo'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      <div className='items-center gap-20 lg:flex'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() =>
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          <div className='font-bold flex items-center justify-between gap-2 border-t border-black pt-1.5'>
            <span>Contact Me</span>
            <ArrowUpRight />
          </div>
          <span className='font-geist font-light text-[11px]'>
            gioallen10@gmail.com
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
