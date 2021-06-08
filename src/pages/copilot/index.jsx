import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import NavBar from '../../components/nav_bar'
import NavBarContent from '../../components/nav_bar_content'
import Footer from '../../components/footer'
import { GET, POST } from '../../components/request'

import { setGlobalData, getGlobalData } from '../../components/global'

import './index.scss'


export default class Copilot extends Component {

    state = {
        data: {
            page: 1,
            pageSize: 5,
            total: 0,
            pages: 0,
            list: [],
        },
        //控制显示底线
        showFooter: false
    }

    componentDidMount() {
        //加载用户信息
        this.loadUserInfo()
        //获取数据
        this.getDataList({ type: 1, page: 1, pageSize: 5, loadingMsg: '加载中，请稍后' })
    }

    loadUserInfo() {
        var userInfo = getGlobalData('userInfo')
        if (!userInfo) {
            userInfo = Taro.getStorageSync('userInfo')
            setGlobalData('userInfo', userInfo)
        }
        if (!userInfo) {
            //获取用户信息
            Taro.login({
                success(res) {
                    if (res.code) {
                        POST({
                            params: {
                                url: '/user/applet/login',
                                data: {
                                    code: res.code
                                },
                            },
                            success: function (e) {
                                setGlobalData('userInfo', userInfo)
                                Taro.setStorage({ key: 'userInfo', data: e.data })
                            },
                            fail: function () { },
                            complete: function () { }
                        })
                    }
                }
            })
        }
    }


    // 监听下拉刷新
    onPullDownRefresh() {
        this.getDataList({ type: 1, page: 1, pageSize: 5, loadingMsg: '刷新中...' });
    }

    // 监听上拉触底
    onReachBottom() {
        if (this.state.data.pages === this.state.data.page) {
            return
        }
        this.getDataList({ type: 2, page: this.state.data.page * 1 + 1, pageSize: 5, loadingMsg: '' });
    }

    getDataList(param) {
        const { type, page, pageSize, loadingMsg } = param
        var that = this
        GET({
            params: {
                url: '/find/copilot/page',
                data: {
                    gender: 0,
                    page: page,
                    pageSize: pageSize
                },
            },
            showLoading: loadingMsg ? true : false,
            loadingMsg: loadingMsg,
            success: function (res) {
                if (type === 1) {
                    that.setState({ showFooter: false, data: res.data })
                } else {
                    let result = res.data
                    let data = {
                        page: page,
                        pageSize: result.pageSize,
                        pages: result.pages,
                        total: result.total,
                        list: [...that.state.data.list, ...result.list]
                    }
                    that.setState({ showFooter: page === result.pages, data: data })
                }
            },
            fail(){},
            complete: function () {
                if (type === 1) {
                    Taro.stopPullDownRefresh()
                }
            }
        })
    }

    //点击放大图片
    preView = (src)=>{
        return () =>{
            Taro.previewImage({
                current: src,//当前点击的图片链接
                urls: [src]//图片数组
               })
        }
    }

    render() {
        let { list } = this.state.data
        return (
            <View>
                <NavBar bgColor="bg-gradual-pink" contentShow={true} navBarContent={(content) => <NavBarContent content={'寻找副驾'} />} />
                <View className="cu-card article">
                    {
                        list ? list.map((user) => {
                            return (
                                <View className="cu-item shadow" key={user.id}>
                                    <View className="cu-bar bg-shadeBottom-blue">
                                        <Text className="text-cut padding-left-sm">{user.resume}</Text>
                                    </View>
                                    <View className="content ">
                                        <Image src={user.photograph} mode="aspectFill" onClick={this.preView(user.photograph)}></Image>
                                        <View className="desc">
                                            <View className="text-content">
                                                <View className="text-black">
                                                    <Text>昵称：{user.nickName}</Text>
                                                    <Text>身高：{user.height}cm</Text>
                                                </View>
                                                <View className="text-black">
                                                    <Text>年龄：{user.age}</Text>
                                                    <Text>体重：{user.weight}kg</Text>
                                                </View>
                                                <View className="text-black">现居住地：{user.province} {user.city} {user.area}</View>
                                            </View>
                                            <View>
                                                {user.tags[0] ? <View className="cu-tag bg-red light sm round">{user.tags[0]}</View> : ''}
                                                {user.tags[1] ? <View className="cu-tag bg-orange light sm round">{user.tags[1]}</View> : ''}
                                                {user.tags[2] ? <View className="cu-tag bg-yellow light sm round">{user.tags[2]}</View> : ''}
                                                {user.tags[3] ? <View className="cu-tag bg-green light sm round">{user.tags[3]}</View> : ''}
                                            </View>
                                        </View>
                                    </View>
                                    <View class="text-gray text-sm text-right padding-xs">
                                        <Text class="cuIcon-attentionfill margin-left"></Text> 10
                                        <Text class="cuIcon-appreciatefill margin-left"></Text> 20
                                        <Text class="cuIcon-messagefill margin-left"></Text> 30
                                    </View>
                                </View>)
                        }) : ''
                    }
                </View>
                {this.state.showFooter ? <Footer /> : ''}
            </View>

        )
    }
}
