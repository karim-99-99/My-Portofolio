// ============================================================
// BlogPost.jsx — Individual Blog Article Page
// Place at: src/companent/BlogPost.jsx
// ✅ Schema.org Article  ✅ GEO  ✅ LLM SEO
// ============================================================

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";

// Simple markdown-like renderer — converts ``` code blocks, ## headings, **bold**, etc.
function renderContent(content) {
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;
  let keyCounter = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={keyCounter++} className="my-6 rounded-xl overflow-hidden border border-slate-600/50">
          {lang && (
            <div className="bg-slate-700/80 px-4 py-2 text-xs text-teal-400 font-mono font-semibold">
              {lang}
            </div>
          )}
          <pre className="bg-slate-900/80 p-4 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={keyCounter++} className="text-xl sm:text-2xl font-bold text-teal-400 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={keyCounter++} className="text-lg sm:text-xl font-bold text-white mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map(h => h.trim());
      const rows = tableLines.slice(2).map(row =>
        row.split("|").filter(Boolean).map(cell => cell.trim())
      );
      elements.push(
        <div key={keyCounter++} className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-teal-500/10 border border-teal-500/20">
                {headers.map((h, idx) => (
                  <th key={idx} className="px-4 py-2 text-left text-teal-300 font-semibold border border-slate-600/30">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ridx) => (
                <tr key={ridx} className="border border-slate-600/30 hover:bg-slate-700/30">
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="px-4 py-2 text-gray-300 border border-slate-600/30">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={keyCounter++} className="my-4 space-y-2 pl-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300">
              <span className="text-teal-400 mt-1 flex-shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={keyCounter++} className="my-4 space-y-2 pl-4 list-decimal list-inside">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-gray-300" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={keyCounter++} className="my-8 border-slate-600/50" />);
      i++;
      continue;
    }

    // Empty line — spacing
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={keyCounter++} className="text-gray-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
    i++;
  }

  return elements;
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-gray-200 italic">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-slate-700/60 text-teal-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:underline">$1</a>');
}

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const related = post ? getRelatedPosts(slug, 3) : [];

  // Inject Article Schema.org
  useEffect(() => {
    if (!post) return;
    const existing = document.getElementById("blog-post-schema");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Person",
        name: "Karim Khamis",
        url: "https://www.karimkhamis.com",
      },
      publisher: {
        "@type": "Person",
        name: "Karim Khamis",
        url: "https://www.karimkhamis.com",
      },
      datePublished: post.date,
      dateModified: post.date,
      url: `https://www.karimkhamis.com/blog/${post.slug}`,
      keywords: post.tags.join(", "),
    };

    const script = document.createElement("script");
    script.id = "blog-post-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = `${post.title} | Karim Khamis`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", post.excerpt);

    return () => document.getElementById("blog-post-schema")?.remove();
  }, [post]);

  if (!post) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-400 mb-4">404</h1>
          <p className="text-gray-300 mb-6">Article not found.</p>
          <Link to="/blog" className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen py-12 sm:py-16 w-full">

      {/* Back */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
          <span className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 py-4 border-t border-b border-slate-700/50">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
            <span className="font-bold text-teal-400">K</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{post.author}</p>
            <p className="text-xs text-gray-400">Full-Stack Developer & AI/ML Researcher · Cairo, Egypt</p>
          </div>
          <a
            href="https://www.karimkhamis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-teal-400 hover:underline"
          >
            karimkhamis.com
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-gray-400 border border-slate-600/50">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl prose-invert">
        {renderContent(post.content)}
      </article>

      {/* Author CTA */}
      <div className="max-w-3xl mt-12 bg-gradient-to-br from-teal-900/30 to-slate-800/50 border border-teal-500/20 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-teal-500/20 border-2 border-teal-400/40 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-teal-400">K</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Karim Khamis</h3>
            <p className="text-sm text-gray-400 mb-3">Full-Stack Developer & AI/ML Researcher · Cairo, Egypt</p>
            <p className="text-sm text-gray-300 mb-4">
              Building web apps, mobile apps, and OCR systems. 30+ delivered projects, 98% OCR accuracy, 100% on-time rate. Available for freelance and full-time roles worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/201036064417" target="_blank" rel="noopener noreferrer"
                className="text-sm px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-colors">
                Hire Me
              </a>
              <a href="https://github.com/karim-99-99" target="_blank" rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 rounded-lg transition-colors">
                GitHub
              </a>
              <a href="https://www.karimkhamis.com" target="_blank" rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-slate-600 text-gray-400 hover:text-white hover:border-slate-500 rounded-lg transition-colors">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="max-w-3xl mt-12">
          <h2 className="text-xl font-bold text-teal-400 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(relPost => (
              <Link key={relPost.id} to={`/blog/${relPost.slug}`} className="group block">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-teal-400/30 transition-all duration-200">
                  <span className="text-xs text-teal-400 font-medium">{relPost.category}</span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors mt-1 mb-2 leading-snug line-clamp-2">
                    {relPost.title}
                  </h3>
                  <span className="text-xs text-gray-500">{relPost.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to blog */}
      <div className="max-w-3xl mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors"
        >
          ← All Articles
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
