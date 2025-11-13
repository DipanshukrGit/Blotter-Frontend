import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Blotter</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your go-to platform for sharing stories, insights, and creativity. 
            Join a community of writers and readers passionate about storytelling.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <span className="gradient-text font-semibold">Blotter</span>,
              your go-to platform for insightful articles on technology, lifestyle,
              and beyond. Our mission is to share knowledge and inspire creativity
              through engaging and well-researched content.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a tech enthusiast, a passionate writer, or someone looking for inspiration,
              we've got something for you! Join thousands of writers sharing their stories.
            </p>
            
            <div className="flex gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-gray-600">Writers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-gray-600">Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100K+</div>
                <div className="text-sm text-gray-600">Readers</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src={assets.about} 
              alt="About Blotter" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;