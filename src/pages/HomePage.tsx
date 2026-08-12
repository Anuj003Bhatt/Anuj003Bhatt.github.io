import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/hero/Hero';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';
import { Tags } from '../components/common/Tags';
import { Toolkit } from '../components/toolkit/Toolkit';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { testimonials } from '../data/testimonials';
import { profile } from '../data/profile';

export function HomePage() {
  const featured = testimonials.filter((item) => item.featured);
  return <>
    <SEO title="Technical Lead & Systems Architect" description="Anuj Bhatt — Technical Lead and Systems Architect focused on distributed systems, fintech, cybersecurity, cloud architecture and engineering leadership." />
    <Hero />
    <section className="section section-alt">
      <div className="container">
        <SectionHeader kicker="01 / Capability" title="Engineering at the system level." lead="From distributed transaction processing to cloud infrastructure and engineering teams, I work across the layers required to turn complex technical problems into reliable systems." />
        <div className="capability-grid">
          <Capability index="01" title="Distributed Systems" description="Concurrency, distributed coordination, event-driven processing, fault tolerance and horizontal scalability." tags={['Concurrency', 'Kafka', 'Zookeeper', 'Microservices']} />
          <Capability index="02" title="Cloud & Data" description="AWS infrastructure, database sharding, production migrations, query optimization and cost-aware architecture." tags={['AWS', 'PostgreSQL', 'DynamoDB', 'Oracle']} />
          <Capability index="03" title="Engineering Leadership" description="Technical strategy, product roadmaps, team scaling, executive partnership and cross-functional delivery." tags={['Architecture', 'Strategy', 'Mentoring', 'Product']} />
        </div>
      </div>
    </section>
    <Toolkit />
    <section className="section section-alt">
      <div className="container">
        <SectionHeader kicker="03 / Recent engineering impact" title="Built for change, not just launch day." lead="Recent work spans live-system modernization, architectural evolution and high-trust technical leadership across engineering and business conversations." />
        <div className="impact-grid">
          <Impact kicker="LIVE MODERNIZATION" title="Spring Boot 2.7.5 → 4.0.6" text="Upgraded a three-service live fintech system to Spring Boot 4.0.6 without regressions, balancing framework migration with production stability." tags={['3 SERVICES', 'LIVE PRODUCTION', 'ZERO REGRESSION']} />
          <Impact kicker="ARCHITECTURE EVOLUTION" title="Monolith → Microservices" text="Working on incremental modernization using the Strangler Fig pattern, allowing legacy capabilities to evolve without forcing a high-risk rewrite." tags={['STRANGLER FIG', 'MICROSERVICES', 'MIGRATION']} />
          <Impact kicker="EXECUTIVE TRUST" title="The technical go-to person." text="Frequently brought into C-suite and client conversations for technical discovery, architecture decisions and high-value opportunities — including work that helped convert prospective leads into clients." tags={['C-SUITE', 'DISCOVERY', 'BUSINESS IMPACT']} />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionHeader kicker="04 / Selected systems" title="Problems worth solving." lead="A selection of systems and engineering challenges across fintech, cybersecurity and enterprise platforms." />
        <div className="work-list">{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div>
      </div>
    </section>
    <section className="section section-alt">
      <div className="container">
        <SectionHeader kicker="05 / Experience" title="The path so far." lead="A decade of progression from hands-on engineering into technical leadership, product ownership and systems architecture — including client-side advancement within a long-running Tier-1 cybersecurity engagement." />
        <div className="timeline">
          {experience.slice(0, 2).map((item) => <ExperiencePreview key={item.period} item={item} />)}
        </div>
        <Link className="button button-secondary" to="/experience">View complete experience ↗</Link>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SectionHeader kicker="06 / Credentials" title="Signals that matter." lead="Selected validation and education, kept intentionally concise." />
        <div className="capability-grid">
          <Capability index="TECHNICAL VALIDATION" title="Google" description="Successfully cleared the full technical selection process with Google." />
          <Capability index="EDUCATION" title="B.E. — Computer Science" description="Honours · M.B.M. Engineering College, Jodhpur" />
          <Capability index="PROFICIENCY" title="English · Hindi" description="English — Full Professional Proficiency. Hindi — Native or Bilingual Proficiency." />
        </div>
      </div>
    </section>
    <section className="section section-testimonials">
      <div className="container">
        <SectionHeader kicker="07 / Recommendations" title="What people say." lead="A selection of recommendations from people who have worked with me across engineering, architecture, delivery and product development." />
        <div className="testimonial-feature-grid">
          {featured.map((testimonial) => (
            <Reveal key={testimonial.id} className="testimonial-feature">
              <div className="testimonial-source">{testimonial.index} / {testimonial.category}</div>
              <div className="testimonial-person">
                <img className="testimonial-avatar" src={testimonial.image} alt="" />
                <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <p className="testimonial-context">{testimonial.context}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="testimonial-actions"><Link className="button button-secondary" to="/testimonials">Explore all recommendations ↗</Link></Reveal>
      </div>
    </section>
    <section className="cta">
      <div className="container"><Reveal className="cta-box">
        <div className="kicker">Available for the right conversation</div>
        <h2>Let's build something that scales.</h2>
        <p>Open to conversations around engineering leadership, system architecture, distributed systems and ambitious technology problems.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/contact">Get in touch ↗</Link><a className="button button-secondary" href={profile.linkedin} rel="noopener noreferrer">LinkedIn ↗</a></div>
      </Reveal></div>
    </section>
  </>;
}

function Capability({ index, title, description, tags }: { index: string; title: string; description: string; tags?: string[] }) {
  return <Reveal className="capability"><div className="capability-number">{index}</div><h3>{title}</h3><p>{description}</p>{tags && <Tags items={tags} />}</Reveal>;
}
function Impact({ kicker, title, text, tags }: { kicker: string; title: string; text: string; tags: string[] }) {
  return <Reveal className="impact-card"><div className="kicker">{kicker}</div><h3>{title}</h3><p>{text}</p><Tags items={tags} /></Reveal>;
}
function ProjectRow({ project }: { project: typeof projects[number] }) {
  return <Reveal className="work-card"><Link to={`/work/${project.slug}`} className="work-card-link">
    <div className="work-index">{project.index}</div><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="work-meta">{project.meta}<br/><span className="arrow">↗</span></div>
  </Link></Reveal>;
}
function ExperiencePreview({ item }: { item: typeof experience[number] }) {
  return <Reveal className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">{item.period}</div><div><h3 className="timeline-role">{item.role}</h3><div className="timeline-company">{item.company} · {item.location}</div>{item.progression && <div className="impact-row"><strong>{item.progression}</strong></div>}{item.banner && <div className="engagement-banner"><strong>{item.banner}</strong></div>}<ul className="timeline-list">{item.groups[0].bullets.slice(0,3).map((b) => <li key={b}>{b}</li>)}</ul></div></Reveal>;
}
