import { createContext, useState } from "react";

export const FileContext = createContext();

const FileContextProvider = ({ children }) => {
  const [file, setFile] = useState({
    name: "choose file",
    mostUsedWords: [],
    mostUsedWordsConverted: [],
    occurrence: 0,
    convertedContent: "",
  });
  const [uploadedFile, setUploadedFile] = useState("");
  const [isUploaded, setIsUploaded] = useState("preUploaded");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileUpload = (e) => {
    setErrorMsg("");
    setFile({
      ...file,
      name: "",
      mostUsedWords: [],
      mostUsedWordsConverted: [],
      occurrence: 0,
      convertedContent: "",
    });

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

  return (
    <FileContext.Provider
      value={{
        file,
        setFile,
        uploadedFile,
        setUploadedFile,
        isUploaded,
        setIsUploaded,
        errorMsg,
        setErrorMsg,
        handleFileUpload,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
