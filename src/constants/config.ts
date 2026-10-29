type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    facebook: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Ramim Ahmed | Web & Software Developer',
    fullName: 'Ramim Ahmed',
    email: '',
    facebook: 'https://facebook.com/twkrofficial',
  },
  hero: {
    name: 'Ramim Ahmed',
    p: ['Web Developer & Software Developer', 'Thoughtful websites. Practical software.'],
  },
  contact: {
    p: 'Have an idea in mind?',
    h2: "Let's build something useful.",
    content:
      'Tell me about your website, software idea, or collaboration. Connect with me on Facebook to start the conversation.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm Ramim Ahmed, a web and software developer focused on turning ideas into useful digital experiences. My approach brings together clear interfaces, practical functionality, and attention to detail. From a first website concept to a useful software tool, I care about making technology work for the people who use it.`,
    },
    experience: {
      p: 'What I focus on',
      h2: 'Professional expertise.',
      content: 'My development interests and working approach, with a focus on useful results.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'Ideas to explore',
      h2: 'Project concepts.',
      content: `Illustrative ideas for the kinds of digital experiences I'd like to build. These examples use template preview images and describe proposed features; they are concepts rather than completed client projects.`,
    },
  },
};
