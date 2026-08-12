import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';

export function WorkPage() {
  return <>
    <SEO title="Selected Systems" description="Selected engineering systems and architecture case studies by Anuj Bhatt." path="/work" />
    <section className="page-hero"><div className="container"><div className="breadcrumb">Work</div><h1>Selected systems.</h1><p className="hero-copy">Engineering problems where architecture, reliability, scale and business outcomes intersect.</p></div></section>
    <section className="section"><div className="container"><div className="work-list">{projects.map((p) => <Reveal key={p.slug} className="work-card"><Link className="work-card-link" to={`/work/${p.slug}`}><div className="work-index">{p.index}</div><div><h3>{p.title}</h3><p>{p.description}</p></div><div className="work-meta">{p.meta}<br/><span className="arrow">↗</span></div></Link></Reveal>)}</div></div></section>
    <section className="section section-alt"><div className="container"><SectionHeader kicker="Engineering themes" title="The common thread." lead="Across different products and domains, the recurring problems are scale, resilience, data integrity, modernization and technical decision-making under real constraints." /></div></section>
  </>;
}
