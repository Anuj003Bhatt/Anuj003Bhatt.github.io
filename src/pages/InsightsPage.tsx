import { SEO } from '../components/common/SEO';
import { insights } from '../data/insights';
import { Reveal } from '../components/common/Reveal';

export function InsightsPage() {
  return <>
    <SEO title="Insights" description="Engineering notes on distributed systems, payment processing, microservices, database architecture and engineering leadership." path="/insights" />
    <section className="page-hero"><div className="container"><div className="breadcrumb">Insights</div><h1>Engineering notes, when they're worth writing.</h1><p className="hero-copy">A future home for practical writing on distributed systems, payment processing, microservices, database architecture and engineering leadership.</p></div></section>
    <section className="section"><div className="container"><div className="insight-grid">{insights.map((item, i) => <Reveal key={item.title} className="insight-card"><div className="insight-index">{String(i + 1).padStart(2,'0')} / Draft topic</div><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div></div></section>
  </>;
}
