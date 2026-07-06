type IconProps = { className?: string };

export function Arrow({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function Star({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.18 5.73 6.12.3-4.77 3.85 1.6 5.92L12 15.25 6.87 18.6l1.6-5.92L3.7 8.83l6.12-.3L12 2.8Z"/></svg>;
}
export function Menu({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
