// @ts-types="preact"
import { ComponentChildren } from "preact";

interface SingleExperienceProps {
  title: string;
  dates: string;
  children?: ComponentChildren;
}

export default function SingleExperience(props: SingleExperienceProps) {
  return (
    <div className="collapse collapse-arrow join-item accordion-item-border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">
        {props.title}
        <p className="soft-info">
          {props.dates}
        </p>
      </div>
      <div className="collapse-content text-sm">
        {props.children}
      </div>
    </div>
  );
}
