import React from 'react'
import UserBox from 'components/user-box/UserBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Search extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="search d-flex align-items-center">
                <div className="icon d-flex justify-content-center">
                    <FontAwesomeIcon icon={ solid('magnifying-glass') } />
                </div>
                <input type="text" placeholder="search ..."/>
                <button type="button" className="btn btn-alert available">
                    <FontAwesomeIcon icon={ solid('bell') } />
                    <div className="indicator"></div>
                </button>
                <button type="button" className="btn btn-avatar" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" className="avatar" alt="..."/>
                </button>
                <UserBox />
            </div>
        )
    }
}