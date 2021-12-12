import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.iconsContainer}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hoomanfor/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/hoomanfor">
          <FaGithub />
        </a>
      </div>
      <div className={styles.copywriteNotice}>
        Copyright © 2021 Hooman Foroudastan
      </div>
    </footer>
  );
};