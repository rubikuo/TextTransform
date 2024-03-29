import axios from "axios";
import { useDispatch } from "react-redux";
import { uploadFile, resetFile } from "../features/file";

const Converter = ({
  errorMsg,
  setErrorMsg,
  setIsUploaded,
  uploadedFile,
  setUploadedFile,
}) => {
  const dispatch = useDispatch();
  const handleFileUpload = (e) => {
    setErrorMsg("");
    dispatch(resetFile());

    let uploadedFile = e.target.files[0];

    // check if user chose a file
    if (uploadedFile === undefined || null || !uploadedFile) {
      setErrorMsg("Please choose a file to upload!");
      return;
    }

    // check file types
    if (/\.(txt|md|rtf|file)$/i.test(uploadedFile.name) === false) {
      setErrorMsg(
        "File Type Error: Please choose the following file types: .txt/.md/.rtf/.file"
      );
      return;
    }

    // check if the file has no content
    if (uploadedFile.size === 0) {
      setErrorMsg("File Content Error: The file has no content");
      return;
    }
    setUploadedFile(uploadedFile);
  };

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
        console.log("hello", mostWords, maxNum, convertedWords, result);

        dispatch(
          uploadFile({
            name: uploadedFile.name,
            mostUsedWords: [...mostWords],
            mostUsedWordsConverted: [...convertedWords],
            occurrence: maxNum,
            convertedContent: result,
          })
        );

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

        <input
          disabled={errorMsg !== "" ? true : false}
          className="Converter__btn"
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  );
};

export default Converter;
