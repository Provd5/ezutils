export function includeEmptyLines(): boolean {
  const includeEmptyLines = (
    document.getElementById(
      "settings-include-empty-lines",
    ) as HTMLInputElement | null
  )?.checked;

  return includeEmptyLines || false;
}
