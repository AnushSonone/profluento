"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VIDEO_MP4 = "/assets/video/profluento-demo.mp4";
const VIDEO_MOV = "/assets/video/profluento-demo.mov";
const POSTER = "/assets/images/demo-image.PNG";

export function DemoVideo() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    const video = videoRef.current;
    if (video) {
      void video.play().catch(() => {
        // Autoplay may be blocked until the user hits play; controls remain available.
      });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="demo-video">
      <button
        type="button"
        className="demo-poster"
        onClick={() => setOpen(true)}
        aria-label="Play the Profluento product demo"
      >
        <Image
          src={POSTER}
          alt="Profluento product interface preview"
          width={3594}
          height={2072}
          sizes="(max-width: 768px) 94vw, 1100px"
        />
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
              ref={videoRef}
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={POSTER}
              title="Profluento product demo"
            >
              <source src={VIDEO_MP4} type="video/mp4" />
              <source src={VIDEO_MOV} type="video/quicktime" />
              <p>
                Your browser cannot play this video.{" "}
                <a href={VIDEO_MP4}>Download the demo</a> instead.
              </p>
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
