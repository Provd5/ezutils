import type { FC } from "react";
import { useParams } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type Tool } from "~/app/appStructure/structure-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { type ParamsType } from "~/main";

import { ToolsNavLink } from "./tools-nav-link";

export const ToolsNav: FC = ({}) => {
  const { subCategory, category } = useParams<ParamsType>();

  if (
    !subCategory ||
    !category ||
    !Object.keys(APP_STRUCTURE.categories[category].subCategories).includes(
      subCategory,
    ) ||
    !Object.keys(APP_STRUCTURE.categories).includes(category)
  )
    throw new Error("Page not found");

  const tools: Tool[] = Object.values(
    APP_STRUCTURE.categories[category].subCategories[subCategory].tools,
  );

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mx-2 pt-3">
        {tools.map((tool) => (
          <CarouselItem
            key={`SubNav-SubNavLink-${tool.href}`}
            className="basis-30 pl-1"
          >
            <ToolsNavLink variant={tool} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
