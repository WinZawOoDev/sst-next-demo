import React from 'react'
import { getArticleById } from '@/services/spaceflight'
import Image from 'next/image'
import { format } from 'date-fns';


export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: number }>
}) {

    const { id } = await params;
    const article = await getArticleById(id);

    return (
        <div className='relative max-w-5xl mx-auto '>
            <div className="w-full min-h-[10em] mb-2">
                <Image
                    src={article?.image_url || '/placeholder.png'}
                    alt="Placeholder Image"
                    width={400}
                    height={300}
                    className="w-full max-w-3xl object-cover rounded-xs"
                />
            </div>
            <div className="relative min-h-[7em] w-full mx-auto">
                <div className="my-0.5">
                    <h4 className="block font-semibold text-2xl pb-1 pt-3.5">{article?.title}</h4>
                    <div className="flex items-center justify-between">
                        <div className="text-base font-semibold text-gray-500">
                            {article?.authors.map((author, index) => (
                                <span key={index + Math.random()} className="text-gray-800">{author.name}</span>
                            ))}
                            <span className="pl-1.5 text-gray-900 italic">{format(article?.published_at!, 'P')}</span>
                        </div>
                        <span className="block text-sm font-light text-gray-950"># {article?.news_site}</span>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-left text-gray-700 text-lg">
                        {article?.summary}
                    </p>
                </div>
            </div>
        </div>
    )
}