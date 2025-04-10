import { useNavigate } from "react-router-dom";

const DataContent = ({ data, nextPage, imageSize }) => {
  const { heading, subHeading, description, learnMore, urls } = data;

  const navigate = useNavigate();
  return (
    <div className="hero">
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
      <div className="right-intro">
        {urls.map((url) => (
          <img className={imageSize} src={url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default DataContent;
