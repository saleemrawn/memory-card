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
    <button className="card" onClick={onClick} id={id}>
      <img src={imgUrl} alt={photoAlt} />
      <div className="card-name">
        Photo by <a href={photographerUrl}>{photographer}</a> on <a href={websiteUrl}>{websiteName}</a>
      </div>
    </button>
  );
}
