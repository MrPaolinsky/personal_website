import { define } from "../utils.ts";

export default define.page(function Projects(ctx) {
  console.log("Shared value " + ctx.state.shared);

  return (
    <>
      <section className="about-section">
        <h1 className="main-title">Projects</h1>
        <p>lorem ipsum dolor sit amet</p>
      </section>
    </>
  );
});
