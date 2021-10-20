import React , {useState, useEffect}from 'react'
import './Navbar.css'

export default function Navbar() {

    const [toggleMenu, settoggleMenu] = useState(false)
    const [largeur, setlargeur] = useState(window.innerWidth)

    const toggleNav = () => {
        settoggleMenu(!toggleMenu)
    }

    useEffect(() => {
        
        const changeWidth = () => {
            setlargeur(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
            <ul className="list">
                <li className="items">Acceuil</li>
                <li className="items">Ecrire</li>
                <li className="items">Contact</li>
            </ul>
            )}
            <button 
            onClick={toggleNav}
            className="btn">BTN</button>
        </nav>
    )
}
