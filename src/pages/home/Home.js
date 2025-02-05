import React, { useContext } from "react";
import Card from "../../components/card/Card";
import "./Home.css";
import { CardContext } from "../../context/cardContext/CardContext";

const Home = () => {
  const { cards, setCards } = useContext(CardContext);

  if (!cards) {
    return <div>Loading...</div>;
  }

  const toggleFavorite = (index) => {
    const cardsData = [...cards];
    cardsData[index].isFavourite = !cardsData[index].isFavourite;
    setCards(cardsData);
  };

  return (
    <>
      <h2>List of data</h2>
      <div className="grid-container">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            toggleFavorite={toggleFavorite}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
