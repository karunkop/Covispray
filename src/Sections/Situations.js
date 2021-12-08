import React from "react";
import tw, { styled } from "twin.macro";
import { Heading, SubHeading } from "../Components";

const Container = tw.div`px-2.5 py-16  bg-background lg:py-28`;

const Header = tw.div`flex items-center justify-center flex-col`;

const CardStyle = styled.div(() => [
    tw`w-full rounded-md transition-all duration-300 shadow-xl bg-white cursor-pointer`,
    `&:hover {
        transform : translateY(-10px);
    }`,
]);

const Line = tw.div`h-2.5 bg-blue-400 w-full`;

const FirstLine = tw.div`h-2.5 bg-blue-900 w-1/2`;

const Label = tw.div`flex items-center justify-center py-8`;

const LabelHeading = tw.h3`font-extrabold capitalize tracking-wider`;

const Content = tw.div`mt-7 lg:mt-11 grid mx-auto gap-14 md:max-w-2xl  md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-11 lg:max-w-6xl`;

const Situations = ({ title, subTitle, contents }) => {
    return (
        <Container>
            <Header>
                <SubHeading primary>{subTitle}</SubHeading>
                <Heading primary>{title}</Heading>
            </Header>

            <Content>
                {contents.map((content, index) => {
                    return (
                        <CardStyle key={index}>
                            <img style={{ height: "auto", width: "100%" }} src={content.src} />
                            <Line>
                                <FirstLine />
                            </Line>
                            <Label>
                                <LabelHeading>{content.title}</LabelHeading>
                            </Label>
                        </CardStyle>
                    );
                })}
            </Content>
        </Container>
    );
};

export default Situations;
