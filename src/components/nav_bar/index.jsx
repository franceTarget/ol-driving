import React, { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'

import {getGlobalData} from '../global'

export default class NavBar extends Component {

    backPage = () => {
        wx.navigateBack({
            delta: 1
        });
    }
    toHome = () => {
        wx.reLaunch({
            url: '/pages/home/index',
        })
    }


    render() {
        // let bgColor = 'bg-gradual-pink'
        // let bgImage = 'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'
        let { isBack, isCustom, bgColor, bgImage, contentShow } = this.props
        bgImage = bgImage ? bgImage : ''
        let CustomBar = getGlobalData('CustomBar')
        let StatusBar = getGlobalData('StatusBar')
        let Custom = getGlobalData('Custom')
        return (
            <View className="cu-custom" style={{ height: `${CustomBar}` + 'px' }}>
                <View className={"cu-bar fixed" + ' ' + (bgImage ? 'none-bg text-white bg-img' + ' ' : '') + `${bgColor}`} style={{ height: `${CustomBar}` + 'px', paddingTop: `${StatusBar}` + 'px', backgroundImage: `${bgImage}` ? 'url(' + `${bgImage}` + ')' : '' }}>
                    {
                        isBack ? <View className="action" onClick={this.backPage}>
                            <Text className="cuIcon-back"></Text>
                            <view>返回</view>
                        </View> : null
                    }
                    {
                        isCustom ? <View className="action border-custom" style={{ width: `${Custom.width}` + 'px', height: `${Custom.height}` + 'px', marginLeft: 'calc(750rpx - ' + `${Custom.right}` + 'px)' }}>
                            <Text className="cuIcon-back" onClick={this.backPage}></Text>
                            <Text className="cuIcon-homefill" onClick={this.toHome}></Text>
                        </View> : null
                    }
                    {contentShow ? this.props.navBarContent() : ''}
                    {/* <Slot name="right"></Slot> */}
                </View>
            </View>
        )
    }
}
