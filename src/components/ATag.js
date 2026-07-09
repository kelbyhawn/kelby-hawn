export default function ATag({ href, linkText, className }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {linkText}
    </a>
  );
}
