import { useState } from "react";
import { Link } from "react-router-dom";
import darumLogo from "../../assets/icons/darumLogo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const Navbar = () => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	return (
		<div className="bg-white w-full font-manrope px-6 md:px-20 lg:px-20 xl:px-20 py-8 flex items-center justify-between duration-500 shadow-md z-10 fixed">
			<div className="flex items-center md:gap-10 lg:gap-28">
				<img
					src={darumLogo}
					alt="darum_logo"
					className="h-17 w-17 cursor-pointer"
				/>
				<div className="hidden gap-5 items-center  xl:gap-20 font-normal text-lg lg:flex">
					<Link to="/" className="hover:text-[#F46F3B]">
						Partners
					</Link>
					<Link to="/" className="hover:text-[#F46F3B]">
						Customers
					</Link>
					<Link to="/" className="hover:text-[#F46F3B]">
						Business
					</Link>
					<Link to="/" className="hover:text-[#F46F3B]">
						News
					</Link>
					<Link to="/" className="hover:text-[#F46F3B]">
						Careers
					</Link>
				</div>
			</div>
			<div className=" flex items-center gap-5">
				<Button
					btnType="button"
					btnStyle="hidden lg:flex bg-[#F46F3B] text-white text-xl rounded-[8px] px-6 py-3 hover:bg-[#ea635f]"
					btnTitle="Contact Us"
				/>
				<button
					type="button"
					className="flex  lg:hidden"
					onClick={() => setIsMenuToggled(true)}
				>
					<Bars3Icon className=" h-10 w-10 cursor-pointer text-[#F46F3B]" />
				</button>
			</div>
			{isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#F46F3B] drop-shadow-xl transition duration-500">
					{/* CLOSE ICON */}
					<div className="flex p-8 ">
						<button
							className="ml-[150px] "
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<XMarkIcon className="h-10 w-10 text-white" />
						</button>
					</div>

					{/* MENU ITEMS */}
					<div className="ml-[33%] mt-10 flex flex-col gap-10 text-2xl ">
						<Link to="/" className="text-white">
							Partners
						</Link>
						<Link to="/" className="text-white">
							Customers
						</Link>
						<Link to="/" className="text-white">
							Business
						</Link>
						<Link to="/" className="text-white">
							News
						</Link>
						<Link to="/" className="text-white">
							Careers
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
