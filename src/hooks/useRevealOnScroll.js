import { useEffect } from "react";

export default function useRevealOnScroll(
  selector = ".section, .hero .hero-inner",
  options = {}
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
        ...options,
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, options.rootMargin, options.threshold]);
}
