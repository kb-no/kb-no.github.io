import { Fragment } from "react";

/** Keep authored phrases together, with responsive breaks between them. */
export default function PhraseText({ children }: { children: string }) {
  if (!/[|\n]/.test(children)) return <>{children}</>;

  return <>{children.split("\n").map((line, lineIndex) => (
    <span key={lineIndex} className={children.includes("\n") ? "block" : undefined}>
      {line.split("|").map((phrase, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          <span className="text-phrase">{phrase}</span>
        </Fragment>
      ))}
    </span>
  ))}</>;
}
