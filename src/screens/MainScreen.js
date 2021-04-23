import React from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SliderBox } from "react-native-image-slider-box"
import { connect } from 'react-redux'
import ItemMenu from '../components/ItemMenu'
import FlashSaleItem from '../components/FlashSaleItem'
const slide_img = [
    'https://cf.shopee.vn/file/82f410d470e9d1a4f62fd46836fe224c',
    'https://cf.shopee.vn/file/da8269c20d5e8dff851cafee7af2a4c5',
    'https://cf.shopee.vn/file/d6ba9e23455e89cad388173f7b3ecbc2',
    'https://cf.shopee.vn/file/0d6e19c282bcd87c8c2c20c3e8be7b47',
    'https://cf.shopee.vn/file/0b404244856c8a8f07da9f48387df83b',
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
    { id: 1, name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG', price: '15.000', url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot' },
    { id: 2, name: 'VÁY BÉ GÁI 2 LỚP DÁNG XÒE TAY 2 TẦNG SIÊU XINH XẮN BELLO LAND', price: '2.000.000', url: 'https://cf.shopee.vn/file/6ef0ee4fe0e94954541919d4d26cd90a_tn&quot' },
    { id: 3, name: '', price: '36.000', url: 'https://cf.shopee.vn/file/736853cba44dc7d26afd0e46078b9451_tn&quot' },
    { id: 4, name: '', price: '1.000', url: 'https://cf.shopee.vn/file/1ba13ff64ba10e687a79847c48ef9528_tn&quot' },
    { id: 5, name: '', price: '99.000', url: 'https://cf.shopee.vn/file/a0d0a6083a1fd0570bc795f3369b9b60_tn&quot' },
    { id: 6, name: '', price: '20.000', url: 'https://cf.shopee.vn/file/49007b236adc23e7e602e1e7f3a93780_tn&quot' },
    { id: 7, name: '', price: '1.999.000', url: 'https://cf.shopee.vn/file/1d0aa274da8569c6265103058552567c_tn&quot' },
]
const MainScreen = () => {
    return (
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
                <View style={styles.cart_view}>
                    <Text style={styles.cart_text}>7</Text>
                    <Ionicons name="cart-outline" size={34} color="white" />
                </View>
                <View style={styles.cart_view}>
                    <Text style={styles.message_text}>7</Text>
                    <AntDesign name="message1" size={28} color="white" />
                </View>
            </View>


            <SliderBox
                images={slide_img}
                sliderBoxHeight={180}
                dotColor={'#ee4d2d'}
                imageLoadingColor={'white'}
                resizeMode={'stretch'}
                autoplay={true}
                circleLoop={true}
            />
            {/* Menu */}
            <FlatList
                style={styles.flat_list}
                numColumns={5}
                data={menu_item}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <ItemMenu
                        item_menu={item}
                    />
                )}
            />


            {/* Flash Sale */}
            <View style={styles.fs_list}>
                <View style={styles.fs_list_header}>
                    <Image
                        style={styles.fs_list_img}
                        source={{
                            uri: 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png',
                        }}
                    />
                    <TouchableOpacity
                    >
                        <Text style={styles.fs_list_btn}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.flat_list_2}
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={fs_item}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <FlashSaleItem
                            item_fs={item}
                        />
                    )}
                />
            </View>
        </View>
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

    // Header slide image
    // Menu
    flat_list: {
        height: 300
    },

    // Flash Sale
    fs_list: {
        flexDirection: 'column',
        marginTop: -170,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },

    fs_list_header: {
        height: 30,
        paddingTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 0.4,
    },
    fs_list_img: {
        height: 24,
        width: 80,
        resizeMode: 'stretch',
    },
    fs_list_btn: {
        color: '#ee4d2d',
    },
    flat_list_2: {
        height: 300,
    },
})