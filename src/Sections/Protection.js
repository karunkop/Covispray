import React from "react";
import tw, { styled } from "twin.macro";
import { Heading, SpanHeading } from "../Components";

const Container = styled.section(({ url }) => [
    url &&
        ` 
        background-image: url(${url});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        `,
]);

const Overlay = tw.div`px-2.5 py-16 lg:py-20  bg-primaryTransparent`;

const Content = tw.div`mt-7 lg:mt-16 grid mx-auto gap-14 md:max-w-2xl  md:grid-cols-2 md:gap-4 lg:gap-48 lg:max-w-7xl `;

const Image = tw.img`h-auto w-[200px] lg:w-[350px]`;

const LeftSection = tw.aside`flex flex-col justify-center items-center`;

const RightSection = tw(LeftSection)``;

const Protection = ({ title, highlight, sideImage, bgImage, logo }) => {
    return (
        <Container url={bgImage} id="protection">
            <Overlay>
                <Content>
                    <LeftSection>
                        <Image style={{ height: "auto", width: "600px" }} src={logo} />
                    </LeftSection>
                    <RightSection>
                        <Heading>{title}</Heading>
                        <SpanHeading>{highlight}</SpanHeading>
                        <Image src={sideImage} />
                    </RightSection>
                </Content>
            </Overlay>
        </Container>
    );
};

export default Protection;
