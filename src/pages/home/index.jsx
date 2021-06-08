import React, { Component } from 'react'
import { View, ScrollView, Image, Text, Navigator, Button } from '@tarojs/components'

import {getGlobalData} from '../../components/global'

import Bar from './bar'
import {BAR_LIST} from '../../components/constants'
import './index.scss'


export default class Home extends Component {

    state = {
        starCount: 0,
        forksCount: 0,
        visitTotal: 0,
    }

    render() {
        const { visitTotal, starCount, forksCount } = this.state

        return (
            <ScrollView scrollY className="scrollPage">
                <View className="UCenter-bg">
                    <View className="text-xl">天青色等烟雨 而我在等你
                </View>
                </View>
                <View className="padding flex text-center text-grey bg-white shadow-warp">
                    <View className="flex flex-sub flex-direction solid-right">
                        <View className="text-xxl text-orange">{visitTotal}</View>
                        <View className="margin-top-sm">
                            <Text className="cuIcon-attentionfill"></Text> View</View>
                    </View>
                    <View className="flex flex-sub flex-direction solid-right">
                        <View className="text-xxl text-blue">{starCount}</View>
                        <View className="margin-top-sm">
                            <Text className="cuIcon-favorfill"></Text> Star</View>
                    </View>
                    <View className="flex flex-sub flex-direction">
                        <View className="text-xxl text-green">{forksCount}</View>
                        <View className="margin-top-sm">
                            <Text className="cuIcon-fork"></Text> Fork</View>
                    </View>
                </View>
                <View className="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
                    {BAR_LIST.map((bar) => {
                        return <Bar key={bar.id} bar={bar} />
                    })}
                </View>
            </ScrollView>
        )
    }
}
