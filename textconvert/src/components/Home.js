import { useState } from "react";
import Converter from "./Converter";
import Content from "./Content";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState("");
  const [isUploaded, setIsUploaded] = useState("preUploaded");
  const [errorMsg, setErrorMsg] = useState("");
  const file = useSelector((state) => state.file.value);
  // const errorMessage = useSelector((state) => state.errorMsg);
  return (
    <div className="Home">
      <Converter
        // file={file}
        // setFile={setFile}
        uploadedFile={uploadedFile}
        setUploadedFile={setUploadedFile}
        isUploaded={isUploaded}
        setIsUploaded={setIsUploaded}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
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
        <Content />
      ) : null}
    </div>
  );
};

export default Home;
