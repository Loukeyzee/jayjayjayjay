import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WA_HREF =
  "https://wa.me/16478568201?text=Hi%20GlossHaus,%20I'd%20like%20a%20quote%20for%20my%20vehicle.";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShowTooltip(true), 15000);
    return () => clearTimeout(t);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && !dismissed && (
        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-ink shadow-soft animate-fade-in">
          <span>📸 Send photos for a fast quote</span>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="rounded-full p-1 hover:bg-muted transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center gap-2 rounded-full px-4 py-3 md:px-5 md:py-3.5 font-semibold text-white shadow-soft transition-transform hover:scale-105 wa-pulse"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-6 w-6 shrink-0 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.715.315-.53.57-.93 1.318-.93 2.063 0 .87.4 1.658.83 2.358 1.018 1.677 2.358 3.04 4.05 4.05.515.298 1.146.5 1.733.687.46.13 1.07.39 1.567.39.53 0 1.276-.218 1.59-.62.36-.46.475-1.13.475-1.69 0-.115-.043-.215-.07-.315-.072-.215-1.59-.99-1.93-.99zM16.95 24.5c-4.196 0-7.85-3.654-7.85-7.85 0-4.196 3.654-7.85 7.85-7.85 4.196 0 7.85 3.654 7.85 7.85 0 4.196-3.654 7.85-7.85 7.85zM16.95 7c-5.34 0-9.65 4.31-9.65 9.65 0 1.7.46 3.37 1.302 4.84L7 26.99l5.6-1.46a9.586 9.586 0 0 0 4.34 1.06c5.34 0 9.65-4.31 9.65-9.65S22.29 7 16.95 7z"/>
        </svg>
        <span className="hidden md:inline">Chat On WhatsApp</span>
      </a>
      <style>{`
        @keyframes wa-pulse {
          0%, 90%, 100% { box-shadow: 0 10px 30px -15px rgb(0 0 0 / 0.3), 0 0 0 0 rgba(37, 211, 102, 0.6); }
          92% { box-shadow: 0 10px 30px -15px rgb(0 0 0 / 0.3), 0 0 0 12px rgba(37, 211, 102, 0); }
        }
        .wa-pulse { animation: wa-pulse 10s infinite; }
      `}</style>
    </div>
  );
}

export default WhatsAppButton;