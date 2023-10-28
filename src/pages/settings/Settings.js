import React from 'react'
import Search from 'components/search/Search'

import './sass/main.sass'

export default function Settings()
{
    return (
        <div id="settings" className="d-flex flex-column">

            <Search />
            
            <div className="block-main flex-grow-1 container-fluid">
                <div className="row">

                    <div className="col">
                        
                        <div class="block-username">
                            <label for="exampleInputUserName" class="form-label">Email address</label>
                            <input type="username" class="form-control" id="exampleInputUserName" 
                                aria-describedby="emailHelp" placeholder="Ex.: John Doe"/>
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                        <div class="block-email">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" 
                                aria-describedby="emailHelp" placeholder="Ex.: contact@projectmanager.org"/>
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                        <div class="block-password">
                            <label for="exampleInputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword" 
                                aria-describedby="emailHelp" placeholder="Ex.: &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                            <label for="exampleInputPasswordConfirmation" class="form-label">Password - Confirmation</label>
                            <input type="password" class="form-control" id="exampleInputPasswordConfirmation" 
                                aria-describedby="emailHelp" placeholder="Ex.: &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                    </div>

                </div>
            </div>
                        
        </div>
    )
}