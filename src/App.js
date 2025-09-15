import React from 'react'
import Header from './components/Header'
import Card from  './components/Card'

import data from './data'

export default function App() {
    const cards = data.map((d, index) => 
        <React.Fragment key={d.id}>
            <Card
                key={d.id}
                item={d}
            />
            {index < data.length - 1 && <hr className="separator" />}
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
        </div>
    )
}