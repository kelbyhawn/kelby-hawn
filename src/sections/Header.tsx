// Components
import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "../assets/kh-logo.svg";

export default function Header() {
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projects = document.getElementById("side-projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#side-projects");
    }
  };

  return (
    <header>
      <Link href="/">
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
            <Link
              href="#side-projects"
              className="light"
              onClick={handleProjectsClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kelbyhawn"
              className="light"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
