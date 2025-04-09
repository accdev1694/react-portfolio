import LeftIntroContent from "./LeftIntroContent";

const ContactMe = ({ leftIntro }) => (
  <div className="hero">
    <LeftIntroContent leftIntro={leftIntro} nextPage={"/"} />
    <div className="right-intro"></div>
  </div>
);

export default ContactMe;
