import Taro from '@tarojs/taro';
const systemInfo = Taro.getSystemInfoSync();
const width = systemInfo.windowWidth;
export default function Info() {
    return {
        width: `${width - 21}px`,
        height: '1000px',
        background: '#fff',
        views: [
            {
                "type": "qrcode",
                "content": "哈哈哈",
                "css": {
                    "color": "#000000",
                    "background": "#ffffff",
                    "width": "50px",
                    "height": "50px",
                    "top": "379px",
                    "left": "1px",
                    "rotate": "0",
                    "borderRadius": "10px"
                }
            },
            {
                "type": "image",
                "url": "http://img.wxcha.com/file/201810/23/5e623a6c2f.jpeg",
                "css": {
                    "width": "100px",
                    "height": "100px",
                    "top": "413px",
                    "left": "172px",
                    "rotate": "0",
                    "borderRadius": "50px",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 10 #888888",
                    "mode": "scaleToFill"
                }
            },
            {
                "type": "image",
                "url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/09/ChMkJlauze2IPKICABzBh_ueXY0AAH9JAMQ2qUAHMGf334.jpg",
                "css": {
                    "width": "300px",
                    "height": "100px",
                    "top": "0px",
                    "left": "0px",
                    "rotate": "0",
                    "borderRadius": "10px",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 10 #888888",
                    "mode": "scaleToFill"
                }
            },
            {
                "type": "text",
                "text": "Do not fall in love with people like me",
                "css": {
                    "color": "#f5f5f5",
                    "background": "",
                    "width": "300px",
                    "height": "10px",
                    "top": "69px",
                    "left": "0px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "",
                    "padding": "0px",
                    "fontSize": "18px",
                    "fontWeight": "normal",
                    "maxLines": "4",
                    "lineHeight": "23.976000000000003px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": "粒粒皆辛苦",
                "css": {
                    "color": "#ff0000",
                    "background": "",
                    "width": "10px",
                    "height": "219.17999999999995px",
                    "top": "361px",
                    "left": "50px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 5 #888888",
                    "padding": "0px",
                    "fontSize": "10px",
                    "fontWeight": "normal",
                    "maxLines": "6",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": "谁知盘中餐",
                "css": {
                    "color": "#ff0000",
                    "background": "",
                    "width": "10px",
                    "height": "219.17999999999995px",
                    "top": "361px",
                    "left": "60px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 5 #888888",
                    "padding": "0px",
                    "fontSize": "10px",
                    "fontWeight": "normal",
                    "maxLines": "6",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": "汗滴禾下土",
                "css": {
                    "color": "#ff0000",
                    "background": "",
                    "width": "10px",
                    "height": "219.17999999999995px",
                    "top": "361px",
                    "left": "70px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 5 #888888",
                    "padding": "0px",
                    "fontSize": "10px",
                    "fontWeight": "normal",
                    "maxLines": "6",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": "锄禾日当午",
                "css": {
                    "color": "#ff0000",
                    "background": "",
                    "width": "10px",
                    "height": "219.17999999999995px",
                    "top": "361px",
                    "left": "80px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "10 10 5 #888888",
                    "padding": "0px",
                    "fontSize": "10px",
                    "fontWeight": "normal",
                    "maxLines": "6",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            },
            {
                "type": "text",
                "text": "玲小一",
                "css": {
                    "color": "#000000",
                    "background": "rgba(0,0,0,0)",
                    "width": "200px",
                    "height": "42.89999999999999px",
                    "top": "720px",
                    "left": "279px",
                    "rotate": "0",
                    "borderRadius": "",
                    "borderWidth": "",
                    "borderColor": "#000000",
                    "shadow": "3 3 5 #888888",
                    "padding": "0px",
                    "fontSize": "30px",
                    "fontWeight": "normal",
                    "maxLines": "2",
                    "lineHeight": "43.290000000000006px",
                    "textStyle": "fill",
                    "textDecoration": "none",
                    "fontFamily": "",
                    "textAlign": "left"
                }
            }
        ]
    };

}
