import React from 'react'

import './sass/main.sass'

export default class DialogProjectAdd extends React.Component
{
    constructor(props)
    {
        super(props)   
    }

    render()
    {
        return (
            <div className="modal fade dialog-project-add" id="dialog-project-add" data-bs-backdrop="static" data-bs-keyboard="false" 
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}