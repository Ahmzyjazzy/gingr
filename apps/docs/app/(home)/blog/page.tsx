import { blog } from '@/lib/source';
import Link from 'next/link';
import React from 'react'

export default function Page() {
  const posts = blog.getPages();

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='mb-4 border-b-4 border-fd-foreground pb-2 text-4xl font-bold md:text-5xl'>
        Ging3r Blog
      </h1>
      <div className='rounded grid gap-4'>
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className='group flex flex-col items-start gap-1 border p-5 rounded hover:shadow-md'
          >
            <h2 className='text-lg font-semibold group-hover:underline'>
              {post.data.title}
            </h2>
            <p className='text-sm text-fd-muted-foreground'>
              {post.data.description}
            </p>
            <p className='text-sm text-fd-muted-foreground'>
              {new Date(post.data.date).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
