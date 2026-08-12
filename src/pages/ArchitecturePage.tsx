import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { architecturePrinciples } from '../data/architecture';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';

export function ArchitecturePage() {
  return <>
    <SEO title="Architecture" description="Architecture principles and systems thinking from Anuj Bhatt, Technical Lead and Systems Architect." path="/architecture" />
    <PageHero title="Think in constraints. Design for failure." copy="Architecture is where scalability, resilience, data integrity, security and operational reality meet." />
    <section className="section"><div className="container architecture">
      <div className="architecture-grid"><div className="architecture-copy"><div className="kicker">Illustrative architecture model</div><h2 className="section-title">A system is a set of trade-offs.</h2><p className="section-lead">The diagrams on this site are illustrative rather than representations of confidential production topologies. They show the kinds of system relationships and failure-handling patterns that appear in my work.</p></div><ArchitectureDiagram /></div>
    </div></section>
    <section className="section"><div className="container"><SectionHeader kicker="Principles" title="Six ideas I return to." lead="These principles are a synthesis of the engineering work represented in the current résumé and portfolio—not a claim that every system used every principle in the same way." /><div className="principles">{architecturePrinciples.map((p) => <Reveal key={p.index} className="capability"><div className="capability-number">{p.index}</div><h3>{p.title}</h3><p>{p.description}</p></Reveal>)}</div></div></section>
    <section className="cta"><div className="container"><div className="cta-box"><div className="kicker">Selected systems</div><h2>See these principles in practice.</h2><Link className="button button-primary" to="/work">Explore case studies ↗</Link></div></div></section>
  </>;
}
function PageHero({ title, copy }: { title: string; copy: string }) { return <section className="page-hero"><div className="container"><div className="breadcrumb">Architecture</div><h1>{title}</h1><p className="hero-copy">{copy}</p></div></section>; }
function ArchitectureDiagram() { return <div className="arch-visual"><svg className="arch-svg" role="img" aria-label="Illustrative architecture model" viewBox="0 0 900 520"><rect width="900" height="520" fill="#080a0a"/><g className="arch-links"><path d="M450 80V145M450 185L220 275M450 185L450 275M450 185L680 275M220 315L450 405M450 315L450 405M680 315L450 405"/></g><g className="arch-nodes">{[['REQUEST',380,40,140],['COORDINATION',350,145,200],['SERVICE A',120,275,200],['SERVICE B',350,275,200],['SERVICE C',580,275,200],['DATA / EVENTS',340,405,220]].map(([label,x,y,w])=><g key={String(label)}><rect x={Number(x)} y={Number(y)} width={Number(w)} height="40" rx="9"/><text x={Number(x)+Number(w)/2} y={Number(y)+25}>{String(label)}</text></g>)}</g></svg><div className="floating-label label-a">COORDINATION / EXECUTION</div><div className="floating-label label-b">FAILURE / OBSERVABILITY</div></div>; }
