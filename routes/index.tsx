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
          I’m Paolo, a senior software engineer with six years of full‑stack
          experience spanning Go, TypeScript, Python and Swift. I’ve built
          Android and iOS apps from scratch, modernised legacy web platforms,
          and architected scalable micro‑service systems for international
          clients. In recent roles I’ve taken ownership of DevOps, migrating
          infrastructure to cost‑effective providers, containerising services,
          and leading teams through clean‑architecture design. My passion for
          cloud platforms has driven me to deepen expertise in AWS, Linux and
          open‑source tooling, and I now contribute to the Fedora Project’s
          infrastructure team. I’m eager to apply this blend of development,
          architecture, and operations skills to help organisations build
          reliable, secure, and scalable software solutions.
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
              In my current position as Lead Developer I serve as the most
              senior engineer with deep knowledge of our entire system. I have
              taken ownership of our <b>DevOps</b>{" "}
              strategy, migrating the infrastructure from <b>AWS</b>{" "}
              to Hetzner to lower costs and replacing the existing toolchain
              with <b>open‑source</b> solutions such as{" "}
              <b>Dokploy</b>. I introduced containerisation across all
              applications and
              <b>micro‑services</b>, standardising on <b>Docker</b>{" "}
              to improve deployment consistency and scalability. Over the past
              months I have shifted the primary codebase to{" "}
              <b>Go</b>, which simplifies code reviews and enables me to{" "}
              <b>mentor</b>{" "}
              junior engineers more effectively while maintaining a high
              standard of quality throughout the team.
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
              In that same startup I moved into a technical product‑owner role,
              leveraging my deep knowledge of both the business and the
              technology to become the go‑to person for any question. I worked
              closely with the CEO and CTO on{" "}
              <b>roadmap definition</b>, designed entire systems from scratch,
              and architected a
              <b>micro‑services‑based</b>{" "}
              platform for our users. I also implemented a custom{" "}
              <b>Scrumban</b> workflow on <b>Linear</b>{" "}
              that proved highly effective and remains in use today. Throughout
              the period I produced extensive technical documentation and
              detailed reports for internal teams as well as for{" "}
              <b>investors</b>.
            </ExperienceDescription>
          </SingleExperience>
          <SingleExperience
            title="Senior Software Developer"
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
              In that early‑stage startup I started as a senior developer,
              building backend services with <b>Python and FastAPI</b>{" "}
              while working closely with users to capture requirements. I set up
              {" "}
              <b>open‑source</b>
              tools in our daily workflow, created <b>CI/CD</b> pipelines in
              {" "}
              <b>GitLab</b>, and led the application process for both{" "}
              <b>AWS and GCP</b>{" "}
              startup programs, which we were accepted into shortly thereafter.
              I also produced extensive <b>technical documentation</b>{" "}
              and experimented with
              <b>Raspberry Pi</b> devices running{" "}
              <b>Linux and Java</b>, contributing to the company’s foundational
              infrastructure.
            </ExperienceDescription>
          </SingleExperience>
        </CompanyExperience>

        {/* Zemoga */}
        <CompanyExperience company="Zemoga">
          <SingleExperience
            title="iOS Software Developer"
            dates="April 2022 – February 2023"
          >
            <ExperienceDescription
              primarySkills={[
                "Swift",
                "SwiftUI",
                "UIKit",
                "MVC",
                "Viper",
                "iOS",
              ]}
              secondarySkills={[
                "iOS Networking",
                "Operating systems",
                "Agile development",
              ]}
            >
              I served as a semi‑senior <b>iOS</b>{" "}
              developer at a large software factory that supports major
              international clients. I deepened my understanding of{" "}
              <b>software architecture</b>, applying clean‑architecture
              principles to build modular, maintainable codebases that could
              scale across multiple projects and regions. Working on
              high‑visibility contracts forced me to consider performance,
              extensibility, and long‑term maintainability from day one. While
              my daily work centered on iOS development with{" "}
              <b>Swift</b>, I also explored operating‑system concepts at an
              abstract level, gaining insight into how the underlying platform
              influences app design and stability.
            </ExperienceDescription>
          </SingleExperience>
        </CompanyExperience>

        {/* Bold */}
        <CompanyExperience company="Bold">
          <SingleExperience
            title="Software Developer"
            dates="October 2021 – April 2022"
          >
            <ExperienceDescription
              primarySkills={[
                "React",
                "Typescript",
                "iOS",
                "Swift",
                "Unit testing",
              ]}
              secondarySkills={[
                "Ionic",
                "AWS (Amazon Web Services)",
                "Web components",
                "Frontend development",
                "Design systems",
                "App design",
              ]}
            >
              I worked with <b>React</b>{" "}
              and web‑components, integrated serverless back‑ends on{" "}
              <b>AWS</b>, and learned to thrive amid the constant change and
              ambiguity that characterise early‑stage companies. I also
              collaborated with the mobile team, taking on small <b>iOS</b>{" "}
              tasks in Swift that gave me a taste of native development and
              reinforced my full‑stack perspective.
            </ExperienceDescription>
          </SingleExperience>
        </CompanyExperience>

        {/* Iam Studio */}
        <CompanyExperience company="Iam Studio">
          <SingleExperience
            title="Junior Software Developer"
            dates="August 2020 – September 2021"
          >
            <ExperienceDescription
              primarySkills={[
                "Software architecture",
                "Legacy code",
                "Javascript",
                "Android",
                "Kotlin",
                "Objective-C",
                "C#",
                "Java",
              ]}
              secondarySkills={[
                "Python",
                "SQL",
                "MVC",
                "Software engineering",
                "Unit testing",
              ]}
            >
              In that role I built <b>Android</b>{" "}
              applications from the ground up, wrote unit tests, and extended a
              legacy <b>web</b>{" "}
              platform that had been evolving for over seven years. Working on
              both fresh and entrenched codebases forced me to master core
              software‑engineering principles, especially clean‑code concepts
              such as{" "}
              <b>SOLID</b>, and to adopt disciplined testing and incremental
              delivery practices. The biggest catalyst for my growth, however,
              was the guidance of senior developers and mentors who shared their
              expertise, reviewed my work, and encouraged continuous learning.
              Their support helped me quickly become comfortable reading and
              refactoring unfamiliar code, collaborating effectively in{" "}
              <b>Agile</b>{" "}
              teams, and balancing rapid development with long‑term
              maintainability. Habits that still define my work as a senior
              engineer.
            </ExperienceDescription>
          </SingleExperience>
        </CompanyExperience>
      </section>
      <section className="about-section">
        <h1 className="main-title">
          Open Source Contributions and Volunteering
        </h1>
        <p>
          I actively contribute to the broader tech community alongside my
          professional work. Recently I joined the Fedora Project’s
          infrastructure team, I still an apprentice but I am learning a lot
          about large scale open source. Previously, I spent nearly two years
          moderating “Fazt Tech,” one of the largest Spanish‑language
          software‑development Discord communities. In that role I maintained a
          well‑organized environment, guided newcomers through their first code
          snippets, resolved technical questions, fostered networking among
          developers, and delivered several short talks on emerging
          technologies.
        </p>
      </section>
      <section className="about-section">
        <h1 className="main-title">Featured Projects</h1>
        <p>WIP...</p>
      </section>
    </>
  );
});
