import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50",
  { variants: { variant: {
    default: "border-primary bg-primary text-background hover:bg-transparent hover:text-primary",
    // Fills bottom-to-top with the primary colour on hover/focus, ending up looking like the default variant.
    // Stepped easing keeps the terminal-like motion used elsewhere on the site.
    // Text colour flips once the fill is about halfway up, so the label stays readable during the animation.
    outline: "relative isolate overflow-hidden border-primary bg-transparent text-primary delay-150 motion-reduce:delay-0 before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-primary before:transition-transform before:duration-300 before:ease-[steps(6,end)] hover:text-background hover:before:scale-y-100 focus-visible:text-background focus-visible:before:scale-y-100 disabled:before:hidden motion-reduce:before:transition-none",
  } }, defaultVariants: { variant: "default" } },
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = ({ asChild = false, className, variant, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />;
};

