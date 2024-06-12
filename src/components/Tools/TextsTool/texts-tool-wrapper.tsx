import type { FC } from "react";
import { useParams } from "react-router-dom";

import { type App } from "~/types/app";
import { type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type ParamsType } from "~/main";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { CopyOutput } from "./copy-output";
import { Helpers } from "./helpers/helpers";
import { TextsToolInput } from "./texts-tool-input";
import { TextsToolOutput } from "./texts-tool-output";
import { UseOutput } from "./use-output";

export const TextsToolWrapper: FC = ({}) => {
  const params = useParams<ParamsType>();
  const { textsCategory, textsSubCategory, textsTool } = validateTextsParams(
    "textsTool",
    params,
  );

  const { description, inputExample, label, outputExample }: TextsTool = (
    APP_STRUCTURE as App
  ).texts[textsCategory].subCategories[textsSubCategory].tools[textsTool];

  return (
    <div className="flex w-full flex-col gap-1">
      <p>
        <span className="text-lg font-bold">{label}</span> - {description}
      </p>
      <Helpers tool={textsTool} />
      <div className="flex flex-col gap-0.5">
        <TextsToolInput placeholder={inputExample} />
        <TextsToolOutput placeholder={outputExample} />
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 max-sm:justify-center">
          <UseOutput />
          <CopyOutput />
        </div>
      </div>
    </div>
  );
};
