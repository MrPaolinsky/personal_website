import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <>
      <section className="about-section">
        <h1 className="main-title">About Me</h1>
        <p>lorem ipsum dolor sit amet</p>
      </section>
      <section className="about-section">
        <h1 className="main-title">Experience</h1>
      </section>
      <section className="about-section">
        <h1 className="main-title">Featured Projects</h1>
      </section>
    </>
  );
});
