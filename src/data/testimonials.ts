export type Testimonial = {
  id: string;
  index: string;
  category: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  featured?: boolean;
  context?: string;
};

export const testimonials: Testimonial[] = [
  { id: 'neha', index: '01', category: 'ADAPTABILITY', name: 'Neha Sheth', role: 'Founder / CEO · Musikaar', image: '/assets/img/testimonials/neha.png', quote: '“Anuj is enthusiastic and self-motivated. He is always capable of adapting to new working environment and challenges. Very positive attitude towards work!! It was very nice to work with him.”' },
  { id: 'axel', index: '02', category: 'SOLUTION DESIGN', name: 'Axel Tessier', role: 'CTO · Purplemet', image: '/assets/img/testimonials/Axel.jpeg', featured: true, quote: '“This has been a great pleasure working with Anuj, not only thanks to his coding skills in the various languages the company has to deal with, but also thanks to his involvement in the project lifecycle, by thoroughly reviewing specifications and designing solutions. Keep the great job, Anuj!”', context: 'A strong signal for the combination of coding ability, specification review, solution design and end-to-end project involvement.' },
  { id: 'tejas', index: '03', category: 'ANALYSIS & RESILIENCE', name: 'Tejas Shah', role: 'Senior Manager · ServiceNow', image: '/assets/img/testimonials/TejasShah.jpeg', featured: true, quote: '“It was my pleasure to work with Anuj during my tenure at Oracle. Anuj quickly came up to the speed and take on the most complex tasks. He worked on technical integration and gained in-depth knowledge on ADF.”', context: 'A recommendation from the Oracle chapter of my career, emphasizing complex technical work, analytical problem solving and consistent execution.' },
  { id: 'deepak', index: '04', category: 'SYSTEMS THINKING', name: 'Deepak Bharadwaj Nagadi', role: 'Senior Software Engineer · Cybersecurity', image: '/assets/img/testimonials/DeepakNagadi.jpeg', featured: true, quote: '“I had the pleasure of working with Anuj within our org and I highly recommend Anuj as a Senior/Staff Engineer/Architect with a strong focus on Product Development and cloud technologies, particularly within the AWS ecosystem.”', context: 'A recommendation highlighting scalable product development, AWS, design thinking, maintainability and the ability to balance innovation with practical engineering decisions.' },
  { id: 'jim', index: '05', category: 'LEGACY SYSTEMS', name: 'Jim Braman', role: 'Cloud Software Engineer · Reflexive Concepts', image: '/assets/img/testimonials/Jim.jpeg', quote: '“Anuj worked as a contractor on my team for several major initiatives. He is a fearless, no excuses developer that will jump right into your gnarliest legacy code and hand it back a new shiny feature in record time.”' },
  { id: 'arpan', index: '06', category: 'TECHNICAL AGILITY', name: 'Arpan Ghosh', role: 'Senior Software Engineer · Tenable', image: '/assets/img/testimonials/arpan.jpeg', quote: '"Anuj is a profoundly gifted software engineer who can jump into the craziest codebases and get his feet wet instantly with minimal direction. He\'s adaptable, audacious, confident, highly intelligent, and a great communicator- all of which make him a superstar engineer. Working with Anuj is an absolute pleasure, and I always learn more from him than he ever has from me. "' },
  { id: 'ranjana', index: '07', category: 'ENGINEERING RANGE', name: 'Ranjana Sisodia', role: 'Senior Software Engineer 4 · Grab', image: '/assets/img/testimonials/Ranjana.jpeg', quote: '“Anuj is an ace programmer with excellent problem solving skills. We worked on multiple projects together at AppPerfect and his capability to handle variety of tasks across multiple projects was amazing.”' },
  { id: 'mayank', index: '08', category: 'MENTORSHIP', name: 'Mayank Sareen', role: 'Solution Specialist · Deloitte', image: '/assets/img/testimonials/Mayank.jpeg', quote: '“It was a wonderful experience working with Anuj. I had the pleasure of working with him at AppPerfect Corporation. Anuj led the development of a Java backend integrations framework which I was also a part of.”' },
  { id: 'sumit', index: '09', category: 'LEARNING MINDSET', name: 'Sumit Suthar', role: 'Lead Software Engineer · New Relic', image: '/assets/img/testimonials/Sumit.jpeg', quote: '“I was mentor to Anuj. He learns things very quickly. His positive attitude makes him to view solutions instead of problems. For him the work is always the most important thing to do.”' },
];
