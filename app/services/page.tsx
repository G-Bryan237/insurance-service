import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  FaCar, 
  FaHeart, 
  FaHome, 
  FaHeartbeat, 
  FaBuilding, 
  FaFire, 
  FaRing, 
  FaPlane,
  FaChevronRight,
  FaChevronLeft
} from "react-icons/fa";

const services = [
	{
		id: 1,
		slug: "car-insurance",
		icon: FaCar,
		title: "Car Insurance",
		description:
			"Comprehensive auto insurance coverage to protect you on every journey.",
		color: "bg-blue-500",
		features: [
			"Collision Coverage",
			"Comprehensive Coverage",
			"Liability Protection",
			"24/7 Roadside Assistance",
		],
	},
	{
		id: 2,
		slug: "life-insurance",
		icon: FaHeart,
		title: "Life Insurance",
		description:
			"Secure your family's financial future with our flexible life insurance policies.",
		color: "bg-red-500",
		features: [
			"Term Life Insurance",
			"Whole Life Insurance",
			"Universal Life",
			"Final Expense Insurance",
		],
	},
	{
		id: 3,
		slug: "home-insurance",
		icon: FaHome,
		title: "Home Insurance",
		description:
			"Protect your home and belongings with comprehensive homeowner's insurance.",
		color: "bg-green-500",
		features: [
			"Dwelling Coverage",
			"Personal Property Protection",
			"Liability Coverage",
			"Additional Living Expenses",
		],
	},
	{
		id: 4,
		slug: "health-insurance",
		icon: FaHeartbeat,
		title: "Health Insurance",
		description:
			"Comprehensive health coverage for you and your family's medical needs.",
		color: "bg-purple-500",
		features: [
			"Preventive Care",
			"Emergency Services",
			"Prescription Drugs",
			"Specialist Visits",
		],
	},
	{
		id: 5,
		slug: "business-insurance",
		icon: FaBuilding,
		title: "Business Insurance",
		description:
			"Protect your business with tailored commercial insurance solutions.",
		color: "bg-indigo-500",
		features: [
			"General Liability",
			"Property Insurance",
			"Workers' Compensation",
			"Professional Liability",
		],
	},
	{
		id: 6,
		slug: "travel-insurance",
		icon: FaPlane,
		title: "Travel Insurance",
		description:
			"Stay protected during your travels with comprehensive travel coverage.",
		color: "bg-cyan-500",
		features: [
			"Trip Cancellation",
			"Medical Emergency",
			"Baggage Protection",
			"Travel Delay",
		],
	},
	{
		id: 7,
		slug: "fire-insurance",
		icon: FaFire,
		title: "Fire Insurance",
		description:
			"Specialized coverage against fire damage to your property and business assets.",
		color: "bg-orange-500",
		features: [
			"Property Fire Damage",
			"Business Asset Protection",
			"Smoke Damage Coverage",
			"Emergency Response",
		],
	},
	{
		id: 8,
		slug: "marriage-insurance",
		icon: FaRing,
		title: "Marriage Insurance",
		description:
			"Wedding protection coverage for cancellations, vendor issues, and unexpected events.",
		color: "bg-pink-500",
		features: [
			"Wedding Cancellation",
			"Vendor Issues",
			"Weather Protection",
			"Gift Coverage",
		],
	},
];

export default function AllServices() {
	return (
		<div className="min-h-screen">
			<Navigation />

			<section className="py-20 bg-gray-900 relative">
				{/* Background image */}
				<div 
					className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-5"
					style={{
						backgroundImage: "url('https://bracketweb.com/insurwp/wp-content/uploads/2022/07/services-two-shape-1.png')"
					}}
				></div>
				
				<div className="container mx-auto px-4 relative z-10 max-w-7xl">
					<div className="text-center mb-16">
						<div className="flex items-center justify-center mb-4">
							<FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
							<FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
							<FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
							<p className="text-blue-400 font-semibold">OUR SERVICES</p>
							<FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
							<FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
							<FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
						</div>
						<h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							We're covering all the insurance fields
						</h1>
						<p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
							Comprehensive insurance solutions tailored to protect what matters most to you and your business. We provide reliable coverage across all major insurance categories.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{services.map((service) => (
							<Link key={service.id} href={`/services/${service.slug}`}>
								<div className="group cursor-pointer h-full">
									<div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 h-full flex flex-col">
										<div className="bg-blue-500 group-hover:bg-blue-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300">
											<service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
										</div>

										<h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
											{service.title}
										</h3>

										<p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-grow">
											{service.description}
										</p>

										<div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
											{service.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-center text-gray-400"
												>
													<div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mr-2"></div>
													<span className="text-xs">
														{feature}
													</span>
												</div>
											))}
										</div>

										<div className="mt-auto">
											<span className="text-gray-400 group-hover:text-blue-400 font-semibold text-xs md:text-sm transition-colors">
												Learn More →
											</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
