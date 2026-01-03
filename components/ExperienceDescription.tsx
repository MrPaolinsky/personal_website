// @ts-types="preact"
import { ComponentChildren } from "preact";

interface ExperienceDescriptionProps {
  primarySkills?: string[];
  secondarySkills?: string[];
  children?: ComponentChildren;
}

export default function ExperienceDescription(
  { children, primarySkills = [], secondarySkills = [] }:
    ExperienceDescriptionProps,
) {
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-1 flex-wrap">
        {primarySkills.map((skill) => (
          <div className="badge badge-sm badge-primary">{skill}</div>
        ))}
      </div>
      <div className="flex gap-1 flex-wrap ">
        {secondarySkills.map((skill) => (
          <div className="badge badge-xs badge-primary badge-soft">{skill}</div>
        ))}
      </div>
      <p className="">{children}</p>
    </div>
  );
}
