import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class UserBox extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="user-box modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="block-name-sign-out d-flex align-items-center">
                                <div className="name flex-grow-1">User 1</div>
                                <div className="button btn">
                                    <FontAwesomeIcon icon={ solid('right-from-bracket') } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}