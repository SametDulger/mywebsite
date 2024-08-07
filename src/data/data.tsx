import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Samet Dülger',
  description: 'Fullstack Software Developer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Samet Dülger.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Junior Software Developer</strong> with expertise in many areas of software
        development. Ready to assist senior development staff in new project launches and management of existing
        software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        1 year of professional programming experience with <strong className="text-stone-100">.NET</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I continue to learn <strong className="text-stone-100">Java</strong> and{' '}
        <strong className="text-stone-100">Python</strong> for backend,{' '}
        <strong className="text-stone-100">React</strong> and <strong className="text-stone-100">Angular</strong> for
        frontend.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'İstanbul, TR', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkey / Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Tech', Icon: SparklesIcon},
    {label: 'Study', text: 'İGÜ, İÜ, AÜ', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelance', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Turkish',
        level: 10,
      },
      {
        name: 'English',
        level: 5,
      },
    ],
  },

  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 1,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C#',
        level: 7,
      },
      {
        name: '.NET',
        level: 7,
      },
      {
        name: 'Java',
        level: 2,
      },
      {
        name: 'Python',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 2,
      },
      {
        name: 'React',
        level: 1,
      },
      {
        name: 'Angular',
        level: 1,
      },
      {
        name: 'Bootstrap',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://sametdulger.com.tr',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023-2025',
    location: 'İstanbul University',
    title: 'Computer Programming',
    content: <p></p>,
  },
  {
    date: '2023-2025',
    location: 'Anadolu University',
    title: 'Web Design and Coding',
    content: <p></p>,
  },
  {
    date: '2014-2016',
    location: 'İstanbul Gelişim University',
    title: 'Radiotherapy',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - May 2024',
    location: 'Tailormade Information Systems',
    title: 'Jr. Software Developer',
    content: <p></p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Hardworking',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Francisco Reyes',
      text: 'Honest',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Allen Curtis',
      text: 'Successful',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The contact form is not yet active. Please use e-mail to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'info@sametdulger.com.tr',
      href: 'mailto:info@sametdulger.com.tr',
    },
    {
      type: ContactType.Location,
      text: 'İstanbul, TR',
      href: 'https://maps.app.goo.gl/tQ1H73JpapEXvDp5A',
    },
    {
      type: ContactType.Instagram,
      text: '@_SametDlgr',
      href: 'https://www.instagram.com/',
    },
    {
      type: ContactType.Github,
      text: 'SametDulger',
      href: 'https://github.com/SametDulger',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SametDulger'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20867568/sametdulger'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sametdulger/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/_SametDlgr'},
];
