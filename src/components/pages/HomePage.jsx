import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";

const HomePage = () => {
  return (
    <>
      <ContentDescription pageTitle="home" nextPage="/skills" />
      <ImageGallery pageTitle="home" />
    </>
  );
};

export default HomePage;
