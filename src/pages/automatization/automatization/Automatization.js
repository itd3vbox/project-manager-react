import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from 'components/search/Search'
import Project from 'components/project/Pojetct'

import './sass/main.sass'

export default function Automatization()
{
    return (
        // <div id="alerts" className="d-flex flex-column">

        //     <Search />
            
        //     <div className="block-main flex-grow-1 container-fluid">
        //         <div className="row align-items-start">
        //             <div className="col">
        //                 Automatization.
        //                 <Outlet />
        //             </div>
        //         </div>
        //     </div>
                        
        // </div>
        <>
            <Outlet />
        </>
    )
}