import React from "react";
import tw, { styled } from "twin.macro";

const SocialIcons = styled.img(({ direction }) => [
    direction === "col" &&
        `cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
        transform: scale(1.2) translateX(-10px);
    }`,
    tw`h-auto xs:w-[30px] md:w-[40px] lg:w-[45px]`,
]);

const SocialLinks = styled.a``;
const SocialMediasContainer = styled.div(({ direction }) => [
    tw`flex justify-between items-center px-3.5 py-2 space-x-6`,
    direction === "col" && tw`flex-col justify-center space-y-8 space-x-0`,
]);

const GroupedSocialIcons = ({ direction }) => {
    return (
        <SocialMediasContainer direction={direction}>
            <SocialLinks target="_blank" href="https://www.facebook.com/">
                <SocialIcons direction={direction} src="/assets/fb.png" />
            </SocialLinks>
            <SocialLinks target="_blank" href="https://www.instagram.com/">
                <SocialIcons direction={direction} src="/assets/ig.png" />
            </SocialLinks>
            <SocialLinks target="_blank" href="mailto:karunkop@gmail.com">
                <SocialIcons direction={direction} src="/assets/mail.png" />
            </SocialLinks>
        </SocialMediasContainer>
    );
};

export default GroupedSocialIcons;
