import DataContent from "./DataContent";

const MyProjects = ({ data }) => (
  <DataContent data={data} nextPage={"/contact-me"} imageSize="images-sm"/>
);

export default MyProjects;
