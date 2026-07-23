import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiCalendar, FiHeart, FiArrowDown } from 'react-icons/fi';
import { blogPosts } from '../data/portfolioData';
import { useLikes } from '../hooks/useLikes';
import './Blog.css';

const BlogCard = ({ post, variants }) => {
  const { count } = useLikes(post.slug, post.likes ?? 0);

  return (
    <motion.div
      className="blog-card"
      variants={variants}
      whileHover={{ y: -8 }}
    >
      <Link to={`/blog/${post.slug}`} className="blog-card-link">
        <span className="blog-category">{post.category}</span>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>

        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>

        <div className="blog-meta">
          <span><FiCalendar size={13} /> {post.date}</span>
          <span><FiClock size={13} /> {post.readTime}</span>
          <span className="blog-like-count"><FiHeart size={13} /> {count}</span>
          <span className="blog-read-more">Read <FiArrowRight /></span>
        </div>
      </Link>
    </motion.div>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  // Unique category list for the filter chips.
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  // Filter by category, then sort by date.
  const visiblePosts = useMemo(() => {
    const filtered = activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

    return [...filtered].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortOrder === 'newest' ? db - da : da - db;
    });
  }, [activeCategory, sortOrder]);

  return (
    <section className="blog" id="blog">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Blogging</h2>
          <p className="section-subtitle">Because not every thought fits in a commit message.</p>
        </motion.div>

        <motion.div
          className="blog-controls"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="blog-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="blog-sort">
            <FiArrowDown size={14} />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              aria-label="Sort posts"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </motion.div>

        {visiblePosts.length > 0 ? (
          <motion.div
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${activeCategory}-${sortOrder}`}
          >
            {visiblePosts.map((post) => (
              <BlogCard key={post.slug} post={post} variants={cardVariants} />
            ))}
          </motion.div>
        ) : (
          <p className="blog-empty">No posts in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
