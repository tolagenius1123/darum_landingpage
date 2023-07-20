import React from "react";
import Button from "../../components/reusables/Button";
import collage from "../../assets/images/collage.svg";

const CallToAction = () => {
	return (
		<div className="bg-[#F46F3B] flex flex-col gap-12 lg:hidden md:hidden font-manrope text-white px-10 py-24">
			<h1 className="text-3xl font-bold">
				Schedule your business delivery in minutes
			</h1>
			<Button
				btnType="button"
				btnStyle="bg-white w-[40%] cursor-pointer font-bold text-[#F46F3B] text-xl rounded-[8px] px-6 py-3"
				btnTitle="Apply Now"
			/>
			<div>
				<img src={collage} alt="collage" className="w-full" />
			</div>
		</div>
	);
};

export default CallToAction;
