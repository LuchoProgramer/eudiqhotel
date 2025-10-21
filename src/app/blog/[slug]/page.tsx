
import { BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import BlogContentWithWhatsApp from '../BlogContentWithWhatsApp';

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return <BlogContentWithWhatsApp post={post} />;
}
