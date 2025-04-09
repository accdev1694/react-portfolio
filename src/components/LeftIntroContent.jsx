import { useNavigate } from "react-router-dom";

const LeftIntroContent = ({ leftIntro, nextPage }) => {
  const { heading, subHeading, description, learnMore, id } = leftIntro;

  const navigate = useNavigate();
  return (
    <div className="left-intro">
      <h1 className="main-section-heading">{heading}</h1>
      <h2 className="hero-subheading">{subHeading}</h2>
      <p className="description">{description}</p>
      <button
        onClick={() => {
          navigate(nextPage);
        }}
        className="learn-more"
      >
        {learnMore}
      </button>
    </div>
  );
};

export default LeftIntroContent;
