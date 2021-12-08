import tw, { styled } from "twin.macro";

const HeadingStyle = styled.h1(({ primary, normal }) => [
    tw` text-3xl text-center  lg:text-5xl uppercase font-bold tracking-wider`,
    primary ? tw`text-primary` : tw`text-white`,
    normal && tw`normal-case`,
]);

const Line = tw.div`mx-auto h-0.5 mt-3 md:h-1 lg:h-1 bg-red-500 w-[25%] md:w-[45%] lg:w-[60%]`;

export const Heading = props => {
    return (
        <div style={{ display: "inline-block" }}>
            <HeadingStyle primary={props?.primary}>{props.children}</HeadingStyle>
            <Line />
        </div>
    );
};

export const SubHeading = styled(HeadingStyle)(props => [
    tw`mt-2 mb-2 text-xl md:text-2xl lg:text-3xl`,
    props.primary ? tw`text-red-500` : tw`text-black`,
]);

const SpanHeadingStyle = tw(HeadingStyle)`display[inline-block]  px-4 bg-red-500 text-white  text-center lg:text-4xl py-2`;

export const SpanHeading = props => {
    return (
        <div style={{ margin: "0.5rem 0" }}>
            <SpanHeadingStyle primary={props?.primary}>{props.children}</SpanHeadingStyle>
        </div>
    );
};

const ButtonStyle = tw.a`hover:bg-red-700 rounded-sm uppercase flex justify-center items-center text-white bg-red-500 shadow-md px-1.5 py-1 md:px-2 md:py-1.5  lg:px-3.5 lg:py-2 font-bold tracking-wide`;

export const Button = props => {
    return (
        <div style={{ display: "inline-block" }}>
            <ButtonStyle href={props?.to}>{props.children}</ButtonStyle>{" "}
        </div>
    );
};

const CardStyle = tw.div`w-[300px] md:w-[400px] lg:w-[500px] bg-primaryTransparent absolute  left[8%] rounded-md px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-14 space-y-3`;

export const HeroCard = props => {
    const splittedText = props.title.split(" ");
    const splittedHighlightedText = props.highlight.split(" ");

    return (
        <CardStyle>
            <HeadingStyle normal>
                {splittedText.map(text =>
                    splittedHighlightedText.includes(text) ? (
                        <SpanHeading>{text.replaceAll("-", " ")}</SpanHeading>
                    ) : (
                        <span style={{ marginRight: "1px" }}> {text} </span>
                    )
                )}
            </HeadingStyle>
            <br />
            {props.description ? (
                <p style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}> {props.description} </p>
            ) : null}
            <Button to={props.button.to}>{props.button.text}</Button>
        </CardStyle>
    );
};
