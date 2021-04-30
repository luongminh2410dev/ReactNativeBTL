import React, { Component } from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Cart from './src/screens/Cart'
import Login from './src/screens/Login'
import MainScreen from './src/screens/MainScreen'
import ProductInfor from './src/screens/ProductInfor'
const defaultStore = {
  fs_item: [
    { id: 1, name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG', shopid: 0, price: 15000, origin: 'Trung Quốc', total: 10, traded: 2, progress: 0.9, url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot' },
    { id: 2, name: 'VÁY BÉ GÁI 2 LỚP DÁNG XÒE TAY 2 TẦNG SIÊU XINH XẮN BELLO LAND', shopid: 0, price: 2000000, origin: '', total: 1000, traded: 2, progress: 0.1, url: 'https://cf.shopee.vn/file/6ef0ee4fe0e94954541919d4d26cd90a_tn&quot' },
    { id: 3, name: 'Máy hút bụi cầm tay đa năng PUPPYOO A9', shopid: 1, price: 36000, origin: 'Việt Nam', total: 21, traded: 20, progress: 0, url: 'https://cf.shopee.vn/file/736853cba44dc7d26afd0e46078b9451_tn&quot' },
    { id: 4, name: 'Set 40 sticker đáng yêu nhiều mẫu mới', shopid: 2, price: 1000, origin: 'Lào', total: 300, traded: 100, progress: 0.5, url: 'https://cf.shopee.vn/file/1ba13ff64ba10e687a79847c48ef9528_tn&quot' },
    { id: 5, name: 'Phấn Nước- Cushion Che Khuyết Điểm', shopid: 2, price: 99000, origin: 'Việt Nam', total: 999, traded: 900, progress: 0.4, url: 'https://cf.shopee.vn/file/a0d0a6083a1fd0570bc795f3369b9b60_tn&quot' },
    { id: 6, name: 'Cân điện tử mini nhà bếp 5kg', shopid: 0, price: 20000, origin: 'Campuchia', total: 10, traded: 1, progress: 1, url: 'https://cf.shopee.vn/file/49007b236adc23e7e602e1e7f3a93780_tn&quot' },
    { id: 7, name: 'Giày Da Nam Cao Cấp Da Mềm Mại Da Bò Thật CHEAPSTORE CS487', shopid: 1, price: 1999000, origin: 'Trung Quốc', total: 100, traded: 56, progress: 0.1, url: 'https://cf.shopee.vn/file/1d0aa274da8569c6265103058552567c_tn&quot' },
  ],

  shop_info: [
    { shopid: 0, img: 'https://cf.shopee.vn/file/cb1cde1786e843f50fc702d049b1e298_tn', name: 'Lett12', location: 'Hà Nội', products: 379, rate: 4.2, reply: '69%' },
    { shopid: 1, img: '', name: 'Luonvuituoi', location: 'TP HCM', products: 99, rate: 5, reply: '99%' },
    { shopid: 2, img: '', name: 'Adudas', location: 'Nam Định', products: 15, rate: 2, reply: '20%' },
  ],
  my_cart: [1, 2, 6, 7]
}

const store = createStore((state = defaultStore, action) => {
  if (action.type === 'ADD_PRODUCT') {
    const id_product = action.id
    const new_cart = [...state.my_cart]
    new_cart.push(id_product)
    return { ...state, my_cart: new_cart }
  }
  if (action.type === 'REMOVE_PRODUCT') {
    const new_cart = [...state.my_cart]
    new_cart.splice(action.id, 1)
    return { ...state, my_cart: new_cart }
  }
  return state;
})

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </SafeAreaView>
    )
  }
}
