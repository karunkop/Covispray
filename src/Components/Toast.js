import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";

const ToastContainer = styled(motion.div)(({ success, error }) => [
    tw`fixed left-0 right-0 top-8 px-4 py-3.5 text-white tracking-widest font-extrabold text-base z-20 mx-auto xs:max-w-sm lg:max-w-xl text-center rounded-sm `,
    success && tw`bg-green-500 `,
    error && tw`bg-red-500 `,
]);

const variants = {
    initial: {
        opacity: 0,
        y: "-100%",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Toast = ({ success, error, content, duration = 2000, toggle, isVisible = false }) => {
    useEffect(() => {
        setTimeout(() => {
            toggle({ active: false });
        }, duration);
        // eslint-disable-next-line 
    }, [duration, isVisible]);

    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <ToastContainer
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    success={success}
                    error={error}
                >
                    {content}
                </ToastContainer>
            )}
        </AnimatePresence>
    );
};

export default Toast;
