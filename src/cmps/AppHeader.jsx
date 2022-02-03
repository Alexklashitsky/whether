import React from 'react'
import { NavLink } from 'react-router-dom'

export class AppHeader extends React.Component {


    render() {
        return (
            <div className="main-header" >
                <h2>Alex weather app </h2>
                <nav className='main-nav '>
                    <NavLink className={'clean-link'} to="/">weather</NavLink>
                    <NavLink className={'clean-link'} to="/favorites">favorites</NavLink>

                </nav>

            </div>
        )
    }

}

