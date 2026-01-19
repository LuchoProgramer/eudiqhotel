"use client";

import { useEffect } from 'react';

export default function TikTokLoader() {
    useEffect(() => {
        const loadTikTokScript = () => {
            const embeds = document.querySelectorAll('.tiktok-embed');
            if (embeds.length === 0) return;

            if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
                // @ts-ignore
                if (window.tiktok?.embed) {
                    // @ts-ignore
                    window.tiktok.embed.load();
                }
                return;
            }

            const script = document.createElement('script');
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        };

        loadTikTokScript();

        const observer = new MutationObserver((mutations) => {
            let shouldLoad = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) shouldLoad = true;
            });
            if (shouldLoad) loadTikTokScript();
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    return null;
}
