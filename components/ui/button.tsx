"use client";

import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "destructive";
  children?: React.ReactNode;
};

export function Button({ size = "md", variant = "default", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition";
  const sizes: Record<string, string> = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };
  const variants: Record<string, string> = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50",
    destructive: "bg-red-600 text-white hover:bg-red-500",
  };

  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
