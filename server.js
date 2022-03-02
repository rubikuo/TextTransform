if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mostFrequentWord = require("./textconvert/utils/mostFrequentWord");
const transformWord = require("./textconvert/utils/transformWord");
const express = require("express");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());
app.use(express.json());

//file upload Endpoint
app.post("/uploadFile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (file === null || !file || undefined) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  console.log("file", file);
  const multerText = Buffer.from(file.buffer).toString("utf-8"); // this reads and converts the contents of the text file into string
  console.log(multerText);
  // find "words" in the text
  let words = multerText.toLowerCase().match(/\w+/g);

  // filter out the underscore and words that contain underscore.
  let filteredWords = words.filter((w) => w !== "_" && !/\w_/.test(w));
  const { mostWords, maxNum } = mostFrequentWord(filteredWords);
  const { convertedWords, result } = transformWord(words, mostWords);

  return res.status(200).json({ mostWords, maxNum, convertedWords, result });
});

app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});
