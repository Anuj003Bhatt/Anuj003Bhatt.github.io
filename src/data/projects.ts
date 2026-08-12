export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  hero: string;
  problem: string;
  approach: string;
  outcome?: string;
  leadership?: string;
  impact: string;
  technology: string;
  engagement?: string;
  confidentiality?: string;
  quote?: string;
};

export const projects: Project[] = [
  {
    slug: 'payment-engine',
    index: '01',
    category: 'Distributed Systems',
    title: 'Distributed Recurring Payment Engine',
    description: 'A high-concurrency SIP processor that schedules recurring installments while handling retries, failures and external/internal processing issues.',
    meta: 'JAVA · SPRING BOOT · ZOOKEEPER',
    hero: 'Architected a high-concurrency SIP processor using Java, Spring Boot and Zookeeper-based distributed locking to bypass horizontal scaling limitations.',
    problem: 'A recurring-payment workload had to process at national scale while preserving correctness under concurrency. The architecture needed to coordinate work across horizontally scaled workers without allowing duplicate processing.',
    approach: 'The scheduler was designed around distributed coordination, concurrent processing and controlled work distribution. Zookeeper-based distributed locking provided coordination while the application layer handled the payment-processing lifecycle.',
    outcome: 'The resulting architecture reduced processing time from days to hours while creating a foundation for horizontal scaling.',
    impact: 'Days → Hours',
    technology: 'Java · Spring Boot · Zookeeper · PostgreSQL · AWS',
    quote: 'The interesting part was not simply making the scheduler faster; it was making scale, coordination and correctness coexist.',
  },
  {
    slug: 'advisory-platform',
    index: '02',
    category: 'Fintech Platform',
    title: 'Investment Advisory Platform',
    description: 'Risk profiling, securities analysis and quadratic optimization powering portfolio recommendations and automated investment scheduling.',
    meta: 'JAVA · AWS · REACT · TYPESCRIPT',
    hero: 'Led a four-member full-stack team to design and build an advisory platform using Java, Spring Boot, AWS, React and TypeScript.',
    problem: 'The platform needed to translate user risk appetite and securities risk-return characteristics into actionable portfolio recommendations and automated investment scheduling.',
    approach: 'The product combined a full-stack web experience with backend services and a quadratic optimization algorithm. The architecture had to connect user profiling, market/security analysis and scheduling into a coherent workflow.',
    outcome: 'The result was a full-stack advisory platform capable of profiling risk appetite, analyzing securities and recommending optimized portfolios.',
    impact: 'Portfolio optimization',
    technology: 'Java · Spring Boot · AWS · React · TypeScript',
  },
  {
    slug: 'cybersecurity-platform',
    index: '03',
    category: 'Cybersecurity',
    title: 'Cybersecurity Data Integration Platform',
    description: 'End-to-end ownership of a secure exports and integrations portfolio spanning 10 microservices for a Tier-1 cybersecurity giant.',
    meta: 'JAVA · KOTLIN · KAFKA · AWS',
    hero: 'Owned the end-to-end roadmap and delivery for an Exports & Data Integrations module spanning 10 microservices for a Tier-1 cybersecurity engagement.',
    problem: 'The Tier-1 cybersecurity engagement involved security-sensitive data integration that required high-throughput processing, reliable orchestration and strong controls around data movement.',
    approach: 'The platform used Java and Kotlin microservices with AWS, DynamoDB and PostgreSQL, while Kafka and Zookeeper supported event-driven processing and distributed coordination. I owned the roadmap and delivery across the 10-service portfolio.',
    leadership: 'The work combined hands-on system development with cross-functional delivery across frontend, backend and QA. It also involved client roadmap management and customer-satisfaction initiatives under aggressive delivery timelines.',
    impact: '10 microservices · 5-person team',
    technology: 'Java · Kotlin · AWS · Kafka · Zookeeper · DynamoDB · PostgreSQL',
    confidentiality: 'Experience and outcomes consolidated from the current professional résumé. Confidentiality can be refined during final review.',
  },
  {
    slug: 'system-improvement',
    index: '04',
    category: 'Cybersecurity Engineering',
    title: '4× System Improvement in 6 Months',
    description: 'An automation framework for generating cybersecurity training data that produced unprecedented gains in model accuracy and efficiency within months of delivery.',
    meta: 'PYTHON · SHELL · ML DATA',
    hero: 'An automation framework for generating cybersecurity training data that produced unprecedented gains in model accuracy and efficiency within months of delivery.',
    problem: 'A cybersecurity machine-learning workflow needed training data generated, extracted and loaded at a quality and scale that could materially improve downstream model performance.',
    approach: 'I designed and implemented an automation framework using Python and Shell scripting, including processing of large datasets and filtering/sorting capabilities designed to reduce memory consumption and operational cost.',
    outcome: 'Within six months of work, the resulting system delivered a 4× improvement in model accuracy and efficiency, substantially reducing false positives. The work helped turn a short-term proof of concept into a multi-year engagement.',
    impact: '4× system improvement · 6 months',
    technology: 'Python · Shell scripting · Data generation · ML pipelines',
    engagement: 'Tier-1 cybersecurity giant',
    confidentiality: 'Client identity and internal implementation details are intentionally generalized for public presentation.',
  },
];
