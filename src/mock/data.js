import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Febie Faith', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Febie',
  subtitle: "I'm a customer support hero",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'febie.jpg',
  paragraphOne: `
    Helping companies to better serve their clients is my true passion.`,
  paragraphTwo: `
    I have an extensive background in customer service
    proven through customer satisfaction and peer recognition 
    awards. I am also adept in key account management, 
    relationship management, and sales administration.`,
  paragraphThree: `
    Outside work, I am volunteer for a local refuge house.
    I'm passionate about children and their wellbeing.
    Cats and Milk teas are two of my favorite things in life!`,
  resume: 'https://drive.google.com/file/d/1I0Fjk8C-kdhSjbX4pXv266Fr1KlOYnRR/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'qima.png',
    title: 'QIMA',
    info: 'Senior Client Service Coordinator',
    info2: `
      Provided support to international clients including LVMH, Cartier, L'oreal.
      Handled teams of other coordinators and facilitated workflows
      to ensure top-notch service.`,
    url: 'https://www.qima.com/',
  },
  {
    id: nanoid(),
    img: 'ncr.png',
    title: 'NCR',
    info: 'Field Service Coordinator',
    info2: `
      Managed daily workloads of several customer engineers based in Canada.
      Served as a bridge to several stakeholders to fulfill service requests.`,
    url: 'https://www.ncr.com',
  },
  {
    id: nanoid(),
    img: 'wipro.jpg',
    title: 'Wipro',
    info: 'Client Service Associate',
    info2: 'My first employer. Assisted customers with inquiries and processed service installations.',
    url: 'https://www.wipro.com',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'faithbentazal@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/arabellawise',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/faithgotgrit/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fb185032/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
