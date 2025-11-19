import React from 'react';
import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id='about'
      className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className='flex flex-col gap-6 text-base leading-relaxed order-2 md:order-1'
        variants={itemVariants}
      >
        <p>
          I am an aspiring Web Developer driven by the challenge of transforming
          complex problems into beautiful, user-friendly digital solutions. My
          passion for coding stems from a love for logical challenges and the
          satisfaction of building something from the ground up.
        </p>
        <p>
          Dedicated learner, constantly exploring new things to refine my craft.
          I am eager to contribute my skills to a forward-thinking team and help
          build impactful web applications.
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col order-1 md:order-2'
        variants={itemVariants}
      >
        <motion.div
          className='flex items-center gap-4'
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className='text-sm font-light uppercase tracking-widest'>
            Who am I?
          </span>
          <div className='h-px w-30 bg-black'></div>
        </motion.div>

        <motion.h2
          className='text-[72px] leading-none'
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          This is Me
        </motion.h2>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          <motion.a
            href='https://www.facebook.com/gioallen10'
            target='_blank'
            className='flex items-center gap-2 hover:text-blue-600'
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={18} />
            Facebook
          </motion.a>
          <motion.a
            href='https://github.com/Rexx012'
            target='_blank'
            className='flex items-center gap-2 hover:text-blue-600'
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            Github
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/gio-allen-deveyra-739227392/'
            target='_blank'
            className='flex items-center gap-2 hover:text-blue-600'
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a
            href='tel:09286972643'
            className='flex items-center gap-2 hover:text-blue-600'
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={18} />
            0928 697 2643
          </motion.a>
        </div>

        <motion.a
          href='mailto:allendeveyra01@icloud.com'
          className='flex items-center gap-2 mt-4 hover:text-blue-600 underline'
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={18} />
          gioallen10@gmail.com
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
