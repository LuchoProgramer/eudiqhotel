
import { BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import BlogContentWithWhatsApp from '../BlogContentWithWhatsApp';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | Eudiq Hotel',
      description: 'El artículo que buscas no existe.'
    };
  }

  return {
    title: `${post.title} | Blog Eudiq Hotel`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
      publishedTime: post.updatedAt,
      authors: [post.author || 'Eudiq Hotel'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : [],
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return notFound();

  return <BlogContentWithWhatsApp post={post} />;
}
