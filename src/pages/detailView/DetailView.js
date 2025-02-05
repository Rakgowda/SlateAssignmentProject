import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext/CardContext";
import { useParams } from "react-router";

const DetailView = () => {
  const { cards } = useContext(CardContext);
  const { index } = useParams();

  if (!cards) {
    return <div>Loading...</div>;
  }

  const card = cards[index];

  return (
    <>
      <h2>Detail View of {card.title}</h2>

      {card && (
        <div className="person-details">
          <h3>Title : {card.title}</h3>
          <h3>Company : {card.company}</h3>
          <p>
            <strong>Info:</strong> {card.info}
          </p>
          <p>
            <strong>Description:</strong> <br /> {card.description}
          </p>
        </div>
      )}
    </>
  );
};

export default DetailView;
