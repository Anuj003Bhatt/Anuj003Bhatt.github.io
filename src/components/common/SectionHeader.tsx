import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function SectionHeader({ kicker, title, lead, className = '' }: {
  kicker: string;
  title: string;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`section-header ${className}`.trim()}>
      <div>
        <div className="kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
