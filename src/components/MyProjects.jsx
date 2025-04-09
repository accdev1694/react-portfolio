import LeftIntroContent from "./LeftIntroContent";

const MyProjects = ({ leftIntro }) => (
  <div className="hero">
    <LeftIntroContent leftIntro={leftIntro} nextPage={"/contact-me"} />
    <div className="right-intro"></div>
  </div>
);

export default MyProjects;
