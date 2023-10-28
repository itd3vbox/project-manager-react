import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Menu extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <nav id="page-menu">
                <div className="content-close d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="content-main flex-grow-1">
                    <a href="/" className="home-link d-flex">
                        <span className="name flex-grow-1">Project Managment</span>
                    </a>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="projects" className="nav-link d-flex d-flex align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ solid('leaf') } />
                                </span>
                                <span className="name flex-grow-1">Projects</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="tasks" className="nav-link d-flex d-flex align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ solid('leaf') } />
                                </span>
                                <span className="name flex-grow-1">Tasks</span>
                            </Link>
                        </li>
                        <li className="nav-item item-menu-sub">
                            <div className="d-flex d-flex align-items-center current">
                                <Link to="automatization" className="nav-link d-flex d-flex align-items-center flex-grow-1">
                                    <span className="icon d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={ solid('leaf') } />
                                    </span>
                                    <span className="name flex-grow-1">Automatization</span>
                                </Link>
                                <button className="btn btn-primary d-flex justify-content-center align-items-center" 
                                    type="button" data-bs-toggle="collapse" data-bs-target="#menuSub1" 
                                    aria-expanded="false" aria-controls="menuSub1">
                                    <FontAwesomeIcon icon={ solid('angle-down') } />
                                </button>
                            </div>

                            {/* Sub Menu */}
                            <div className="menu-sub collapse" id="menuSub1">
                                <ul>
                                    <li className="nav-item">
                                        <Link to="automatization/tests" className="nav-link active d-flex d-flex align-items-center">
                                            Tests    
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ "automatization/alerts" } className="nav-link active d-flex d-flex align-items-center">
                                            Alerts    
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="settings" className="nav-link d-flex d-flex align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ solid('leaf') } />
                                </span>
                                <span className="name flex-grow-1">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}