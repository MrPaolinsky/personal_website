import { Menu } from "lucide-preact";

export default function MenuButton() {
  return (
    <>
      <button
        onClick={() => {
          (document.getElementById("menu_modal") as any)
            .showModal();
        }}
        className="btn btn-circle btn-ghost"
        type="button"
      >
        <Menu />
      </button>
    </>
  );
}
