import Image from "next/image";

interface ProductFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function ProductFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: ProductFrameProps) {
  return (
    <div className={`product-frame ${className}`}>
      <div className="frame-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="frame-label">profluento / workspace</span>
      </div>
      <div className="frame-media">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 960px) 94vw, (max-width: 1440px) 48vw, 640px"
          className="product-frame-image"
        />
      </div>
    </div>
  );
}
