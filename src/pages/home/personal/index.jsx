import React, { Component } from 'react'
import { View, Picker, Image, Form, Textarea, Input, Button, Text, Radio, Label, RadioGroup } from '@tarojs/components'
import Taro from '@tarojs/taro'

import NavBar from '../../../components/nav_bar'
import NavBarContent from '../../../components/nav_bar_content'
import { TAG0_LIST } from '../../../components/constants'
import { GET } from '../../../components/request'
import { getGlobalData } from '../../../components/global'

export default class Personal extends Component {

    state = {
        id: '',
        avatarUrl: '',
        nickName: '',
        gender: 0,
        age: '',
        height: '',
        weight: '',
        wechatNo: '',
        phone: '',
        qq: '',
        region: ['广东省', '深圳市', '龙华区'],
        address: '',
        resume: '',
        imgList: [],
        count: 4,
        tags: [2, 6, 9, 13]
    }

    componentDidMount() {
        let userInfo = getGlobalData('userInfo')
        this.setState({
            id: userInfo.id,
            avatarUrl: userInfo.avatarUrl,
            nickName: userInfo.nickName,
            gender: userInfo.gender,
        })
    }

    //删除已上传图片
    delImg = (e, index) => {
        e.stopPropagation()// 阻止事件冒泡
        let { imgList } = this.state
        const imgs = imgList.filter((item, i) => i !== index)
        this.setState({ imgList: imgs })
    }

    //上传图片
    chooseImage = () => {
        Taro.chooseImage({
            count: this.state.count,
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], //从相册选择
            success: (res) => {
                //上传图片到阿里云
                // this.uploadToOss(res)
                this.setState({
                    imgList: [...this.state.imgList, ...res.tempFilePaths],
                    count: this.state.count - res.tempFilePaths.length
                })
            }
        });
    }

    uploadToOss(param) {
        //访问服务器，返回signature
        GET({
            params: {
                url: '/file/upload/sign',
                data: {},
            },
            success: function (res) {
                console.log(res)
                Taro.uploadFile({
                    url: res.data.host,
                    filePath: param.tempFilePaths[0],
                    name: 'file',
                    formData: {
                        key: "party/test.png",
                        policy: res.data.policy,
                        OSSAccessKeyId: res.data.accessId,
                        signature: res.data.signature,
                    },
                    success: function (res) {
                        console.log('上传图片', res)
                    },
                    fail: function (res) {
                        console.log('上传图片失败', res)
                    },
                    complete: function (res) {

                    }
                })
            }
        })
    }

    //预览图片
    viewImage = (img) => {
        return () => {
            Taro.previewImage({
                current: img, // 当前显示图片的http链接
                urls: [img] // 需要预览的图片http链接列表
            })
        }
    }
    //获取用户信息
    getAvatar = () => {
        Taro.getUserProfile({
            desc: '用于完善会员资料',
            success: function (res) {
                var userInfo = res.userInfo
                that.setState({
                    avatarUrl: userInfo.avatarUrl,
                    nickName: userInfo.nickName,
                    gender: userInfo.gender
                })
            },
            fail: function () {
                Taro.showToast({
                    title: '获取失败',
                    icon: 'error',
                    duration: 1000
                })
            }
        })
    }

    //地区选择
    regionChange = (e) => {
        console.log(e)
        this.setState({
            region: e.detail.value
        })
    }

    handleGender = () => {
        this.setState({ gender: this.state.gender === 1 ? 0 : 1 })
    }

    chooseTag = (tag) => {
        var tags = this.state.tags
        let i = tags.indexOf(tag)
        if (i > -1) {
            tags.splice(i, 1)
            this.setState({ tags: tags })
            return
        }
        if (tags.length < 4) {
            this.setState({ tags: [...tags, tag] })
            return
        }
        Taro.showToast({
            title: '最多只能选择四个词条',
            icon: 'none'
        })
    }

    render() {
        return (
            <View>
                <NavBar bgColor="bg-gradual-pink" isBack={true} contentShow={true} navBarContent={(content) => <NavBarContent content={'资料编辑'} />} />
                <Form>
                    <View className="padding cu-form-group">
                        <View className="cu-avatar round lg margin-left" style={{ backgroundImage: 'url(' + `${this.state.avatarUrl}` + ')' }}></View>
                    </View>
                    <View className="cu-form-group">
                        <View className="action">昵称：</View><Text>{this.state.nickName}</Text>
                    </View>
                    <View className="cu-form-group">
                        <View className="action">性别：</View>
                        <View className="action">
                            <RadioGroup onChange={this.handleGender}>
                                <Label className="margin-left">
                                    <Radio className="blue radio" checked={this.state.gender === 1}></Radio>
                                    <Text> 男</Text>
                                </Label>
                                <Label className="margin-left">
                                    <Radio className="red radio" checked={this.state.gender === 0}></Radio>
                                    <Text> 女</Text>
                                </Label>
                            </RadioGroup>
                        </View>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">年龄：</View>
                        <Input placeholder="请输入年龄" name="age" value={this.state.age}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">身高：</View>
                        <Input placeholder="请输入身高" name="height" value={this.state.height}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">体重：</View>
                        <Input placeholder="请输入体重" name="weight" value={this.state.weight}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">微信：</View>
                        <Input placeholder="请输入微信号" name="wechatNo" value={this.state.wechatNo}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">手机：</View>
                        <Input placeholder="请输入手机号" name="phone" value={this.state.phone}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">QQ：</View>
                        <Input placeholder="请输入QQ号" name="qq" value={this.state.qq}></Input>
                    </View>
                    <View className="cu-form-group">
                        <View className="title">地址选择</View>
                        <Picker mode="region" onChange={this.regionChange} value={this.state.region}>
                            <View className="picker">
                                {this.state.region[0]}，{this.state.region[1]}，{this.state.region[2]}
                            </View>
                        </Picker>
                    </View>
                    <View className="cu-form-group align-start">
                        <View className="title">详细地址：</View>
                        <Textarea maxlength="300" placeholder="请输入详细地址"></Textarea>
                    </View>
                    <View className="cu-form-group">
                        <View className="action">
                            <Text className="cuIcon-title text-blue"></Text>我的标签
                        </View>
                    </View>
                    <View className="padding-sm flex flex-wrap bg-white">
                        {TAG0_LIST.map((t) => {
                            return (
                                <View className="padding-xs" key={t.id} onClick={() => this.chooseTag(t.id)}>
                                    <View className={"cu-tag line-grey" + ' ' + (this.state.tags.includes(t.id) ? 'bg-red' : '')} >{t.title}</View>
                                </View>)
                        })
                        }
                    </View>
                    <View className="cu-form-group solids-top">
                        <View className="action">
                            <Text className="cuIcon-title text-blue"></Text>自我简介
                        </View>
                    </View>
                    <View className="padding-sm flex flex-wrap bg-white">
                        <Textarea maxlength="300" placeholder="一句话介绍一下自己，会展示在主页哦..."></Textarea>
                    </View>
                    <View className="cu-form-group solids-top">
                        <View className="action">
                            <Text className="cuIcon-title text-blue"></Text>详细信息
                        </View>
                    </View>
                    <View className="padding-sm flex flex-wrap bg-white">
                        <Textarea maxlength="300" placeholder="请输入自己的详细信息"></Textarea>
                    </View>
                    <View class="cu-bar bg-white margin-top">
                        <View class="action">
                            图片上传
                        </View>
                        <View class="action">
                            {this.state.imgList.length}/4
                        </View>
                    </View>
                    <View className="cu-form-group">
                        <View className="grid col-4 grid-square flex-sub">
                            {
                                this.state.imgList.map((img, i) => {
                                    return (
                                        <View className="bg-img" key={i} onClick={this.viewImage(img)}>
                                            <Image src={img} mode='aspectFill'></Image>
                                            <View className="cu-tag bg-red" onClick={(event) => this.delImg(event, i)}>
                                                <Text className="cuIcon-close"></Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            {
                                this.state.imgList.length < 4 ? <View className="solids" onClick={this.chooseImage} >
                                    <Text className="cuIcon-cameraadd"></Text>
                                </View> : ''
                            }
                        </View>
                    </View>
                    <View className="padding">
                        <Button className="cu-btn block bg-green margin-tb-sm lg">提交</Button>
                        <Button className="cu-btn block line-blue margin-tb-sm lg">返回</Button>
                    </View>
                </Form>
            </View>
        )
    }
}
