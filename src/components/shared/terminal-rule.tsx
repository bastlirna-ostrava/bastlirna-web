export const TerminalRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 text-xs text-primary ${className}`} aria-hidden="true"><span>&gt;</span><span className="h-px w-40 bg-gradient-to-r from-primary to-transparent" /></div>
);
