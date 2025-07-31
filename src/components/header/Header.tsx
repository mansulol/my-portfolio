// Packages
import { Link } from 'react-router-dom'
import routes from '@services/appRoutes.service';

// Styles
import './Header.scss'

export default function Header() {
    const name: string = "Mansour Lo Lo";

    return (
        <header id='header' >
            <div id="header-wrapper">
                <Link to={routes.home.route} className='text-name-portfolio' >{name} </Link>
                <ul id='navbar' >
                    <li>
                        <Link to={routes.projects.route} > {routes.projects.name} </Link>
                    </li>
                    <li>
                        <Link to={routes.about.route} > {routes.about.name} </Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}