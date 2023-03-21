import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";
import { AiOutlineCaretDown } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { githubUserDataByUser } from "../../../redux/actionTypes/githubUserByUserActionTypes";

type AccordionItemPropType = {
    openAccordionBody: boolean;
    id: number;
    toggleAccordion: (index: number) => void;
    accordion: githubUserDataByUser
};
const AccordionItem = (props: AccordionItemPropType) => {
    const { openAccordionBody, toggleAccordion, id, accordion } = props;
    return (
        <div className="mb-5 bg-white">
            <article
                className="border-b"
            >
                <div
                    className={`transition-all duration-700 border-l-4  bg-grey-lightest ${!openAccordionBody
                        ? "border-slate-100"
                        : "border-stone-800 dark:border-blue-400 "
                        } `}
                >
                    <header className="flex justify-between bg-slate-100 items-center py-4 pl-8 pr-3 cursor-pointer select-none" onClick={() => toggleAccordion(id)}>
                        <span className="text-indigo font-semibold text-md ">
                            {accordion?.repository_owner}
                        </span>
                        <div className="flex items-center justify-center">
                            {openAccordionBody ? (
                                <TiArrowSortedUp className="text-xl transition-all duration-1000 " />
                            ) : (
                                <AiOutlineCaretDown className="transition-all duration-1000 " />
                            )}
                        </div>
                    </header>
                    <Collapse isOpened={openAccordionBody}>
                        <div className="pl-8 pb-1 mt-2 text-grey-darkest">
                            {accordion &&
                                accordion.repositories.slice(0, 3).map((accordion) => (
                                    <Link key={accordion.id} to={accordion?.repository_url} target="_blank">
                                        <div className="mb-2 text-sm bg-slate-100 p-3 rounded-l-sm cursor-pointer">
                                            <div className="flex justify-between mb-2">
                                                <h2 className="font-semibold">{accordion?.repository_name}</h2>
                                                <h2 className="flex items-center space-x-2">
                                                    <span className="-mt-[.9px]">{accordion?.star}</span>
                                                    {accordion?.star ? <AiFillStar /> : <AiOutlineStar />}
                                                </h2>
                                            </div>
                                            <p>{accordion?.description}</p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </Collapse>
                </div>
            </article>
        </div>
    );
};

export default AccordionItem;
