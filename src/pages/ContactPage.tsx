import { SEO } from '../components/common/SEO';
import { profile } from '../data/profile';
import { Reveal } from '../components/common/Reveal';

export function ContactPage() {
  return <>
    <SEO title="Contact" description="Contact Anuj Bhatt for conversations around engineering leadership, system architecture and distributed systems." path="/contact" />
    <section className="page-hero"><div className="container"><div className="breadcrumb">Contact</div><h1>Let's build something that scales.</h1><p className="hero-copy">Open to conversations around engineering leadership, system architecture, distributed systems and ambitious technology problems.</p></div></section>
    <section className="section"><div className="container contact-grid">
      <div><div className="kicker">Direct</div><h2 className="section-title">Start a conversation.</h2><p className="section-lead" style={{ marginTop: 25 }}>Email is the best starting point. LinkedIn and GitHub are also available for professional context and technical work.</p></div>
      <div className="contact-list">
        {/* <ContactItem label="Email" href={`mailto:${profile.email}`} text={profile.email} />
        <ContactItem label="Phone" href={`tel:${profile.phone.replace(/\s/g, '')}`} text={profile.phone} /> */}
        <ContactItem label="LinkedIn" href={profile.linkedin} text="linkedin.com/in/anuj-30bhatt/ ↗" />
        <ContactItem label="GitHub" href={profile.github} text="github.com/Anuj003Bhatt ↗" />
        <ContactItem label="Résumé" href={profile.resume} text="Download current résumé ↓" />
      </div>
    </div></section>
  </>;
}
function ContactItem({ label, href, text }: { label: string; href: string; text: string }) { return <Reveal className="contact-item"><small>{label}</small><a href={href} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{text}</a></Reveal>; }
