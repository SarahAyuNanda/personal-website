import { BrandIcon, BrandIconSource } from "@/components/atoms/icon/brand";
import { cn } from "@/lib/utils";

export const SkillBadge = ({
  skill,
  icon,
  className,
}: {
  skill: string;
  icon: BrandIconSource;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-foreground",
        className
      )}
    >
      <BrandIcon icon={icon} />
      {skill}
    </div>
  );
};
