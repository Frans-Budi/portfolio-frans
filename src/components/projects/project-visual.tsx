import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProjectVisual({
  src,
  alt,
  priority = false,
  className,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-secondary grid-texture",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(92,225,230,0.22),transparent_32rem)]" />
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={760}
        priority={priority}
        className="relative h-full w-full object-cover"
      />
    </div>
  );
}
