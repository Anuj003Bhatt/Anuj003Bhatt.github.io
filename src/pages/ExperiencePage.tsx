import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { experience } from '../data/experience';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';

export function ExperiencePage() {
  return <>
    <SEO title="Experience" description="Professional experience of Anuj Bhatt across Pirimid Fintech, Musikaar, Oracle and AppPerfect." path="/experience" />
    <PageHero kicker="Experience" title="From backend engineering to systems leadership." copy="A decade of progression through software engineering, technical leadership, product ownership and architecture across fintech, cybersecurity and enterprise technology." />
    <section className="section"><div className="container"><div className="timeline">{experience.map((item) => <ExperienceItem key={item.period} item={item} />)}</div></div></section>
    <section className="section"><div className="container"><div className="section-header"><div><div className="kicker">Employer vs. client progression</div><h2 className="section-title">Two layers of the same career story.</h2></div></div><div className="engagement-grid"><Reveal className="engagement-card"><div className="kicker">EMPLOYER</div><h3>Musikaar</h3><p>Service-based organization where my formal employment title was Senior Software Engineer during the 2021–2023 period.</p></Reveal><Reveal className="engagement-card"><div className="kicker">CLIENT ENGAGEMENT</div><h3>Tier-1 cybersecurity giant</h3><p>Within the Tier-1 cybersecurity engagement, my responsibilities progressed from Backend Developer through Senior Software Engineer and Team Lead to Product Owner.</p><p className="section-lead">The progression is supported by client-side promotion communications and is presented separately from the employer title.</p></Reveal></div></div></section>
    <section className="section section-alt"><div className="container">
      <SectionHeader kicker="Modernizing live systems" title="Built for change, not just launch day." lead="Current work extends beyond feature delivery into production modernization and architectural evolution." />
      <div className="impact-grid">
        <Impact title="Spring Boot 2.7.5 → 4.0.6" kicker="01" text="Upgraded a live three-service fintech system to Spring Boot 4.0.6 without regressions, navigating a major framework transition while preserving production behavior." />
        <Impact title="Monolith → Microservices with the Strangler Fig pattern" kicker="02" text="Working on incremental decomposition of monolithic systems, allowing new services to take ownership of capabilities while legacy functionality is retired progressively." />
        <Impact title="Trusted technical partner to executive leadership" kicker="03" text="Frequently selected as the technical go-to person for C-suite discussions, client discovery and architecture decisions, including technical work that helped convert prospective leads into clients." />
      </div>
    </div></section>
  </>;
}
function PageHero({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumb">{kicker}</div><h1>{title}</h1><p className="hero-copy">{copy}</p></div></section>;
}
function ExperienceItem({ item }: { item: typeof experience[number] }) {
  return <Reveal className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">{item.period}</div><div>
    <h3 className="timeline-role">{item.role}</h3><div className="timeline-company">{item.company}{item.location ? ` · ${item.location}` : ''}</div>
    {item.progression && <div className="impact-row"><strong>{item.progression}</strong></div>}
    {item.banner && <div className="engagement-banner"><strong>{item.banner}</strong></div>}
    {item.groups.map((group, index) => <div key={group.title ?? index}>{group.title && <div className="engagement-banner"><strong>{group.title}</strong></div>}<ul className="timeline-list">{group.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>)}
  </div></Reveal>;
}
function Impact({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <Reveal className="impact-card"><div className="kicker">{kicker}</div><h3>{title}</h3><p>{text}</p></Reveal>;
}
