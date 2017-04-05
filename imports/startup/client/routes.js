import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from '../../ui/components/app'
import One from '../../ui/components/one/one'
import Two from '../../ui/components/two/two'

export default class Routes extends React.Component {
  render() {
    return (
      <span>
      <Route path="/" component={App} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
      </span>
    )
  }
}