import React from 'react'

export default function Card({item}) {
    const image = `./images/${item.image}`
    
    return (
        <div className="card">
            <img src={image} className="card__image" alt={`${item.location} travel destination`} />
            <div className="card__text-content">
                <p className="card__location">
                    <img src="/images/location-icon.png" className="card__location-icon" alt="" />
                    <span className="card__location--place">{item.location}</span>
                    <a href={item.googleMapsUrl} className="card__location--map" target="_blank" rel="noreferrer">View on Google Maps</a>
                </p>
                <h2 className="card__title bold">{item.title}</h2>
                <p className="card__date bold">{item.startDate} - {item.endDate}</p>
                <p className="card__description">{item.description}</p>
            </div>
        </div>
    )
}