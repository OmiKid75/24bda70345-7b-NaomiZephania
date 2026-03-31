import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-1 w-full flex-col items-center py-16 px-6">
        <ProductList />
      </main>
    </div>
  );
}
