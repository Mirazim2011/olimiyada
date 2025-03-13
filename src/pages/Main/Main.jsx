import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Main.css"
export default function Main() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://www.kingsman.uz/api/Product", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res) => {
      setData(res.data)
    })
  }, []);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }} className="restaurant-name">Private Page</h1>
      <ul className='restaurant-list'>
        {data?.map((restaurant) => (
          <li className="restaurant-card" key={restaurant.id}>
            <h2 className="restaurant-name">Name: {restaurant.name}</h2>
            <p className="restaurant-description">
              Category: {restaurant.category}
            </p>
            <p className="restaurant-description">Price: {restaurant.price}</p>
            <p className="restaurant-description">Quantity: {restaurant.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
