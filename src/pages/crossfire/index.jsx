import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import NavBar from '../../components/nav_bar'
import NavBarContent from '../../components/nav_bar_content'

export default class Crossfire extends Component {


    compliment = (id) => {
        Taro.navigateTo({
            url: '../crossfire/detail/index?id=' + id
        })
    }

    render() {
        return (
            <View>
                <NavBar bgColor="bg-gradual-pink" contentShow={true} navBarContent={(content) => <NavBarContent content={'激情四射'} />} />
                <View className="cu-card dynamic no-card">
                    <View className="cu-item shadow">
                        <View className="cu-list menu-avatar">
                            <View className="cu-item">
                                <View className="cu-avatar round lg" style={{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)' }}></View>
                                <View className="content flex-sub">
                                    <View>凯尔</View>
                                    <View className="text-gray text-sm flex justify-between">
                                        2019年12月3日
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="text-content">
                            折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
                        </View>
                        <View className="grid flex-sub padding-lr col-1">
                            <View className="bg-img only-img" style={{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)' }}>
                            </View>
                        </View>
                        <View className="text-gray text-sm text-right padding" onClick={() => this.compliment(1)}>
                            <Text className="cuIcon-appreciatefill margin-lr-xs"></Text> 20
                            <Text className="cuIcon-messagefill margin-lr-xs"></Text> 30
                        </View>
                    </View>
                </View>
                <View className="cu-card dynamic no-card">
                    <View className="cu-item shadow">
                        <View className="cu-list menu-avatar">
                            <View className="cu-item">
                                <View className="cu-avatar round lg" style={{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)' }}></View>
                                <View className="content flex-sub">
                                    <View>凯尔</View>
                                    <View className="text-gray text-sm flex justify-between">
                                        2019年12月3日
                                </View>
                                </View>
                            </View>
                        </View>
                        <View className="text-content">
                            折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
                    </View>
                        <View className="grid flex-sub padding-lr col-1">
                            <View className="bg-img only-img" style={{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)' }}>
                            </View>
                        </View>
                        <View className="text-gray text-sm text-right padding">
                            <Text className="cuIcon-appreciatefill margin-lr-xs"></Text> 20
                            <Text className="cuIcon-messagefill margin-lr-xs"></Text> 30
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
