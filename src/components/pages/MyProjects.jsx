import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";

const MyProjects = () => {
  return (
    <>
      <ContentDescription pageTitle="projects" nextPage="/contacts" />
      <ImageGallery pageTitle="projects" />
    </>
  );
};

export default MyProjects;
