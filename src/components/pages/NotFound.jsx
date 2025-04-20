import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";

const NotFound = () => {
  return (
    <>
      <ContentDescription pageTitle="notFound" nextPage="/"/>
      <ImageGallery pageTitle="notFound" />
    </>
  );
};

export default NotFound;
