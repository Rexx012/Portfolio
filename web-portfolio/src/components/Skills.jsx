import Marquee from 'react-fast-marquee';
import {
  RiJavascriptLine,
  RiNodejsFill,
  RiHtml5Line,
  RiCss3Line,
  RiTailwindCssFill,
  RiGithubLine,
} from 'react-icons/ri';
import { SiShadcnui, SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillItem = ({ icon, name }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 mx-12 w-28'>
      <div className='text-4xl'>{icon}</div>
      <span className='text-sm font-light'>{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className='my-15 h-px w-screen relative left-1/2 -translate-x-1/2 bg-black' />

      <Marquee
        pauseOnHover={true}
        gradient={true}
        speed={60}
        className='mb-5 -mt-5'
      >
        <SkillItem icon={<RiJavascriptLine />} name='Javascript' />
        <SkillItem icon={<RiNodejsFill />} name='Node.js' />
        <SkillItem icon={<RiHtml5Line />} name='HTML5' />
        <SkillItem icon={<RiCss3Line />} name='CSS3' />
      </Marquee>

      <Marquee pauseOnHover={true} gradient={true} direction='right' speed={60}>
        <SkillItem icon={<RiTailwindCssFill />} name='Tailwind CSS' />
        <SkillItem icon={<RiGithubLine />} name='GitHub' />
        <SkillItem icon={<SiShadcnui />} name='Shadcn UI' />
        <SkillItem icon={<SiMongodb />} name='MongoDB' />
        <SkillItem icon={<SiExpress />} name='Express.js' />
      </Marquee>

      <div className='my-8 h-px w-screen relative left-1/2 -translate-x-1/2 bg-black' />
    </>
  );
};

export default Skills;
