"use client";

import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return <input className={cn("rounded-md border border-zinc-200 px-3 py-1.5 bg-white text-sm text-zinc-900", className)} {...rest} />;
}
