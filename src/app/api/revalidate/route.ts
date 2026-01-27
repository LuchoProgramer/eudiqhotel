import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Verificar el token secreto
        const secret = request.nextUrl.searchParams.get('secret');

        if (secret !== process.env.REVALIDATION_SECRET) {
            return NextResponse.json(
                { message: 'Invalid token' },
                { status: 401 }
            );
        }

        // Obtener parámetros
        const slug = request.nextUrl.searchParams.get('slug');

        // Revalidar las rutas afectadas
        const pathsToRevalidate = [
            '/blog', // Lista principal de blogs
        ];

        if (slug) {
            pathsToRevalidate.push(`/blog/${slug}`); // Post individual
        }

        // Revalidar todas las rutas
        for (const path of pathsToRevalidate) {
            revalidatePath(path);
            console.log(`✅ Revalidated: ${path}`);
        }

        return NextResponse.json({
            revalidated: true,
            paths: pathsToRevalidate,
            now: Date.now()
        });

    } catch (err) {
        console.error('Error revalidating:', err);
        return NextResponse.json(
            { message: 'Error revalidating', error: String(err) },
            { status: 500 }
        );
    }
}
