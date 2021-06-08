const globalData = {
    StatusBar: '',
    CustomBar: '',
    Custom: '',
    userInfo: null,
}

export function setGlobalData (key, val) {
  globalData[key] = val
}

export function getGlobalData (key) {
  return globalData[key]
}
