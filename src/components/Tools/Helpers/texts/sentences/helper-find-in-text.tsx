import { type FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import {
  newReplaceWith,
  newToReplace,
} from "~/features/texts/sentences/find-in-text-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";

import { HELPER_NAME } from "../../helper-tooltip-checkbox";
import { HelperWordMatch } from "../../settings/helper-word-match";

interface FindInTextProps {
  tool: TextsToolKeys;
}

export const HelperFindInTextFindAndReplace: FC<FindInTextProps> = ({
  tool,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const findInTextHelper = useSelector(
    (state: AppState) => state.findInTextHelper,
  );
  const inputValue = useSelector((state: AppState) => state.input);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback(
    (input?: "toReplace" | "replaceWith", value?: string) => {
      if (value) {
        switch (input) {
          case "toReplace":
            dispatch(newToReplace(value));
            break;
          case "replaceWith":
            dispatch(newReplaceWith(value));
        }
      }

      convertTextOutput(tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-x-1.5 sm:flex-row">
        <div>
          <Label htmlFor={`${HELPER_NAME}-findInText-findAndReplace-to`}>
            Text to replace:
          </Label>
          <Input
            ref={(el) =>
              addRef(`${HELPER_NAME}-findInText-findAndReplace-to`, el)
            }
            autoComplete="off"
            className="max-w-xs"
            id={`${HELPER_NAME}-findInText-findAndReplace-to`}
            defaultValue={findInTextHelper.toReplace}
            onChange={(e) => changeOutputValue("toReplace", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor={`${HELPER_NAME}-findInText-findAndReplace-with`}>
            Replace with:
          </Label>
          <Input
            ref={(el) =>
              addRef(`${HELPER_NAME}-findInText-findAndReplace-with`, el)
            }
            autoComplete="off"
            className="max-w-xs"
            id={`${HELPER_NAME}-findInText-findAndReplace-with`}
            defaultValue={findInTextHelper.replaceWith}
            onChange={(e) => changeOutputValue("replaceWith", e.target.value)}
          />
        </div>
      </div>
      <HelperWordMatch debouncedFunction={changeOutputValue} />
    </div>
  );
};

export const HelperFindInTextFindAndCount: FC<FindInTextProps> = ({ tool }) => {
  const dispatch = useDispatch<AppDispatch>();

  const findInTextHelper = useSelector(
    (state: AppState) => state.findInTextHelper,
  );
  const inputValue = useSelector((state: AppState) => state.input);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback((value?: string) => {
    if (value) dispatch(newToReplace(value));

    convertTextOutput(tool, inputValue);
  }, DEBOUNCE_WAIT);

  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <Label htmlFor={`${HELPER_NAME}-findInText-findAndCount`}>
          Find in text:
        </Label>
        <Input
          ref={(el) => addRef(`${HELPER_NAME}-findInText-findAndCount`, el)}
          autoComplete="off"
          className="max-w-xs"
          id={`${HELPER_NAME}-findInText-findAndCount`}
          defaultValue={findInTextHelper.toReplace}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
      </div>
      <HelperWordMatch debouncedFunction={changeOutputValue} />
    </div>
  );
};
