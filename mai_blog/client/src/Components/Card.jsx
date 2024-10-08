import { useState } from "react";
import Image from "./Image";
import '../CSS/Card.css'

function Card({ selectedBlog, location }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`postCard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="postCard">
        {!isFlipped ? (
          <>
            <Image location={location} />
          </>
        ) : (

          <div>
            <h3 className="blogEntrie">{selectedBlog}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
