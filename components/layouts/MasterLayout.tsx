// @ts-types="preact"
import { FunctionComponent } from "preact";
import { TopBar } from "../TopBar.tsx";
import { Footer } from "../Footer.tsx";

export function MasterLayout({ Component }: { Component: FunctionComponent }) {
  return (
    <div className="h-screen flex flex-col items-center">
      <TopBar />
      <main className="mx-4 md:mx-64 max-w-4xl py-4 flex-1 ">
        <Component />
      </main>
      <Footer />
    </div>
  );
}
