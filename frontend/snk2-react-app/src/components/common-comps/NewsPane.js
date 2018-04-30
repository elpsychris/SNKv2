import React from 'react'
import { Tab, Header } from 'semantic-ui-react'
import writeLog from '../../utils/Logger'
import NewsItem from './NewsItem'

const sampleNews = {
  'title': 'Title',
  'review': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of..."
}
const newsList = [sampleNews,sampleNews,sampleNews]

class NewsPane extends React.Component {
  render() {
    writeLog("haha", this.props.id)
    const panes = this.props.tabs.map(tab => ({
      menuItem: tab.name,
      render: () => 
        <Tab.Pane attached={false}>
          {
            newsList.map(newsItem =>(
              <NewsItem 
                id="NewsItem"
                title={newsItem.title}
                review={newsItem.review} ></NewsItem>
            )
          )}
        </Tab.Pane>
    }))
    return [
      <Header as='h1'>{this.props.name}</Header>,
      <Tab menu={{ attached: true, tabular: false }}panes={panes} />
    ]
  }
}

export default NewsPane