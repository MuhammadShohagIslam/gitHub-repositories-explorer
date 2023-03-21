import { useState } from "react";
import { githubUserDataByUser } from "../../../redux/actionTypes/githubUserByUserActionTypes";
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
			<div className="mt-5 mx-auto ">
				{data &&
					data.slice(0, 3).map((accordion: githubUserDataByUser) => {
						return accordion.repositories.length > 0 && (
							<AccordionItem
								key={accordion.repository_id}
								id={accordion.repository_id}
								openAccordionBody={openAccordionBody === accordion.repository_id}
								accordion={accordion}
								toggleAccordion={toggleAccordion}
							/>
						)
					})}
			</div>
		</section>
	);
};

export default Accordion;
