import type { FC } from "react";
import { VscCaseSensitive, VscRegex, VscWholeWord } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { type DebouncedState } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import {
  toggleWordMatchCase,
  toggleWordMatchRegex,
  toggleWordMatchSentence,
  wordMatchKeys,
} from "~/features/settings-slice";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

interface WordMatchHelperProps {
  debouncedFunction: DebouncedState<(arg?: unknown) => void>;
}

type WordMatchKeysType = (typeof wordMatchKeys)[number];

const getIcon = (key: WordMatchKeysType) => {
  switch (key) {
    case "case":
      return VscCaseSensitive;
    case "regex":
      return VscRegex;
    case "sentence":
      return VscWholeWord;
  }
};

export const HelperWordMatch: FC<WordMatchHelperProps> = ({
  debouncedFunction,
}) => {
  const wordMatch = useSelector((state: AppState) => state.settings.wordMatch);
  const dispatch = useDispatch<AppDispatch>();

  const changeWordMatch = (key: WordMatchKeysType) => {
    switch (key) {
      case "case":
        dispatch(toggleWordMatchCase(!wordMatch.case));
        break;
      case "sentence":
        dispatch(toggleWordMatchSentence(!wordMatch.sentence));
        break;
      case "regex":
        dispatch(toggleWordMatchRegex(!wordMatch.regex));
        break;
    }
    debouncedFunction();
  };

  return (
    <div className="flex gap-1">
      {wordMatchKeys.map((key) => (
        <HelperTooltipCheckbox
          key={`HelperWordMatch-wordMatchKeys-${key}`}
          Icon={getIcon(key)}
          isChecked={wordMatch[key]}
          toggleCheckbox={() => changeWordMatch(key)}
          name={key}
        >
          {key === "case" && "Match Case"}
          {key === "sentence" && "Match While Word"}
          {key === "regex" && "Use Regular Expression"}
        </HelperTooltipCheckbox>
      ))}
    </div>
  );
};
