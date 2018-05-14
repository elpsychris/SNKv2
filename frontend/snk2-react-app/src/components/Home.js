import React, { Component } from 'react'
import LandingNav from './landing-comps/LandingNav'
import Banner from './Banner'
import GuildBoard from './common-comps/Guildboard'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Router>
                <div class="home">
                    <header className="App-header">
                        <LandingNav />
                        <Banner />
                    </header>
                    <GuildBoard />
                </div>
            </Router>
        )
    }
}

export default Home