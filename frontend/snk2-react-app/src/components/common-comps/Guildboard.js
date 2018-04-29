import React from 'react'
import { Tab, Segment, Grid } from 'semantic-ui-react'
import NewsPane from './NewsPane';

const newsTabs = [{ 'name': 'Tab 1' }, { 'name': 'Tab 2' }, { 'name': 'Tab 3' }]
const renderWidgets = widgets => {
  return (
    <Grid divided='vertically' stackable={true}>
        <Grid.Row columns={2}>
        {
            widgets.map(widget => (
            <Grid.Column>{widget}</Grid.Column>
            ))
        }
        </Grid.Row>
    </Grid>
  )
}

class Guildboard extends React.Component {
  render() {
    return (
      renderWidgets([<NewsPane tabs={newsTabs} id="Landing_News"/>,
        <NewsPane tabs={newsTabs} id="Landing_News"/>
      ])
    )
  }
}

export default Guildboard