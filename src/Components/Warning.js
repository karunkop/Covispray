import React from "react";
import tw from "twin.macro";

const ContainerStyle = tw.div`fixed bottom-0 left-0 right-0 w-full text-center bg-red-600 text-white py-1 md:py-2 lg:py-2.5 text-xs md:text-base md:font-semibold tracking-widest md:tracking-wider` ;

const Warning = () => {
    return (
        <ContainerStyle>
            DISCLAIMER: Please do not use PIRDAL to replace current health protocols such as getting vaccinated, wearing
            proper face masks, good hygiene practices and social distancing.
        </ContainerStyle>
    );
};

export default Warning;
