import LeftIntroContent from "./LeftIntroContent";

const MySkills = ({ leftIntro }) => {
  return (
    <div className="hero">
      <LeftIntroContent leftIntro={leftIntro} nextPage={"/my-projects"} />
      <div className="right-hero"></div>
    </div>
  );
};

export default MySkills;
