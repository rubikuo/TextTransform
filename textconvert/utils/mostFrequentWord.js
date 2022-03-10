function mostFrequentWord(filteredWords) {
  let occurrenceOfEachWord = {};

  // count occurrence of all words
  for (let word of filteredWords) {
    if (occurrenceOfEachWord[word]) {
      occurrenceOfEachWord[word]++;
    } else {
      occurrenceOfEachWord[word] = 1;
    }
  }

  let mostWords = []; // there might be more than one word that has the highest occurrence
  let maxNum = 0;
  //find the word that has highest occurrence
  for (let word in occurrenceOfEachWord) {
    if (occurrenceOfEachWord[word] > maxNum) {
      maxNum = occurrenceOfEachWord[word];
    }
  }
  // after finding the most occurrence, check if there are more than one word that have the highest occurrence
  for (let word in occurrenceOfEachWord) {
    if (occurrenceOfEachWord[word] === maxNum) {
      mostWords.push(word);
    }
  }
  return { mostWords, maxNum };
}
module.exports = mostFrequentWord;
