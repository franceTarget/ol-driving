import Taro, { showLoading } from '@tarojs/taro'
import { SUCCESS, HOST } from '../constants'


/**
 * 声明请求对象
 */
let requestParam = {
    params: {},
    showLoading: false,
    loadingMsg: '',
    success: function (res) {

    },
    fail: function () {

    },
    complete: function () {

    }
}

function baseOptions(method = 'GET', requestParam) {

    if (requestParam.showLoading) {
        showLoadingMsg(requestParam.loadingMsg)
    }
    let { url, data } = requestParam.params
    Taro.request({
        isShowLoading: false,
        loadingText: '正在加载',
        url: HOST + url,
        data: data,
        method: method,
        header: { 'content-type': 'application/json' },
        success(res) {
            if (res.data.code !== SUCCESS) {
                showExcepitonMsg(res.data.msg || '服务异常')
            }
            requestParam.success(res.data)
        },
        fail() {
            showErrorMsg('网络异常')
            requestParam.fail()
        },
        complete() {
            if (requestParam.showLoading) {
                Taro.hideLoading()
            }
            requestParam.complete()
        }
    })
}

function showErrorMsg(msg) {
    Taro.showToast({
        title: msg,
        icon: 'error',
        duration: 2000
    })
}

function showLoadingMsg(msg) {
    Taro.showLoading({
        title: msg,
      })
}

function showExcepitonMsg(msg) {
    Taro.showToast({
        title: msg,
        duration: 2000
    })
}

export const GET = (requestParam) => {
    baseOptions('GET', requestParam)
}

export const POST = (requestParam) => {
    baseOptions('POST', requestParam)
}



