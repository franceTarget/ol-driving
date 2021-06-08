import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'

export default class NavBarContent extends Component {
    render() {
        const app = Taro.getApp()
        return (
            <View className="content" style={{ top: `${app.StatusBar}` + 'px' }}>
                <view>{this.props.content}</view>
            </View>
        )
    }
}
