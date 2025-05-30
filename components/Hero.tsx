"use client";

import { useState, useEffect } from "react";
import { Shield, Heart, Car, Home, ArrowRight } from "lucide-react";

const slides = [
	{
		id: 1,
		title: "Comprehensive Life Insurance Plans",
		subtitle: "Secure Your Family's Future Today",
		description:
			"Protect your loved ones with our flexible life insurance policies. Get comprehensive coverage that adapts to your changing needs and provides peace of mind for years to come.",
		image:
			"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
		icon: Heart,
		buttonText: "Explore Life Insurance",
	},
	{
		id: 2,
		title: "Auto Insurance That Drives Value",
		subtitle: "Complete Protection on Every Journey",
		description:
			"From liability to comprehensive coverage, our auto insurance plans keep you protected on the road. Enjoy competitive rates and exceptional service when you need it most.",
		image:
			"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
		icon: Car,
		buttonText: "Get Auto Quote",
	},
	{
		id: 3,
		title: "Home Insurance Solutions",
		subtitle: "Protect Your Most Valuable Investment",
		description:
			"Safeguard your home and belongings with our comprehensive home insurance coverage. From natural disasters to theft, we've got you covered with personalized protection plans.",
		image:
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
		icon: Home,
		buttonText: "Secure Your Home",
	},
];

export function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const currentSlideData = slides[currentSlide];
	const IconComponent = currentSlideData.icon;

	return (
		<section
			id="home"
			className="relative h-[70vh] min-h-[500px] overflow-hidden"
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
				style={{ backgroundImage: `url(${currentSlideData.image})` }}
			/>

			{/* Diagonal Blue Overlay */}
			<div
				className="absolute inset-0 bg-blue-900/70"
				style={{
					clipPath:
						'polygon(0 0, 60% 0, 40% 100%, 0% 100%)',
				}}
			/>

			{/* Light Blue Overlay for Right Side */}
			<div className="absolute inset-0 bg-blue-500/20" />

			<div className="relative z-10 h-full flex items-center">
				{/* Left Content Section */}
				<div className="w-full lg:w-1/2">
					<div className="container mx-auto px-4 lg:px-8">
						<div className="max-w-2xl">
							<div className="space-y-6 animate-slide-in" key={currentSlide}>
								<div className="flex items-center space-x-3 text-yellow-400">
									<IconComponent className="w-8 h-8" />
									<span className="text-lg font-semibold">
										DISCOVER YOUR PERFECT PLAN
									</span>
								</div>

								<h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
									{currentSlideData.title}
								</h1>

								<h2 className="text-lg lg:text-xl font-semibold text-yellow-400">
									{currentSlideData.subtitle}
								</h2>

								<p className="text-base lg:text-lg text-blue-100 leading-relaxed">
									{currentSlideData.description}
								</p>

								<div className="flex flex-col sm:flex-row gap-4 pt-6">
									<button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2 group">
										<span>{currentSlideData.buttonText}</span>
										<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</button>
									<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
