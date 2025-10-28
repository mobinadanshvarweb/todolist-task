import type { ReactElement } from "react";

export type ButtonPros = {
  title?: string;
  style?: string;
  icon?: ReactElement;
  text?: string;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
