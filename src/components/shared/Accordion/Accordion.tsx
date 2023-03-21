import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }: { data: any[] }) => {
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
		<section>
			<div className="mt-12 mx-auto ">
				{data &&
					data.slice(0, 3).map((accordion: any) => (
						<AccordionItem
							key={accordion.repository_id}
							id={accordion.repository_id}
							openAccordionBody={openAccordionBody === accordion.repository_id}
							accordion={accordion}
							toggleAccordion={toggleAccordion}
						/>
					))}
			</div>
		</section>
	);
};

export default Accordion;
