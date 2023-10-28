import React from 'react'

import Page from 'pages/page/Page';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import 'App.sass'
import SignIn from 'pages/sign-in/SignIn';

export default class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
          canDashboard: true // put to false
        }
    }

    handleOnSignIn()
    {
      this.setState({
        canDashboard: true,
      })
    }

    getPage()
    {
      console.log(this.state.canDashboard)
      if(this.state.canDashboard)
        return (<Page />)
      else
        return (<SignIn onSignIn={ () => this.handleOnSignIn() } />)
    }

    render()
    {
      return (
          <div id="App">
            { this.getPage() }
          </div>
      );
    }
}
