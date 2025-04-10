import DataContent from "./DataContent";

const MySkills = ({ data }) => {
  return (
    <DataContent data={data} nextPage={"/my-projects"} imageSize="images-sm" />
  );
};

export default MySkills;
