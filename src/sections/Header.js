// Components
import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "../assets/kh-logo.svg";

export default function Header() {
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
            <Link href="#side-projects" className="light">
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
