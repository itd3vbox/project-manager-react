import React from 'react'

import './sass/main.sass'

export default class SignIn extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<div id="sign-in" className="container-fluid">
            <div className="row align-items-start">
                <div className="col">
                    
                </div>
                <div className="col flex-grow-1 d-flex justify-content-center align-items-center">
                    
                    <form onSubmit={ (event) => { event.preventdefault() } }>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control is-invalid" id="exampleInputEmail1" 
                                placeholder="user@contact.com"
                                aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control is-invalid" id="exampleInputPassword1"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                        <button type="submit" onClick={ this.props.onSignIn } className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>)
    }
}