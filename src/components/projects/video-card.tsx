import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type VideoCardProps = {
  title: string;
  project: string;
  note: string;
  youtubeUrl: string;
  thumbnail: string;
};

export function VideoCard({
  title,
  project,
  note,
  youtubeUrl,
  thumbnail,
}: VideoCardProps) {
  const hasVideo = Boolean(youtubeUrl);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-card">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <Image src={thumbnail} alt={`${title} thumbnail`} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-primary backdrop-blur">
            <Play className="ml-1 size-6 fill-current" />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">{project}</p>
        <h3 className="mt-2 font-heading text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
        <Button
          asChild={hasVideo}
          variant="outline"
          className="mt-5 w-full"
          disabled={!hasVideo}
        >
          {hasVideo ? (
            <Link href={youtubeUrl} target="_blank" rel="noreferrer">
              Watch on YouTube
            </Link>
          ) : (
            <span>Demo Coming Soon</span>
          )}
        </Button>
      </div>
    </article>
  );
}
