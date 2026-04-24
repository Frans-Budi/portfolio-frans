import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/content/site";
import { cn } from "@/lib/utils";
import { StackChip } from "@/components/sections/stack-chip";

type SkillGroup = (typeof skillGroups)[number];

type StackCardProps = {
  group: SkillGroup;
};

export function StackCard({ group }: StackCardProps) {
  const Icon = group.icon;

  return (
    <Card
      className={cn(
        "border-white/10 transition-colors duration-300 hover:border-primary/20",
        group.emphasis === "primary" && "bg-linear-to-br from-card to-card/80 lg:col-span-2",
        group.emphasis === "secondary" && "bg-card/95",
        group.emphasis === "supporting" && "bg-card/82",
      )}
    >
      <CardContent
        className={cn(
          "flex h-full flex-col",
          group.emphasis === "primary" ? "px-4 py-2 md:px-8 md:py-4" : "px-4 py-2 md:px-6 md:py-3",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className={cn(
                "flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary",
                group.emphasis === "primary" && "size-12",
              )}
            >
              <Icon className={cn("size-5", group.emphasis === "primary" && "size-6")} />
            </div>
            <h3
              className={cn(
                "mt-5 font-heading font-semibold text-foreground",
                group.emphasis === "primary" ? "text-2xl" : "text-xl",
              )}
            >
              {group.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
              {group.description}
            </p>
          </div>
          {group.emphasis === "primary" ? (
            <span className="rounded-full border border-primary/18 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Primary
            </span>
          ) : null}
        </div>

        <div className={cn("mt-6 flex flex-wrap gap-2.5", group.emphasis === "primary" && "mt-7")}>
          {group.items.map((item) => (
            <StackChip key={item.label} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
