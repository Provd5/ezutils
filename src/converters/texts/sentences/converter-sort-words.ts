function sortWordsAsc(input: string): string {
  const words = input.split(/[\n ]/g).filter((word) => word.trim() !== "");
  words.sort((a, b) => {
    const numA = parseInt(a.match(/^\d+/)?.[0] || "", 10);
    const numB = parseInt(b.match(/^\d+/)?.[0] || "", 10);
    if (numA && numB) {
      return numA - numB;
    } else if (numA) {
      return -1;
    } else if (numB) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
  return words.join(" ");
}

function reverseSentence(input: string): string {
  const text = input.split("");
  text.reverse();
  return text.join("");
}

function reverseWords(input: string): string {
  const lines = input.split("\n");
  const reversedLines = lines.map((line) => {
    const words = line.split(" ");
    words.reverse();
    return words.join(" ");
  });
  return reversedLines.join("\n");
}

function shuffleWords(input: string): string {
  const lines = input.split("\n");
  const shuffledLines = lines.map((line) => {
    const words = line.split(" ");
    const shuffledWords = words.sort(() => Math.random() - 0.5);
    return shuffledWords.join(" ");
  });
  return shuffledLines.join("\n");
}

function shuffleLetters(input: string): string {
  const lines = input.split("\n");
  const shuffledLines = lines.map((line) => {
    const words = line.split(" ");
    const shuffledLetters = words.map((word) => {
      const letters = word.split("");
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters.join("");
    });
    return shuffledLetters.join(" ");
  });
  return shuffledLines.join("\n");
}

export default {
  sortWordsAsc,
  reverseSentence,
  reverseWords,
  shuffleWords,
  shuffleLetters,
};
