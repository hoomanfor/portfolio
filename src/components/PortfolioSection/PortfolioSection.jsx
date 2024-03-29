import styles from "./PortfolioSection.module.scss";
import luluLogo from "../../images/lulu-logo.svg";
import luluJuniorLogo from "../../images/lulu-junior-logo.svg";

import { SectionName } from "../SectionName/SectionName.jsx";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const PortfolioSection = () => {
  return (
    <section>
      <SectionName
        heading="Portfolio"
        description="Below are a couple of projects I have contributed to:"
        targetId="portfolio"
      />
      <div className="global-max-width">
        <div className={styles.projectsContainer}>
          <div className={styles.project1}>
            <ProjectCard
              skill="Front End/UI/UX"
              projectName="Lulu"
              projectDescription="A platform where users can publish, sell, and print books."
              projectUrl="https://www.lulu.com/"
              imageUrl={luluLogo}
              imageBackgroundColor="#000083"
            />
          </div>
          <div className={styles.project2}>
            <ProjectCard
              skill="Front End/UI/UX"
              projectName="Lulu Junior"
              projectDescription="An online storefront that sells book-making kits for kids."
              projectUrl="https://www.lulujr.com/"
              imageUrl={luluJuniorLogo}
              imageBackgroundColor="#2A9D8F"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
