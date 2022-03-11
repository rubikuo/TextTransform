import { useContext } from "react";
import Converter from "./Converter";
import Content from "./Content";
import ReactLoading from "react-loading";
import { FileContext } from "../contexts/FileContext";

const Home = () => {
  const { file, errorMsg, isUploaded } = useContext(FileContext);

  return (
    <div className="Home">
      <Converter />
      {errorMsg !== "" && (
        <p className="Home__text Home__text--error">{errorMsg}</p>
      )}
      {errorMsg === "" && isUploaded === "uploading" ? (
        <ReactLoading
          className="Home__loading"
          type="spinningBubbles"
          color="blue"
          height={200}
          width={100}
        />
      ) : errorMsg === "" &&
        isUploaded === "uploaded" &&
        file.convertedContent !== "" ? (
        <Content file={file} />
      ) : null}
    </div>
  );
};

export default Home;
