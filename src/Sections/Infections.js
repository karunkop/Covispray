import React from "react";
import tw  from "twin.macro";
import { Heading } from "../Components";

const Container = tw.section`px-2.5 py-16  bg-white lg:py-28`;

const Header = tw.div`flex items-center justify-center flex-col`;

const Label = tw.div`flex items-center justify-center py-8`;

const LabelHeading = tw.h3`font-extrabold text-lg tracking-wider text-center`;

const Content = tw.div`mt-7 lg:mt-16 grid mx-auto gap-14 md:max-w-2xl  md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-20 lg:max-w-6xl`;

const Image = tw.img`h-auto w-[200px] lg:w-[250px]`;

const Card = tw.div`flex items-center  flex-col`;

const Infections = ({ title, contents }) => {
    return (
        <Container id="infections">
            <Header>
                <Heading primary>{title}</Heading>
            </Header>

            <Content>
                {contents.map((content, index) => {
                    return (
                        <Card key={index}>
                            <Image src={content.src} alt="" />
                            <Label>
                                <LabelHeading>{content.title}</LabelHeading>
                            </Label>
                        </Card>
                    );
                })}
            </Content>
        </Container>
    );
};

export default Infections;
