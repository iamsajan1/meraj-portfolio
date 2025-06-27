import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
       className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Golden Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 960"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="goldDotsBlog"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <circle cx="50" cy="50" r="2" fill="#f5c242" fillOpacity="0.25" />
              <path d="M0 50 H100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
              <path d="M50 0 V100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="960" fill="url(#goldDotsBlog)" />
        </svg>
      </div>

      <div className="container">
        <SectionTitle
          title="Latest Insights from Our Team"
          paragraph="Stay up to date with news, market updates, strategies, and insights directly from the Ahmad FX Team."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-block rounded-full border border-yellow-500 bg-yellow-500 px-8 py-3 text-white font-semibold transition hover:bg-transparent hover:text-yellow-500"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
