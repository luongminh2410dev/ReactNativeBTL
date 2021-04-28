import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProductButton from '../components/ProductButton'
import ProductMain from '../components/ProductMain'
const product = {
    id: 1,
    name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG',
    price: '15.000',
    traded: 2,
    progress: 0.9,
    url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot',
    decription: 'Hàng giả, hàng kém chất lượng',
    rate: 4,
}
const fs_item = [
    { id: 1, name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG', price: '15.000', traded: 2, progress: 0.9, url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot' },
    { id: 2, name: 'VÁY BÉ GÁI 2 LỚP DÁNG XÒE TAY 2 TẦNG SIÊU XINH XẮN BELLO LAND', price: '2.000.000', traded: 2, progress: 0.1, url: 'https://cf.shopee.vn/file/6ef0ee4fe0e94954541919d4d26cd90a_tn&quot' },
    { id: 3, name: 'A', price: '36.000', traded: 20, progress: 0, url: 'https://cf.shopee.vn/file/736853cba44dc7d26afd0e46078b9451_tn&quot' },
    { id: 4, name: 'B', price: '1.000', traded: 100, progress: 0.5, url: 'https://cf.shopee.vn/file/1ba13ff64ba10e687a79847c48ef9528_tn&quot' },
    { id: 5, name: 'C', price: '99.000', traded: 900, progress: 0.4, url: 'https://cf.shopee.vn/file/a0d0a6083a1fd0570bc795f3369b9b60_tn&quot' },
    { id: 6, name: 'D', price: '20.000', traded: 1, progress: 1, url: 'https://cf.shopee.vn/file/49007b236adc23e7e602e1e7f3a93780_tn&quot' },
    { id: 7, name: 'E', price: '1.999.000', traded: 56, progress: 0.1, url: 'https://cf.shopee.vn/file/1d0aa274da8569c6265103058552567c_tn&quot' },
]
export default class ProductInfor extends Component {
    renderStar = (star) => {
        var rate
        for (var index in 5) {
            rate += index <= star ?
                <AntDesign name="star" size={16} color="gold" style={styles.star} />
                :
                <AntDesign name="staro" size={16} color="gold" style={styles.star} />
        }
        return rate
    }

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Image
                            resizeMode={'cover'}
                            style={styles.product_img}
                            source={{ uri: product.url }}
                        />
                        <ProductMain
                            product={product}
                            fs_item={fs_item}
                        />
                    </View>
                </ScrollView>
                <ProductButton />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eeeeee'
    },
    product_img: {
        width: '100%',
        height: 250,
    },
})
