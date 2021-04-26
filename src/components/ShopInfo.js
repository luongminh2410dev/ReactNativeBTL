import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
export default class ShopInfo extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.shop}>
                    <View style={styles.shop_info}>
                        <View style={styles.shop_info_1}>
                            <Image
                                style={styles.shop_info_img}
                                source={{ uri: 'https://cf.shopee.vn/file/cb1cde1786e843f50fc702d049b1e298_tn' }}
                            />
                            <View style={styles.shop_info_name}>
                                <Text style={{ fontSize: 16 }}>Lett12</Text>
                                <Text style={{ fontSize: 12, marginVertical: 2, color: '#9686a1' }}>Online 6 phút trước</Text>
                                <View style={styles.shop_location}>
                                    <EvilIcons name="location" size={16} color="#000" />
                                    <Text style={{ fontSize: 12, color: '#9686a1' }}>Hà Nội</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.shop_info_btn}
                        >
                            <Text style={styles.shop_info_btn_txt}>Xem Shop</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shop_info_2}>
                        <View style={styles.shop_more_info}>
                            <Text style={styles.shop_more_info_1}>379</Text>
                            <Text style={styles.shop_more_info_2}>Sản phẩm</Text>
                        </View>
                        <View style={styles.shop_more_info}>
                            <Text style={styles.shop_more_info_1}>4.8</Text>
                            <Text style={styles.shop_more_info_2}>Đánh giá</Text>
                        </View>
                        <View style={styles.shop_more_info}>
                            <Text style={styles.shop_more_info_1}>69%</Text>
                            <Text style={styles.shop_more_info_2}>Phản hồi Chat</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.product_info}>
                    <View style={styles.fs_list_header}>
                        <Text style={styles.product_list_text}>Chi tiết sản phẩm</Text>
                    </View>
                    <View style={styles.product_info_made}>
                        <View style={styles.info_header}>
                            <Text style={styles.info_header_1}>Kho</Text>
                            <Text style={styles.info_header_2}>599</Text>
                        </View>
                        <View style={styles.info_header}>
                            <Text style={styles.info_header_1}>Xuất xứ</Text>
                            <Text style={styles.info_header_2}>Trung Quốc</Text>
                        </View>
                        <View style={styles.info_header}>
                            <Text style={styles.info_header_1}>Gửi từ</Text>
                            <Text style={styles.info_header_2}>Quận Hoàng Mai, Hà Nội</Text>
                        </View>
                    </View>
                    <View style={styles.info_main}>
                        <Text style={styles.info_main_txt}>Nước giặt đỉnh kout công nghệ Nhật Bản đánh bay mọi vết bẩn
                                Nhập khẩu trực tiếp từ Nhật, nước giặt ARIEL MATIC phù hợp với các loại máy giặt, giặt sạch vết ố. mốc, dầu mỡ chỉ sau 1 lần giặt duy nhất</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    shop: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 8,
        paddingBottom: 4
    },
    shop_info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    shop_info_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shop_info_img: {
        height: 50,
        width: 50,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 25,
    },
    shop_info_name: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 8
    },
    shop_location: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: -3
    },
    shop_info_btn: {
        borderColor: '#ee4d2d',
        borderWidth: 1,
        padding: 6,
        borderRadius: 2,
    },
    shop_info_btn_txt: {
        color: '#ee4d2d',
    },
    shop_info_2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    shop_more_info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        borderRightWidth: 0.4,
        borderRightColor: 'gray',
    },
    shop_more_info_1: {
        fontSize: 18,
        color: '#ee4d2d'
    },
    shop_more_info_2: {
        fontSize: 16,
        color: '#9686a1'
    },
    product_info: {
        marginTop: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    product_info_made: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        borderBottomWidth: 0.2,
        borderColor: 'gray'
    },
    info_header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
    },
    info_header_1: {
        width: '40%',
        color: '#9686a1',
        fontSize: 16
    },
    info_header_2: {
        fontSize: 16
    },
    info_main: {
        paddingHorizontal: 8,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info_main_txt: {
        fontSize: 14,
        color: '#9686a1'
    },
    product_list_text: {
        fontSize: 16,
    },
    fs_list_header: {
        height: 30,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 0.4,
    },
})