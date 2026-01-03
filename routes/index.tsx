import CompanyExperience from "../components/CompanyExperience.tsx";
import ExperienceDescription from "../components/ExperienceDescription.tsx";
import SingleExperience from "../components/SingleExperience.tsx";
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
        {/* Recirculate Systems – multiple roles */}
        <CompanyExperience company="Recirculate Systems Limited">
          <SingleExperience
            title="Lead Developer"
            dates="October 2025 – Present"
          >
            <ExperienceDescription
              primarySkills={[
                "Docker",
                "DevOps",
                "Linux Administration",
                "Microservices",
              ]}
              secondarySkills={[
                "Hetzner",
                "Iot",
                "Software Architecture",
                "Python",
                "Golang",
                "FastAPI",
                "Gin",
                "C programming language",
                "Gitlab",
                "Leadership",
              ]}
            >
              Test
            </ExperienceDescription>
          </SingleExperience>
          <SingleExperience
            title="Technical Product Owner"
            dates="April 2025 – October 2025"
          >
            <ExperienceDescription
              primarySkills={[
                "Roadmap Definition",
                "Backlog prioritisation",
                "Stackeholder communication",
              ]}
              secondarySkills={[
                "Scrum",
                "Kanban",
                "Risk management",
                "Communication",
                "Software architecture",
                "Code reviewing",
              ]}
            >
            </ExperienceDescription>
          </SingleExperience>
          <SingleExperience
            title="Software Developer"
            dates="March 2023 – April 2024"
          >
            <ExperienceDescription
              primarySkills={[
                "Backend engineering",
                "AWS (Amazon Web Services)",
                "GCP (Google Cloud Platform)",
                "Golang",
                "Python",
              ]}
              secondarySkills={[
                "Embedded development",
                "Swagger",
                "CI and CD",
                "Testing",
                "API design",
              ]}
            >
            </ExperienceDescription>
          </SingleExperience>
        </CompanyExperience>

        {/* Zemoga */}
        <CompanyExperience company="Zemoga">
          <SingleExperience
            title="iOS Software Developer"
            dates="April 2022 – February 2023"
          />
        </CompanyExperience>

        {/* Bold */}
        <CompanyExperience company="Bold">
          <SingleExperience
            title="Software Developer"
            dates="October 2021 – April 2022"
          />
        </CompanyExperience>

        {/* Iam Studio */}
        <CompanyExperience company="Iam Studio">
          <SingleExperience
            title="Junior Software Developer"
            dates="August 2020 – September 2021"
          />
        </CompanyExperience>
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
