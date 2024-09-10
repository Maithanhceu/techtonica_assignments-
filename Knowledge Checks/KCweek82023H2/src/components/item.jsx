/* eslint-disable react/prop-types */
const Item = ({ item }) => {
    return (
        <>
        {!item.text ? null : (<div className="singleitem">{item.text}</div>)}
        </>
    )
  };
  
  export default Item;