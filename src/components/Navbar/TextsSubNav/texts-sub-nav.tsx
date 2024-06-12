import type { FC } from "react";
import { useParams } from "react-router-dom";

import { type App } from "~/types/app";
import { type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { type ParamsType } from "~/main";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { TextsSubNavLink } from "./texts-sub-nav-link";

export const TextsSubNav: FC = ({}) => {
  const params = useParams<ParamsType>();
  const { textsCategory, textsSubCategory } = validateTextsParams(
    "textsSubCategory",
    params,
  );

  const tools: TextsTool[] = Object.values(
    (APP_STRUCTURE as App).texts[textsCategory].subCategories[textsSubCategory]
      .tools,
  );

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mx-2 pt-3">
        {tools.map((tool) => (
          <CarouselItem
            key={`SubNav-SubNavLink-${tool.href}`}
            className="basis-30 pl-1"
          >
            <TextsSubNavLink variant={tool} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
