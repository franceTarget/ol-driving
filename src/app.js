import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

import { SUCCESS, HOST } from './components/constants'
import { setGlobalData } from './components/global'

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  constructor() {
    super();
    Taro.getSystemInfo({
      success: e => {
        setGlobalData('StatusBar', e.statusBarHeight)
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          setGlobalData('Custom', capsule)
          setGlobalData('CustomBar', capsule.bottom + capsule.top - e.statusBarHeight)
        } else {
          setGlobalData('CustomBar', e.statusBarHeight + 50)
        }
      }
    })

  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
