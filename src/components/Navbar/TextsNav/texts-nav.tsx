import type { FC } from "react";
import { useLocation } from "react-router-dom";

import { type TextsSubCategory } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { TextsNavLink } from "./texts-nav-link";

export const TextsNav: FC = ({}) => {
  const { pathname } = useLocation();
  const { textsCategory } = validateTextsParams("textsCategory", pathname);

  const subCategories: TextsSubCategory[] = Object.values(
    APP_STRUCTURE.texts[textsCategory].subCategories,
  );

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="mx-2 pt-3">
        {subCategories.map((subCategory) => (
          <CarouselItem
            key={`SubNav-SubNavLink-${subCategory.href}`}
            className="basis-30 pl-1"
          >
            <TextsNavLink variant={subCategory} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
