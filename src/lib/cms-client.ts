// src/lib/cms-client.ts

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
const CMS_API_KEY = process.env.NEXT_PUBLIC_CMS_API_KEY || '';

interface CMSBlock {
    type: 'text' | 'image' | 'video';
    content?: string;
    src?: string;
    url?: string;
    alt?: string;
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
}

interface CMSResponse {
    success: boolean;
    data: CMSBlogPost[];
    meta?: {
        total: number;
        limit: number;
    };
}

// Convertir bloques del CMS a HTML
function convertBlocksToHTML(blocks: CMSBlock[]): string {
    return blocks.map(block => {
        switch (block.type) {
            case 'text':
                return `<div class="cms-text">${block.content || ''}</div>`;

            case 'image':
                const imgSrc = block.src || block.url;
                return `<figure class="cms-image my-4">
          <img src="${imgSrc}" alt="${block.alt || 'Imagen del blog'}" class="w-full rounded-lg" />
        </figure>`;

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
        summary: cmsPost.excerpt || '',
        content: convertBlocksToHTML(cmsPost.blocks),
        image: cmsPost.image || '',
        author: cmsPost.author.name,
        tags: cmsPost.tags || [],
        isCMSPost: true
    };
}

// Obtener todos los blogs del CMS
export async function getCMSBlogs(limit = 20) {
    if (!CMS_API_KEY) {
        console.warn('CMS API Key not configured, skipping CMS blogs');
        return [];
    }

    try {
        const response = await fetch(
            `${CMS_API_URL}/api/public/blogs?limit=${limit}&published=true`,
            {
                headers: {
                    'X-API-Key': CMS_API_KEY,
                },
                next: { revalidate: 300 } // Cache 5 minutos
            }
        );

        if (!response.ok) {
            console.error('CMS API error:', response.status, response.statusText);
            return [];
        }

        const data: CMSResponse = await response.json();

        if (!data.success || !data.data) {
            return [];
        }

        return data.data.map(transformCMSPost);
    } catch (error) {
        console.error('Error fetching CMS blogs:', error);
        return [];
    }
}

// Obtener blog por slug del CMS
export async function getCMSBlogBySlug(slug: string) {
    if (!CMS_API_KEY) {
        return null;
    }

    try {
        const response = await fetch(
            `${CMS_API_URL}/api/public/blogs/${slug}`,
            {
                headers: {
                    'X-API-Key': CMS_API_KEY,
                },
                next: { revalidate: 600 } // Cache 10 minutos
            }
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();

        if (!data.success || !data.data) {
            return null;
        }

        return transformCMSPost(data.data);
    } catch (error) {
        console.error('Error fetching CMS blog by slug:', error);
        return null;
    }
}
