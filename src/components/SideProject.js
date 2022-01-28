// Components
import ATag from "./ATag"

export default function SideProject(props) {
  const { description, href, linkText, className } = props;

  return (
    <div>
      <ATag href={href} linkText={linkText} className={className} />
      <p><small>{description}</small></p>
    </div>
  )
}