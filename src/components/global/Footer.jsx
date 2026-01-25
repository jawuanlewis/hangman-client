import linkedinLogo from "@/assets/icons/icons8-linkedin.svg";
import githubLogo from "@/assets/icons/icons8-github.svg";
import instagramLogo from "@/assets/icons/icons8-instagram.svg";
import facebookLogo from "@/assets/icons/icons8-facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Jawuan Lewis.</p>
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jawuan-lewis"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} className="item-hover" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/jawuanlewis"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} className="item-hover" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} className="item-hover" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} className="item-hover" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
