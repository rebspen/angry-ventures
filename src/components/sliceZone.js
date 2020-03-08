import React from "react";
import Hero from "./hero";
import AngryBrain from "./angrybrain";
import Case from "./case";
import Tools from "./tools";
import Contact from "./contact";
import Footer from "./footer";
import FooterEnd from "./footerend";

const SliceZone = ({ body }) => {
  console.log("this is here", body);
  return (
    <div>
      {body.map((val, i) => {
        if (val.type === "hero") {
          return (
            <Hero
              title={val.primary.hero_title}
              content={val.primary.hero_content}
              backgroundImage={val.primary.background_image.url}
              key={i}
            />
          );
        } else if (val.type === "angry_brain") {
          return (
            <AngryBrain
              key={i}
              brainTitle={val.primary.brain_title}
              brainContenta={val.primary.brain_one}
              brainContentb={val.primary.brain_two}
            />
          );
        } else if (val.type === "case") {
          return <Case key={i} cases={val.fields} />;
        } else if (val.type === "tools") {
          return (
            <Tools
              key={i}
              tools={val.fields}
              ourTools={val.primary.our_tools}
              toolsTitle={val.primary.tools_title}
              toolsContent={val.primary.tools_content}
            />
          );
        } else if (val.type === "case_2") {
          return <Case key={i} cases={val.fields} />;
        } else if (val.type === "sequences") {
          return (
            <Tools
              key={i}
              tools={val.fields}
              ourTools={val.primary.our_sequences}
              toolsTitle={val.primary.sequences_title}
              toolsContent={val.primary.sequences_content}
            />
          );
        } else if (val.type === "contact_form") {
          return (
            <Contact
              key={i}
              footer={val.primary.contact_footer}
              title={val.primary.contact_title}
              subtitle={val.primary.contact_subtitle}
              email={val.primary.email_placeholder}
              last={val.primary.last_name_placeholder}
              name={val.primary.name_placeholder}
            />
          );
        } else if (val.type === "footer") {
          return <Footer key={i}
          title={val.primary.footer_title}
          social={val.fields}
           />;
        } else if (val.type == "footer_ending"){
          return <FooterEnd
          key={i}
          links={val.fields}
           />
          }
          else {
          return null;
        }
      })}
    </div>
  );
};

export default SliceZone;
