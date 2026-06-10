import { useRef, useState, useCallback } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  label: string;
  alt: string;
}

export function BeforeAfter({ before, after, label, alt }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div className="group">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink shadow-card ring-1 ring-black/5 select-none cursor-ew-resize"
        onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
        onMouseMove={(e) => dragging.current && update(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => update(e.touches[0].clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
      >
        <img src={after} alt={`${alt} after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${alt} before`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-soft ring-2 ring-[var(--gold)]">
            <span className="text-ink text-xs font-semibold tracking-wider">‹ ›</span>
          </div>
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
          After
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}