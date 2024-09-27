import { useSelector } from "react-redux";

import { ColorsToolWrapper } from "~/components/Tools/ColorsTool/colors-tool-wrapper";

import { type AppState } from "../store";

export default function ColorsToolPage() {
  const { colorsOutput } = useSelector(
    (state: AppState) => state.colorsConverter,
  );
  const { HEX } = colorsOutput;

  return (
    <section
      className="flex h-full grow flex-col"
      style={{
        backgroundColor: HEX
          ? `${HEX.startsWith("#") ? "" : "#"}${HEX}`
          : "initial",
      }}
    >
      <ColorsToolWrapper />
    </section>
  );
}
