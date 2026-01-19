// src/lib/cms-client.ts

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
const TENANT_ID = 'eudiqhotel';

interface CMSBlock {
    type: 'text' | 'image' | 'video';
    content?: string;
    src?: string;
    url?: string;
    alt?: string;
    style?: string; // Agregar style para text blocks
}

interface CMSBlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    blocks: CMSBlock[];
    image?: string;
    category?: string;
    tags?: string[];
    status: string;
    createdAt: string;
    updatedAt?: string;
    author: {
        name: string;
        uid: string;
    };
    metaTitle?: string;
    metaDescription?: string;
}

interface CMSResponse {
    blogs: CMSBlogPost[];
    total: number;
    tenant: string;
}

// Convertir bloques del CMS a HTML
function convertBlocksToHTML(blocks: CMSBlock[]): string {
    return blocks.map((block: any) => {
        switch (block.type) {
            case 'text':
                // Manejar diferentes estilos de texto
                const content = block.content || '';
                switch (block.style) {
                    case 'subheading':
                        return `<h3>${content}</h3>`;
                    case 'paragraph':
                        return `<p>${content}</p>`;
                    case 'list-bullet':
                        // Convertir saltos de línea en items de lista
                        const items = content.split('\n').filter((item: string) => item.trim());
                        return `<ul>${items.map((item: string) => `<li>${item}</li>`).join('')}</ul>`;
                    default:
                        return `<p>${content}</p>`;
                }

            case 'image':
                const imgSrc = block.src || block.url;
                return `<img src="${imgSrc}" alt="${block.alt || 'Imagen del blog'}" />`;

            case 'video':
                const videoUrl = block.src || block.url;
                if (videoUrl?.includes('tiktok')) {
                    const videoIdMatch = videoUrl.match(/video\/(\d+)/i);
                    const videoId = videoIdMatch ? videoIdMatch[1] : '';
                    if (!videoId) return '';
                    return `<blockquote class="tiktok-embed" cite="${videoUrl}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
            <section><a target="_blank" href="${videoUrl}">Ver en TikTok</a></section>
          </blockquote>`;
                }
                if (videoUrl) {
                    return `<div class="aspect-video my-4">
            <iframe src="${videoUrl}" class="w-full h-full rounded-lg" allowfullscreen></iframe>
          </div>`;
                }
                return '';

            default:
                return '';
        }
    }).join('');
}

// Transformar post del CMS al formato de eudiq
function transformCMSPost(cmsPost: CMSBlogPost) {
    return {
        slug: cmsPost.slug,
        title: cmsPost.title,
        updatedAt: cmsPost.updatedAt || cmsPost.createdAt,
        summary: cmsPost.excerpt || cmsPost.metaDescription || '',
        content: convertBlocksToHTML(cmsPost.blocks),
        image: cmsPost.image || '',
        author: cmsPost.author.name,
        tags: cmsPost.tags || [],
        isCMSPost: true
    };
}

// Obtener todos los blogs del CMS
export async function getCMSBlogs(limit = 20) {
    try {
        const response = await fetch(
            `${CMS_API_URL}/api/blogs?tenant=${TENANT_ID}&limit=${limit}`,
            {
                next: { revalidate: 300 } // Cache 5 minutos
            }
        );

        if (!response.ok) {
            console.error('CMS API error:', response.status, response.statusText);
            return [];
        }

        const data: CMSResponse = await response.json();

        if (!data.blogs) {
            return [];
        }

        return data.blogs.map(transformCMSPost);
    } catch (error) {
        console.error('Error fetching CMS blogs:', error);
        return [];
    }
}

// Obtener blog por slug del CMS
export async function getCMSBlogBySlug(slug: string) {
    try {
        // Obtener todos los blogs y buscar por slug
        const response = await fetch(
            `${CMS_API_URL}/api/blogs?tenant=${TENANT_ID}&limit=100`,
            {
                next: { revalidate: 600 } // Cache 10 minutos
            }
        );

        if (!response.ok) {
            return null;
        }

        const data: CMSResponse = await response.json();

        if (!data.blogs) {
            return null;
        }

        // Buscar el blog por slug
        const blog = data.blogs.find((b: CMSBlogPost) => b.slug === slug);

        if (!blog) {
            return null;
        }

        return transformCMSPost(blog);
    } catch (error) {
        console.error('Error fetching CMS blog by slug:', error);
        return null;
    }
}
