import Card from './Card' 
import "../CSS/AllPostCards.css"; 
function AllPostCards({ data }) {
  return (
    <div>
      <h2>All Postcards</h2>
      <div className="postcards-container">
        {data.map((postcard) => (
          <div className="allplaces-postcard" key={postcard.id}>
            <Card 
              selectedBlog={postcard.blog} // Pass the blog content
              location={postcard.location} // Pass the location
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPostCards;