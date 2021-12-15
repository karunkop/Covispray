/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { Heading, HeadingStyle } from "./index";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import GroupedSocialIcons from "./SocialIcons";

const Header = tw.header`px-4 mx-auto flex items-center justify-between md:px-12 py-3.5 lg:max-w-7xl lg:py-8`;
const HeaderWrapper = styled.div(({ show }) => [
    show ? `transform: translateY(0);` : ` transform: translateY(-100%);`,
    show && tw`shadow-xl`,
    tw`sticky bg-white z-10 top-0 left-0 right-0 transition-all duration-500 max-w-full`,
]);

const sideVariants = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
};
const itemVariants = {
    closed: {
        opacity: 0,
        x: "-100%",
    },
    open: { opacity: 1, x: 0 },
};

const Menu = styled(motion.div)`
    ${tw`fixed z-10 left-0 right-0 space-y-8 bg-white  lg:hidden border-t-2 shadow-xl overflow-hidden`}
`;

export default function NavBar({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, cycleOpen] = useCycle(false, true);
    const [scrollPos, setScrollPos] = useState(0);
    const [show, setShow] = useState(true);

    // const sections = document.querySelectorAll("section");

    const handleScroll = () => {
        const clientRect = document.body.getBoundingClientRect();
        setScrollPos(clientRect.top);
        setShow(clientRect.top > scrollPos);

        // let current = "";

        // sections.forEach(section => {
        //     const sectionTop = section.offsetTop;
        //     const sectionHeight = section.clientHeight;
        //     if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        //         current = section.getAttribute("id");
        //     }
        // });
        // console.log(current);
        // items.forEach((item, index) => {
        //     if (window.pageYOffset === 0) {
        //         setActiveIndex(0);
        //         return;
        //     }
        //     if (item.id === current) setActiveIndex(index);
        // });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line
    }, [scrollPos]);

    const MenuItems = styled.a(({ active }) => [
        tw`transition-all  hover:text-primaryTransparent  tracking-widest subpixel-antialiased text-sm md:text-base uppercase mx-5 font-semibold`,
        active && tw`hover:text-gray-200 transition-all bg-primary text-white px-3 py-1.5`,
    ]);

    return (
        <HeaderWrapper show={show}>
            <Header>
                <HeadingStyle primary> Covispray </HeadingStyle>
                <nav>
                    <button tw="lg:hidden" onClick={cycleOpen}>
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                tw="h-8 w-8 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                tw="h-8 w-8 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    <ul tw="xs:hidden lg:flex justify-center items-center space-x-3">
                        {items.map((item, index) => (
                            <li>
                                <MenuItems
                                    active={+activeIndex === +index ? true : false}
                                    onClick={() => {
                                        setActiveIndex(index);
                                    }}
                                    href={item["link-to"]}
                                    key={item.name}
                                >
                                    {item.name}
                                </MenuItems>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Header>
            <AnimatePresence>
                {open && (
                    <Menu
                        initial={{ height: 0 }}
                        animate={{
                            height: "max-content",
                            transition: { duration: 0.8 },
                        }}
                        exit={{
                            height: 0,
                            transition: { delay: 0.2, duration: 0.8 },
                        }}
                    >
                        <div style={{ padding: "4rem 3rem 1rem 3rem" }}>
                            <motion.ul
                                tw="space-y-8 lg:space-y-0 lg:flex lg:justify-center lg:items-center lg:space-x-5"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                                {items.map((item, index) => (
                                    <motion.li variants={itemVariants}>
                                        <MenuItems
                                            active={+activeIndex === +index ? true : false}
                                            onClick={() => {
                                                setActiveIndex(index);
                                                cycleOpen();
                                            }}
                                            href={item["link-to"]}
                                            key={item.name}
                                        >
                                            {item.name}
                                        </MenuItems>
                                    </motion.li>
                                ))}
                                <motion.div style={{ padding: "0 2rem" }} variants={itemVariants}>
                                    <GroupedSocialIcons />
                                </motion.div>
                            </motion.ul>
                        </div>
                    </Menu>
                )}
            </AnimatePresence>
        </HeaderWrapper>
    );
}
