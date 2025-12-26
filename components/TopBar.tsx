export function TopBar() {
  return (
    <div className="flex w-full border-dashed border-primary border-b-1 p-4 gap-10 items-center">
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
    </div>
  );
}
