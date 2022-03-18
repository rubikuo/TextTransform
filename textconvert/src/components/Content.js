import React from "react";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";

const Content = () => {
  const file = useSelector((state) => state.file.value);
  return (
    <div className="Content">
      <h3 className="Content__title">{file.name}</h3>
      <h4 className="Content__subtitle">
        {file.mostUsedWords.length > 1
          ? "The most used words are"
          : "The most used word is"}
        <strong className="Content__text Content__text--strong">
          {file.mostUsedWords.map((mostWord, i) => {
            return <h4 key={i}>{mostWord}</h4>;
          })}
        </strong>{" "}
        {file.mostUsedWords.length > 1
          ? " which appear in the article "
          : " which appears in the article "}
        <strong className="Content__text Content__text--strong">
          {file.occurrence}
        </strong>{" "}
        times!
      </h4>
      <article className="Content__article">
        <Highlighter
          highlightClassName="Content__article-highlight"
          searchWords={file.mostUsedWordsConverted}
          textToHighlight={file.convertedContent}
        ></Highlighter>
      </article>
    </div>
  );
};

export default Content;
