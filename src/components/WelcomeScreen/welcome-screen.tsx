import type { FC } from "react";

import { type TextsCategory } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";

import { CategorySegment } from "./category-segment";

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
      <div className="px-3 pb-12 pt-6 sm:px-6">
        <h1 className="text-3xl font-bold">{texts.title}</h1>
        <p className="text-lg italic">{texts.subtitle}</p>
        <p className="my-5 max-w-sm">{texts.shortText}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <CategorySegment
            categoryData={APP_STRUCTURE.texts.sentences as TextsCategory}
          />
          <CategorySegment
            categoryData={APP_STRUCTURE.texts.paragraphs as TextsCategory}
          />
          <CategorySegment categoryData={APP_STRUCTURE.colors} />
        </div>
      </div>
    </>
  );
};
