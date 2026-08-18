import { useEffect } from "react";

/** Revela elementos com a classe .reveal quando entram na viewport. */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
