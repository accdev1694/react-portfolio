import DataContent from "./DataContent";

const PageNotFound = ({ data }) => {
  return (
    <div className="hero">
      <DataContent data={data} nextPage={"/"} imageSize="images-lg"/>      
    </div>
  );
};

export default PageNotFound;
