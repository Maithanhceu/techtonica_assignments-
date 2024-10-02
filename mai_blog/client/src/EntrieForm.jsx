import { useState } from "react";

//Component to handle the EntrieForm
function EntrieForm() {
    const [data, setData] = useState(null);

    const createEntrie = () => {
        fetch ("/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"}, 
            body: Json.stringify, 
        })
        .then ((response) => response.json())
        .then ((data) => {
            setData(data);
        })
    };

  return (
    <div>
   
    <form for='Blog'className='Blog Entrie'>
    EntrieForm
    <input
        type="text"
        id="{data.id}"
        placeholder="Blog Post "
        required
        value={data.blog}
        onChange={handleChange}
    />
    <input
        type="DATE"
        id="{data.id}"
        placeholder="Entrie Date "
        required
        value={data.blog}
        onChange={handleChange}
    />
    <input
        type="text"
        id="{data.id}"
        placeholder="Location "
        required
        value={data.location}
        onChange={handleChange}
    />
</form>
</div>
  )}

export default EntrieForm