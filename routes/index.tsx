import { define } from "../utils.ts";

export default define.page(function Home(_ctx) {
  return (
    <>
      <section className="about-section">
        <h1 className="main-title">About Me</h1>
        <p>
          Senior backend engineer with 5+ years building privacy‑first services
          and applications. Experienced tech lead who designs clean,
          cost‑effective architectures, mentors teams, and drives open‑source
          adoption. Actively expanding into platform engineering, linux systems
          administration and DevOps.
        </p>
      </section>
      <section className="about-section">
        <h1 className="main-title">Experience</h1>
        {
          // Recirculate Systems
        }
        <h2 className="subtitle">Recirculate Systems Limited</h2>
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              Lead Developer
              <p className="soft-info">
                October 2025 - Present
              </p>
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Technical Product Owner
              <p className="soft-info">April 2025 - October 2025</p>
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Software Developer{" "}
              <p className="soft-info">March 2023 - April 2024</p>
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
        {
          // Zemoga
        }
        <h2 className="subtitle">Zemoga</h2>
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              iOS Software Developer
              <p className="soft-info">
                April 2022 - February 2023
              </p>
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
        {
          // Bold
        }
        <h2 className="subtitle">Bold</h2>
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              Software Developer
              <p className="soft-info">
                October 2021 - April 2022
              </p>
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
        {
          // Iam Studio
        }
        <h2 className="subtitle">Iam Studio</h2>
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item accordion-item-border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              Junior Software Developer
              <p className="soft-info">
                August 2020 - September 2021
              </p>
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1 className="main-title">Open Source Contributions</h1>
        <p>Almost there.</p>
      </section>
      <section className="about-section">
        <h1 className="main-title">Featured Projects</h1>
        <p>One second please ...</p>
      </section>
    </>
  );
});
