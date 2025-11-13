import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Blogs = () => {
  const { blogData } = useContext(StoreContext);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">All Blotters</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover amazing stories, insights, and perspectives from our community of writers. 
            Each blotter is a window into someone's thoughts, experiences, and creativity.
          </p>
        </div>

        {/* Blog Grid */}
        {blogData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog, index) => (
              <div key={blog._id || index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard
                  id={blog._id}
                  title={blog.title}
                  image={blog.image}
                  category={blog.category}
                  author_name={blog.author?.name}
                  author_image={blog.author?.image}
                  date={blog.createdAt || blog.date}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Blotters Yet</h2>
            <p className="text-gray-600">Be the first to share your story!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;