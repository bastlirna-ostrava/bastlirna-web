import styles from "./terminal-rule.module.css";

export const TerminalRule = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 text-xs text-primary ${className}`} aria-hidden="true">
    <span>&gt;</span>
    <span className={styles.track}><span className={styles.packet} /></span>
  </div>
);
