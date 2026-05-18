import { useEffect, useRef } from "react";

/** Hook that adds 'in-view' class to .reveal elements when they enter viewport */
export const useScrollReveal = () => {
  const observed = useRef(false);
  useEffect(() => {
    if (observed.current) return;
    observed.current = true;

    const tracked = new WeakSet<HTMLElement>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observeNew = (root: Element) => {
      root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (!tracked.has(el)) {
          tracked.add(el);
          io.observe(el);
        }
      });
    };

    observeNew(document.body);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("reveal") && !tracked.has(node)) {
              tracked.add(node);
              io.observe(node);
            }
            observeNew(node);
          }
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};
