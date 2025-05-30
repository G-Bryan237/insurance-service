import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "choose-right-insurance-policy-family",
    title: "How to choose the right insurance policy for your family",
    excerpt: "A comprehensive guide to selecting the perfect insurance coverage that protects your family's financial future and provides peace of mind.",
    content: "Full blog post content here...",
    date: "December 15, 2024",
    author: "John Smith",
    category: "Life Insurance",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "understanding-auto-insurance-coverage",
    title: "Understanding auto insurance coverage options",
    excerpt: "Learn about different types of auto insurance coverage and how to choose the right protection for your vehicle and driving needs.",
    content: "Full blog post content here...",
    date: "December 12, 2024",
    author: "Sarah Johnson",
    category: "Auto Insurance",
    readTime: "7 min read"
  },
  {
    id: 3,
    slug: "home-insurance-natural-disasters",
    title: "Protecting your home from natural disasters",
    excerpt: "Essential tips for ensuring your home insurance adequately covers natural disaster damage and what additional coverage you might need.",
    date: "December 10, 2024",
    author: "Mike Chen",
    category: "Home Insurance",
    readTime: "6 min read"
  },
  {
    id: 4,
    slug: "health-insurance-open-enrollment",
    title: "Making the most of health insurance open enrollment",
    excerpt: "Navigate open enrollment season with confidence. Learn how to compare plans and choose the best health coverage for your needs.",
    date: "December 8, 2024",
    author: "Dr. Emily Rodriguez",
    category: "Health Insurance",
    readTime: "8 min read"
  },
  {
    id: 5,
    slug: "small-business-insurance-essentials",
    title: "Small business insurance essentials every entrepreneur should know",
    excerpt: "Protect your business with the right insurance coverage. Learn about essential policies every small business owner needs.",
    date: "December 5, 2024",
    author: "David Kim",
    category: "Business Insurance",
    readTime: "9 min read"
  },
  {
    id: 6,
    slug: "travel-insurance-international-trips",
    title: "Why travel insurance is essential for international trips",
    excerpt: "Discover the importance of travel insurance for international travel and what coverage options provide the best protection abroad.",
    date: "December 3, 2024",
    author: "Lisa Thompson",
    category: "Travel Insurance",
    readTime: "6 min read"
  }
];

export default function AllBlogPosts() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              All Blog Posts
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest insurance insights, tips, and industry news.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">Blog Image</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
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

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">Read More</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
