// Components
import Link from "next/link";

export default function SideProject({
  description,
  href,
  linkText,
  className,
}) {
  return (
    <div>
      <Link href={href} className={className} target="_blank">
        {linkText}
      </Link>
      <p>{description}</p>
    </div>
  );
}
