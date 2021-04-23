import React, { Component } from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Login from './src/screens/Login'
import MainScreen from './src/screens/MainScreen'

const defaultStore = {
  card_item: 0,
  message_item: 0,
  slide_img: [
    { id: 1, url: 'https://shopee.vn/m/khung-gio-san-sale' },
    { id: 2, url: 'https://shopee.vn/larocheposay' },
    { id: 3, url: 'https://shopee.vn/m/5-5-sale-chao-he' },
    { id: 4, url: 'https://shopee.vn/m/sieu-sale-nganh-hang' },
    { id: 5, url: 'https://shopee.vn/m/cuc-pham-cong-nghe' },
  ],
}

const store = createStore((state = defaultStore, action) => {
  return state;
})

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    )
  }
}
