import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = {
  "choose-right-insurance-policy-family": {
    id: 1,
    title: "How to choose the right insurance policy for your family",
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
    readTime: "5 min read"
  },
  "understanding-auto-insurance-coverage": {
    id: 2,
    title: "Understanding auto insurance coverage options",
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
    readTime: "7 min read"
  },
  "home-insurance-natural-disasters": {
    id: 3,
    title: "Protecting your home from natural disasters",
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
    readTime: "6 min read"
  },
  "health-insurance-open-enrollment": {
    id: 4,
    title: "Making the most of health insurance open enrollment",
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
    readTime: "8 min read"
  },
  "small-business-insurance-essentials": {
    id: 5,
    title: "Small business insurance essentials every entrepreneur should know",
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
    readTime: "9 min read"
  },
  "travel-insurance-international-trips": {
    id: 6,
    title: "Why travel insurance is essential for international trips",
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
    readTime: "6 min read"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
