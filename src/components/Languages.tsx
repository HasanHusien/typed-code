import type { JSX } from "react";
import type { Language } from "../language";

import { languages } from "../language";

export default function language({
  wrongGuessCount,
}: {
  wrongGuessCount: number;
}): JSX.Element {
  //
  const lang: JSX.Element[] = languages.map(
    (item: Language, index: number): JSX.Element => {
      const isLost: boolean = wrongGuessCount > index;

      const className: string | null = isLost ? "lost" : null;

      return (
        <span
          className={className}
          key={index}
          style={{ color: item.color, background: item.backgroundColor }}
        >
          {item.name.toUpperCase()}
        </span>
      );
    },
  );

  return <>{lang}</>;
}
