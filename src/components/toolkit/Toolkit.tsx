import { toolkit, technologyRail } from '../../data/toolkit';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

export function Toolkit() {
  const rail = [...technologyRail, ...technologyRail];
  return (
    <section className="section toolkit-section" id="toolkit">
      <div className="container">
        <SectionHeader kicker="02 / Toolkit" title="The toolkit." lead="A production-oriented stack shaped by years of building distributed systems, modernizing live platforms and turning complex engineering constraints into reliable products." />
        <Reveal className="toolkit-rail">
          <div className="toolkit-rail-track" aria-label="Core technologies">
            {rail.map((item, index) => <span key={`${item}-${index}`}>{item}{index < rail.length - 1 && <i aria-hidden="true" />}</span>)}
          </div>
        </Reveal>
        <div className="toolkit-grid">
          {toolkit.map((item) => (
            <Reveal key={item.index} className={`toolkit-card ${item.featured ? 'toolkit-card-featured' : ''}`}>
              <div className="toolkit-card-top">
                <div className="toolkit-index">{item.index}</div>
                <div className="toolkit-level">{item.level}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="toolkit-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {item.signal && <div className="toolkit-signal"><span />{item.signal}</div>}
            </Reveal>
          ))}
        </div>
        <Reveal className="toolkit-footer">
          <div>
            <span className="toolkit-footer-label">HOW I USE THE STACK</span>
            <strong>Choose the simplest technology that solves the real system constraint.</strong>
          </div>
          <div className="toolkit-footer-code">SYSTEM / DESIGN / BUILD / MEASURE / EVOLVE</div>
        </Reveal>
      </div>
    </section>
  );
}
