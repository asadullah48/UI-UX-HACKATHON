import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  readTime: string;
  publishDate: string;
  imageSrc: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Going all-in with millennial design",
    slug: "/blog/millennial-design",
    readTime: "5 min",
    publishDate: "12 Oct 2022",
    imageSrc: "/blogs/Rectangle 13.png",
    imageAlt: "Millennial design blog post cover",
  },
  {
    id: "2",
    title: "Going all-in with millennial design",
    slug: "/blog/millennial-design-2",
    readTime: "5 min",
    publishDate: "12 Oct 2022",
    imageSrc: "/blogs/Rectangle 14.png",
    imageAlt: "Millennial design blog post cover",
  },
  {
    id: "3",
    title: "Going all-in with millennial design",
    slug: "/blog/millennial-design-3",
    readTime: "5 min",
    publishDate: "12 Oct 2022",
    imageSrc: "/blogs/Rectangle 15.png",
    imageAlt: "Millennial design blog post cover",
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={post.slug} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-medium font-[poppins] text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
            {post.title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <IoMdTime className="w-4 h-4" aria-hidden="true" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <LuCalendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.publishDate}>{post.publishDate}</time>
            </span>
          </div>
          
          <span className="inline-flex items-center text-black group-hover:text-gray-600 font-medium transition-colors duration-300">
            Read More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

const Blog: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="blog-heading"
            className="text-3xl sm:text-4xl font-medium font-[poppins] text-gray-900 mb-4"
          >
            Our Blogs
          </h2>
          <p className="text-lg text-gray-600 font-[poppins] max-w-2xl mx-auto">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-lg font-medium font-[poppins] text-black border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-all duration-300"
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
  
  In the above code, we have created a  BlogCard  component that will render a single blog post. We have also created a  Blog  component that will render multiple blog posts using the  BlogCard  component. 
  Now, let’s create a new page for the blog posts. 
  Step 4: Create a Blog Page 
  Create a new file named  blog.tsx  inside the  pages  directory and add the following code: