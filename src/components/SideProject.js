// Components
import ATag from "./ATag"

export default function SideProject(props) {
  const { copy } = props;

  return (
    <div>
      <ATag props />
      <p><small>{copy}</small></p>
    </div>
  )
}