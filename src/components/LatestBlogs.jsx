import { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);
  const latestBlogs = blogData.slice(-6).reverse();
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Latest Blotters</span>
        </h2>
        <p className="text-lg text-gray-600">
          Explore the most recent stories from our community
        </p>
      </div>
      
      {latestBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <div key={blog._id || index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard
                id={blog._id}
                title={blog.title}
                image={blog.image}
                category={blog.category}
                author_name={blog.author?.name}
                author_image={blog.author?.image}
                date={blog.createdAt}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <p className="text-gray-600">No blotters available yet. Check back soon!</p>
        </div>
      )}
    </section>
  );
};

export default LatestBlogs;