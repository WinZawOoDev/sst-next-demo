import { getArticles } from "@/services/spaceflight";
import Image from "next/image";
import { format } from "date-fns"

export default async function Home() {

  const articles = await getArticles()
  console.log("🚀 ~ Home ~ articles:", articles)

  return (
    <main className="min-h-screen mx-52 pb-14 sm:p-14 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-7">
        <h1 className="text-4xl font-semibold text-gray-700">Space Flight Articles</h1>
      </div>
      <div className="grid grid-cols-2 gap-16">
        {articles?.results.map(article => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </main>
  );
}


function Article(props: SpaceArticle) {
  return (
    <section className="relative max-w-min-2xl rounded-xs bg-white">
      <div className="w-full min-h-max-[10em] items-center flex justify-center mb-2">
        <Image
          src={props.image_url || '/placeholder.png'}
          alt={props.title}
          width={400}
          height={300}
          className="w-4xl max-h-[20em] h-[25em] object-cover rounded-t-md"
        />
      </div>
      <div className="relative min-h-[7em] w-full mx-auto">
        <div className="my-0.5">
          <h4 className="block font-semibold text-xl pb-1 pt-2.5 underline underline-offset-4 decoration-1 cursor-pointer">{props.title}</h4>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-gray-500">
              {props.authors.map((author, index) => (
                <span key={index + Math.random()} className="text-gray-800">{author.name}</span>
              ))}
              <span className="pl-1.5 text-gray-900 italic">{format(props.published_at, 'P')}</span>
            </div>
            <span className="block text-xs font-light text-gray-950"># {props.news_site}</span>
          </div>
        </div>
        <div className="my-2.5">
          <p className="line-clamp-3 text-center text-gray-700 max-w-2xl text-sm">
            {props.summary}
          </p>
        </div>
      </div>
    </section>
  )
}