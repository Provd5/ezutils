import remove from "./remove";

function camel(input: string): string {
  const words = input.split(/(?<=\w)[-_ ](?=\w)/);
  const camelCase = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return (
        (typeof word[0] === "string" ? word[0].toUpperCase() : "") +
        word.slice(1).toLowerCase()
      );
    }
  });
  return camelCase.join("");
}

function pascal(input: string): string {
  const words = input.split(/(?<=\w)[-_ ](?=\w)/);
  const camelCase = words.map((word) => {
    return (
      (typeof word[0] === "string" ? word[0].toUpperCase() : "") +
      word.slice(1).toLowerCase()
    );
  });
  return camelCase.join("");
}

function snake(input: string): string {
  const words = input.split(/(?<=\w)[- ](?=\w)/);
  const snakeCase = words
    .map((word) => (typeof word === "string" ? word.toUpperCase() : ""))
    .join("_");
  return snakeCase;
}

function upper(input: string): string {
  return input.toUpperCase();
}

function lower(input: string): string {
  return input.toLowerCase();
}

function title(input: string): string {
  const words = input.split(" ");
  return words
    .map(
      (word) =>
        (typeof word[0] === "string" ? word[0].toUpperCase() : "") +
        word.slice(1).toLowerCase(),
    )
    .join(" ");
}

function sentence(input: string): string {
  let newInput = input;
  const punctuationMarks = [",", ".", "?", "!"] as const;

  punctuationMarks.forEach(
    (mark) => (newInput = punctuationController(newInput, mark)),
  );

  punctuationMarks.forEach((mark) => {
    const markPrefixRegex = new RegExp(`\\${mark} `);
    const sentences = newInput.split(markPrefixRegex);
    newInput = toTitleCase(sentences).join(`${mark} `);
  });

  const lines = newInput.split(/\n/);
  newInput = toTitleCase(lines).join(`\n`);

  return newInput;

  function toTitleCase(sentences: string[]): string[] {
    const titleCase = sentences.map((sentence) => {
      const word = sentence.split(" ")[0];
      const title = word[0] ? word[0].toUpperCase() : "";

      return title + sentence.slice(1);
    });

    return titleCase;
  }

  function punctuationController(
    str: string,
    mark: (typeof punctuationMarks)[number],
  ): string {
    if (mark === ",") {
      return str.split(/,{1,}| ,{1,}/).join(", ");
    }

    const markSuffixRegex = new RegExp(` \\${mark}`);
    let newStr = str.split(markSuffixRegex).join(`${mark}`);

    const markRegex = new RegExp(`\\${mark}(?![.?!])`);
    newStr = newStr.split(markRegex).join(`${mark} `);
    newStr = remove.excessSpaces(newStr);

    return newStr;
  }
}

export default { camel, pascal, snake, upper, lower, title, sentence };
