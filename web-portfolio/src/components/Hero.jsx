import Profile from '../assets/Hero.png';
import { ArrowDownToLine } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-15'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <section className='flex flex-col gap-3 px-10 md:pr-3 pl-0'>
        <motion.h1 className='text-[50px]' variants={itemVariants}>
          Web Developer
          <span className='block w-1/2 border-b border-black'></span>
        </motion.h1>
        <motion.p className='text-lg font-normal' variants={itemVariants}>
          Gio Allen Deveyra
        </motion.p>
        <motion.p variants={itemVariants}>
          Hi! I'm Gio, an aspiring Web Developer passionate about building
          modern, responsive, and user-friendly web experiences.
        </motion.p>
        <motion.div className='flex gap-5' variants={itemVariants}>
          <motion.button
            className='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer '
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Let's Talk!
          </motion.button>
          <motion.a
            href='/cv.pdf'
            download='CV.pdf'
            className='flex items-center underline cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <ArrowDownToLine size={15} />
          </motion.a>
        </motion.div>
      </section>
      <motion.img
        src={Profile}
        alt='Profile Picture'
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.section>
  );
};

export default Hero;
