import { useState } from "react";
import Card from "./Card";
import "../CSS/Place.css"


function Place({ data }) {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [location, setLocation] = useState(null);
    const [translatedBlog, setTranslatedBlog] = useState(''); // State for translated blog content
    const [language, setLanguage] = useState('es'); // Default translation language

    // onClick handler for selecting a blog entry
    const handleOnClick = (entrie) => {
        setSelectedBlog(entrie.blog);
        setLocation(entrie.location);
        setTranslatedBlog(''); // Clear translation when a new blog is selected
    };

    // Handler to clear selections
    const handleClearSelection = () => {
        setSelectedBlog(null);
        setLocation(null);
        setTranslatedBlog(''); // Clear translation when selections are cleared
    };

    // Handler for translating the selected blog content
    const handleTranslate = async () => {
        if (!selectedBlog) return;

        try {
            const response = await fetch('/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: selectedBlog, 
                    targetLanguage: language, 
                }),
            });
            const data = await response.json();
            setTranslatedBlog(data.translatedText); 
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div>
            <h2>Choose a Post Card from Mai Travels</h2>
            {/* Users can choose a button which will display the blog content */}
            {data.map((entrie) => (
                <button className='place-button' key={entrie.id} onClick={() => handleOnClick(entrie)}>
                    {entrie.location} 
                </button>
            ))}
            <button className='place-button' onClick={handleClearSelection}>Clear Selection</button>

            {/* Show either the original blog content or the translated content */}
            {selectedBlog && location && (
                <div>
                    {translatedBlog ? (
                        <div>
                            {/* change to translated blog  */}
                            <Card selectedBlog={translatedBlog} location={location} />
                        </div>
                    ) : (
                        <div>
                            {/* change to selected blog */}
                            <Card selectedBlog={selectedBlog} location={location} />
                        </div>
                    )}
                    
                    <div>
                        <label htmlFor="language">Translate to: </label>
                        <select
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                          
                        </select>
                        <button  onClick={handleTranslate}>Translate</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Place;
