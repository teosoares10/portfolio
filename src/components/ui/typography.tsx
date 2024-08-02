import { cn } from "@/lib/utils";

type TypographyProps = {
  content: React.ReactNode;
  className?: string;
  as: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

export const Typography = ({
  content,
  className,
  as = "p",
}: TypographyProps) => {
  switch (as) {
    case "h1":
      return <h1 className={cn("", className)}>{content}</h1>;

    case "h2":
      return <h2 className={cn("", className)}>{content}</h2>;

    case "h3":
      return <h3 className={cn("", className)}>{content}</h3>;

    case "h4":
      return <h4 className={cn("", className)}>{content}</h4>;

    case "span":
      return <span className={cn("", className)}>{content}</span>;

    default:
      return <p className={className}>{content}</p>;
  }
};
