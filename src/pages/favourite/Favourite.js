import { useContext } from "react";
import { CardContext } from "../../context/cardContext/CardContext";

const Favourite = () => {
  const { cards } = useContext(CardContext);

  if (!cards) {
    return <div>Loading...</div>;
  }
  return <>
  <h2>List of favourites</h2>
    <ul>
        {cards.map(card=>{
            if(!card.isFavourite) return null;
            return (<li>
                {card.title}
            </li>)
        })}
    </ul>
  </>;
};

export default Favourite;
