"use client";

import { useEffect } from "react";

/**
 * On first load, always land at the top of the page.
 * Disables browser scroll restoration and ignores leftover URL hashes
 * so the hero is visible instead of jumping mid-page.
 * In-page nav clicks still use normal hash + CSS smooth scrolling.
 */
export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);

    if (window.location.hash) {
      const { pathname, search } = window.location;
      history.replaceState(null, "", `${pathname}${search}`);
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      html.style.scrollBehavior = previousBehavior;
    });
  }, []);

  return null;
}
