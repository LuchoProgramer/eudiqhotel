import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blog-posts';

export const revalidate = 60; // Enable ISR

export const metadata = {
  title: 'Blog | Eudiq Hotel | Turismo y Eventos en Loja',
};

export default async function BlogIndex() {
  // Obtener posts del CMS + estáticos
  const allPosts = await getAllBlogPosts();
  const publishedPosts = allPosts.filter(post => !(post as any).draft);

  return (
    <main className="mt-8 max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog de Eudiq Hotel</h1>
      <ul className="space-y-6">
        {publishedPosts.map(post => (
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
