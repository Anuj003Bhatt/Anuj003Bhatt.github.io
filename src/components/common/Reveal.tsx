import { useEffect, useRef, type PropsWithChildren } from 'react';

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      element.classList.add('visible');
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`.trim()}>{children}</div>;
}
