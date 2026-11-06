// Components
import Link from "next/link";

type SideProjectProps = {
  description: string;
  href: string;
  linkText: string;
  className?: string;
};

export default function SideProject({
  description,
  href,
  linkText,
  className,
}: SideProjectProps) {
  return (
    <div>
      <Link href={href} className={className}>
        {linkText}
      </Link>
      <p>{description}</p>
    </div>
  );
}
