// Components
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        ©{year} <small>Kelby Hawn</small> <span>•</span>{" "}
        <Link href="https://www.linkedin.com/in/kelby-hawn/">LinkedIn</Link>{" "}
        <span>•</span> <Link href="https://github.com/kelbyhawn">GitHub</Link>
      </p>
    </footer>
  );
}
