import myPhoto from "../assets/images/my-photo.jpg";
import { useNavigate } from "react-router-dom";
const HomePage = ({ leftHero }) => {
  const { heading, subHeading, description, learnMore } = leftHero[0].home;
  const navigate = useNavigate()
  
  return (
    <div className="hero">
      <div className="left-intro">
        <h1 className="main-section-heading">{heading}</h1>
        <h2 className="hero-subheading">{subHeading}</h2>
        <p className="description">{description}</p>
        <button onClick={()=>{navigate('/my-skills')}} className="learn-more">
          {">>>"} {learnMore}
        </button>
      </div>
      <div className="right-intro">
        <img className="my-photo" src={myPhoto} alt="my passport photograph" />{" "}
      </div>
    </div>
  );
};

export default HomePage;
