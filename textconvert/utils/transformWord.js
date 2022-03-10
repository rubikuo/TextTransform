function transformWord(words, mostWords) {
  let convertedWords = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < mostWords.length; j++) {
      if (words[i] === mostWords[j]) {
        words[i] = `foo${words[i]}bar`;
        if (!convertedWords.includes(words[i])) {
          convertedWords.push(words[i]);
        }
      }
    }
  }
  let result = words.join(" ");
  return { convertedWords, result };
}
module.exports = transformWord;
