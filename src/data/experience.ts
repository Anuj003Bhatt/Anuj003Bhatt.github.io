export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location?: string;
  banner?: string;
  groups: { title?: string; bullets: string[] }[];
  progression?: string;
};

export const experience: ExperienceItem[] = [
  {
    period: '04/2023 — PRESENT',
    role: 'Technical Lead',
    company: 'Pirimid Fintech',
    location: 'Ahmedabad',
    banner: 'High-Scale System Architecture & Infrastructure Evolution',
    groups: [
      { bullets: [
        'National-Scale Distributed Payment Engine: Architected a high-concurrency recurring payment scheduler using Java, Spring Boot, and Zookeeper-based distributed locking to bypass horizontal scaling limitations and reducing processing times from days to hours.',
        'Fault Tolerance & Resiliency Engineering: Engineered an automated self-healing framework managing stuck payment/transaction remediation, dynamic retries, and pro-active user alerting for unprecedented edge-case failures.',
        'Database Sharding & Zero-Regression Migration: Led database sharding for production workloads on AWS RDS (PostgreSQL) and system level version upgrades, migrating 4-year-old legacy systems with zero regression under live production loads.',
        'Full-Stack Advisory Platform: Led another 4-member full-stack team to design and build an advisory platform using Java, Spring Boot, AWS, React, and TypeScript, profiling user risk appetite, analysing securities’ risk-return profiles, and integrating a quadratic optimization algorithm to recommend optimal portfolios and automate investment scheduling.',
      ] },
      { title: 'Strategic Leadership & Business Impact', bullets: [
        'Product Roadmap & Stakeholder Partnership: Elevated from a traditional technical lead to a core strategic stakeholder, partnering directly with C-suite executives and clients to author a 5-8 year organizational roadmap encompassing infrastructure migrations, processes and tooling evolution and exchange-level regulated market integrations.',
        'Team Scaling & Operational Excellence: Expanded the engineering unit from 2 to 4 high-performing engineers with a roadmap to a self-sustaining team structure while establishing standardized baseline processes for code reviews, deployment pipelines, and accelerated developer onboarding.',
        'Business & Revenue Growth: Directed a comprehensive AWS infrastructure audit, cutting cloud costs by $1,500/month through query optimization, resource tuning, and database downsizing without impacting system consistency.',
      ] },
    ],
  },
  {
    period: '09/2021 — 04/2023',
    role: 'Senior Software Engineer',
    company: 'Musikaar',
    location: 'Ahmedabad',
    progression: 'Client-side fast track progression: Backend Developer → Senior Software Engineer → Team Lead → Product Owner',
    banner: 'Technical Product Ownership (Client: Tier-1 Cybersecurity Giant)',
    groups: [
      { bullets: [
        'High-Throughput Engineering: Designed and deployed concurrent job processors and secure data-sharing modules using Java, Kotlin, and AWS, ensuring top-tier security for sensitive cybersecurity data.',
        'System Development: Designed and implemented high-impact features using Java, Kotlin, and Microservices architecture, leveraging AWS cloud services, DynamoDB, and PostgreSQL. Ensured scalability and reliability through integration with Apache Kafka and Zookeeper.',
        'Microservices Orchestration: Owned the end-to-end roadmap and delivery for the Exports & Data Integrations module, managing a cross-functional team of 5 (Frontend, Backend, QA) across 10 distinct microservices.',
        'Client Success: Managed technical roadmaps and CSAT (Customer Satisfaction) initiatives, consistently meeting aggressive delivery timelines for complex, security-first feature sets.',
      ] },
      { title: 'Strategic Leadership & Revenue Generation', bullets: [
        'Rapid Career Trajectory: Promoted from Backend Developer to Team Lead and ultimately Product Owner for a global cybersecurity leader within a year of joining, directly succeeding the Scrum Master in managing a 10-microservice portfolio.',
        'Executive Partnership: Hand-selected by the CEO to lead technical discovery and architect POCs for high-value prospects; successfully converted a major lead into a multi-year contract.',
        'Organizational Scaling: Overhauled the company’s hiring workflow by implementing automated preliminary coding challenges, significantly reducing interviewer fatigue and increasing candidate quality.',
      ] },
    ],
  },
  {
    period: '06/2019 — 07/2021',
    role: 'Senior Application Engineer',
    company: 'Oracle',
    location: 'Gandhinagar, Gujarat',
    banner: 'Enterprise Engineering',
    groups: [
      { bullets: [
        'Global Security Standardization: Developed a suite of utilities as a sole project executor, including a Java-based UI generator for automated reporting and data extraction tools for issue tracking. Most notably, engineered PL/SQL Oracle database clean-up utilities that were personally commended by the Security Head and officially adopted as the global standard for secure data operations across Oracle products.',
        'Migration Leadership: Led a team of 3 in seamlessly migrating 5+ customer environments from legacy systems to modernized database models, ensuring uninterrupted operations and enhanced performance while managing client expectations.',
        'Module Ownership: Managed the candidate portal (Oracle Recruiting) of the HCM product (built on Java and Oracle ADF), overseeing feature developments, client service requests, and issue resolution.',
      ] },
    ],
  },
  {
    period: '06/2018 — 06/2019',
    role: 'Software Engineer',
    company: 'Musikaar',
    location: 'Ahmedabad, Gujarat',
    banner: 'Machine-learning data generation and cybersecurity engineering',
    groups: [
      { bullets: [
        'Algorithmic Impact (Client: CrowdStrike): Developed an automated data generation framework using Python and Shell scripting to train machine learning models. Achieved a 4x increase in model accuracy, significantly reducing false positives.',
        'Revenue Generation: Transformed a short-term POC into a multi-year, high-revenue engagement still active today; received formal commendations from the client and the Musikaar CEO for exceptional technical results.',
      ] },
    ],
  },
  {
    period: '04/2017 — 04/2018',
    role: 'Software Engineer',
    company: 'AppPerfect Corporations',
    location: 'Udaipur, Rajasthan',
    banner: 'Early Leadership',
    groups: [
      { bullets: [
        'Spearheaded the design and implementation of a robust Java-based backend framework from scratch, leading a team on a multi-threaded data integration system with a configurable JSON parser.',
        'Market Expansion: Pioneered the company’s Salesforce Development vertical; achieved two levels of Salesforce Certification and architected the initial integration frameworks that allowed the firm to win its first Salesforce contracts.',
      ] },
    ],
  },
];
