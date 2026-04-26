"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ImagePreviewDialogProps = {
  trigger: ReactNode;
  src: string;
  alt: string;
  title?: string;
  triggerAriaLabel?: string;
  sizes?: string;
  previewClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  priority?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ImagePreviewDialog({
  trigger,
  src,
  alt,
  title = "Image preview",
  triggerAriaLabel,
  sizes = "(max-width: 768px) calc(100vw - 2rem), 28rem",
  previewClassName = "aspect-4/5 rounded-lg",
  imageClassName = "object-cover",
  contentClassName = "max-w-md",
  priority = false,
  open,
  onOpenChange,
}: ImagePreviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild aria-label={triggerAriaLabel}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={contentClassName} showCloseButton={false}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="w-full">
          <div className="mb-3 flex justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                className="cursor-pointer rounded-full border-white/15 bg-background/80 backdrop-blur"
                aria-label={`Close ${title.toLowerCase()}`}
              >
                <X className="size-6" />
              </Button>
            </DialogClose>
          </div>
          <div
            className={`relative overflow-hidden border border-white/10 bg-secondary shadow-[0_30px_120px_rgba(0,0,0,0.45)] ${previewClassName}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className={imageClassName}
              priority={priority}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
