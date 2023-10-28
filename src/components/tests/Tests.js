import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Tests extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    renderTest()
    {
        return (
            <li className="list-group-item d-flex align-items-center">
                <div className="icon">
                    <FontAwesomeIcon icon={ solid('stopwatch') } />
                </div>
                <div className="name flex-grow-1">Debug Project 1</div>
                <div className="duration">25m 20s</div>
                <button type="button" className="btn">
                    <FontAwesomeIcon icon={ solid('play') } />
                </button>
            </li>
        )
    }

    render()
    {
        return (
            <div className="tests card">
                <div className="card-body">
                    <h5 className="card-title flex-grow-1">Tests <span className="total">(5)</span></h5>
                    <ul className="list-group">
                        <li className="list-group-item d-flex align-items-center t-progress">
                            <div className="icon">
                                <i className="fa-solid fa-stopwatch"></i>
                            </div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <div className="duration">25m 20s</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ solid('play') } />
                                <FontAwesomeIcon icon={ solid('spinner') } />
                            </button>
                        </li>
                        { this.renderTest() }
                        { this.renderTest() }
                        { this.renderTest() }
                        { this.renderTest() }
                        { this.renderTest() }
                    </ul>
                </div>
            </div>
        )
    }
}