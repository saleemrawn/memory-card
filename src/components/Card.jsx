export default function Card({
  id,
  imgUrl,
  photoAlt,
  photographer,
  photographerUrl,
  websiteUrl,
  websiteName,
  onClick,
}) {
  return (
    <button className="card" onClick={onClick} id={id} style={{ backgroundImage: `url(${imgUrl})` }}>
      <span class="sr-only">{photoAlt}</span>
      <span className="card-name">
        Photo by <a href={photographerUrl}>{photographer}</a> on <a href={websiteUrl}>{websiteName}</a>
      </span>
    </button>
  );
}
