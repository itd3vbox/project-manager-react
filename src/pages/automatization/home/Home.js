import React from 'react'
import Search from 'components/search/Search'
import Chart from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'
import $ from 'jquery'

import './sass/main.sass'

export default class Home extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            charBar: {
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'Tests',
                            data: [12, 19, 6, 5, 2, 3, 10],
                            borderWidth: 1
                        },
                        {
                            type: 'line',
                            label: 'Failed',
                            data: [10, 10, 5, 4, 1, 2, 5],
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }
        }
    }

    render()
    {
        return (
            <div id="alerts" className="d-flex flex-column">

                <Search />
                
                <div className="block-main flex-grow-1 container-fluid">
                    <div className="row align-items-start">
                        <div className="col flex-grow-1">
                            <div className="stat-tests auto-home-stat-tests">
                                <Bar data={ this.state.charBar.data } />
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}