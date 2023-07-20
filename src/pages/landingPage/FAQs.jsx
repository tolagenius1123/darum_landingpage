import Accordion from "../../components/reusables/Accordion";
import FAQS from "../../utilities/accordionList";

const FAQs = () => {
	return (
		<div className="hidden md:flex lg:flex xl:flex w-full bg-white px-10 py-10">
			<div className="w-[60%] mx-auto">
				<h1 className="text-center text-4xl font-bold py-10">
					Frequently asked questions
				</h1>
				<div className="flex flex-col gap-4 mb-40">
					{FAQS.map((item, i) => (
						<Accordion
							key={i}
							question={item.question}
							answer={item.answer}
							data={item}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQs;
