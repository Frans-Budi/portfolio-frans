"use client";

import Image from "next/image";
import { ImagePreviewDialog } from "@/components/ui/image-preview-dialog";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  src: string;
  previewSrc?: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProjectVisual({
  src,
  previewSrc,
  alt,
  priority = false,
  className,
}: ProjectVisualProps) {
  return (
    <ImagePreviewDialog
      src={previewSrc ?? src}
      alt={alt}
      title={alt}
      triggerAriaLabel={`Open preview for ${alt}`}
      priority={priority}
      contentClassName="max-w-6xl"
      sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) 80vw, 72rem"
      previewClassName="aspect-[16/9] rounded-lg"
      imageClassName="object-contain"
      trigger={
        <button
          type="button"
          className={cn(
            "relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-secondary text-left transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
            className,
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(92,225,230,0.12),transparent_32rem)]" />
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={760}
            priority={priority}
            className="relative h-full w-full object-cover"
          />
        </button>
      }
    />
  );
}
