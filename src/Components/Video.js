import React from "react";
import tw from "twin.macro";

const Iframe = tw.iframe`mx-auto lg:max-w-7xl border-none w-full h-[200px] md:h-[600px] lg:h-[700px] `;

const Wrapper = tw.div`px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-28`;

const Video = ({ src }) => {
    return (
        <Wrapper>
            <Iframe src={src} title="YouTube video player" frameborder="0" allow="fullscreen;"></Iframe>
        </Wrapper>
    );
};

export default Video;
