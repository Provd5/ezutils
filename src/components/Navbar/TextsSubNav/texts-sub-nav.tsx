import type { FC } from "react";
import { useLocation } from "react-router-dom";

import { type App } from "~/types/app";
import { type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { TextsSubNavLink } from "./texts-sub-nav-link";

export const TextsSubNav: FC = () => {
  const { pathname } = useLocation();
  const { textsCategory, textsSubCategory } = validateTextsParams(
    "textsSubCategory",
    pathname,
  );

  const tools: TextsTool[] = Object.values(
    (APP_STRUCTURE.texts as App["texts"])[textsCategory].subCategories[
      textsSubCategory
    ].tools,
  );

  return (
    <Carousel opts={{ dragFree: true, align: "start" }}>
      <CarouselContent className="mx-1 pt-2">
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
