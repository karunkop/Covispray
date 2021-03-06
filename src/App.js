/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import "swiper/modules/navigation/navigation.min.css";
import NavBar from "./Components/Navigation";
import Carousel from "./Components/Carousel";
import Warning from "./Components/Warning";
import Video from "./Components/Video";
import Situations from "./Sections/Situations";
import Infections from "./Sections/Infections";
import How from "./Sections/How";
import TripleAction from "./Sections/TripleAction";
import Protection from "./Sections/Protection";
import Why from "./Sections/Why";
import FAQ from "./Sections/FAQ";
import Footer from "./Sections/Footer";
import Enquiry from "./Sections/Enquiry";

function App() {
    const [template, setTemplate] = useState(null);

    useEffect(() => {
        fetch("/template.json")
            .then(data => data.json())
            .then(result => setTemplate(result));
    }, []);

    return template ? (
        <div tw="w-full">
            <NavBar items={template.header["menu-items"]} logo={template.header["logo"]} />
            <Carousel slides={template["hero-section"]} />
            <Video src={template["video-section-first"]} />
            <Situations
                title={template["are-you-in-this-situations"].title}
                subTitle={template["are-you-in-this-situations"]["sub-title"]}
                contents={template["are-you-in-this-situations"].contents}
            />
            <Infections
                title={template["how-infection-begin"].title}
                contents={template["how-infection-begin"].contents}
            />
            <How
                title={template["how-pridal-works"].title}
                videoSrc={template["how-pridal-works"].video}
                contents={template["how-pridal-works"].contents}
            />
            <TripleAction
                title={template["triple-action"].title}
                logo={template["triple-action"].src}
                sideImage={template["triple-action"]["side-image"]}
                contents={template["triple-action"].contents}
            />
            <Protection
                title={template["protection"].title}
                logo={template["protection"].src}
                sideImage={template["protection"].sideImage}
                bgImage={template["protection"].bgImage}
                highlight={template["protection"].highlight}
            />
            <Why
                title={template["why"].title}
                subTitle={template["why"].subTitle}
                contents={template["why"].contents}
                sideImage={template["why"].sideImage}
                buttonText={template["why"].buttonText}
            />
            <FAQ title={template["faq"].title} contents={template["faq"].contents} />
            <Enquiry />
            <Footer />
            <Warning />
        </div>
    ) : (
        "loading..."
    );
}

export default App;
