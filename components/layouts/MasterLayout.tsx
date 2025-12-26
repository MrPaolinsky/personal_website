// @ts-types="preact"
import { FunctionComponent } from "preact";
import { TopBar } from "../TopBar.tsx";

export function MasterLayout({ Component }: { Component: FunctionComponent }) {
  return (
    <div>
      <TopBar />
      <main className="md:mx-64 py-4">
        <Component />
      </main>
    </div>
  );
}
