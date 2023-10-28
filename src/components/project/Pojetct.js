import React from 'react'

import './sass/main.sass'

export default class Project extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="project card">
                <div className="status-options d-flex justify-content-between">
                    <div className="status d-flex align-items-center">
                        <div className="indicator"></div>
                        <div className="value">On Progess</div>
                    </div>
                    <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#uniqueIdModal">
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>

                    <div className="modal fade" id="uniqueIdModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button className="btn item">Show</button>
                                    <button className="btn item">Edit</button>
                                    <button className="btn item">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://cdn.dribbble.com/users/1392449/screenshots/17662830/media/0469c6e6dc9f96a2ac4266499f9723ee.png?compress=1&resize=1600x1200&vertical=top" className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="date-updated d-flex align-items-center">
                        <div className="icon">
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                        <div className="value">0000-00-00</div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{ width: '42%' }}></div>
                    </div>                  
                </div>
            </div>
        )
    }
}