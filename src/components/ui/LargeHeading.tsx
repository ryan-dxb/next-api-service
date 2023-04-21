import React, { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  // Default class names
  "text-black dark:text-white text-center lg:text-left font-extra-bold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

// ForwardRef is used to pass the ref to the underlying element
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        // Util function to merge class names
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

// Set the display name to be used in React DevTools
Heading.displayName = "Heading";

export default Heading;
