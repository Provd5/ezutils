import converterRemove from "./converter-remove";

function camelCase(input: string): string {
  const words = input.split(/(?<=\w)[-_ ](?=\w)|(?<=[a-z])(?=[A-Z])/g);
  return words
    .map((word, index) => {
      return (
        (index !== 0
          ? word[0]?.toUpperCase() || ""
          : word[0]?.toLowerCase() || "") + word.slice(1).toLowerCase()
      );
    })
    .join("");
}

function pascalCase(input: string): string {
  const lines = input.split("\n");
  return lines
    .map((line) => {
      const words = line.split(
        /(?<=\w)[-_ ](?=\w)|(?<=[a-z ])(?=[A-Z])|(?<=[\W ])(?=\w)/g,
      );
      return words
        .map((word) => {
          return (word[0]?.toUpperCase() || "") + word.slice(1).toLowerCase();
        })
        .join("");
    })
    .join("\n");
}

function snakeCase(input: string): string {
  const words = input.split(/(?<=\w)[- ](?=\w)|(?<=[a-z])(?=[A-Z])/);
  const snakeCase = words
    .map((word) => (typeof word === "string" ? word.toUpperCase() : ""))
    .join("_");
  return snakeCase;
}

function upperCase(input: string): string {
  return input.toUpperCase();
}

function lowerCase(input: string): string {
  return input.toLowerCase();
}

function titleCase(input: string): string {
  const lines = input.split("\n");
  return lines
    .map((line) => {
      const words = line.split(/[\s ]/);
      return words
        .map((word) => {
          return (word[0]?.toUpperCase() || "") + word.slice(1).toLowerCase();
        })
        .join(" ");
    })
    .join("\n");
}

function sentence(input: string): string {
  let newInput = converterRemove.removeExcessSpaces(input);
  const punctuationMarks = [",", ".", "?", "!"] as const;

  function titleCaseController(sentences: string[]): string[] {
    const titleCase = sentences.map((sentence) => {
      const word = sentence.split(/[\s ]/)[0];
      const title = word[0]?.toUpperCase() || "";

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
    newStr = converterRemove.removeExcessSpaces(newStr);

    return newStr;
  }

  punctuationMarks.forEach(
    (mark) => (newInput = punctuationController(newInput, mark)),
  );

  punctuationMarks.forEach((mark) => {
    const markPrefixRegex = new RegExp(`\\${mark} `);
    const sentences = newInput.split(markPrefixRegex);
    newInput =
      mark === ","
        ? sentences.join(`${mark} `)
        : titleCaseController(sentences).join(`${mark} `);
  });

  const lines = newInput.split(/\n/);
  newInput = titleCaseController(lines).join(`\n`);

  return newInput;
}

function randomCase(input: string): string {
  return input
    .split("")
    .map((char) => {
      const randomCase = Math.random() < 0.5 ? "upperCase" : "lowerCase";
      return randomCase === "upperCase"
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join("");
}

export default {
  upperCase,
  lowerCase,
  titleCase,
  camelCase,
  pascalCase,
  snakeCase,
  sentence,
  randomCase,
};
