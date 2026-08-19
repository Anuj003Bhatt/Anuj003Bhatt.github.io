import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import { Reveal } from '../components/common/Reveal';

export function TestimonialsPage() {
  return <>
    <SEO title="Recommendations" description="Professional recommendations for Anuj Bhatt from engineering leaders, managers, mentors and collaborators." path="/testimonials" />
    <section className="page-hero testimonials-page-hero"><div className="container"><div className="testimonials-intro-grid"><Reveal><div className="eyebrow">Recommendations / External signal</div><h1>What people say<br/><span>when I'm not in the room.</span></h1><p className="hero-copy">A collection of recommendations from people who have worked with me across engineering, architecture, product development, delivery and mentoring.</p></Reveal><Reveal className="testimonials-count"><strong>09</strong><span>recommendations in the current archive</span></Reveal></div></div></section>
    <section className="section"><div className="container">
      <Reveal className="section-header"><div><div className="kicker">01 / Archive</div><h2 className="section-title">The full signal.</h2></div><p className="section-lead">These recommendations are reproduced from the testimonial data already maintained in the portfolio source. Employer/client details are kept conservative where confidentiality requires it.</p></Reveal>
      <div className="testimonials-archive">{testimonials.map((item) => <TestimonialCard key={item.id} item={item} />)}</div>
      <div className="testimonials-disclosure"><strong>Source note.</strong> The testimonial text and image references above are based on the existing portfolio testimonial dataset. No testimonial wording has been invented or expanded. The public display intentionally avoids naming a confidential cybersecurity client in the recommender's role line.</div>
    </div></section>
    <section className="cta"><div className="container"><div className="cta-box"><div className="kicker">Back to the work</div><h2>Now see what those recommendations point to.</h2><p>Explore the systems, architecture decisions and engineering outcomes behind the career story.</p><div className="hero-actions"><Link className="button button-primary" to="/work">Explore my work ↗</Link><Link className="button button-secondary" to="/">Back home ↗</Link></div></div></div></section>
  </>;
}
function TestimonialCard({ item }: { item: typeof testimonials[number] }) {
  return <Reveal className="testimonial-archive-card"><div className="testimonial-source">{item.index} / {item.category}</div><div className="testimonial-person"><img className="testimonial-avatar" src={item.image} alt="" /><div><strong>{item.name}</strong><span>{item.role}</span></div></div><blockquote>{item.quote}</blockquote><div className="testimonial-index">RECOMMENDATION / {item.index}</div></Reveal>;
}
