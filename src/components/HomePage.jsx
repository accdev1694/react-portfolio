import myPhoto from "../assets/images/my-photo.jpg";
import LeftIntroContent from "./LeftIntroContent";

const HomePage = ({ leftIntro }) => {
  return (
    <div className="hero">
      <LeftIntroContent leftIntro={leftIntro} nextPage={"/my-skills"} />
      <div className="right-intro">
        <img className="my-photo" src={myPhoto} alt="my passport photograph" />{" "}
      </div>
    </div>
  );
};

export default HomePage;
