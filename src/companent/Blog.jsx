// ============================================================
// Blog.jsx — Blog Listing Page | Karim Khamis Portfolio
// Place at: src/companent/Blog.jsx
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, categories } from "../data/blogPosts";

function BlogCard({ post }) {
  return (
    <div>
      <Link to={`/blog/${post.slug}`} className="block group">
        <article className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/10 rounded-2xl p-6 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full">
          {/* Category + Read time */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200 mb-3 leading-snug">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-gray-400 border border-slate-600/50">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
                <span className="text-xs font-bold text-teal-400">K</span>
              </div>
              <span className="text-xs text-gray-500">{post.author}</span>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
}

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = blogPosts.filter(p => p.featured)[0];

  return (
    <div className="text-white min-h-screen py-12 sm:py-16 lg:py-20 w-full">

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          DEV <span className="text-teal-400">BLOG</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Tutorials, case studies, and technical deep-dives on React, Django, React Native, OCR, and freelancing from Cairo, Egypt.
        </p>
      </div>

      {/* Featured Post */}
      {featured && (
        <Link to={`/blog/${featured.slug}`} className="block group mb-12">
          <article className="bg-gradient-to-br from-teal-900/30 to-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 tracking-wider uppercase">
                Featured
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-700/50 text-gray-400">
                {featured.category}
              </span>
              <span className="text-xs text-gray-500">{featured.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200 mb-4 leading-snug max-w-3xl">
              {featured.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
              {featured.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tags.slice(0, 4).map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-teal-400 text-sm font-semibold group-hover:underline">
              Read article →
            </span>
          </article>
        </Link>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {["All", ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-teal-500/20 border border-teal-400/60 text-teal-300"
                : "bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-gray-200 hover:border-slate-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 inline-block max-w-2xl">
          <p className="text-gray-300 mb-4">
            Want to work together? I'm available for freelance React, Django, and React Native projects.
          </p>
          <a
            href="https://wa.me/201036064417"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:from-teal-500 hover:to-teal-400 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
