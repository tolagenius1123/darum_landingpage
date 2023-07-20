import React from "react";
import darumLogo from "../../assets/icons/darumLogo.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import ig from "../../assets/icons/ig.svg";
import locate from "../../assets/icons/locate.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#FEF8F5]  md:justify-around lg:justify-around lg:flex-row flex flex-col gap-14 py-20 px-12">
			<div className="flex flex-col gap-10">
				<img
					src={darumLogo}
					alt="logo"
					className="w-[40%]  md:w-[20%] lg:w-[80%]"
				/>
				<Button
					btnType="button"
					btnStyle="bg-[#F46F3B] w-[40%] md:w-[40%] lg:w-full cursor-pointer font-bold text-white text-lg md:text:xl lg:text:xl rounded-[8px] px-3 py-3 md:px-3 md:py-3 "
					btnTitle="Sign Up Now"
				/>
			</div>
			<div className="flex flex-col gap-6">
				<Link to="/">Home</Link>
				<Link to="/">For business</Link>
				<Link to="/">For delivery startups</Link>
				<Link to="/">For riders</Link>
				<Link to="/">About us</Link>
				<Link to="/">Contact</Link>
				<Link to="/">News</Link>
			</div>
			<div className="flex flex-wrap gap-2 md:gap-10 md:flex-col lg:flex-col">
				<div className="flex items-center gap-2 cursor-pointer">
					<img
						src={facebook}
						alt="facebook"
						className="md:h-8 md:w-8"
					/>
					<p>Facebook</p>
				</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<img
						src={twitter}
						alt="facebook"
						className="md:h-8 md:w-8"
					/>
					<p>Twitter</p>
				</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<img src={ig} alt="facebook" className="md:h-8 md:w-8" />
					<p>Instagram</p>
				</div>
			</div>
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-3">
					<img src={locate} alt="facebook" className="h-8 w-8" />
					<p>23, Hughes avenue, Alagomeji, Yaba, Lagos</p>
				</div>
				<div className="flex items-center gap-3">
					<img src={phone} alt="facebook" className="h-8 w-8" />
					<p>07000032786</p>
				</div>
				<div className="flex items-center gap-3">
					<img src={email} alt="facebook" className="h-8 w-8" />
					<p>info@darum.com.ng</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
