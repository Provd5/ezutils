import remove from "./converter-remove";

function camel(input: string): string {
  const words = input.split(/(?<=\w)[-_ ](?=\w)|(?<=[a-z])(?=[A-Z])/);
  return words
    .map((word) => {
      return (
        (word[0] ? word[0].toUpperCase() : "") + word.slice(1).toLowerCase()
      );
    })
    .join("");
}

function pascal(input: string): string {
  const lines = input.split("\n");
  return lines
    .map((line) => {
      const words = line.split(
        /(?<=\w)[-_ ](?=\w)|(?<=[a-z ])(?=[A-Z])|(?<=[\W ])(?=\w)/g,
      );
      return words
        .map((word) => {
          return (
            (word[0] ? word[0].toUpperCase() : "") + word.slice(1).toLowerCase()
          );
        })
        .join("");
    })
    .join("\n");
}

function snake(input: string): string {
  const words = input.split(/(?<=\w)[- ](?=\w)|(?<=[a-z])(?=[A-Z])/);
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
  const lines = input.split("\n");
  return lines
    .map((line) => {
      const words = line.split(/(?<=[\W ])(?=\w)/g);
      return words
        .map((word) => {
          return (
            (word[0] ? word[0].toUpperCase() : "") + word.slice(1).toLowerCase()
          );
        })
        .join("");
    })
    .join("\n");
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