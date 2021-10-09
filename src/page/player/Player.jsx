import React from 'react'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import './styles.css'
export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}
