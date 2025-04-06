import myPhoto from "../assets/images/my-photo.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="left-intro">
        <h1 className="name">Oloche Aboje</h1>
        <h2 className="career">FRONT END DEVELOPER</h2>
        <p className="introduction">
          I started out in architecture, drawn to design and structure — but
          when I discovered web development, everything clicked. Coding quickly
          became more than a skill; it became the space where I feel most
          focused, creative, and at home. I can’t imagine doing anything else,
          and that passion drives everything I build.
        </p>
        <button className="learn-more">Learn more about me</button>
      </div>
      <div className="right-intro">
        <img className="my-photo" src={myPhoto} alt="my passport photograph" />
      </div>
    </div>
  );
};

export default AboutMe;
