import React from "react";
import tw, { styled } from "twin.macro";
import { Heading } from "../Components";

const Container = tw.div`px-2.5 py-16  bg-white lg:py-20`;

const Label = tw.div`flex items-center justify-center py-8`;

const LabelHeading = tw.h3`font-extrabold text-lg tracking-wider lg:text-3xl`;

const Content = tw.div`mt-7 lg:mt-16 grid mx-auto gap-14 md:max-w-2xl  md:grid-cols-2 md:gap-4 lg:gap-48 lg:max-w-7xl`;

const Image = tw.img`h-auto w-[200px] lg:w-[350px]`;

const Card = tw.div`flex items-center justify-start space-x-5`;

const LeftSection = tw.aside`flex flex-col justify-center items-center`;

const RightSection = tw(LeftSection)``;

const TripleAction = ({ title, contents, sideImage, logo }) => {
    return (
        <Container id="triple-action">
            <Content>
                <LeftSection>
                    <Image src={logo} />
                    <br />
                    <Heading primary>{title}</Heading>
                    {contents.map((content, index) => {
                        return (
                            <Card key={index}>
                                <Image style={{ height: "60px", width: "60px" }} src={content.src} />
                                <Label>
                                    <LabelHeading>{content.title}</LabelHeading>
                                </Label>
                            </Card>
                        );
                    })}
                </LeftSection>
                <RightSection>
                    <Image src={sideImage} />
                </RightSection>
            </Content>
        </Container>
    );
};

export default TripleAction;
