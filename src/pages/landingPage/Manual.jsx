import React from "react";
import home from "../../assets/icons/home.svg";
import location from "../../assets/icons/location.svg";
import speaker from "../../assets/icons/speaker.svg";
import phone from "../../assets/images/phone.svg";

const Manual = () => {
	return (
		<div className="flex gap-24 md:gap-5 lg:gap-10 xl:gap-5 font-manrope px-10 flex-col lg:px-28 py-24 w-full items-center lg:flex-row xl:flex-row">
			<div className="w-full lg:w-[50%] xl:[50%]">
				<h1 className="text-4xl ml-3 font-bold mb-12">How it works</h1>
				<div className="flex flex-col gap-10">
					<div className="flex items-center gap-4">
						<img src={home} alt="home" />
						<p className=" font-light text-base md:text-lg lg:text-lg text-[#504B49] break-words max-w-xs  ml-2">
							Create a Darum business account and top up your
							wallet
						</p>
					</div>

					<div className="flex items-center gap-4">
						<img src={location} alt="location" />
						<p className="  font-light text-base md:text-lg lg:text-lg  text-[#504B49] break-words max-w-xs ml-2">
							Add pickup and drop off locations
						</p>
					</div>

					<div className="flex items-center gap-4">
						<img src={speaker} alt="speaker" />
						<p className=" font-light text-base md:text-lg lg:text-lg  text-[#504B49] break-words max-w-xs ml-2">
							Share tracking details with your customers
						</p>
					</div>
				</div>
			</div>

			<div className="w-full lg:w-[50%] xl:[50%">
				<img src={phone} alt="phone" className="w-full" />
			</div>
		</div>
	);
};

export default Manual;
