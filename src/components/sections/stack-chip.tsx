import { cn } from "@/lib/utils";

type StackChipItem = {
  label: string;
  logoSrc?: string;
};

type StackChipProps = {
  item: StackChipItem;
  className?: string;
};

export function StackChip({ item, className }: StackChipProps) {
  const logoSrc = "logoSrc" in item ? item.logoSrc : undefined;

  return (
    <div className={cn("stack-chip", className)}>
      {logoSrc ? (
        <span
          className="stack-chip-logo"
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url("${logoSrc}")`,
            maskImage: `url("${logoSrc}")`,
          }}
        />
      ) : null}
      <span className="font-medium">{item.label}</span>
    </div>
  );
}
