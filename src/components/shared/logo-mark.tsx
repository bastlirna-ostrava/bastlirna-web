// 16×16 pixel mark: a chip with a "b" etched into it and an amber pin-1 marker.
// g = cyan (primary) body/pins, a = amber, . = transparent. Keep in sync with src/app/icon.svg.
export const LOGO_GRID = [
  "................",
  "................",
  "...gggggggggg...",
  "...ggggggggag...",
  "...gg..gggggg...",
  ".gggg..gggggggg.",
  "...gg..gggggg...",
  "...gg.....ggg...",
  ".gggg..gg..gggg.",
  "...gg..gg..gg...",
  "...gg..gg..gg...",
  ".gggg.....ggggg.",
  "...gggggggggg...",
  "...gggggggggg...",
  "................",
  "................",
];

const COLORS = { g: "#2fd6ff", a: "#f3b21b" } as const;

export const logoRects = () =>
  LOGO_GRID.flatMap((row, y) => {
    const runs: { x: number; y: number; w: number; fill: string }[] = [];
    let x = 0;
    while (x < row.length) {
      const c = row[x] as keyof typeof COLORS | ".";
      if (c === ".") { x++; continue; }
      let w = 1;
      while (row[x + w] === c) w++;
      runs.push({ x, y, w, fill: COLORS[c] });
      x += w;
    }
    return runs;
  });

export const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 2 16 12" shapeRendering="crispEdges" className={className} aria-hidden="true">
    {logoRects().map((r) => <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />)}
  </svg>
);
