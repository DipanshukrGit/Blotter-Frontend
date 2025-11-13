import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API_ENDPOINTS.BLOG.SINGLE(id));
        if (res.data.success && res.data.blog) {
          setBlog(res.data.blog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.response?.data?.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mb-4"></div>
          <p className="text-xl text-gray-600">Loading blotter...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-200">
          <div className="text-6xl mb-4">😕</div>
          <div className="text-xl text-red-600 font-semibold">{error || "Blotter not found"}</div>
          <p className="text-gray-600 mt-2">The blotter you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full inline-block">
            {blog.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>
        
        {/* Author & Date */}
        <div className="flex items-center gap-4 mb-6">
          {blog.author?.image && (
            <img
              className="w-12 h-12 rounded-full ring-2 ring-purple-200 object-cover"
              src={API_ENDPOINTS.IMAGES(blog.author.image)}
              alt={blog.author.name}
            />
          )}
          <div>
            <p className="font-semibold text-gray-800">{blog.author?.name}</p>
            {blog.createdAt && (
              <p className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.image && (
        <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="w-full h-auto object-cover"
            src={API_ENDPOINTS.IMAGES(blog.image)}
            alt={blog.title}
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {blog.description}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Share
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
          Bookmark
        </button>
      </div>
    </article>
  );
};
export default SingleBlog;