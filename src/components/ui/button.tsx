import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50",
  { variants: { variant: {
    default: "border-primary bg-primary text-background hover:bg-transparent hover:text-primary",
    outline: "border-primary bg-transparent text-primary hover:bg-primary hover:text-background",
  } }, defaultVariants: { variant: "default" } },
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = ({ asChild = false, className, variant, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />;
};

