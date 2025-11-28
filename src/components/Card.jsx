export default function Card({
  id,
  imgUrl,
  photoAlt,
  photographer,
  photographerUrl,
  websiteUrl,
  websiteName,
  onClick,
  cardStatus,
}) {
  return (
    <button
      className={`card ${cardStatus || ""}`}
      onClick={onClick}
      id={id}
      style={{ backgroundImage: `url(${imgUrl})` }}>
      <span className="sr-only">{photoAlt}</span>
      <span className="card-name">
        Photo by <a href={photographerUrl}>{photographer}</a> on <a href={websiteUrl}>{websiteName}</a>
      </span>
    </button>
  );
}
