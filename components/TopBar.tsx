import { X } from "lucide-preact";
import MenuButton from "../islands/MenuButton.tsx";

export function TopBar() {
  return (
    <div className="flex w-full border-dashed border-primary border-b p-4 gap-10 items-center">
      <h1 className="text-2xl font-bold text-nowrap">Paolo Torregrosa</h1>
      <ul className="w-full hidden md:flex gap-8">
        <li>
          <a className="soft-link" href="/">About</a>
        </li>
        <li>
          <a className="soft-link" href="/projects">Projects</a>
        </li>
        <li>
          <a
            className="soft-link"
            href="/blog"
          >
            Blog
          </a>
        </li>
      </ul>
      <ul className="hidden md:flex">
        <li>Social Links</li>
      </ul>
      <div className="md:hidden w-full flex justify-end">
        <MenuButton />
        <dialog id="menu_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button
                type="submit"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                <X />
              </button>
            </form>
            <div className="flex flex-col-reverse text-xl">
              <ul className="w-full flex flex-col gap-2">
                <li>
                  <a className="soft-link" href="/">- About</a>
                </li>
                <li>
                  <a className="soft-link" href="/projects">- Projects</a>
                </li>
                <li>
                  <a
                    className="soft-link"
                    href="/blog"
                  >
                    - Blog
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col no-underline text-sm">
                <li>Social Links</li>
              </ul>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
