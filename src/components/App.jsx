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
  const [randomCards, setRandomCards] = useState([]);
  const [imageQuery, setImageQuery] = useState("animals");
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
    cards.current = await fetchData(query);
    setRandomCards(generateRandomCards());
  }

  function handleCardSelection(event) {
    const cardId = event.currentTarget.id;
    const set = selectedCards.current;
    const isCardFound = set.has(cardId);

    if (!isCardFound) {
      set.add(cardId);
      currentScore.current += 1;

      if (currentScore.current > highestScore.current) {
        highestScore.current = currentScore.current;
      }
    } else {
      selectedCards.current = new Set();
      currentScore.current = 0;
    }

    setRandomCards(generateRandomCards());
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
      <CardList cards={randomCards} websiteName={WEBSITE_NAME} websiteUrl={WEBSITE_URL} onClick={handleCardSelection} />
    </>
  );
}
