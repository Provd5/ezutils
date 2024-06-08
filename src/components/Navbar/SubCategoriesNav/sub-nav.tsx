import type { FC } from "react";
import { useParams } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type SubCategory } from "~/app/appStructure/structure-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { type ParamsType } from "~/main";

import { SubNavLink } from "./sub-nav-link";

export const SubNav: FC = ({}) => {
  const { category } = useParams<ParamsType>();

  if (!category || !Object.keys(APP_STRUCTURE.categories).includes(category)) {
    throw new Error("Page not found");
  }

  const subCategories: SubCategory[] = Object.values(
    APP_STRUCTURE.categories[category].subCategories,
  );

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mx-2 pt-3">
        {subCategories.map((subCategory) => (
          <CarouselItem
            key={`SubNav-SubNavLink-${subCategory.href}`}
            className="basis-30 pl-1"
          >
            <SubNavLink variant={subCategory} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
