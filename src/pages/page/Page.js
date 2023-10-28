import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Menu from 'components/menu/Menu'
import Home from 'pages/home/Home'
import Projects from 'pages/projects/Projects'
import Tasks from 'pages/tasks/Tasks'
import Settings from 'pages/settings/Settings'
import Automatization from 'pages/automatization/automatization/Automatization'
import AutomatizationHome from 'pages/automatization/home/Home'
import Tests from 'pages/automatization/tests/Tests'
import Alerts from 'pages/automatization/alerts/Alerts'

import './sass/main.sass'

export default class Page extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<>
            <Menu />
            <div id="container-main">
                <Routes>
                    <Route
                        path="/"
                        element={ <Home /> } />
                    <Route
                        path="/projects"
                        element={ <Projects /> } />
                    <Route
                        path="/tasks"
                        element={ <Tasks /> } />
                    <Route path="/automatization" element={<Automatization />}>
                        <Route index element={<AutomatizationHome />} />
                        <Route path="tests" element={<Tests />} />
                        <Route path="alerts" element={<Alerts />} />
                    </Route>
                    <Route
                        path="/settings"
                        element={ <Settings /> } />
                </Routes>
            </div>
        </>)
    }
}