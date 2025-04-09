import LeftIntroContent from "./LeftIntroContent";

const PageNotFound = ({ leftIntro }) => {
  return (
    <div className="hero">
      <LeftIntroContent leftIntro={leftIntro} nextPage={"/"} />
      <div className="right-hero"></div>
    </div>
  );
};

export default PageNotFound;
