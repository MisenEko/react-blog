import React , {useState, useEffect}from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

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
                <Link to='/'>
                    <li className="items">Acceuil</li>
                </Link>
                <Link to='/ecrire'>
                    <li className="items">Ecrire</li>
                </Link>
                <Link to='/contact'>
                    <li className="items">Contact</li>
                </Link>
            </ul>
            )}
            <button 
            onClick={toggleNav}
            className="btn">BTN</button>
        </nav>
    )
}
