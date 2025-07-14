// Packages
import { NavLink } from 'react-router-dom'

// Styles
import './Header.scss'

export default function Header() {
    let name: string = "Mansour Lo Lo";

    return (
        <header id='header' >
            <div id="header-wrapper">
                <h1 className='text-name-portfolio' >{name} </h1>
                <ul id='navbar' >
                    <li>
                        <NavLink to="/projects" > Projects </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" > About Me </NavLink>
                    </li>
                </ul>

            </div>
        </header>
    )
}