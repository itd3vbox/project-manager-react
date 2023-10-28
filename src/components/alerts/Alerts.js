import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Alerts extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="alerts card">
                <div className="card-body">
                    <h5 className="card-title">Alerts <span className="total">(5)</span></h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="alert selected d-flex align-items-center color-1">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ solid('triangle-exclamation') } />
                                </div>
                                <div className="message flex-grow-1">
                                    <h6>Project 1</h6>
                                    <p>
                                        Somme compilation error occured.
                                    </p>
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <FontAwesomeIcon icon={ solid('xmark') } />
                                </button>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="alert d-flex align-items-center color-2">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ solid('triangle-exclamation') } />
                                </div>
                                <div className="message flex-grow-1">
                                    <h6>Project 1</h6>
                                    <p>
                                        Somme compilation error occured.
                                    </p>
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <FontAwesomeIcon icon={ solid('xmark') } />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}