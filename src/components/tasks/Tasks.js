import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import PageOptions from 'components/page-options/PageOptions'

import './sass/main.sass'

export default class Tasks extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="tasks card">
                <div className="card-body">
                    <h5 className="card-title">Tasks <span className="total">(5)</span></h5>
                    <ul className="list-group">
                        <li className="list-group-item d-flex align-items-center">
                            <div className="number">1</div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ regular('circle-check') } />
                                <FontAwesomeIcon icon={ solid('circle-check') } />
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <div className="number">2</div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ regular('circle-check') } />
                                <FontAwesomeIcon icon={ solid('circle-check') } />
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <div className="number">3</div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ regular('circle-check') } />
                                <FontAwesomeIcon icon={ solid('circle-check') } />
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <div className="number">4</div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ regular('circle-check') } />
                                <FontAwesomeIcon icon={ solid('circle-check') } />
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <div className="number">4</div>
                            <div className="name flex-grow-1">Debug Project 1</div>
                            <button type="button" className="btn">
                                <FontAwesomeIcon icon={ regular('circle-check') } />
                                <FontAwesomeIcon icon={ solid('circle-check') } />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}