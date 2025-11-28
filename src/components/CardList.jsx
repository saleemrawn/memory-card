import Card from "./Card";
import Loader from "./Loader";

export default function CardList({ cards, websiteName, websiteUrl, onClick, isLoading, cardStatus }) {
  return (
    <div className="card-container">
      <Loader isLoading={isLoading} />
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
                onClick={onClick}
                cardStatus={cardStatus[card.id]}></Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
