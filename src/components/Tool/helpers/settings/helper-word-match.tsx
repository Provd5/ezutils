import type { FC } from "react";
import { VscCaseSensitive, VscRegex, VscWholeWord } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { type DebouncedState } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  switchWordMatchCase,
  switchWordMatchRegex,
  switchWordMatchSentence,
  wordMatchKeys,
} from "~/features/settings-slice";

interface WordMatchHelperProps {
  debouncedFunction: DebouncedState<(arg?: undefined) => void>;
}

type WordMatchKeysType = (typeof wordMatchKeys)[number];

const getIcon = (key: WordMatchKeysType) => {
  switch (key) {
    case "case":
      return <VscCaseSensitive className="size-5" />;
    case "regex":
      return <VscRegex className="size-5" />;
    case "sentence":
      return <VscWholeWord className="size-5" />;
  }
};

export const WordMatchHelper: FC<WordMatchHelperProps> = ({
  debouncedFunction,
}) => {
  const wordMatch = useSelector((state: AppState) => state.settings.wordMatch);
  const dispatch = useDispatch<AppDispatch>();

  const changeWordMatch = (key: WordMatchKeysType) => {
    switch (key) {
      case "case":
        dispatch(switchWordMatchCase(!wordMatch.case));
        break;
      case "sentence":
        dispatch(switchWordMatchSentence(!wordMatch.sentence));
        break;
      case "regex":
        dispatch(switchWordMatchRegex(!wordMatch.regex));
        break;
    }
    debouncedFunction();
  };

  return (
    <div className="flex gap-1">
      {wordMatchKeys.map((key) => (
        <div key={`WordMatchHelper-wordMatchKeys-${key}`}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size={"icon"}
                  variant={wordMatch[key] ? "default" : "outline"}
                  onClick={() => changeWordMatch(key)}
                >
                  {getIcon(key)}
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>
                  {key === "case" && "Match Case"}
                  {key === "sentence" && "Match While Word"}
                  {key === "regex" && "Use Regular Expression"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <input
            className="hidden"
            readOnly
            id={`settings-word-match-${key}`}
            type="checkbox"
            checked={wordMatch[key]}
          />
        </div>
      ))}
    </div>
  );
};
