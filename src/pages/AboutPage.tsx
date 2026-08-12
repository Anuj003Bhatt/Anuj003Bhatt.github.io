import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { SectionHeader } from '../components/common/SectionHeader';

export function AboutPage() {
  return <>
    <SEO title="About" description="About Anuj Bhatt, Technical Lead and Systems Architect based in Ahmedabad, India." path="/about" />
    <PageHero title="Beyond the code." copy="My work sits at the intersection of engineering depth, system architecture and business outcomes." />
    <section className="section"><div className="container about-grid">
      <div className="about-copy">
        <div className="kicker">Engineering</div><p>I build and lead systems where concurrency, scalability, reliability and data integrity matter. My recent work has centered on fintech infrastructure, distributed payment processing, cloud evolution and resilient transaction systems.</p>
        <div className="kicker" style={{ marginTop: 40 }}>Leadership</div><p>My role has expanded beyond implementation into architecture, technical roadmaps, team development, product ownership and direct collaboration with executives and clients.</p>
        <div className="kicker" style={{ marginTop: 40 }}>Perspective</div><p>I enjoy the problems that sit between disciplines: where a technical constraint changes a product decision, where a scaling problem becomes an organizational problem, or where reliability has to be designed rather than hoped for.</p>
      </div>
      <div className="about-facts">
        <Fact label="Current role" value="Technical Lead" /><Fact label="Domain" value="Fintech · Cybersecurity · Enterprise" /><Fact label="Experience" value="9+ years" /><Fact label="Location" value="Ahmedabad, Gujarat, India" /><Fact label="Education" value="B.E. Computer Science, Honours" /><Fact label="Languages" value="English · Hindi" /><Fact label="Technical validation" value="Google Interview selection" />
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionHeader kicker="Currently" title="Building for scale." lead="Currently a Technical Lead at Pirimid Fintech, working across distributed payment systems, infrastructure evolution, architecture and engineering leadership." />
      <div className="capability-grid">
        <InfoCard label="EDUCATION" title="M.B.M. Engineering College" text="B.E. — Computer Science and Engineering, Honours." />
        <InfoCard label="TECHNICAL VALIDATION" title="Google" text="Successfully cleared the full technical selection process with Google." />
        <InfoCard label="CONTACT" title="Open to conversation" text="Engineering leadership, system architecture, distributed systems and ambitious technology problems." />
      </div>
    </div></section>
  </>;
}
function PageHero({ title, copy }: { title: string; copy: string }) { return <section className="page-hero"><div className="container"><div className="breadcrumb">About</div><h1>{title}</h1><p className="hero-copy">{copy}</p></div></section>; }
function Fact({ label, value }: { label: string; value: string }) { return <Reveal className="fact"><span>{label}</span><span>{value}</span></Reveal>; }
function InfoCard({ label, title, text }: { label: string; title: string; text: string }) { return <Reveal className="capability"><div className="capability-number">{label}</div><h3>{title}</h3><p>{text}</p></Reveal>; }
