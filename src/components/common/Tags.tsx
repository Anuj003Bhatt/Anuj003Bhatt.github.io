export function Tags({ items, className = 'tag-list' }: { items: string[]; className?: string }) {
  return <div className={className}>{items.map((item) => <span className={className === 'toolkit-tags' ? undefined : 'tag'} key={item}>{item}</span>)}</div>;
}
