export default function ATag(props) {
  const {href, text, className} = props;

  return <a href={href} target="_blank" rel="noreferrer" className={className}>{text}</a>
}