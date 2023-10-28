import React from 'react'
import Search from 'components/search/Search'
import PageOptions from 'components/page-options/PageOptions'
import DialogTestAdd from 'components/dialog-test-add/DialogTestAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './sass/main.sass'

export default class Tests extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            tests: []
        }
    }

    componentDidMount() 
    { 
        const tests = []
        for (let index = 0; index < 10; index++) 
        {
            tests.push((
                <div className="test d-flex align-items-center t-progress" key={ index }>
                    <div className="icon">
                        <FontAwesomeIcon icon={ solid('stopwatch') } />
                    </div>
                    <div className="name flex-grow-1">Debug Project 1</div>
                    <div className="duration">25m 20s</div>
                    <button type="button" className="btn">
                        <FontAwesomeIcon icon={ solid('play') } />
                        <FontAwesomeIcon icon={ solid('spinner') } />
                    </button>
                </div>
            ))
        }
        this.setState({
            tests: tests,
        })
    }

    render()
    {
        return (
            <div id="tests" className="d-flex flex-column">
                <Search />

                <PageOptions dialogAddId="dialog-test-add" />
                
                <div className="block-main flex-grow-1 container-fluid d-flex flex-column">
                    { this.state.tests }
                </div>

                <DialogTestAdd />
            </div>
        )
    }
}