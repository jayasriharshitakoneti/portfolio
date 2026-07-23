import { useState, useCallback } from 'react';

// Lightweight, backend-free likes for blog posts.
// Each post has a starting `likes` seed (from the data). A visitor's like is
// stored per-browser in localStorage, so the count = seed + (liked ? 1 : 0).
// This is intentionally local only — there is no server to aggregate across
// visitors. Swap localStorage calls for an API if you ever add a backend.

const likesKey = (slug) => `blog-likes-${slug}`;
const likedKey = (slug) => `blog-liked-${slug}`;

const readCount = (slug, seed) => {
  const stored = localStorage.getItem(likesKey(slug));
  return stored === null ? seed : parseInt(stored, 10);
};

const readLiked = (slug) => localStorage.getItem(likedKey(slug)) === '1';

export const useLikes = (slug, seed = 0) => {
  const [count, setCount] = useState(() => readCount(slug, seed));
  const [liked, setLiked] = useState(() => readLiked(slug));

  const toggle = useCallback(() => {
    const nextLiked = !readLiked(slug);
    const base = readCount(slug, seed);
    const nextCount = nextLiked ? base + 1 : Math.max(seed, base - 1);

    setLiked(nextLiked);
    setCount(nextCount);
    localStorage.setItem(likedKey(slug), nextLiked ? '1' : '0');
    localStorage.setItem(likesKey(slug), String(nextCount));
  }, [slug, seed]);

  return { count, liked, toggle };
};
