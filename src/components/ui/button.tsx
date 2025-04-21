"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Slot component to handle asChild functionality
// Use a more appropriate type for the component
const Slot = React.forwardRef<HTMLElement, React.ComponentPropsWithRef<any> & { children: React.ReactElement }>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    // Handle ref merging safely
    const mergeRefs = (originalRef: React.Ref<any> | null | undefined, forwardedRef: React.ForwardedRef<HTMLElement>) => {
      const handleRef = (value: any) => {
        // Apply the original child ref if it exists
        if (typeof originalRef === 'function') {
          originalRef(value);
        } else if (originalRef !== null && originalRef !== undefined) {
          (originalRef as React.MutableRefObject<any>).current = value;
        }

        // Apply the forwarded ref
        if (typeof forwardedRef === 'function') {
          forwardedRef(value);
        } else if (forwardedRef !== null && forwardedRef !== undefined) {
          (forwardedRef as React.MutableRefObject<any>).current = value;
        }
      };

      return handleRef;
    };

    // Create a combined props object excluding ref
    const combinedProps = { ...props };
    
    // Add the ref separately using a type assertion to ensure TypeScript accepts it
    return React.cloneElement(
      children,
      {
        ...combinedProps,
        // Cast to any to avoid TypeScript errors with ref property
        ref: mergeRefs(
          // Get the original ref if it exists
          children.ref || null,
          ref
        ),
      } as React.ComponentPropsWithRef<any>
    );
  }
);
Slot.displayName = "Slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "underline-offset-4 hover:underline text-primary": variant === "link",
            "bg-[#E86343] text-white hover:bg-[#D85233]": variant === "primary",
            "bg-[#2A9187] text-white hover:bg-[#237E74]": variant === "secondary",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
