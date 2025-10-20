import { BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return notFound();

  // Datos para el schema BlogPosting
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.updatedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Eudiq Hotel Loja"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eudiq Hotel Loja",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eudiqhotel.com/Eudiq.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://eudiqhotel.com/blog/${post.slug}`
    },
    "description": `Artículo del blog de Eudiq Hotel Loja: ${post.title}`
  };

  return (
    <>
      <head>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </head>
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-500 mb-4">Última actualización: {post.updatedAt}</p>
        <div className="prose prose-lg">
          <p>Este es un borrador de blog. Aquí irá el contenido real del post <strong>{post.title}</strong>.</p>
          <p>Puedes editar <code>src/data/blog-posts.ts</code> para agregar más información y contenido.</p>
        </div>
      </main>
    </>
  );
}
