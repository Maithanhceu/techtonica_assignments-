import Jean_Paul from "./Photos";
import Vancouver from "./Photos";

//prop from Place Component 
function Image({ location }) {

    function handleOnClick ( location){
        if (location === "Paris") {
            return (
                <div>
                    <img src="Jean_Paul"alt="Paris" />
                    <p>This is an image of Paris.</p>
                </div>
            );
        }
    
        if (location === "Vancouver") {
            return (
                <div>
                    <img src="Vancouver" alt="Vancouver" />
                    <p>This is an image of New York.</p>
                </div>
            );
        }
    
        if (location === "New Orleans") {
            return (
                <div>
                    <img src="https://example.com/newyork.jpg" alt="New Orleans" />
                    <p>This is an image of New York.</p>
                </div>
            );
        }
    }
    
    Image();
    return (
        <><div> 
            <button onClick={handleOnClick}>
                Click for Front of the Post Card
            </button>

        </div>
    
        <div>
            <p>No image available for this location.</p>
        </div></>
    );
}

export default Image;
