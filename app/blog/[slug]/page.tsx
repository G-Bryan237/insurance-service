// app/blog/[slug]/page.tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react"; // ⬅️ unwraps Promise props in Server Components

// Strong model type for posts
type BlogPost = {
  id: number;
  title: string;
  image: string;
  content: string; // HTML string
  date: string;
  author: string;
  category: string;
  readTime: string;
};

// Your data (unchanged)
const blogPosts: Record<string, BlogPost> = {
  "choose-right-insurance-policy-family": {
    id: 1,
    title: "How to choose the right insurance policy for your family",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Choosing the right insurance policy for your family is one of the most important financial decisions you'll make. With so many options available, it can feel overwhelming to determine which coverage best suits your family's unique needs.</p>
      <h3>Understanding Your Family's Needs</h3>
      <p>Before diving into policy options, take time to assess your family's specific circumstances. Consider factors such as your family size, ages of dependents, current health status, and financial obligations.</p>
      <h3>Types of Family Insurance</h3>
      <ul>
        <li>Life Insurance - Provides financial security for your beneficiaries</li>
        <li>Health Insurance - Covers medical expenses and treatments</li>
        <li>Disability Insurance - Protects your income if you become unable to work</li>
        <li>Long-term Care Insurance - Covers extended care needs</li>
      </ul>
      <h3>Key Factors to Consider</h3>
      <p>When evaluating insurance policies, consider the coverage amount, premium costs, deductibles, and policy terms. It's also important to review the insurance company's financial stability and customer service reputation.</p>
    `,
    date: "December 15, 2024",
    author: "John Smith",
    category: "Life Insurance",
    readTime: "5 min read",
  },
  "understanding-auto-insurance-coverage": {
    id: 2,
    title: "Understanding auto insurance coverage options",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Auto insurance can be complex, with various coverage types serving different purposes. Understanding these options helps you make informed decisions about protecting yourself and your vehicle.</p>
      <h3>Liability Coverage</h3>
      <p>Liability coverage is mandatory in most states and covers damages you cause to others. This includes bodily injury liability and property damage liability.</p>
      <h3>Collision and Comprehensive</h3>
      <p>Collision coverage pays for damage to your vehicle from accidents, while comprehensive coverage protects against theft, vandalism, and weather-related damage.</p>
      <h3>Additional Coverage Options</h3>
      <ul>
        <li>Uninsured/Underinsured Motorist Coverage</li>
        <li>Medical Payments Coverage</li>
        <li>Personal Injury Protection (PIP)</li>
        <li>Rental Car Coverage</li>
        <li>Gap Insurance</li>
      </ul>
      <h3>Choosing the Right Deductible</h3>
      <p>Your deductible affects both your premium and out-of-pocket costs. Higher deductibles mean lower premiums but more expense when filing a claim.</p>
    `,
    date: "December 12, 2024",
    author: "Sarah Johnson",
    category: "Auto Insurance",
    readTime: "7 min read",
  },
  "home-insurance-natural-disasters": {
    id: 3,
    title: "Protecting your home from natural disasters",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Natural disasters can cause devastating damage to your home. Understanding what your homeowner's insurance covers and what additional protection you might need is crucial for comprehensive protection.</p>
      <h3>Standard Coverage Limitations</h3>
      <p>Most standard homeowner's policies cover wind and hail damage but exclude floods and earthquakes. It's important to understand these limitations and consider additional coverage.</p>
      <h3>Flood Insurance</h3>
      <p>Flood insurance is typically purchased separately through the National Flood Insurance Program (NFIP) or private insurers. Even if you're not in a high-risk flood zone, flooding can occur anywhere.</p>
      <h3>Earthquake Coverage</h3>
      <p>Earthquake insurance is usually an add-on to your homeowner's policy or a separate policy. This coverage is especially important in seismically active areas.</p>
      <h3>Preparation Tips</h3>
      <ul>
        <li>Create a home inventory with photos and receipts</li>
        <li>Review your coverage limits annually</li>
        <li>Understand your policy's replacement cost vs. actual cash value</li>
        <li>Consider umbrella insurance for additional liability protection</li>
      </ul>
    `,
    date: "December 10, 2024",
    author: "Mike Chen",
    category: "Home Insurance",
    readTime: "6 min read",
  },
  "health-insurance-open-enrollment": {
    id: 4,
    title: "Making the most of health insurance open enrollment",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Open enrollment is your annual opportunity to review and change your health insurance coverage. Making informed decisions during this period can save you money and ensure you have the right coverage.</p>
      <h3>Review Your Current Plan</h3>
      <p>Start by evaluating your current plan's performance. Consider your healthcare usage, prescription needs, and any changes in your health status or family situation.</p>
      <h3>Compare Plan Types</h3>
      <ul>
        <li>HMO (Health Maintenance Organization) - Lower costs, primary care physician required</li>
        <li>PPO (Preferred Provider Organization) - More flexibility, higher costs</li>
        <li>EPO (Exclusive Provider Organization) - No referrals needed, network restrictions</li>
        <li>HDHP (High-Deductible Health Plan) - Lower premiums, higher deductibles</li>
      </ul>
      <h3>Key Factors to Consider</h3>
      <p>When comparing plans, look at premiums, deductibles, out-of-pocket maximums, network providers, and prescription drug coverage. Don't just focus on the monthly premium.</p>
      <h3>Special Enrollment Periods</h3>
      <p>Certain life events may qualify you for a special enrollment period outside of the annual open enrollment, such as marriage, having a baby, or losing other coverage.</p>
    `,
    date: "December 8, 2024",
    author: "Dr. Emily Rodriguez",
    category: "Health Insurance",
    readTime: "8 min read",
  },
  "small-business-insurance-essentials": {
    id: 5,
    title:
      "Small business insurance essentials every entrepreneur should know",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Starting a business involves many risks, and proper insurance coverage is essential for protecting your investment, employees, and customers. Here's what every small business owner should know about business insurance.</p>
      <h3>General Liability Insurance</h3>
      <p>This foundational coverage protects your business against claims of bodily injury or property damage. It's often required by landlords, clients, and vendors.</p>
      <h3>Professional Liability Insurance</h3>
      <p>Also called errors and omissions (E&O) insurance, this coverage protects against claims of professional mistakes or negligence in your services.</p>
      <h3>Commercial Property Insurance</h3>
      <p>Protects your business property, including buildings, equipment, inventory, and furniture, against covered perils like fire, theft, and vandalism.</p>
      <h3>Workers' Compensation</h3>
      <p>Required in most states if you have employees, workers' comp covers medical expenses and lost wages for work-related injuries or illnesses.</p>
      <h3>Industry-Specific Considerations</h3>
      <ul>
        <li>Cyber liability insurance for businesses handling sensitive data</li>
        <li>Commercial auto insurance for business vehicles</li>
        <li>Business interruption insurance for operational continuity</li>
        <li>Employment practices liability for HR-related claims</li>
      </ul>
    `,
    date: "December 5, 2024",
    author: "David Kim",
    category: "Business Insurance",
    readTime: "9 min read",
  },
  "travel-insurance-international-trips": {
    id: 6,
    title: "Why travel insurance is essential for international trips",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <p>International travel can be unpredictable, and medical emergencies or trip disruptions abroad can be costly. Travel insurance provides essential protection for international travelers.</p>
      <h3>Medical Coverage Abroad</h3>
      <p>Your domestic health insurance may not cover medical expenses abroad. Travel insurance can cover emergency medical treatment, hospital stays, and emergency evacuation.</p>
      <h3>Trip Cancellation and Interruption</h3>
      <p>If you need to cancel or cut short your trip due to covered reasons like illness, family emergencies, or severe weather, travel insurance can reimburse non-refundable expenses.</p>
      <h3>Baggage and Personal Effects</h3>
      <p>Coverage for lost, stolen, or damaged luggage and personal items can reimburse you for essential items and help replace important belongings.</p>
      <h3>Travel Delays and Missed Connections</h3>
      <p>Coverage for additional expenses due to covered travel delays, including meals, accommodation, and rebooking fees.</p>
      <h3>Pre-Existing Medical Conditions</h3>
      <p>Some policies offer coverage for pre-existing medical conditions if certain requirements are met, such as purchasing insurance within a specified time frame.</p>
      <h3>Adventure Sports Coverage</h3>
      <p>If you plan to participate in adventure activities, ensure your policy covers these activities, as many standard policies exclude high-risk sports.</p>
    `,
    date: "December 3, 2024",
    author: "Lisa Thompson",
    category: "Travel Insurance",
    readTime: "6 min read",
  },
};

type Params = { slug: string };
type PageProps = { params: Promise<Params> }; // ⬅️ Next 15: params is a Promise

export default function Page({ params }: PageProps) {
  const { slug } = use(params); // ⬅️ no async/await needed
  const post = blogPosts[slug];

  const entries = Object.entries(blogPosts) as [string, BlogPost][];
  const otherPosts = entries
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, p]) => ({ ...p, slug: s }));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8 lg:mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Blog</span>
          </Link>

          {/* Post Header */}
          <header className="mb-8 lg:mb-12">
            <div className="mb-4 lg:mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-gray-500 mb-6 lg:mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                {post.readTime}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-2xl shadow-lg mb-8 lg:mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-16 lg:mb-20">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Other Posts Section */}
          <section className="border-t border-gray-200 pt-12 lg:pt-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12">
              Other Posts You Might Like
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherPosts.map((otherPost) => (
                <Link key={otherPost.slug} href={`/blog/${otherPost.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={otherPost.image}
                            alt={otherPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {otherPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{otherPost.date}</span>
                          </div>
                          <span>•</span>
                          <span>{otherPost.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {otherPost.title}
                        </h3>

                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold text-sm">
                            Read More
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <User className="w-3 h-3" />
                            <span>{otherPost.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}

// Optional: keep metadata sync by using use()
export function generateMetadata({ params }: PageProps) {
  const { slug } = use(params);
  const post = blogPosts[slug];
  return {
    title: post ? post.title : "Blog",
    description: post ? `${post.title} – ${post.category}` : "Blog post",
  };
}
