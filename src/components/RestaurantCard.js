
const RestaurantCard=({resData})=>{
   const {info}=resData;
    return (
        <div className="res-card">
             <img className='res-card-img' src={info.image.url} alt={info.name}/>
             <h4>{info.name}</h4>
             <h6>{info.cft.text}</h6>
             <h6>{info.rating.aggregate_rating}</h6>
             <h6>{resData.distance}</h6>
        </div>
    )
}

export default RestaurantCard;