import { Link, useRouteError } from "react-router-dom";

import { buttonVariants } from "~/components/ui/button";
import { cn, errorHandler } from "~/utils/utils";

import { APP_STRUCTURE } from "../appStructure/app-structure";

export default function ErrorPage() {
  const error = useRouteError();
  const errorMsg = errorHandler(error);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="mb-20 flex flex-col">
        <div className="mb-6 flex flex-col gap-3 text-center">
          <h1 className="text-5xl">Oops!</h1>
          <p className="max-w-lg text-xl">{errorMsg}</p>
        </div>
        <Link
          to={APP_STRUCTURE.home.href}
          className={cn("self-center", buttonVariants())}
        >
          Back to main page
        </Link>
      </div>
    </div>
  );
}
