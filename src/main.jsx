import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./companent/ScrollToTop.jsx";

const BlogLayout = lazy(() => import("./companent/BlogLayout.jsx"));
const Blog = lazy(() => import("./companent/Blog.jsx"));
const BlogPost = lazy(() => import("./companent/BlogPost.jsx"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-teal-500/40 border-t-teal-400 animate-spin" />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<App locale="en" />} />
          <Route path="/ar" element={<App locale="ar" />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
