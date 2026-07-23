import { motion } from 'framer-motion';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiHeart } from 'react-icons/fi';
import { blogPosts } from '../data/portfolioData';
import { useLikes } from '../hooks/useLikes';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const { count, liked, toggle } = useLikes(post?.slug, post?.likes ?? 0);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="blog-post">
      <div className="container blog-post-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="blog-post-back">
            <FiArrowLeft /> All posts
          </Link>

          <span className="blog-category">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>

          <div className="blog-post-meta">
            <span><FiCalendar size={13} /> {post.date}</span>
            <span><FiClock size={13} /> {post.readTime}</span>
          </div>

          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>

          {post.image && (
            <img
              className="blog-post-image"
              src={post.image}
              alt={post.imageAlt || post.title}
            />
          )}

          <div className="blog-post-body">
            {post.intro.map((para, i) => (
              <p key={i} className="blog-post-para">{para}</p>
            ))}

            <ul className="blog-post-points">
              {post.points.map((point, i) => (
                <li key={i}>
                  <span className="point-label">{point.title}</span>
                  <span className="point-body">{point.body}</span>
                </li>
              ))}
            </ul>

            <blockquote className="blog-post-quote">{post.closing}</blockquote>

            <div className="blog-post-callout">
              <span className="callout-label">Over to you</span>
              <p>{post.question}</p>
            </div>
          </div>

          {/* Like / upvote */}
          <div className="blog-post-actions">
            <motion.button
              className={`like-button ${liked ? 'liked' : ''}`}
              onClick={toggle}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-pressed={liked}
              aria-label={liked ? 'Remove like' : 'Like this post'}
            >
              <FiHeart size={18} />
              <span className="like-count">{count}</span>
              <span className="like-label">{liked ? 'Liked' : 'Like'}</span>
            </motion.button>
          </div>

          <Link to="/blog" className="blog-post-back bottom">
            <FiArrowLeft /> Back to all posts
          </Link>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPost;
