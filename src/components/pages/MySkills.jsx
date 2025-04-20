import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";

const MySkills = () => {
  return (
    <>
      <ContentDescription pageTitle="skills" nextPage="/projects" />
      <ImageGallery pageTitle="skills" />
    </>
  );
};

export default MySkills;
