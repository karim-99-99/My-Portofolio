import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import BlogLayout from "./companent/BlogLayout.jsx";
import Blog from "./companent/Blog.jsx";
import BlogPost from "./companent/BlogPost.jsx";
import ScrollToTop from "./companent/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App locale="en" />} />
        <Route path="/ar" element={<App locale="ar" />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
