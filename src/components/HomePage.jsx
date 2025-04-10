import DataContent from "./DataContent";

const HomePage = ({ data }) => {
  return (
    <DataContent data={data} nextPage={"/my-skills"} imageSize="images-lg" />
  );
};

export default HomePage;
