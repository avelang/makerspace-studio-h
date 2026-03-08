const StudioLogo = ({ className = "" }: { className?: string }) => (
  <span className={`font-mono font-bold ${className}`}>
    <span className="text-primary">st</span>
    <span className="text-secondary">U</span>
    <span className="text-primary">dio</span>
    <span className="text-primary">.h</span>
  </span>
);

export default StudioLogo;
