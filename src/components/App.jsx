import { useEffect, useRef, useState } from "react";
import { fetchData, WEBSITE_NAME, WEBSITE_URL } from "../js/fetch";
import { shuffle } from "../js/helpers";
import Header from "./Header";
import Scoreboard from "./Scoreboard";
import CardList from "./CardList";

export default function App() {
  const hasAppLoaded = useRef(false);
  const cards = useRef([]);
  const selectedCards = useRef(new Set());
  const currentScore = useRef(0);
  const highestScore = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [randomCards, setRandomCards] = useState([]);
  const [imageQuery, setImageQuery] = useState("animals");
  const [cardStatus, setCardStatus] = useState({});
  const imageTypes = [{ name: "animals" }, { name: "cars" }, { name: "flowers" }];
  const totalCards = 10;

  useEffect(() => {
    if (!hasAppLoaded.current) {
      initialiseImages(imageQuery);
      hasAppLoaded.current = true;
    }
  }, []);

  useEffect(() => {
    initialiseImages(imageQuery);
    resetScores();
  }, [imageQuery]);

  async function initialiseImages(query) {
    setIsLoading(true);
    cards.current = await fetchData(query);
    setRandomCards(generateRandomCards());
    setTimeout(() => setIsLoading(false), 2000);
  }

  function handleCardSelection(event) {
    const card = event.currentTarget;
    const cardId = card.id;
    const set = selectedCards.current;
    const isCardFound = set.has(cardId);

    if (!isCardFound) {
      set.add(cardId);
      currentScore.current += 1;
      highestScore.current = Math.max(highestScore.current, currentScore.current);
      setCardStatus((prev) => ({ ...prev, [cardId]: "valid" }));
    } else {
      selectedCards.current = new Set();
      currentScore.current = 0;
      setCardStatus((prev) => ({ ...prev, [cardId]: "invalid" }));
    }

    setTimeout(() => setRandomCards(generateRandomCards()), 500);
    setTimeout(() => setCardStatus((prev) => ({ ...prev, [cardId]: null })), 600);
  }

  function generateRandomCards() {
    const randomCards = shuffle(cards.current.photos).slice(0, totalCards);
    return randomCards;
  }

  function handleImageSelect(event) {
    resetScores();
    setImageQuery(event.target.value);
  }

  function handleReset() {
    resetScores();
    setRandomCards(generateRandomCards());
  }

  function resetScores() {
    currentScore.current = 0;
    highestScore.current = 0;
  }

  return (
    <>
      <Header imageTypes={imageTypes} imageOnChange={handleImageSelect} resetOnClick={handleReset} />
      <Scoreboard currentScore={currentScore.current} highestScore={highestScore.current} />
      <CardList
        cards={randomCards}
        websiteName={WEBSITE_NAME}
        websiteUrl={WEBSITE_URL}
        onClick={handleCardSelection}
        isLoading={isLoading}
        cardStatus={cardStatus}
      />
    </>
  );
}
