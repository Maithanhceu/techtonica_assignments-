import Image from "./Image";
import './Card.css'; // Make sure to import your CSS file

function Card({ selectedBlog, location, handleClearSelection }) {
    const titleText = () => {
        if (handleClearSelection === true) {
            return null; 
        } else {
            return `Hello from ${location}`
        }
    }
  return (
    <div className="postCard">
      <div className="postText">
        <h2>{titleText}</h2>
        <div className="postContent">
          <h3>{selectedBlog}</h3>
        </div>
      </div>
      <div className="divider"></div> 
      <div className="postImage">
        <Image location={location} />
      </div>
    </div>
  );
}

export default Card;

