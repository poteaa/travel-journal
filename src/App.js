import React from 'react'
import Header from './components/Header'
import Card from  './components/Card'
import Footer from './components/Footer'

import { destinations } from './data'

export default function App() {
    const cards = destinations.map((destination, index) => 
        <React.Fragment key={destination.id}>
            <Card
                key={destination.id}
                item={destination}
            />
            {index < destinations.length - 1 && <hr className="separator" />}
        </React.Fragment>
    )
    return (
        <div>
            <Header />
            <div className="container">
                <main className="main">
                    {cards}
                </main>
            </div>
            <Footer />
        </div>
    )
}