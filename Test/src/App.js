/* global XMLHttpRequest */

import React, { Component } from 'react'
import { View } from 'react-native'

import Main from './Main'

import { Provider } from 'react-redux'
import store from './store'



class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Main/>
        </Provider>
      </View>
    )
  }
}

export default App