export type ToolkitItem = {
  index: string;
  level: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  signal?: string;
};

export const toolkit: ToolkitItem[] = [
  { index: '01', level: 'PRIMARY', title: 'Backend & Application Engineering', description: 'Production backend systems, API architecture, service decomposition and application modernization.', tags: ['Java', 'Kotlin', 'Spring Boot', 'Microservices', 'REST APIs', 'Maven', 'Gradle'], featured: true, signal: 'BUILD · SHIP · EVOLVE' },
  { index: '02', level: 'PRIMARY', title: 'Distributed Systems', description: 'Designing systems around concurrency, coordination, asynchronous processing and failure-aware execution.', tags: ['Kafka', 'Zookeeper', 'Concurrency', 'Event-driven', 'Algorithms', 'System Design'] },
  { index: '03', level: 'PRIMARY', title: 'Cloud & Infrastructure', description: 'Cloud architecture, live-system modernization and infrastructure decisions balanced against reliability and cost.', tags: ['AWS', 'RDS', 'DynamoDB', 'Docker', 'Cloud Optimization'] },
  { index: '04', level: 'STRONG', title: 'Data & Persistence', description: 'Relational and NoSQL data design, production migrations, query optimization and database evolution.', tags: ['PostgreSQL', 'Oracle', 'PL/SQL', 'Database Sharding', 'Query Optimization'] },
  { index: '05', level: 'STRONG', title: 'Modernization & Migration', description: 'Modernizing live systems with controlled change, including framework upgrades and monolith-to-microservice evolution.', tags: ['Spring Boot 4', 'Strangler Fig', 'Monolith → Microservices', 'Zero-regression Migration'] },
  { index: '06', level: 'STRONG', title: 'Frontend & Product Surface', description: 'Enough frontend depth to own product surfaces end-to-end and collaborate effectively across the full stack.', tags: ['React', 'Angular', 'TypeScript', 'JavaScript'] },
  { index: '07', level: 'WORKING', title: 'Engineering Delivery', description: 'Tooling and delivery practices that keep teams moving from architecture through implementation and production.', tags: ['Git', 'CI/CD', 'Docker', 'Maven', 'Gradle', 'Agile Delivery'] },
  { index: '08', level: 'ARCHITECTURE', title: 'System Thinking', description: 'Architecture choices driven by scalability, resilience, security, observability, maintainability and business impact.', tags: ['System Architecture', 'Technical Strategy', 'Product Thinking', 'Technical Leadership'] },
];

export const technologyRail = ['JAVA', 'SPRING BOOT', 'MICROSERVICES', 'AWS', 'KAFKA', 'POSTGRESQL', 'SYSTEM DESIGN', 'ARCHITECTURE'];
