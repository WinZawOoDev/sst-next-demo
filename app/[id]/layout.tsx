import React from 'react'

export default function ArticleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className=''>
            {children}
        </main>
    )
}
