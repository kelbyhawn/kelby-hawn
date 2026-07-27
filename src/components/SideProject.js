// Components
import Hyperlink from "./Hyperlink";

export default function SideProject({
  description,
  href,
  linkText,
  className,
}) {
  return (
    <div>
      <Hyperlink href={href} linkText={linkText} className={className} />
      <p>{description}</p>
    </div>
  );
}
