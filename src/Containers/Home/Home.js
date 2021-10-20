import React from 'react'
import Cards from '../../Components/Cards/Cards'
import './Home.css'

export default function Home() {
    return (
        <>
            <h1 className="home-title">Tous les articles</h1>
            <div className="container-cards">
                <Cards>
                    <h2>Hello cards</h2>
                </Cards>
            </div>  
        </>
    )
}
