import React from 'react'
import Search from 'components/search/Search'
import PageOptions from 'components/page-options/PageOptions'
import DialogAlertAdd from 'components/dialog-alert-add/DialogAlertAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Alerts extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state = {
            alerts: []
        }
    }

    componentDidMount() 
    { 
        const alerts = []
        for (let index = 0; index < 10; index++) 
        {
            alerts.push((
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
                    <button type="button" class="btn btn-primary">
                        <FontAwesomeIcon icon={ solid('xmark') } />
                    </button>
                </div>
            ))
        }
        this.setState({
            alerts: alerts,
        })
    }

    render()
    {
        return (
            <div id="alerts" className="d-flex flex-column">

                <Search />

                <PageOptions dialogAddId="dialog-alert-add" />
                
                <div className="block-main flex-grow-1 container-fluid d-flex flex-column">
                    { this.state.alerts }
                </div> 

                <DialogAlertAdd />   
            </div>
        )
    }
}