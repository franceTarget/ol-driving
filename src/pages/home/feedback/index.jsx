import React, { Component } from 'react'
import { View} from '@tarojs/components'
import Taro from '@tarojs/taro'

import NavBar from '../../../components/nav_bar'
import NavBarContent from '../../../components/nav_bar_content'
import Info from './info'
import Painter from '../../../components/Painter'

export default class Feedback extends Component {
    render() {
        const info = Info()
        return (
            
            <View>
                <NavBar bgColor="bg-gradual-green" isBack={true} contentShow={true} navBarContent={(content) => <NavBarContent content={'用户反馈'} />} />
                <Painter
                    customStyle=""
                    palette={info}
                    // onImgOK={}
                    onImgErr={(e) => {
                        console.error('绘制失败', e);
                        Taro.hideLoading();
                        Taro.showToast({
                        title: '图片生成失败',
                        icon: 'none'
                        });
                    }} 
                    />
            </View>
        )
    }
}
