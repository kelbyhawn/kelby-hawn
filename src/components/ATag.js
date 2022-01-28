export default function ATag(props) {
  const {href, linkText, className} = props;

  return <a href={href} target="_blank" rel="noreferrer" className={className}>{linkText}</a>
}