import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog de Eudiq Hotel</h1>
      <ul className="space-y-6">
        {BLOG_POSTS.map(post => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} className="text-2xl text-[#038C7F] font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">Última actualización: {post.updatedAt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
