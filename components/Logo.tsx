export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M4 6 L20 34 L36 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide">VERINNO</span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted">Furniture · Est. 1994</span>
      </div>
    </div>
  );
}
