export const architecturePrinciples = [
  { index: '01', title: 'Scale', description: 'Separate coordination from execution and design components so throughput can grow without creating a single bottleneck.' },
  { index: '02', title: 'Resilience', description: 'Assume components fail. Build detection, retries, remediation and alerting into the system rather than treating them as afterthoughts.' },
  { index: '03', title: 'Consistency', description: 'Know where correctness is non-negotiable and design coordination around the data invariants that matter.' },
  { index: '04', title: 'Observability', description: 'Make system state and failure modes visible enough for engineers to reason about production behavior.' },
  { index: '05', title: 'Security', description: 'Treat sensitive data, trust boundaries and operational access as first-class architectural concerns.' },
  { index: '06', title: 'Efficiency', description: 'Optimize cloud resources and data access without sacrificing correctness or maintainability.' },
  { index: '07', title: 'Evolution', description: 'Modernize incrementally when the system cannot afford a rewrite, using patterns such as Strangler Fig to move capabilities safely toward service boundaries.' },
];
