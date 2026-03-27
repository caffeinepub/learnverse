import { useEffect, useRef, useState } from "react";
import { normalizeWord, turkishDictionary } from "../data/turkishDictionary";

interface Props {
  text: string;
  onWordLookup?: (word: string) => void;
  lookedUpWords?: Set<string>;
}

interface TooltipState {
  word: string;
  definition: string;
  anchorRect: DOMRect;
}

export function WordDefinitionTooltip({
  text,
  onWordLookup,
  lookedUpWords,
}: Props) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!tooltip) return;
    const close = (e: MouseEvent) => {
      const el = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(el)) {
        setTooltip(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [tooltip]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, raw: string) => {
    e.stopPropagation();
    const norm = normalizeWord(raw);
    if (!norm) return;
    const def = turkishDictionary[norm] || "Tanım bulunamadı";
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ word: raw, definition: def, anchorRect: rect });
    if (
      onWordLookup &&
      def !== "Tanım bulunamadı" &&
      !lookedUpWords?.has(norm)
    ) {
      onWordLookup(norm);
    }
  };

  const tokens = text.split(/(\s+)/);

  return (
    <span ref={containerRef} className="relative">
      {tokens.map((token, i) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: text tokens are positional
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        const norm = normalizeWord(token);
        const has = !!turkishDictionary[norm];
        return (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: text tokens are positional
            key={i}
            type="button"
            onClick={(e) => handleClick(e, token)}
            className={[
              "inline leading-relaxed transition-colors duration-100 rounded-sm px-px",
              has
                ? "text-yellow-200 underline decoration-dotted underline-offset-2 hover:bg-yellow-400/25"
                : "hover:bg-white/10 cursor-default",
            ].join(" ")}
          >
            {token}
          </button>
        );
      })}

      {tooltip && (
        <TooltipBubble
          word={tooltip.word}
          definition={tooltip.definition}
          anchorRect={tooltip.anchorRect}
          containerRef={containerRef}
          onClose={() => setTooltip(null)}
        />
      )}
    </span>
  );
}

function TooltipBubble({
  word,
  definition,
  anchorRect,
  containerRef,
  onClose,
}: {
  word: string;
  definition: string;
  anchorRect: DOMRect;
  containerRef: React.RefObject<HTMLSpanElement | null>;
  onClose: () => void;
}) {
  const containerRect = containerRef.current?.getBoundingClientRect();
  const left = Math.max(0, anchorRect.left - (containerRect?.left ?? 0));
  const bottom = (containerRect?.bottom ?? 0) - anchorRect.top + 6;

  return (
    <span
      role="tooltip"
      data-ocid="stories.word_tooltip"
      className="absolute z-50 w-52 rounded-xl bg-slate-900/95 border border-yellow-400/40 shadow-2xl px-3 py-2 text-left"
      style={{ left, bottom }}
    >
      <span className="flex items-start gap-2">
        <span className="flex-1">
          <span className="block font-bold text-yellow-300 text-sm mb-0.5">
            {word}
          </span>
          <span className="block text-white/85 text-xs leading-snug">
            {definition}
          </span>
        </span>
        <button
          type="button"
          data-ocid="stories.word_tooltip_close"
          onClick={onClose}
          className="text-white/40 hover:text-white text-lg leading-none mt-0.5 shrink-0"
        >
          ×
        </button>
      </span>
    </span>
  );
}
