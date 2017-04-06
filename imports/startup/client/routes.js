import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from '../../ui/components/app'

export default class Routes extends React.Component {
  render() {
    return (
      <span>
      <Route path="/" component={App} />
      </span>
    )
  }
}