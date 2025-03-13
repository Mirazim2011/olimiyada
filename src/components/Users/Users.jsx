import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import "./Users.css"
export default function Users() {
    const data = useLoaderData()
    return (
        <ul className='restaurant-list'>
            {data?.map((restaurant) => (
                <Link to={`/user/${restaurant.id}`}>
                    <li className="restaurant-card" key={restaurant.id}>
                        <h2 className="restaurant-name">{restaurant.name}</h2>
                        <p className="restaurant-description">
                            {restaurant.email}
                        </p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
