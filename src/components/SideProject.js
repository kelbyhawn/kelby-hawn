// Components
import ATag from "./ATag";

export default function SideProject({
  description,
  href,
  linkText,
  className,
}) {
  return (
    <div>
      <ATag href={href} linkText={linkText} className={className} />
      <p>{description}</p>
    </div>
  );
}
