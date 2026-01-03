// @ts-types="preact"
import { ComponentChildren } from "preact";

interface CompanyExperienceProps {
  company: string;
  children?: ComponentChildren;
}

export default function CompanyExperience(props: CompanyExperienceProps) {
  return (
    <>
      <h2 className="subtitle">{props.company}</h2>
      <div className="join join-vertical bg-base-100">
        {props.children}
      </div>
    </>
  );
}
