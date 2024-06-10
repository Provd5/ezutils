function links(input: string): string {
  const regex =
    /\b(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;
  const matches = input.match(regex);
  return matches ? matches.join("\n") : "";
}

function quote(input: string): string {
  const regex =
    /«([^«»]+)»|“([^“”]+)”|“([^“”]+)”|([^"]+)"|'([^']+)'|`([^`]+)`/g;
  const matches = input.match(regex);
  return matches
    ? matches.map((match) => match.replace(/«|»|“|”|"|'|`/g, "")).join("\n")
    : "";
}

function letters(input: string): string {
  return input.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\s]/g, "");
}

function notLetters(input: string): string {
  return input.replace(/[a-zA-ZÀ-ÿ\u0100-\u017F]/g, "");
}

export default { links, quote, letters, notLetters };
