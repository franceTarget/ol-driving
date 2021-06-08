import React, { Component } from 'react'
import { View, Text} from '@tarojs/components'
import Taro from '@tarojs/taro'

import { POST } from '../../../components/request'
import {getGlobalData,setGlobalData} from '../../../components/global'

export default class Bar extends Component {

    turnTo = (url)=>{
        return ()=>{
            //判断是否已经授权
            let userInfo = getGlobalData('userInfo')
            if(!userInfo.nickName){
                Taro.getUserProfile({
                    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    success: (res) => {
                        //设置全局变量
                        userInfo.nickName = res.userInfo.nickName
                        userInfo.avatarUrl = res.userInfo.avatarUrl
                        userInfo.gender = res.userInfo.gender
                        setGlobalData('userInfo',userInfo)
                        //请求后台保存用户信息
                        this.saveUserInfo(userInfo)
                      //跳转页面
                      Taro.navigateTo({
                        url:url
                    })
                    },
                  })
            }else{
                Taro.navigateTo({
                    url:url
                })
            }
        }
    }

    saveUserInfo(userInfo) {
        //添加本地缓存
        Taro.setStorage({ key: 'userInfo', data:userInfo })
        POST({
            params: {
                url: '/user/profile',
                data: userInfo
            },
            success(res){},
            fail(){},
            complete(){}
        })
      }

    render() {
        let { url, icon, color, value } = this.props.bar
        return (
            // <Navigator className="cu-item arrow" url={url}>
            <View className="cu-item arrow" onClick={this.turnTo(url)}>
                <View className="content">
                    <Text className={"cuIcon-" + `${icon}` + ' ' + `${color}`}></Text>
                    <Text className="text-grey">{value}</Text>
                </View>
            </View>

            // </Navigator>
        )
    }
}
