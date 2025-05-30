import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      slug: "choose-right-insurance-policy-family",
      title: "How to choose the right insurance policy for your family",
      excerpt: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac turpis egestas. Aliquam viverra arcu.",
      date: "December 15, 2024",
      author: "John Smith",
      category: "Life Insurance",
      readTime: "5 min read"
    },
    {
      id: 2,
      slug: "understanding-auto-insurance-coverage",
      title: "Understanding auto insurance coverage options",
      excerpt: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac turpis egestas. Aliquam viverra arcu.",
      date: "December 12, 2024",
      author: "Sarah Johnson",
      category: "Auto Insurance",
      readTime: "7 min read"
    },
    {
      id: 3,
      slug: "top-10-tips-lowering-home-insurance-premiums",
      title: "Top 10 tips for lowering your home insurance premiums",
      excerpt: "Pellentesque habitant morbi tristique senectus netus et malesuada fames ac turpis egestas. Aliquam viverra arcu.",
      date: "December 10, 2024",
      author: "Mike Davis",
      category: "Home Insurance",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">LATEST NEWS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From our blog and news
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest insurance insights, tips, and industry news 
            to help you make informed decisions about your coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Blog image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">Blog Image</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Blog content */}
                  <div className="p-8">
                    {/* Meta information */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Read More
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all posts button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
