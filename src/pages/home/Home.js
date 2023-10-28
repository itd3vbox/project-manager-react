import React from 'react'
import Search from 'components/search/Search'
import Project from 'components/project/Pojetct'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle'
import Tasks from 'components/tasks/Tasks'
import Tests from 'components/tests/Tests'
import Calendar from 'components/calendar/Calendar'
import CalendarEvents from 'components/calendar-events/CalendarEvents'
import Alerts from 'components/alerts/Alerts'
import $ from 'jquery'

import './sass/main.sass'

export default class Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isCalendarDateClick: false,
        }
    }

    handleCalendarOnDateClick()
    {
        if (!this.state.isCalendarDateClick)
            new Modal($('#homeCalendarEvents')).show()
        else
            new Modal($('#homeCalendarEvents')).hide()
    }

    render()
    {
        return (
            <div id="home" className="d-flex flex-column">

                <Search />

                <div className="block-main flex-grow-1 container-fluid">
                    <div className="row align-items-start">
                        <div className="col">
                            <Project />
                            <Project />
                        </div>
                        <div className="col">
                            <Tasks />
                            <Tests />
                            <Alerts />
                        </div>
                        <div className="col">
                            <Calendar onDateClick={ () => this.handleCalendarOnDateClick() } />
                        </div>
                    </div>
                </div>

                {/* Dialogs */}

                <CalendarEvents />
                            
            </div>
        )
    }
}