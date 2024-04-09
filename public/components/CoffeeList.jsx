"use client"
import React, { useState, useEffect } from "react";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState(null);

  useEffect(() => {
    fetchCoffees();
  }, []); // Execute only once on component mount

  const fetchCoffees = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();
      setCoffees(data);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
    }
  };

  return (
    <div className="mt-4">
      {coffees ? (
        <div className="grid grid-cols-3 gap-4 grid-temp">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="mt-[280px]">
              <img className="rounded-xl" src={coffee.image} alt={coffee.name} />
              {coffee.popular && <div className="popular text-[10px]">Popular</div>}
               <div className="heading items-center"> 
                  <h3 className="text-[16px] text-[#FEF7EE] mt-4 coffee-name">{coffee.name}</h3>
                  <div className="price">
                    <p>{coffee.price}</p>
                  </div>
                </div>
              {coffee.rating ? (
                <div className="text-[#FEF7EE] rating flex items-center text-center">
                  <img src="../Star_fill.svg" alt="star"/>
                  {coffee.rating} 
                  {coffee.votes ? <div className="votes">({coffee.votes} votes)</div> : null}
                </div>
              ) : (
                <div className="text-[#6F757C] no-rating">
                  <div className="flex">
                    <img src="../Star.svg" alt="star" className="mr-[20px]"/>
                    No ratings
                  </div>
                  {coffee.available && <div className="sold-out">Sold out</div>}
                </div>
              )}
              
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoffeeList; 