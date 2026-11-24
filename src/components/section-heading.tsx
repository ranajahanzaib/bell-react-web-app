export function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
