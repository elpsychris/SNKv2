import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

import LandingNav from './landing-comps/LandingNav'

class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <LandingNav/>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Section link>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle'/>
                        <Breadcrumb.Section link>Project</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right angle'/>
                        <Breadcrumb.Section link>Novel Alpha</Breadcrumb.Section>                        
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}

export default Project