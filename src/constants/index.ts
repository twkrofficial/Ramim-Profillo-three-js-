import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Expertise' },
  { id: 'projects', title: 'Concepts' },
  { id: 'contact', title: 'Contact' },
];

const services: TService[] = [
  { title: 'Web Developer', icon: web },
  { title: 'Software Developer', icon: backend },
  { title: 'Responsive Interfaces', icon: mobile },
  { title: 'Practical Solutions', icon: creator },
];

// Technologies used by this portfolio, rather than claims of personal expertise.
const technologies: TTechnology[] = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: reactjs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Three.js', icon: threejs },
  { name: 'Git', icon: git },
];

// Professional focus is shown until verified employment details are supplied.
const experiences: TExperience[] = [
  {
    title: 'Web Developer',
    companyName: 'Professional focus',
    icon: web,
    iconBg: '#151030',
    date: 'Web development',
    points: [
      'Clear, purposeful websites that make information easy to find.',
      'Responsive interfaces designed around desktop, tablet, and mobile use.',
      'Attention to readable content, accessible navigation, and practical interactions.',
    ],
  },
  {
    title: 'Software Developer',
    companyName: 'Professional focus',
    icon: backend,
    iconBg: '#151030',
    date: 'Software development',
    points: [
      'Useful application features shaped around a clear problem and user needs.',
      'An emphasis on organized code and understandable application flows.',
      'Practical solutions that can be refined as requirements develop.',
    ],
  },
  {
    title: 'From Idea to Interface',
    companyName: 'Working approach',
    icon: creator,
    iconBg: '#151030',
    date: 'Development process',
    points: [
      'Understand the goal and identify the features that matter most.',
      'Plan the experience, build the solution, and check the important interactions.',
      'Refine the details through feedback and clear communication.',
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: 'Car Rental — Concept',
    description:
      'A proposed booking experience for browsing vehicles, comparing options, and organizing reservations. An illustrative concept using a template preview image.',
    tags: [
      { name: 'booking-flow', color: 'blue-text-gradient' },
      { name: 'responsive-ui', color: 'green-text-gradient' },
      { name: 'concept', color: 'pink-text-gradient' },
    ],
    image: carrent,
    sourceCodeLink: '',
  },
  {
    name: 'Job Discovery — Concept',
    description:
      'A proposed job search interface with role filters, saved opportunities, and clear application steps. An illustrative concept using a template preview image.',
    tags: [
      { name: 'search-filters', color: 'blue-text-gradient' },
      { name: 'user-experience', color: 'green-text-gradient' },
      { name: 'concept', color: 'pink-text-gradient' },
    ],
    image: jobit,
    sourceCodeLink: '',
  },
  {
    name: 'Travel Planner — Concept',
    description:
      'A proposed planning tool for exploring destinations and organizing travel details in one place. An illustrative concept using a template preview image.',
    tags: [
      { name: 'trip-planning', color: 'blue-text-gradient' },
      { name: 'clear-navigation', color: 'green-text-gradient' },
      { name: 'concept', color: 'pink-text-gradient' },
    ],
    image: tripguide,
    sourceCodeLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
