import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const ResBody = () => {
  const [resListNew, setListNew] = useState(restaurantList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resList = resListNew.filter((res) => {
              return res.info.rating.aggregate_rating > 4;
            });
            setListNew(resList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resListNew.map((res) => {
          return <RestaurantCard key={res.info.resId} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default ResBody;
