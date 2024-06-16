import { type FC, useEffect } from "react";
import { FaHashtag } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { type AppDispatch, type AppState } from "~/app/store";
import {
  type ColorAlpha,
  toggleAlpha,
  toggleCommas,
  toggleFormat,
  toggleShowHashtag,
} from "~/features/colors/colors-converter-slice";
import { useFormatColor } from "~/hooks/useFormatColor";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

export const HelperColorsConverter: FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Alpha channel:</p>
        <div className="flex gap-1">
          <Alpha type="hide" />
          <Alpha type="afterComma" />
          <Alpha type="afterSlash" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Output format:</p>
        <div className="flex gap-1">
          <ShowHashtag />
          <ShowFormat />
          <ShowCommas />
        </div>
      </div>
    </div>
  );
};

export const ShowHashtag: FC = () => {
  const { formatAll } = useFormatColor();
  const showHashtag = useSelector(
    (state: AppState) => state.colorsConverter.showHashtag,
  );

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleShowHashtag(!showHashtag));
  };

  useEffect(() => {
    formatAll();
  }, [showHashtag]);

  return (
    <HelperTooltipCheckbox
      Icon={FaHashtag}
      isChecked={showHashtag}
      toggleCheckbox={toggle}
      name="showHashtag"
    >
      Show hashtag
    </HelperTooltipCheckbox>
  );
};

export const ShowCommas: FC = () => {
  const { formatAll } = useFormatColor();
  const showCommas = useSelector(
    (state: AppState) => state.colorsConverter.showCommas,
  );

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleCommas(!showCommas));
  };

  useEffect(() => {
    formatAll();
  }, [showCommas]);

  return (
    <HelperTooltipCheckbox
      Icon="n, n"
      isChecked={showCommas}
      toggleCheckbox={toggle}
      name="showCommas"
    >
      Show comma-separated numbers
    </HelperTooltipCheckbox>
  );
};

export const ShowFormat: FC = () => {
  const { formatAll } = useFormatColor();
  const showFormat = useSelector(
    (state: AppState) => state.colorsConverter.showFormat,
  );

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleFormat(!showFormat));
  };

  useEffect(() => {
    formatAll();
  }, [showFormat]);

  return (
    <HelperTooltipCheckbox
      Icon="rgb()"
      isChecked={showFormat}
      toggleCheckbox={toggle}
      name="showFormat"
    >
      Show full color format
    </HelperTooltipCheckbox>
  );
};

export const Alpha: FC<{ type: ColorAlpha }> = ({ type }) => {
  const { formatAll } = useFormatColor();
  const alpha = useSelector((state: AppState) => state.colorsConverter.alpha);

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleAlpha(type));
  };

  useEffect(() => {
    formatAll();
  }, [alpha]);

  return (
    <HelperTooltipCheckbox
      Icon={
        type === "afterComma" ? ", a" : type === "afterSlash" ? "/ a" : "hide"
      }
      isChecked={alpha === type}
      toggleCheckbox={toggle}
      name={`alpha-${type}`}
    >
      {type === "hide" && "Don't show alpha value"}
      {type === "afterComma" && "Show comma-separated alpha value"}
      {type === "afterSlash" && "Show slash-separated alpha value"}
    </HelperTooltipCheckbox>
  );
};
