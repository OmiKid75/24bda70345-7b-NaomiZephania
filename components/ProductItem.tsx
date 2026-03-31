"use client";

import { useState } from "react";
import { useProductStore, type Product } from "../store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateQuantity = useProductStore((state) => state.updateQuantity);
  const [draft, setDraft] = useState(String(product.quantity));

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-zinc-900 dark:text-zinc-50">{product.name}</span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{product.category}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200">${product.price.toFixed(2)}</span>
        <div className="flex items-center gap-2">
          <label htmlFor={`qty-${product.id}`} className="text-sm text-zinc-500 dark:text-zinc-400">Qty</label>
          <Input id={`qty-${product.id}`} type="number" min={0} value={draft} onChange={(e) => setDraft(e.target.value)} className="w-16" />
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const parsed = parseInt(draft, 10);
            if (!isNaN(parsed) && parsed >= 0) {
              updateQuantity(product.id, parsed);
            } else {
              setDraft(String(product.quantity));
            }
          }}
        >
          Save
        </Button>
        <Button variant="destructive" size="sm" onClick={() => deleteProduct(product.id)} aria-label={`Delete ${product.name}`}>
          Delete
        </Button>
      </div>
    </div>
  );
}
