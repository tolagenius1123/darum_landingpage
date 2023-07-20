import React from "react";
import Button from "../../components/reusables/Button";
import heroSvg from "../../assets/images/heroSvg.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<div className="w-full gap-12 px-6 py-40 md:px-10 lg:px-16 md:py-64 lg:py-64 bg-white font-manrope flex flex-col justify-between md:flex md:flex-row  lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
				className="w-full gap-12 font-manrope flex flex-col justify-between md:flex md:flex-row  lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row"
			>
				<div className="flex flex-col gap-4 md:gap-4 lg:gap-6 md:w-[50%] lg:w-[50%]">
					<h1 className="text-[#2C2421] lg:pt-12 font-bold md:font-semibold lg:font-extrabold md:text-6xl lg:text-6xl text-4xl">
						Get dispatch riders that won’t eat your food
					</h1>
					<p className="text-base md:text-lg lg:text-lg xl:text-lg">
						With Darum, you can find reliable dispatch riders that
						you and your customers can track till your delivery is
						done.{" "}
					</p>
					<Button
						btnType="button"
						btnStyle="w-[40%] bg-[#F46F3B] md:w-[30%] md:text-lg text-white text-base rounded-[8px] py-3 hover:bg-[#ea635f]"
						btnTitle="SignUp Now"
					/>
				</div>
				<div className="w-full md:w-[50%] lg:w-[50%]">
					<img
						src={heroSvg}
						className="w-full h-full"
						alt="hero_image"
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default HeroSection;
