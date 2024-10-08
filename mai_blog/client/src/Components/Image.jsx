import { useState, useEffect } from "react";

function Image({ location }) {
    const [imageContent, setImageContent] = useState(null);

    const setContent = () => {
        if (location === "Paris") {
            setImageContent(
                <div className="image-container">
                    <img src='./Jean_Paul.jpg' alt="Paris" />
                </div>
            );
        } else if (location === "Vancouver") {
            setImageContent(
                <div className="image-container">
                    <img src="./Vancouver.jpg" alt="Vancouver" />
                </div>
            );
        } else if (location === "New Orleans") {
            setImageContent(
                <div className="image-container">
                    <img src="./NewOrleans.jpg" alt="New Orleans" />
                </div>
            );
        } else {
            setImageContent(
                <div className="image-container">
                    <p>No image available for this location.</p>
                </div>
            );
        }
    };

    useEffect(() => {
        setContent(); 
    }, [location]);

    return (
        <div>
            {imageContent}
        </div>
    );
}

export default Image;



