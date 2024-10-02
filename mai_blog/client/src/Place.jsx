import { useState } from "react";
import Card from "./Card";
//passed as a prop from the parent component 
function Place({ data }) {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [location, setLocation] = useState(null);

    //onClick 
    const handleOnClick = (entrie) => {
        setSelectedBlog(entrie.blog);
        setLocation(entrie.location)
    };

    //handle to clear selections 
    const handleClearSelection = () => {
        setSelectedBlog(null);
        setLocation(null);
    };

    return (
        <div>
            <h2>Choose a Post Card from Mai Travels</h2>
            {/* Below users can choose a button which will have the location of my blog entrie */}
            {data.map((entrie) => (
                <button key={entrie.id} onClick={() => handleOnClick(entrie)}>
                    {entrie.location}
                </button>
            ))}
            <button onClick={handleClearSelection}>Clear Selection</button>
            {/* selectedBlog and location prop passed to the component Card */}
            <Card selectedBlog={selectedBlog} location={location} handleClearSelection={handleClearSelection} />
        </div>
    );
}

export default Place;
