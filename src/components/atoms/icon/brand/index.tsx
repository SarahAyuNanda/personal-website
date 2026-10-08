import { cn } from "@/lib/utils";
import { ComponentType, SVGProps } from "react";
import { SimpleIcon } from "simple-icons";

export type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;
export type BrandIconSource = SimpleIcon | SvgComponent;

const isSimpleIcon = (icon: BrandIconSource): icon is SimpleIcon =>
  typeof icon === "object" && "path" in icon;

export const BrandIcon = ({
  icon,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { icon: BrandIconSource }) => {
  if (isSimpleIcon(icon)) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill={`#${icon.hex}`}
        className={cn("size-5 shrink-0", className)}
        {...props}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    );
  }

  const Svg = icon;
  return <Svg className={cn("size-5 shrink-0", className)} {...props} />;
};
