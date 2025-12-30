import { Github, Gitlab, Linkedin } from "lucide-preact";

export function SocialButtons() {
  return (
    <ul className="flex gap-4 md:gap-2 text-primary w-full md:w-fit justify-center">
      <li>
        <a target="_blank" href="https://linkedin.com/in/paolinsky">
          <Linkedin />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/MrPaolinsky">
          <Github />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://gitlab.com/MrPaolinsky">
          <Gitlab />
        </a>
      </li>
    </ul>
  );
}
