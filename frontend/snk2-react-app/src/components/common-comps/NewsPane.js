import React from 'react'
import { Tab } from 'semantic-ui-react'
import log from '../../utils/Logger'



class NewsPane extends React.Component {
  render() {
    const panes = this.props.tabs.map(tab => ({
      menuItem: tab.name,
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
    }))
    log("hahah", panes)
    return (
      <Tab menu={{ borderless: true, attached: false, tabular: false }}panes={panes} />
    )
  }
}

export default NewsPane