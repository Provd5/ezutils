import type { FC } from "react";

import { type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";

const texts = {
  title: "Welcome to Ez-utils",
  subtitle:
    "All-in-one tool for effortless text editing and color conversions!",
  shortText:
    "With a variety of powerful text transformation features at your fingertips, you can easily enhance and streamline your workflows.",
} as const;

export const WelcomeScreen: FC = ({}) => {
  return (
    <>
      <div className="px-3 py-6 sm:px-6">
        <h1 className="text-3xl">{texts.title}</h1>
        <p className="text-lg italic">{texts.subtitle}</p>
        <p className="my-5 max-w-sm">{texts.shortText}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">{APP_STRUCTURE.texts.sentences.label}</h2>
            {Object.values(APP_STRUCTURE.texts.sentences.subCategories).map(
              (subCategory) => (
                <div className="ml-3" key={subCategory.href}>
                  <h3 className="text-xl">{subCategory.label}:</h3>
                  <ul>
                    {Object.values(subCategory.tools).map((tool: TextsTool) => (
                      <li className="ml-3" key={tool.href}>
                        <span className="font-bold">{tool.label}</span> -{" "}
                        {tool.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">{APP_STRUCTURE.texts.paragraphs.label}</h2>
            {Object.values(APP_STRUCTURE.texts.paragraphs.subCategories).map(
              (subCategory) => (
                <div className="ml-3" key={subCategory.href}>
                  <h3 className="text-xl">{subCategory.label}:</h3>
                  <ul>
                    {Object.values(subCategory.tools).map((tool: TextsTool) => (
                      <li className="ml-3" key={tool.href}>
                        <span className="font-bold">{tool.label}</span> -{" "}
                        {tool.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">{APP_STRUCTURE.colors.label}</h2>
            {Object.values(APP_STRUCTURE.colors.tools).map((tool) => (
              <div className="ml-3" key={tool.href}>
                <h3 className="text-xl">{tool.label}:</h3>
                <p className="ml-3" key={tool.href}>
                  <span className="font-bold">{tool.label}</span> -{" "}
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
