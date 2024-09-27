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
  toggleUnits,
} from "~/features/colors/colors-converter-slice";
import { useConvertColor } from "~/hooks/useConvertColor";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

export const HelperColorsConverter: FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Output format:</p>
        <div className="flex gap-1">
          <ShowHashtag />
          <ShowFormat />
          <ShowCommas />
          <ShowUnits />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Alpha:</p>
        <div className="flex gap-1">
          <Alpha />
        </div>
      </div>
    </div>
  );
};

export const ShowHashtag: FC = () => {
  const { convertFrom } = useConvertColor();
  const state = useSelector((state: AppState) => state.colorsConverter);

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleShowHashtag(!state.showHashtag));
  };

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [state.showHashtag]);

  return (
    <HelperTooltipCheckbox
      Icon={FaHashtag}
      isChecked={state.showHashtag}
      toggleCheckbox={toggle}
      name="showHashtag"
    >
      Show hashtag
    </HelperTooltipCheckbox>
  );
};

export const ShowCommas: FC = () => {
  const { convertFrom } = useConvertColor();

  const state = useSelector((state: AppState) => state.colorsConverter);
  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleCommas(!state.showCommas));
  };

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [state.showCommas]);

  return (
    <HelperTooltipCheckbox
      Icon="n, n"
      isChecked={state.showCommas}
      toggleCheckbox={toggle}
      name="showCommas"
    >
      Show comma-separated numbers
    </HelperTooltipCheckbox>
  );
};

export const ShowFormat: FC = () => {
  const { convertFrom } = useConvertColor();
  const state = useSelector((state: AppState) => state.colorsConverter);

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleFormat(!state.showFormat));
  };

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [state.showFormat]);

  return (
    <HelperTooltipCheckbox
      Icon="rgb()"
      isChecked={state.showFormat}
      toggleCheckbox={toggle}
      name="showFormat"
    >
      Show full color format
    </HelperTooltipCheckbox>
  );
};

export const ShowUnits: FC = () => {
  const { convertFrom } = useConvertColor();
  const state = useSelector((state: AppState) => state.colorsConverter);

  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(toggleUnits(!state.showUnits));
  };

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [state.showUnits]);

  return (
    <HelperTooltipCheckbox
      Icon="units"
      isChecked={state.showUnits}
      toggleCheckbox={toggle}
      name="showUnits"
    >
      Show output units
    </HelperTooltipCheckbox>
  );
};

export const Alpha: FC = () => {
  const { convertFrom } = useConvertColor();
  const state = useSelector((state: AppState) => state.colorsConverter);

  const alphaSettings: ColorAlpha[] = [
    "hide",
    "afterComma",
    "afterSlash",
  ] as const;

  const dispatch = useDispatch<AppDispatch>();

  const toggle = (type: ColorAlpha) => {
    dispatch(toggleAlpha(type));
  };

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [state.alpha]);

  return alphaSettings.map((type) => (
    <HelperTooltipCheckbox
      key={`Alpha-HelperTooltipCheckbox-${type}`}
      Icon={
        type === "afterComma" ? ", a" : type === "afterSlash" ? "/ a" : "hide"
      }
      isChecked={state.alpha === type}
      toggleCheckbox={() => toggle(type)}
      name={`alpha-${type}`}
    >
      {type === "hide" && "Don't show alpha value"}
      {type === "afterComma" && "Show comma-separated alpha value"}
      {type === "afterSlash" && "Show slash-separated alpha value"}
    </HelperTooltipCheckbox>
  ));
};
