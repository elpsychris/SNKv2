import React from 'react'
import { Grid, GridColumn, Segment, Header } from 'semantic-ui-react'
import writeLog from '../../utils/Logger'
import GreyImg from '../../res/grey_img.svg'

const square = { width: 25, height: 25 }

class NewsItem extends React.Component {

  render() {
    writeLog(this.props.title, this.props.id)

    return (
      <Grid columns={2} stackable>
        <Grid.Row>
            <GridColumn textAlign="center" width={2}>
                <div>
                    <img className="news-item-ava" src={GreyImg}/>
                </div>
            </GridColumn>
            <GridColumn width={13} floated="right">
                <Segment>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.review}</p>
                </Segment>
            </GridColumn>
        </Grid.Row>
      </Grid>
    )
  }
}

export default NewsItem