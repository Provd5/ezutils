function sortAsc(input: string): string {
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  lines.sort((a, b) => {
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
  return lines.join("\n");
}

function reverse(input: string): string {
  const lines = input.split("\n");
  lines.reverse();
  return lines.join("\n");
}

function shuffle(input: string): string {
  const lines = input.split("\n");
  for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  return lines.join("\n");
}

export default { sortAsc, reverse, shuffle };
