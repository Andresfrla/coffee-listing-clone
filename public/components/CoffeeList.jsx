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
    <div className="mt-4 border-lg border-gray-300 bg-gray-100 p-4 ">
      {coffees ? (
        <div className="grid grid-cols-3 gap-4 grid-temp">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="">
              <img className="rounded-xl" src={coffee.image} alt={coffee.name} />
              <h3 className="text-[16px] text-[#FEF7EE] mt-4">{coffee.name}</h3>
              <div className="bg-[#BEE3CC] p-2">
                <p className="">{coffee.price}</p>
              </div>
              {coffee.popular && <div>popular</div>}
              {coffee.rating ? (
                <div>{coffee.rating}</div>
              ) : (
                <div>no rating</div>
              )}
              {coffee.votes ? <div>({coffee.votes} votes)</div> : null}
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