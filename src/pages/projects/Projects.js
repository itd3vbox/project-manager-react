import React from 'react'
import Search from 'components/search/Search'
import Project from 'components/project/Pojetct'
import PageOptions from 'components/page-options/PageOptions'
import DialogProjectAdd from 'components/dialog-project-add/DialogProjectAdd'

import './sass/main.sass'

export default class Projects extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() 
    { 
        const projects = []
        for (let index = 0; index < 10; index++) 
        {
            projects.push((
                <Project key={ index } />
            ))
        }
        this.setState({
            projects: projects,
        })
    }

    render()
    {
        return (
            <div id="projects" className="d-flex flex-column">

                <Search />

                <PageOptions dialogAddId="dialog-project-add" />
                
                <div className="block-main flex-grow-1">
                    { this.state.projects }
                </div>

                <DialogProjectAdd />
                            
            </div>
        )
    }
}