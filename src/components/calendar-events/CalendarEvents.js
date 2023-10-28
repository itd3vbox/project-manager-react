import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class CalendarEvents extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="calendar-event modal fade" id="homeCalendarEvents" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Calendar - Events</h3>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Events</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">New</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane t-events fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <ul className="list-group">
                                    
                                        <li className="list-group-item">
                                            <div className="event">
                                                <div className="block-1 d-flex align-items-center">
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={ solid('flag') } />
                                                    </div>
                                                    <div className="name flex-grow-1">
                                                        Event 1
                                                    </div>
                                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        <FontAwesomeIcon icon={ solid('angle-down') } />
                                                    </button>
                                                </div>
                                                <div className="block-2 collapse" id="collapseExample">
                                                    <div className="card card-body">
                                                    Some placeholder content htmlFor the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    
                                        <li className="list-group-item">
                                            <div className="event">
                                                <div className="block-1 d-flex align-items-center">
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={ solid('flag') } />
                                                    </div>
                                                    <div className="name flex-grow-1">
                                                        Event 1
                                                    </div>
                                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                                        <FontAwesomeIcon icon={ solid('angle-down') } />
                                                    </button>
                                                </div>
                                                <div className="block-2 collapse" id="collapseExample2">
                                                    <div className="card card-body">
                                                    Some placeholder content htmlFor the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-pane t-new fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                            <div id="editorjs"></div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}