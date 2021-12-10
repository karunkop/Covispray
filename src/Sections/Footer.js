import React from "react";
import tw, { styled } from "twin.macro";
import { HeadingStyle, Line } from "../Components";
import GroupedSocialIcons from "../Components/SocialIcons";

const Container = styled.section`
    ${tw`px-2.5 py-16 md:py-5  bg-primary`}
`;

const SecondaryContainer = tw(Container)`bg-white pt-3.5 pb-20 md:pb-[4.5rem]`;

const Content = tw.div`grid mt-7 md:mt-0  mx-auto md:max-w-2xl lg:max-w-6xl space-y-16 md:space-y-0 md:grid-cols-2 md:gap-3.5 lg:grid-cols-4 lg:gap-6`;

const Section = tw.div`flex items-center justify-center flex-col`;

const ParagraphWrapper = tw.div`my-2 text-white text-center`;

const SecondaryPargaraphWrapper = tw(ParagraphWrapper)`text-black`;

const Image = tw.img`h-auto w-[200px] lg:w-[150px]`;

const HeaderWrapper = tw(HeadingStyle)`font-size[20px] text-red-500 md:font-size[15px]`;

const SecondaryContent = tw.div`flex flex-col items-center lg:flex-row lg:justify-between mx-auto md:max-w-2xl lg:max-w-6xl`;

const Footer = () => {
    return (
        <>
            <Container id="footer">
                <Content>
                    <Section>
                        <HeaderWrapper>
                            Marketed By <Line />
                        </HeaderWrapper>

                        <ParagraphWrapper>
                            <p>Pharm-D Sdn Bhd 200001032841 (535448-K)</p>
                            <p> Tel: +603-7770 7918 </p>
                            <p>Email: info@pharmd.com.my</p>
                        </ParagraphWrapper>
                        <ParagraphWrapper>
                            <p>Pharm-D Sdn Bhd 200001032841 (535448-K)</p>
                            <p> Tel: +603-7770 7918 </p>
                            <p>Email: info@pharmd.com.my</p>
                        </ParagraphWrapper>
                    </Section>
                    <Section>
                        <HeaderWrapper>
                            Distributed By <Line />
                        </HeaderWrapper>
                        <ParagraphWrapper>
                            <p>Summit Co. (M) Sdn Bhd</p>
                            <p> Tel: +603-7628 8888</p>
                            <p>Web: www.ussummit.com.my</p>
                        </ParagraphWrapper>
                    </Section>
                    <Section>
                        <Image alt="" src="/assets/nepal-logo.png" />
                    </Section>
                    <Section>
                        <Image alt="" src="/assets/qr-code.jpeg" />
                    </Section>
                </Content>
            </Container>
            <SecondaryContainer>
                <SecondaryContent>
                    <SecondaryPargaraphWrapper>
                        <p>© 2021 Pirdal Nasal Spray. All rights reserved by Pharm-D Sdn Bhd.</p>
                        <p>Powered by Kredence Creative Solutions.</p>
                    </SecondaryPargaraphWrapper>
                    <GroupedSocialIcons />
                </SecondaryContent>
            </SecondaryContainer>
        </>
    );
};

export default Footer;
