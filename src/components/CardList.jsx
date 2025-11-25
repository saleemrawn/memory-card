import Card from "./Card";

export default function CardList({ cards, websiteName, websiteUrl, onClick }) {
  return (
    <div className="card-container">
      <ul>
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card
                id={card.id}
                imgUrl={card.src.original}
                photoAlt={card.alt}
                photographer={card.photographer}
                photographerUrl={card.photographer_url}
                websiteName={websiteName}
                websiteUrl={websiteUrl}
                onClick={onClick}></Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
