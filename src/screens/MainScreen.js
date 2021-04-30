import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import MainHeader from '../components/MainHeader'
import FlashSale from '../components/FlashSale'
import Product from '../components/Product'
import NumberFormat from 'react-number-format';
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
class MainScreen extends Component {
    render() {
        const cart_result = [...this.props.my_cart];
        return (
            <ScrollView
                style={{ flexDirection: 'column' }}
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
                            <Text style={styles.cart_text}>{cart_result.length}</Text>
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
                            fs_item={this.props.fs_item}
                        />
                        {/* List product */}
                        <Product
                            fs_item={this.props.fs_item}
                        />
                    </View>
                </View>

            </ScrollView>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        fs_item: state.fs_item,
        shop_info: state.shop_info,
        my_cart: state.my_cart,
    }
}
export default connect(mapStateToProps)(MainScreen);

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