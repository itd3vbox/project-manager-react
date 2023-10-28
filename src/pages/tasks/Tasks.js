import React from 'react'
import Search from 'components/search/Search'
import PageOptions from 'components/page-options/PageOptions'
import DialogTaskAdd from 'components/dialog-task-add/DialogTaskAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Tasks extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            tasks: []
        }
    }

    componentDidMount() 
    { 
        const tasks = []
        for (let index = 0; index < 10; index++) 
        {
            tasks.push((
                <div className="task d-flex align-items-center" key={ index }>
                    <div className="number">1</div>
                    <div className="name flex-grow-1">Debug Project 1</div>
                    <button type="button" className="btn">
                        <FontAwesomeIcon icon={ regular('circle-check') } />
                        <FontAwesomeIcon icon={ solid('circle-check') } />
                    </button>
                </div>
            ))
        }
        this.setState({
            tasks: tasks,
        })
    }

    render()
    {
        return (
            <div id="tasks" className="d-flex flex-column">
                <Search />

                <PageOptions dialogAddId="dialog-task-add" />

                <div className="block-main flex-grow-1 container-fluid d-flex flex-column">
                    { this.state.tasks }
                </div> 

                <DialogTaskAdd />
            </div>
        )
    }
}