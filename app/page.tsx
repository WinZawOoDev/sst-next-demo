import { getArticles } from "@/services/spaceflight";
import Image from "next/image";

export default async function Home() {

  await getArticles()


  return (
    <main className="min-h-screen mx-52 pb-14 sm:p-14 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-5">
        <h1 className="text-4xl font-semibold text-gray-700">Space Flight Articles</h1>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </main>
  );
}


function Article() {
  return (
    <section className="relative max-w-min-2xl rounded-md bg-white">
      <div className="bg-gray-100 w-full min-h-[15em] items-center flex justify-center">
        <span className="font-thin text-gray-500">Image</span>
      </div>
      <div className="relative flex items-center min-h-[7em] w-full mx-auto ">
        <p className="line-clamp-3 text-center text-gray-700 max-w-2xl text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, nisi. Voluptatum omnis, qui in nostrum asperiores cupiditate necessitatibus commodi consequatur temporibus laboriosam reprehenderit hic culpa illum reiciendis aliquam officiis quam!
        </p>
      </div>
      <div className="relative w-full p-4">
        <div className="w-fit text-gray-600 text-sm">
          <span className="text-xs">Author:</span>
          <span className="font-semibold text-gray-700 text-xs"> John Doe</span>
        </div>
        <div className="w-fit text-gray-600 text-sm">
          <span className="text-xs">Date:</span>
          <span className="font-semibold text-gray-700 text-xs"> 2023-10-01</span>
        </div>
      </div>
    </section>
  )
}