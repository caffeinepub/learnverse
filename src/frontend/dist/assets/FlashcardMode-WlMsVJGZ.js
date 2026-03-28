import { r as reactExports, j as jsxRuntimeExports } from "./index-DJxeeYpK.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-BsZfyaI1.js";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      exitingComponents.current.add(key);
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
function FlashcardMode({
  cards,
  onClose,
  onComplete,
  lang = "tr",
  accentColor = "from-indigo-600 to-purple-600"
}) {
  const [index, setIndex] = reactExports.useState(0);
  const [flipped, setFlipped] = reactExports.useState(false);
  const [results, setResults] = reactExports.useState({});
  const [finished, setFinished] = reactExports.useState(false);
  const isEn = lang === "en";
  const card = cards[index];
  const total = cards.length;
  const knownCount = Object.values(results).filter(Boolean).length;
  const handleAnswer = (knew) => {
    const newResults = { ...results, [card.key]: knew };
    setResults(newResults);
    if (index + 1 >= total) {
      setFinished(true);
      const knownFinal = Object.values(newResults).filter(Boolean).length;
      onComplete == null ? void 0 : onComplete(knownFinal, total);
    } else {
      setFlipped(false);
      setTimeout(() => setIndex((i) => i + 1), 150);
    }
  };
  const handleRestart = () => {
    setIndex(0);
    setFlipped(false);
    setResults({});
    setFinished(false);
  };
  if (finished) {
    const pct = total > 0 ? Math.round(knownCount / total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        className: "bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-gray-800 mb-2", children: isEn ? "Session Complete!" : "Tur Tamamlandı!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-6", children: isEn ? `You knew ${knownCount} out of ${total} cards` : `${total} karttan ${knownCount} tanesini bildiniz` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 rounded-2xl p-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-indigo-600 mb-1", children: [
              pct,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: isEn ? "Correct" : "Doğru" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-3 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-green-400 h-3 rounded-full transition-all",
                style: { width: `${pct}%` }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "flashcard.restart_button",
                onClick: handleRestart,
                className: "flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-2xl transition-all",
                children: isEn ? "🔄 Restart" : "🔄 Tekrar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "flashcard.close_button",
                onClick: onClose,
                className: "flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all",
                children: isEn ? "✕ Close" : "✕ Kapat"
              }
            )
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-black/60 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-sm", children: [
        index + 1,
        " / ",
        total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "flashcard.close_button",
          onClick: onClose,
          className: "text-white/70 hover:text-white font-bold text-xl",
          children: "✕"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-2 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-white h-2 rounded-full transition-all duration-300",
        style: { width: `${index / total * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { rotateY: flipped ? -90 : 90, opacity: 0 },
          animate: { rotateY: 0, opacity: 1 },
          exit: { rotateY: flipped ? 90 : -90, opacity: 0 },
          transition: { duration: 0.25 },
          onClick: () => setFlipped((f) => !f),
          className: `w-full max-w-sm bg-gradient-to-br ${accentColor} rounded-3xl p-8 shadow-2xl cursor-pointer select-none min-h-[240px] flex flex-col items-center justify-center`,
          "data-ocid": "flashcard.canvas_target",
          children: !flipped ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            card.emoji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: card.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-2xl text-center leading-snug", children: card.front }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-sm mt-4", children: isEn ? "Tap to reveal" : "Çevirmek için dokun" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs font-bold uppercase tracking-wider mb-3", children: isEn ? "Answer" : "Cevap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg text-center leading-relaxed", children: card.back })
          ] })
        },
        `${card.key}-${flipped}`
      ) }),
      flipped && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "flex gap-4 mt-6 w-full max-w-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "flashcard.secondary_button",
                onClick: () => handleAnswer(false),
                className: "flex-1 bg-red-400/80 hover:bg-red-500 text-white font-black py-4 rounded-2xl transition-all text-sm",
                children: isEn ? "❌ Didn't know" : "❌ Bilemedim"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "flashcard.primary_button",
                onClick: () => handleAnswer(true),
                className: "flex-1 bg-green-400/80 hover:bg-green-500 text-white font-black py-4 rounded-2xl transition-all text-sm",
                children: isEn ? "✅ Knew it" : "✅ Bildim"
              }
            )
          ]
        }
      ),
      !flipped && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 w-full max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "flashcard.pagination_prev",
            disabled: index === 0,
            onClick: () => {
              setFlipped(false);
              setIndex((i) => i - 1);
            },
            className: "flex-1 bg-white/20 disabled:opacity-30 hover:bg-white/30 text-white font-bold py-3 rounded-2xl transition-all",
            children: "←"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFlipped(true),
            className: "flex-[3] bg-white/30 hover:bg-white/40 text-white font-bold py-3 rounded-2xl transition-all text-sm",
            children: isEn ? "Show Answer" : "Cevabı Göster"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "flashcard.pagination_next",
            disabled: index >= total - 1,
            onClick: () => {
              setFlipped(false);
              setIndex((i) => i + 1);
            },
            className: "flex-1 bg-white/20 disabled:opacity-30 hover:bg-white/30 text-white font-bold py-3 rounded-2xl transition-all",
            children: "→"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center gap-1 flex-wrap", children: cards.map((c, i) => {
      const r = results[c.key];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-3 h-3 rounded-full ${r === true ? "bg-green-400" : r === false ? "bg-red-400" : i === index ? "bg-white" : "bg-white/30"}`
        },
        c.key
      );
    }) })
  ] });
}
export {
  AnimatePresence as A,
  FlashcardMode as F
};
