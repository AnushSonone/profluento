"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

export function DemoVideo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="demo-video">
      <button type="button" className="demo-poster" onClick={() => setOpen(true)} aria-label="Play the Profluento product demo">
        <Image src="/assets/images/demo-image.PNG" alt="Profluento product interface preview" width={2537} height={1503} sizes="(max-width: 768px) 94vw, 1100px" />
        <span className="demo-play" aria-hidden="true">
          <Play />
        </span>
        <span className="demo-caption">
          See how Profluento moves from discovery to outreach in one workspace.
        </span>
      </button>

      {open && (
        <div className="demo-modal" role="dialog" aria-modal="true" aria-label="Profluento product demo">
          <div className="demo-backdrop" onClick={() => setOpen(false)} />
          <div className="demo-dialog">
            <button type="button" className="demo-close" onClick={() => setOpen(false)} aria-label="Close demo">
              <X aria-hidden="true" />
            </button>
            <video
              controls
              preload="metadata"
              playsInline
              poster="/assets/images/demo-image.PNG"
              title="Profluento product demo"
            >
              <source src="/assets/video/profluento-demo.mov" type="video/quicktime" />
              <source src="/assets/video/profluento-demo.mp4" type="video/mp4" />
              <p>
                Your browser cannot play this video.{" "}
                <a href="/assets/video/profluento-demo.mov">Download the demo</a> instead.
              </p>
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
