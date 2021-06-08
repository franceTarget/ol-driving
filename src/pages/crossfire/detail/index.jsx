import React, { Component } from 'react'
import { View, Text,Button,Input } from '@tarojs/components'

import NavBar from '../../../components/nav_bar'

export default class Detail extends Component {
    render() {
        return (
            <View>
                 <NavBar bgColor="bg-gradual-pink" isBack={true} contentShow={false}/>
                 <View className="cu-bar search bg-white">
                <View className="search-form round">
                    <Input type="text" placeholder="我也说一句···" maxlength="300" cursorSpacing="10"></Input>
                </View>
                <View className="action">
                    <Button className="cu-btn bg-green shadow-blur round">发送</Button>
                </View>
            </View>
            </View>
            
        )
    }
}
