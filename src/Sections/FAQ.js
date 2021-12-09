import React from "react";
import tw, { styled } from "twin.macro";
import { Heading } from "../Components";
import Accordion from "../Components/Accordion";

const Container = styled.section`
    background: #304352;
    background: -webkit-linear-gradient(to right, #d7d2cc, #304352);
    background: linear-gradient(to right, #d7d2cc, #304352);

    ${tw`px-2.5 py-16 lg:py-28`}
`;

const Header = tw.div`flex items-center justify-center flex-col`;

const Content = tw.div`mt-7 lg:mt-16 mx-auto md:max-w-2xl lg:max-w-6xl`;

const FAQ = ({ title, contents }) => {
    return (
        <Container id="faq">
            <Header>
                <Heading>{title}</Heading>
            </Header>
            <Content>
                {contents.map((content, index) => (
                    <Accordion key={index} title={`${index + 1}. ${content.title}`} description={content.description} />
                ))}
            </Content>
        </Container>
    );
};

export default FAQ;
