import React, { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  // Default class names
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

// ForwardRef is used to pass the ref to the underlying element
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        // Util function to merge class names
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

// Set the display name to be used in React DevTools
Paragraph.displayName = "Paragraph";

export default Paragraph;
