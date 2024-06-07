import type { FC } from "react";
import { useParams } from "react-router-dom";

import { type ParamsType } from "~/app/routes/react-routes";

export const LinesTool: FC = ({}) => {
  const params = useParams<ParamsType>();

  return (
    <>
      <div>{params.tool}</div>
      <div>lines</div>
    </>
  );
};
