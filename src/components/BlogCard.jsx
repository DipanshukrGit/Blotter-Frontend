import React from 'react'
import { Link } from 'react-router-dom'
import { API_ENDPOINTS } from '../config/api'

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  // Format date if it's a date string
  const formatDate = (dateValue) => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string' && dateValue.includes('T')) {
      return new Date(dateValue).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
    return dateValue;
  };

  return (
    <div className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100'>
      {/* Image Container */}
      <Link to={`/blog/${id}`} className="block relative overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={image ? API_ENDPOINTS.IMAGES(image) : '/placeholder-image.png'} 
            alt={title || "Blotter image"} 
            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Blotter';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm bg-white/20">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link to={`/blog/${id}`}>
          <h2 className='text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 cursor-pointer'>
            {title}
          </h2>
        </Link>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          {author_image && (
            <div className="relative">
              <img  
                className="w-10 h-10 rounded-full ring-2 ring-purple-200 object-cover" 
                src={API_ENDPOINTS.IMAGES(author_image)} 
                alt={author_name || "Author"} 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">{author_name}</p>
            {date && (
              <p className="text-xs text-gray-500">{formatDate(date)}</p>
            )}
          </div>
          <Link 
            to={`/blog/${id}`}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Read →
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  )
}

export default BlogCard