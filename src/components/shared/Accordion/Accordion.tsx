import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (accordionsData: any[]) => {
	const [openAccordionBody, setAccordionBody] = useState<boolean | number>(
		false
	);

	const toggleAccordion = (index: number) => {
		if (openAccordionBody === index) {
			return setAccordionBody(false);
		}
		setAccordionBody(index);
	};
	return (
		<section className="container mb-16 hero-section">
			<div className="space-y-10 w-8/12 text-center mx-auto">
				<h2 className="text-5xl font-semibold  text-black e">
					FAQ
				</h2>
			</div>
			<div className="shadow-lg mt-12 w-4/6 mx-auto ">
				{accordionsData &&
					accordionsData.map((accordion: any) => (
						<AccordionItem
							key={accordion._id}
							id={accordion._id}
							openAccordionBody={openAccordionBody === accordion._id}
							accordion={accordion}
							toggleAccordion={toggleAccordion}
						/>
					))}
			</div>
		</section>
	);
};

export default Accordion;