import React from "react";
import whyUs from "../../assets/images/whyUs.svg";
import good from "../../assets/icons/good.svg";

const SellingPoint = () => {
	return (
		<div className="px-8 py-10 w-full items-center md:w-full lg:w-[90%] lg:rounded-[30px] lg:m-auto lg:flex-row-reverse flex flex-col gap-6 lg:gap-20 bg-[#FEF8F5]">
			<div className="lg:w-[50%]">
				<h1 className="text-3xl font-bold mb-6">Why use Darum</h1>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">Cut cost:</p>
					</div>
					<p className="ml-8">
						Our distance-based pricing helps you get the cheapest
						rate on same-day deliveries
					</p>
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">
							Professional riders:
						</p>
					</div>
					<p className="ml-8">
						Our riders won’t eat your chicken, stain your dress or
						those other terrible stories
					</p>
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">Full visibility:</p>
					</div>
					<p className="ml-8">
						Our dashboard gives you an overview of your
						deliveries,riders, costs and other info
					</p>
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">Multi-drop off:</p>
					</div>
					<p className="ml-8">
						On Darum, you can set multiple drop-off locations at
						once, saving you time & energy
					</p>
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">Track riders:</p>
					</div>
					<p className="ml-8">
						Both you and your customers can see where the rider is
						at any time
					</p>
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex items-center gap-4">
						<img src={good} alt="good" />
						<p className="font-bold text-xl">
							Dedicated live support:
						</p>
					</div>
					<p className="ml-8">
						Our customer service reps are on ground to address
						questions and challenges as they arise
					</p>
				</div>
			</div>
			<div className="lg:w-[50%]">
				<img src={whyUs} alt="SellingPoint" />
			</div>
		</div>
	);
};

export default SellingPoint;
