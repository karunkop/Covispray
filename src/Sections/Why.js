import React from "react";
import tw, { styled } from "twin.macro";
import { Button, Heading, SubHeading } from "../Components";

const Container = tw.section`px-2.5 py-16  bg-white lg:py-28`;

const Header = tw.div`flex items-center justify-center flex-col`;

const CardStyle = styled.div(() => [
    tw`w-full h-auto px-5 py-5 rounded-xl transition-all duration-300 shadow-xl  cursor-pointer  bg-red-600 flex items-center flex-col justify-center`,
    `&:hover {
        transform : translateY(-10px);
    }`,
]);

const Label = tw.div`flex items-center justify-center py-8`;

const LabelHeading = tw.h1`font-extrabold capitalize tracking-wider text-white text-center text-lg lg:font-size[28px] lg:leading-10`;

const Content = tw.div`mt-7 grid gap-11 mx-auto xl:grid-cols-3 xl:max-w-7xl`;

const Image = tw.img`h-auto w-full`;

const LeftSection = tw.aside`grid px-4  gap-8 lg:grid-cols-2 xl:col-span-2 `;

const RightSection = tw.aside`grid justify-center items-center xl:justify-start`;

const ButtonWrapper = tw.div`text-center mt-5 lg:mt-10`;

const Why = ({ title, subTitle, contents, sideImage, buttonText }) => {
    return (
        <Container id="why">
            <Header>
                <SubHeading style={{ fontSize: "18px", letterSpacing: "5px", fontWeight: "800" }} primary>
                    {subTitle}
                </SubHeading>
                <Heading primary>{title}</Heading>
            </Header>
            <Content>
                <LeftSection>
                    {contents.map((content, index) => {
                        return (
                            <CardStyle key={index}>
                                <Image style={{ width: "140px" }} src={content.src} alt="" />
                                <Label>
                                    <LabelHeading>{content.title}</LabelHeading>
                                </Label>
                                <ul>
                                    {content.note.map(note => (
                                        <li style={{ color: "white", letterSpacing: "1px" }}> {note} </li>
                                    ))}
                                </ul>
                            </CardStyle>
                        );
                    })}
                </LeftSection>
                <RightSection>
                    <Image style={{ width: "400px" }} src={sideImage} alt="" />
                </RightSection>
            </Content>
            <ButtonWrapper>
                <Button to="#faq" secondary>{buttonText}</Button>
            </ButtonWrapper>
        </Container>
    );
};

export default Why;
