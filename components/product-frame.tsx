import Image from "next/image";

interface ProductFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function ProductFrame({ src, alt, priority = false, className = "" }: ProductFrameProps) {
  return (
    <div className={`product-frame ${className}`}>
      <div className="frame-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="frame-label">profluento / workspace</span>
      </div>
      <div className="frame-media">
        <Image src={src} alt={alt} width={2620} height={1944} priority={priority} sizes="(max-width: 768px) 94vw, 1100px" />
      </div>
    </div>
  );
}
