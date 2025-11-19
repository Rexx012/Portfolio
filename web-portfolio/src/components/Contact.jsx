import { useRef, useState } from 'react';
import Line from '../assets/Line.png';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id='contact'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <Toaster position='top-center' />
      <motion.div
        className='flex justify-between items-center'
        variants={itemVariants}
      >
        <h1 className='text-5xl'>Let's connect!</h1>
        <img src={Line} alt='Decorative line' />
      </motion.div>

      <motion.form
        className='mt-5 flex flex-wrap md:flex-row gap-x-12 gap-y-8'
        ref={form}
        onSubmit={sendEmail}
        variants={itemVariants}
      >
        <div className='flex flex-col gap-4 w-full md:w-[calc(50%-24px)] '>
          <label>
            Name <span className='text-red-500'> *</span>
          </label>
          <input
            type='text'
            name='name'
            required
            className='p-2 border-b border-black focus:outline-none'
          />
        </div>

        <div className='flex flex-col gap-4 w-full md:w-[calc(50%-24px)]'>
          <label>
            Email <span className='text-red-500'> *</span>
          </label>
          <input
            type='email'
            name='email'
            required
            className='p-2 border-b border-black focus:outline-none'
          />
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <label>
            Let's talk about.. <span className='text-red-500'> *</span>
          </label>
          <textarea
            name='message'
            required
            className='p-2 border-b border-black focus:outline-none'
          />
        </div>
        <motion.div
          className='flex w-full justify-end mt-4'
          variants={itemVariants}
        >
          <motion.button
            type='submit'
            disabled={loading}
            className='h-12 w-32 bg-black text-white rounded-full text-base hover:bg-neutral-800 transition-colors duration-300 cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
