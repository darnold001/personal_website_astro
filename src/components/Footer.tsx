import {
    GITHUB_Black,
    GITHUB_White,
    GITLAB_Black,
    GITLAB_White,
    INSTAGRAM_Black,
    INSTAGRAM_White,
    LINKEDIN_Black,
    LINKEDIN_White,
} from "../constants";
// import { useThemeContext } from "./themeContext";

function Footer() {
    return <footer className="nav-footer">
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/devin-arnold-a7539a52/"
        >
            <img
                className="footer-icon"
                id="linkedin"
                src={LINKEDIN_White || LINKEDIN_Black}
                alt="LinkedIn Icon"
            />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/darnold001">
            <img
                className="footer-icon"
                id="github"
                src={GITHUB_White || GITHUB_Black}
                alt="GitHub Icon"
            />
        </a>
        <a target="_blank" rel="noreferrer" href="https://gitlab.com/darnold001">
            <img
                className="footer-icon"
                id="gitlab"
                src={GITLAB_White || GITLAB_Black}
                alt="GitLab Icon"
            />
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/iamdarnld/"
        >
            <img
                className="footer-icon"
                id="instagram"
                src={INSTAGRAM_White || INSTAGRAM_Black}
                alt="Instagram Icon"
            />
        </a>
    </footer>
};


export default Footer;
