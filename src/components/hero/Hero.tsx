import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Hero() {
  const rail = ['JAVA', 'SPRING BOOT', 'AWS', 'MICROSERVICES', 'KAFKA', 'SYSTEM DESIGN'];
  return (
    <section className="hero">
      <div className="container hero-grid">
        <Reveal>
          <div className="eyebrow">{profile.title}</div>
          <div className="hero-keywords">{profile.keywords}</div>
          <h1>Designing distributed systems <span>that scale beyond the obvious.</span></h1>
          <p className="hero-copy">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">Explore my work ↗</Link>
            <a className="button button-secondary" href={profile.resume}>Download résumé ↓</a>
          </div>
          <div className="tech-strip">{rail.map((item) => <span className="pill" key={item}>{item}</span>)}</div>
        </Reveal>
        <Reveal className="hero-visual">
          <div className="system-card">
            <div className="system-status"><span className="status-dot" />SYSTEM STATUS / ONLINE</div>
            <svg aria-label="Illustrative distributed system topology" className="system-svg" role="img" viewBox="0 0 520 430">
              <g className="links">
                <line className="link" x1="260" x2="260" y1="60" y2="125" />
                <line className="link" x1="260" x2="120" y1="165" y2="245" />
                <line className="link" x1="260" x2="260" y1="165" y2="245" />
                <line className="link" x1="260" x2="400" y1="165" y2="245" />
                <line className="link" x1="120" x2="190" y1="285" y2="360" />
                <line className="link" x1="260" x2="260" y1="285" y2="360" />
                <line className="link" x1="400" x2="330" y1="285" y2="360" />
              </g>
              <TopologyNode x={205} y={25} width={110} label="REQUEST" />
              <TopologyNode x={195} y={125} width={130} label="API LAYER" />
              <TopologyNode x={62} y={245} width={116} label="SERVICE A" />
              <TopologyNode x={202} y={245} width={116} label="SERVICE B" />
              <TopologyNode x={342} y={245} width={116} label="SERVICE C" />
              <TopologyNode x={140} y={360} width={100} label="DATA" />
              <TopologyNode x={210} y={360} width={100} label="EVENTS" />
              <TopologyNode x={280} y={360} width={100} label="WORKERS" />
            </svg>
            <div className="floating-label label-a">CONCURRENCY / DISTRIBUTED LOCKING</div>
            <div className="floating-label label-b">FAULT TOLERANCE / EVENT FLOW</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TopologyNode({ x, y, width, label }: { x: number; y: number; width: number; label: string }) {
  return <g>
    <rect className="node" height="40" rx="9" width={width} x={x} y={y} />
    <circle className="node-core" cx={x + 15} cy={y + 20} r="4" />
    <text x={x + 27} y={y + 23}>{label}</text>
  </g>;
}
