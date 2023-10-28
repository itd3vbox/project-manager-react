import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class PageOptions extends React.Component
{
    constructor(prop)
    {
        super(prop)
    }

    render()
    {
        return(
            <div className="page-options">
                <div className="options">
                    <button className="btn" data-bs-toggle="modal" data-bs-target={ '#' + this.props.dialogAddId }>
                        <FontAwesomeIcon icon={ solid('plus') } />
                    </button>
                </div>
                <div className="dialogs"></div>
            </div>
        )   
    }
}
