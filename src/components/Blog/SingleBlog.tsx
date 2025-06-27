import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-yellow-100 dark:border-yellow-500/20 bg-white dark:bg-gray-900 shadow-lg hover:shadow-yellow-200 dark:hover:shadow-yellow-400 transition duration-300">
      {/* Image + Tag */}
      <Link href="/blog-details" className="relative block aspect-video w-full">
        <Image src={image} alt="blog image" fill className="object-cover rounded-t-2xl" />
        <span className="absolute top-4 left-4 z-10 rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold text-white shadow-md">
          {tags[0]}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3>
          <Link
            href="/blog-details"
            className="mb-3 block text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-b border-yellow-100 dark:border-yellow-500/20 pb-6">
          {paragraph}
        </p>

        {/* Author + Date */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden border border-yellow-300">
              <Image src={author.image} alt="author" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">By {author.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{author.designation}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-900 dark:text-white font-semibold">Date</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
