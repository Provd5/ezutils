import { type FC } from "react";
import { useLocation } from "react-router-dom";

import { type App } from "~/types/app";
import { type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { validateTextsParams } from "~/utils/validate-texts-params";

import TextsHelpers from "../Helpers/texts";
import { CopyOutput } from "./copy-output";
import { TextsToolInput } from "./texts-tool-input";
import { TextsToolOutput } from "./texts-tool-output";
import { UseOutput } from "./use-output";

export const TextsToolWrapper: FC = ({}) => {
  const { pathname } = useLocation();
  const { textsCategory, textsSubCategory, textsTool } = validateTextsParams(
    "textsTool",
    pathname,
  );

  const { description, inputExample, label, outputExample }: TextsTool = (
    APP_STRUCTURE.texts as App["texts"]
  )[textsCategory].subCategories[textsSubCategory].tools[textsTool];

  return (
    <div className="flex w-full flex-col gap-1">
      <p>
        <span className="text-lg font-bold">{label}</span> - {description}
      </p>
      <TextsHelpers tool={textsTool} />
      <div className="flex flex-col gap-0.5">
        <TextsToolInput placeholder={inputExample} />
        <TextsToolOutput placeholder={outputExample} />
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 max-sm:justify-center">
          <CopyOutput />
          <UseOutput />
        </div>
      </div>
    </div>
  );
};
