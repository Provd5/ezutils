import type { FC } from "react";

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  title: string;
}

export const Label: FC<LabelProps> = ({ children, htmlFor, title }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="ml-1 text-sm text-muted-foreground">
        {title}
      </label>
      {children}
    </div>
  );
};
