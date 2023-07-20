import React, { useState } from "react";

const Accordion = ({ question, answer, data }) => {
	const [item, setItem] = useState(data);

	const handleToggle = () => {
		let newActive = item.active === 1 ? 0 : 1;
		setItem({ ...item, active: newActive });
	};

	return (
		<div
			className={`bg-white w-full p-5 border border-[#c9c6c655] shadow-md rounded-md duration-500 group ${
				item.active === 1 ? "is-active" : ""
			}`}
		>
			<div className="flex flex-col gap-4">
				<div className="flex items-center ">
					<div className="w-full text-xl group-[.is-active]:font-bold duration-500">
						{question}
					</div>
					<div
						className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer"
						onClick={handleToggle}
					>
						{">"}
					</div>
				</div>
				<div className="overflow-hidden text-lg max-h-0 group-[.is-active]:max-h-[100px] duration-500">
					{answer}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
