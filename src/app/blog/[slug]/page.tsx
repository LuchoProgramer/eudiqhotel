
import { BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import BlogContentWithWhatsApp from '../BlogContentWithWhatsApp';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return notFound();

  return <BlogContentWithWhatsApp post={post} />;
}
