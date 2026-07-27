// Dependencies
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Components
import ATag from "../components/ATag";
import Image from "next/image";

// Assets
import logo from "../assets/kh-logo.svg";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Image
          src={logo}
          alt="Kelby Hawn logo"
          width={140}
          height={26}
          loading="eager"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <HashLink smooth to="#side-projects" className="light">
              Projects
            </HashLink>
          </li>
          <li>
            <ATag
              href="https://github.com/kelbyhawn"
              className="light"
              linkText="GitHub"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
