export default {
    pages: [
        "pages/copilot/index",
        "pages/crossfire/index",
        "pages/crossfire/detail/index",
        "pages/home/index",
        "pages/home/personal/index",
        "pages/home/brief/index",
        "pages/home/feedback/index"
      ],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#2F4F4F",
        navigationBarTitleText: "在线开车",
        navigationBarTextStyle: "white",
        enablePullDownRefresh: true,
        navigationStyle: 'custom'
      },
      tabBar: {
        color: "#333",
        selectedColor: "#f03d37",
        backgroundColor: "#fff",
        // borderStyle: "black",
        list: [
          {
            pagePath: "pages/copilot/index",
            text: "副驾",
            iconPath: "./assets/imgs/xie_1.png",
            selectedIconPath: "./assets/imgs/feiji_1.png"
          },
          {
            pagePath: "pages/crossfire/index",
            text: "交火",
            iconPath: "./assets/imgs/chonglang_1.png",
            selectedIconPath: "./assets/imgs/shejian_1.png"
          },
          {
            pagePath: "pages/home/index",
            text: "我的",
            iconPath: "./assets/imgs/home_1_2_1.png",
            selectedIconPath: "./assets/imgs/home_2_1.png"
          }
        ]
      }
}