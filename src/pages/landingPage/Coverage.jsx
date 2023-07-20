import React from "react";
import deliveryMan from "../../assets/images/deliveryMan.svg";

function Coverage() {
	return (
		<div className="px-6 py-10 w-full items-center flex flex-col lg:flex-row-reverse xl:flex-row-reverse gap-10 lg:gap-40 lg:px-24 lg:py-24">
			<div className="w-full h-full lg:w-[50%] flex flex-col gap-8">
				<h1 className="text-4xl font-bold font-manrope">
					Our Coverage
				</h1>
				<div className="flex flex-wrap gap-5 ">
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						Ikeja
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Ikotun
					</p>
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						Ajah
					</p>
				</div>
				<div className="flex flex-wrap gap-5 ">
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">Ogba</p>
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						lekki
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Surulere
					</p>
				</div>
				<div className="flex flex-wrap gap-5 ">
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						Yaba
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Lagos Island
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Oshodi
					</p>
				</div>
				<div className="flex flex-wrap gap-5 ">
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						Gbagada
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Ejigbo
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Maryland
					</p>
				</div>
				<div className="flex flex-wrap gap-5 ">
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Sangotedo
					</p>
					<p className="bg-[#FFF6EA] py-1 px-4 rounded-full  text-orange-500 ">
						Magodo
					</p>
					<p className="bg-[#FAFAFA] py-1 px-4 rounded-full ">
						Shomolu
					</p>
				</div>
			</div>
			<div className="w-full lg:w-[50%]">
				<img src={deliveryMan} alt="deliveryMan" />
			</div>
		</div>
	);
}

export default Coverage;
