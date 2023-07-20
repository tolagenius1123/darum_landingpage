import React from "react";
import star from "../../assets/icons/star.svg";
import profile1 from "../../assets/images/profile1.svg";
import profile2 from "../../assets/images/profile2.svg";
import profile3 from "../../assets/images/profile3.svg";

function Business() {
	return (
		<div className="w-full flex flex-col items-center lg:flex-row-reverse py-24 lg:py-40 px-10 lg:px-20 gap-28">
			<div className="flex flex-col gap-8 lg:w-[50%]">
				<h1 className="font-bold text-4xl">
					Business owners are happy with Darum
				</h1>
				<p className="text-lg">
					"So yesterday, i needed to buy a phone urgently, at the time
					we made payment on the Durum for business platform and
					placed the request, it was delivered in one hour, everyone
					was surprised, but guess what, it was Darum."
				</p>
				<div className="flex items-center gap-3">
					<img src={profile3} className="" alt="profile" />
					<p className="font-bold">Gadgets Freak</p>
				</div>
			</div>

			<div className="flex lg:w-[50%] flex-col gap-6 w-full bg-[#FEF8F5] px-8 py-20">
				<div className="flex gap-4 flex-col rounded-lg bg-[#ffffff] lg:rounded-[20px] py-6 px-6">
					<img src={star} alt="star" className="w-[200px]" />
					<p className="pt-4 font-light">
						"I started using Darum 2yrs ago, i love them, they have
						delivered all of my packages without any issues. I will
						do it again and again, every time".
					</p>
					<div className="flex items-center gap-4">
						<img src={profile1} className="" alt="profile" />
						<p className=" font-bold">Yemisi Lawal of EwaHub</p>
					</div>
				</div>
				<div className="flex gap-4 flex-col rounded-lg bg-[#ffffff] lg:rounded-[20px] py-6 px-6">
					<img src={star} alt="star" className="w-[200px]" />
					<p className="pt-4 font-light">
						"I started using Darum 2yrs ago, i love them, they have
						delivered all of my packages without any issues. I will
						do it again and again, every time".
					</p>
					<div className="flex items-center gap-4">
						<img src={profile2} className="" alt="profile" />
						<p className=" font-bold">Yemisi Lawal of EwaHub</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Business;
