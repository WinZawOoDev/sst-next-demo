import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] sm:item s-start">
        <div className="">
          <h1 className="text-5xl font-mono font-semibold">Space Flight,</h1>
        </div>
        <div className="border border-gray-200 rounded-md bg-white">
          <h2 className="bg-gray-50 p-2.5">Card Header</h2>
          <div className="p-3">
            Card Content
          </div>
          <div className="bg-gray-50 p-2.5">
            Card Footer
          </div>
        </div>
      </main>
    </div>
  );
}
