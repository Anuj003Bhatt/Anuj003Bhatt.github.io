import { SEO } from '../components/common/SEO';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';

export function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return <>
    <SEO title={project.title} description={project.hero} path={`/work/${project.slug}`} />
    <section className="page-hero"><div className="container"><div className="breadcrumb">Work / {project.category}</div><h1>{project.title}</h1><p className="hero-copy">{project.hero}</p></div></section>
    <section className="section"><div className="container case-grid"><article className="case-main"><CaseVisual type={project.slug} /><h2>The problem</h2><p>{project.problem}</p><h2>The approach</h2><p>{project.approach}</p>{project.outcome && <><h2>The outcome</h2><p>{project.outcome}</p></>}{project.leadership && <><h2>The leadership dimension</h2><p>{project.leadership}</p></>}{project.quote && <div className="quote">{project.quote}</div>}</article><aside className="case-aside"><CaseCard label="Impact" value={project.impact} /><CaseCard label="Technology" value={project.technology} />{project.engagement && <CaseCard label="Engagement" value={project.engagement} />}{project.confidentiality && <CaseCard label="Confidentiality" value={project.confidentiality} />} {!project.confidentiality && <CaseCard label="Source" value="Experience and outcomes consolidated from the current professional résumé. Confidentiality can be refined during final review." />}</aside></div></section>
    <section className="cta"><div className="container"><div className="cta-box"><div className="kicker">More systems</div><h2>Explore the rest of the work.</h2><Link className="button button-primary" to="/work">Back to selected work ↗</Link></div></div></section>
  </>;
}
function CaseCard({ label, value }: { label: string; value: string }) { return <div className="case-card"><div className="label">{label}</div><strong>{value}</strong></div>; }
function CaseVisual({ type }: { type: string }) {
  const labels: Record<string,string[]> = {
    'payment-engine': ['PAYMENT QUEUE','DISTRIBUTED SCHEDULER','WORKER A','WORKER B','WORKER C','TRANSACTIONS'],
    'advisory-platform': ['RISK PROFILE / USER','SECURITIES / RISK-RETURN','OPTIMIZATION / QUADRATIC','PLAN / AUTO'],
    'cybersecurity-platform': ['INTEGRATION CORE','SVC 01','SVC 02','SVC 03','SVC 04','SVC 05','EVENTS + DATA'],
    'system-improvement': ['RAW DATA / INGEST','GENERATE / TRANSFORM','FILTER / OPTIMIZE','MODEL / INPUT'],
  };
  return <div className="case-visual"><svg role="img" aria-label="Illustrative system architecture" viewBox="0 0 900 420"><rect fill="#080a0a" width="900" height="420"/><g className="case-svg-links"><path d="M450 70V130M450 170L180 245M450 170L450 245M450 170L720 245M180 285L450 345M450 285L450 345M720 285L450 345"/></g><g className="case-svg-nodes">{labels[type].map((label,i)=><g key={label}><rect x={i===0?370:(i>=1&&i<=5?100+i*125:385)} y={i===0?45:(i>=1&&i<=5?245:345)} width={i===0?160:(i===labels[type].length-1?130:110)} height="40" rx="9"/><text x={i===0?450:(i>=1&&i<=5?155+i*125:450)} y={i===0?70:(i>=1&&i<=5?270:370)}>{label}</text></g>)}</g></svg></div>;
}
