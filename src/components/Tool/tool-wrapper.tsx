import type { FC } from "react";
import { useParams } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  type AppStructure,
  type Tool,
} from "~/app/appStructure/structure-types";
import { type ParamsType } from "~/main";
import { validateParams } from "~/utils/validate-params";

import { CopyOutput } from "./copy-output";
import { Helpers } from "./helpers/helpers";
import { ToolInput } from "./tool-input";
import { ToolOutput } from "./tool-output";
import { UseOutput } from "./use-output";

export const ToolWrapper: FC = ({}) => {
  const params = useParams<ParamsType>();
  const { category, subCategory, tool } = validateParams("tool", params);

  const { description, inputExample, label, outputExample }: Tool = (
    APP_STRUCTURE as AppStructure
  ).categories[category].subCategories[subCategory].tools[tool];

  return (
    <div className="flex w-full flex-col gap-1">
      <p>
        <span className="text-lg font-bold">{label}</span> - {description}
      </p>
      <Helpers tool={tool} />
      <div className="flex flex-col gap-0.5">
        <ToolInput placeholder={inputExample} />
        <ToolOutput placeholder={outputExample} />
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 max-sm:justify-center">
          <UseOutput />
          <CopyOutput />
        </div>
      </div>
    </div>
  );
};
