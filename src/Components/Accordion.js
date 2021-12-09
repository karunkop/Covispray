/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import tw, { styled } from "twin.macro";
import { SubHeading } from ".";
import { motion, AnimatePresence } from "framer-motion";
import useOnClickOutside from "../Hooks/useOutslideClick";

const HeaderStyle = tw.div`py-1.5 px-3.5 flex justify-between items-center bg-lightBackground cursor-pointer`;

const Container = styled(motion.div)(() => [tw` bg-white text-gray-500 shadow-md`]);

const containerVariants = {
    open: { height: "auto" },
    collapsed: {
        height: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
};

const AccordionTitle = tw(SubHeading)`text-align[start] font-size[15px] md:font-size[22px] `;

const Accordion = ({ title, description }) => {
    const ref = useRef();
    const [open, setOpen] = useState(false);

    useOnClickOutside(ref, () => setOpen(false));

    return (
        <div tw="mb-4" ref={ref}>
            <HeaderStyle onClick={() => setOpen(!open)}>
                <AccordionTitle> {title}</AccordionTitle>
                <button onClick={() => setOpen(!open)}>
                    {!open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            tw="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            tw="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    )}
                </button>
            </HeaderStyle>
            <AnimatePresence initial={false}>
                {open && (
                    <Container
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={containerVariants}
                    >
                        {open && (
                            <div
                                style={{
                                    padding: "1rem",
                                    fontWeight: "500",
                                    color: "black",
                                    letterSpacing: "1px",
                                    fontFamily: "arial",
                                }}
                            >
                                <motion.p
                                    variants={{
                                        collapsed: { opacity: 0 },
                                        open: { opacity: 1 },
                                    }}
                                >
                                    {description}
                                </motion.p>{" "}
                            </div>
                        )}
                    </Container>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
