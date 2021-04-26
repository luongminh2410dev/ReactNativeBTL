import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import ItemMenu from '../components/ItemMenu'
import MainHeader from '../components/MainHeader'
import FlashSale from '../components/FlashSale'
import Product from '../components/Product'
const slide_img = [
    'https://shopee.vn/affiliate/wp-content/uploads/2020/04/1200x628.jpg',
    'https://cf.shopee.vn/file/db967f3d3c48290131a6b4835c45817e',
    'https://mb.com.ph/wp-content/uploads/2021/02/3.3-4.4-PR-KV.jpg',
    'hhttps://i.pinimg.com/originals/c9/a3/e0/c9a3e0b928a26a3ac18cb441ddfe047e.jpg',
    'https://chanhtuoi.vn1.vdrive.vn/uploads/2020/02/freeship-extra-shopee-1582086098.png',
]
const menu_item = [
    { id: 1, name: 'Khung giờ săn sale', url: 'https://cf.shopee.vn/file/e147155a22672fb7196505dccbe2bd6f_xhdpi&quot' },
    { id: 2, name: 'Gì cũng rẻ - Từ 1K', url: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi&quot' },
    { id: 3, name: 'Nạp thẻ, Dịch vụ & Phim', url: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi&quot' },
    { id: 4, name: 'Freeship Xtra', url: 'https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi&quot' },
    { id: 5, name: 'Tech Zone - Siêu Thị Điện Tử', url: 'https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi&quot' },
    { id: 6, name: 'Hàng Quốc Tế', url: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi&quot' },
    { id: 7, name: 'Ưu Đãi Thành Viên - Tới 50%', url: 'https://cf.shopee.vn/file/419b9d5849452e616732a863559e322c_xhdpi&quot' },
    { id: 8, name: 'Hoàn Xu Xtra', url: 'https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi&quot' },
    { id: 9, name: 'Hàng Hiệu -50%', url: 'https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi&quot' },
    { id: 10, name: 'Shopee Premium', url: 'https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi&quot' },
]
const fs_item = [
    { id: 1, name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG', price: '15.000', traded: 2, progress: 0.9, url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot' },
    { id: 2, name: 'VÁY BÉ GÁI 2 LỚP DÁNG XÒE TAY 2 TẦNG SIÊU XINH XẮN BELLO LAND', price: '2.000.000', traded: 2, progress: 0.1, url: 'https://cf.shopee.vn/file/6ef0ee4fe0e94954541919d4d26cd90a_tn&quot' },
    { id: 3, name: 'A', price: '36.000', traded: 20, progress: 0, url: 'https://cf.shopee.vn/file/736853cba44dc7d26afd0e46078b9451_tn&quot' },
    { id: 4, name: 'B', price: '1.000', traded: 100, progress: 0.5, url: 'https://cf.shopee.vn/file/1ba13ff64ba10e687a79847c48ef9528_tn&quot' },
    { id: 5, name: 'C', price: '99.000', traded: 900, progress: 0.4, url: 'https://cf.shopee.vn/file/a0d0a6083a1fd0570bc795f3369b9b60_tn&quot' },
    { id: 6, name: 'D', price: '20.000', traded: 1, progress: 1, url: 'https://cf.shopee.vn/file/49007b236adc23e7e602e1e7f3a93780_tn&quot' },
    { id: 7, name: 'E', price: '1.999.000', traded: 56, progress: 0.1, url: 'https://cf.shopee.vn/file/1d0aa274da8569c6265103058552567c_tn&quot' },
]
const MainScreen = () => {
    return (
        <ScrollView
            style={{ flexDirection: 'column' }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>

                {/* Header search */}
                <View style={styles.header_search}>
                    <View style={styles.searchSection}>
                        <AntDesign style={styles.searchIcon} name="search1" size={20} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder="Find something..."
                            underlineColorAndroid="transparent"
                            editable={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.cart_view}>
                        <Text style={styles.cart_text}>7</Text>
                        <Ionicons name="cart-outline" size={34} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cart_view}>
                        <Text style={styles.message_text}>7</Text>
                        <AntDesign name="message1" size={28} color="white" />
                    </TouchableOpacity>
                </View>

                <MainHeader
                    slide_img={slide_img}
                    menu_item={menu_item}

                />
                <View style={styles.list_container}>
                    {/* Flash Sale */}
                    <FlashSale
                        fs_item={fs_item}
                    />
                    {/* List product */}
                    <Product
                        fs_item={fs_item}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    // Header search
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ee4d2d',
    },
    header_search: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderRadius: 2,

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        width: 250,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    cart_view: {
        flexDirection: 'column',
        position: 'relative',
        marginHorizontal: 5,
    },
    cart_text: {
        position: 'absolute',
        top: -5,
        right: -5,
        borderWidth: 1,
        borderRadius: 300,
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderColor: 'white',
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee4d2d',
        zIndex: 1,
    },
    message_text: {
        position: 'absolute',
        top: -9,
        right: -5,
        borderWidth: 1,
        borderRadius: 300,
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderColor: 'white',
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee4d2d',
        zIndex: 1,
    },

    list_container: {
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
    },
})