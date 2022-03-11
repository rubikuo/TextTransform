import { useContext } from "react";
import axios from "axios";
import { FileContext } from "../contexts/FileContext";

const Converter = () => {
  const {
    file,
    setFile,
    setErrorMsg,
    setIsUploaded,
    uploadedFile,
    handleFileUpload,
  } = useContext(FileContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUploaded("uploading");
    const formData = new FormData();
    formData.append("myFile", uploadedFile);

    axios
      .post("/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        let { mostWords, maxNum, convertedWords, result } = res.data;

        setFile({
          ...file,
          name: uploadedFile.name,
          mostUsedWords: [...mostWords],
          mostUsedWordsConverted: [...convertedWords],
          occurrence: maxNum,
          convertedContent: result,
        });
        setIsUploaded("uploaded");
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setErrorMsg("Something wrong with the server");
        } else {
          setErrorMsg(err.response.data.msg);
        }
      });
  };

  return (
    <div className="Converter">
      <h3> Text Converter</h3>
      <form onSubmit={onSubmit}>
        <label className="Converter__selector" htmlFor="myFile"></label>
        <input
          id="myFile"
          name="myFile"
          type="file"
          onChange={(e) => handleFileUpload(e)}
        />

        <input className="Converter__btn" type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default Converter;
