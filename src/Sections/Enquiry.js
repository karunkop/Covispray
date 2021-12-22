import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { Heading, SubHeading } from "../Components";
import emailjs from "emailjs-com";
import Toast from "../Components/Toast";

const Container = styled.section`
    background-image: url("/assets/form1.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

const Overlay = tw.div`px-2.5 py-8 lg:py-28  bg-secondaryTransparent`;

const Header = tw.div`flex items-center justify-center flex-col`;

const Content = tw.div` px-6 grid items-center mx-auto  md:max-w-2xl xl:grid-cols-2 xl:max-w-7xl`;

const Input = styled.input(({ err }) => [
    tw`my-1 border-0 shadow-sm rounded-sm bg-lightBackground py-2.5 px-2.5 outline-none w-full`,
    err && tw`border-l-4 border-red-600`,
]);

const TextArea = tw.textarea`my-1  border-0 shadow-lg rounded-sm bg-lightBackground py-2.5 px-2.5 outline-none w-full`;

const Label = tw.h6`uppercase text-background tracking-wider text-sm font-extrabold`;

const Form = tw.form`space-y-3.5`;

const Mark = tw.span`text-sm text-red-500`;
const Field = tw.div`flex-1`;

const ColWrapper = styled.div`
    ${tw`space-y-3.5 md:space-y-0 md:flex md:space-x-5   md:justify-between`},
`;

const Error = tw.div`bg-red-100 text-red-600 px-2 py-1 my-1.5 tracking-wide`;

const Button = tw.button`cursor-pointer hover:bg-red-700 rounded-sm uppercase flex justify-center items-center text-white bg-red-500 shadow-md px-2.5 py-2 md:px-2 md:py-1.5  lg:px-3.5 lg:py-2 font-bold tracking-wide`;

const validateEmail = email => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const Enquiry = () => {
    const [error, setError] = useState({});
    const [showToast, setShowToast] = useState({ state: "", active: false });
    const [loading, setLoading] = useState(false);
    const handleValidation = data => {
        let temp = {};
        Object.keys(data).forEach(key => {
            if (!data[key]) {
                temp = {
                    ...temp,
                    [key]: `This field is required! Please input your ${key}`,
                };
            }
        });
        if (!temp.email && !validateEmail(data["email"])) {
            temp = {
                ...temp,
                email: `This is not a valid email`,
            };
        }
        setError(temp);
        if (!Object.keys(temp).length) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = event => {
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");

        if (handleValidation({ name, email, phone })) {
            emailjs.sendForm("gmail", process.env.REACT_APP_TEMPLATE_ID, "#enquiry-form").then(
                result => {
                    if (result.text === "OK") {
                        setShowToast({
                            state: "success",
                            active: true,
                        });
                        document.getElementById("enquiry-form").reset();
                        setLoading(false);
                    }
                },
                () => {
                    setShowToast({
                        state: "error",
                        active: true,
                    });
                    setLoading(false);
                }
            );
        }
    };
    return (
        <Container id="enquiry">
            <Overlay>
                <Toast
                    isVisible={showToast.active}
                    toggle={setShowToast}
                    duration={3000}
                    content="Your Enquiry Has Been Submitted Successfully"
                    success={showToast.state === "success" ? true : false}
                    error={showToast.state === "error" ? true : false}
                />
                <Header>
                    <Heading>Enquiry Form</Heading>
                    <SubHeading
                        style={{
                            fontSize: "14px",
                            letterSpacing: "1px",
                            fontWeight: "800",
                            color: "white",
                            textTransform: "capitalize",
                        }}
                        primary
                    >
                        Fill up the form below and we will get back to you as soon as possible.
                    </SubHeading>
                </Header>
                <Content>
                    <Form id="enquiry-form" onSubmit={handleSubmit}>
                        <Field>
                            <Label>
                                name <Mark>*</Mark>
                            </Label>
                            <Input err={error["name"] ? true : false} name="name" />
                            {error["name"] && <Error> {error.name} </Error>}
                        </Field>
                        <ColWrapper>
                            <Field>
                                <Label>
                                    email <Mark>*</Mark>
                                </Label>
                                <Input err={error["email"] ? true : false} name="email" />
                                {error["email"] && <Error> {error.email} </Error>}
                            </Field>

                            <Field>
                                <Label>
                                    phone <Mark>*</Mark>
                                </Label>
                                <Input err={error["phone"] ? true : false} name="phone" />
                                {error["phone"] && <Error> {error.phone} </Error>}
                            </Field>
                        </ColWrapper>
                        <Field>
                            <Label>message</Label>
                            <TextArea name="message" rows={6} />
                        </Field>
                        <Button disabled={loading} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Content>
            </Overlay>
        </Container>
    );
};

export default Enquiry;
