import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center bg-gradient-to-tl from-[#ffff] via-red-300 to-pink-500 text-white brightness-100 hover:text-white transition-all duration-300 hover:bg-pink-400 hover:brightness-110  hover:scale-110 active:scale-90 active:duration-300 rounded-full uppercase",
  {
    variants: {
      variant: {
        default: "bg-background  text-blue-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:w-[150px] bg-none border-4 border-pink-800 hover:bg-gradient-to-tl  from-blue-300 to-pink-800 text-blue-800 hover:text-white brightness-110 text-white hover:text-blue-800 transition-all duration-300 hover:bg-pink-400 ",
        link: "rounded-lg text-primary md:text-lg text-xs w-[60px] h-[20px] md:w-[100px] md:h-[50px] hover:bg-background border-gray-300 border-4 opacity-30 hover:opacity-100 ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "md:w-[100px] md:h-[50px] w-[80px] h-[40px] rounded-full md:text-xl text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
