import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FlashSaleItem from './FlashSaleItem';

export default class ProductMain extends Component {
    render() {
        const { product, fs_item, shop_info } = this.props;
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.header}>
                    <Text style={styles.product_title}>
                        <View style={styles.lovely}>
                            <Text style={styles.lovely_txt}>Yêu thích</Text>
                        </View> {product.name}
                    </Text>

                    <View style={styles.price_rate}>
                        <Text style={styles.price}>₫ {product.price}</Text>
                        <View style={styles.rate}>
                            <View style={styles.star}>
                                <AntDesign name="star" size={16} color="gold" style={styles.star} />
                                <AntDesign name="star" size={16} color="gold" style={styles.star} />
                                <AntDesign name="star" size={16} color="gold" style={styles.star} />
                                <AntDesign name="star" size={16} color="gold" style={styles.star} />
                                <AntDesign name="staro" size={16} color="gold" style={styles.star} />
                                {/* {() => this.props.onRenderStar(4)} */}
                            </View>
                            <Text style={styles.rate_txt}>{product.rate}</Text>
                            <Text style={styles.rate_txt}> Đã bán {product.traded}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.shop}>
                    <View style={styles.shop_info}>
                        <View style={styles.shop_info_1}>
                            <Image
                                style={styles.shop_info_img}
                                source={{ uri: shop_info.img }}
                            />
                            <View style={styles.shop_info_name}>
                                <Text style={{ fontSize: 16 }}>{shop_info.name}</Text>
                                <Text style={{ fontSize: 12, marginVertical: 2, color: '#9686a1' }}>Online 6 phút trước</Text>
                                <View style={styles.shop_location}>
                                    <EvilIcons name="location" size={16} color="#000" />
                                    <Text style={{ fontSize: 12, color: '#9686a1' }}>{shop_info.location}</Text>
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
                            <Text style={styles.shop_more_info_1}>{shop_info.products}</Text>
                            <Text style={styles.shop_more_info_2}>Sản phẩm</Text>
                        </View>
                        <View style={styles.shop_more_info}>
                            <Text style={styles.shop_more_info_1}>{shop_info.rate}</Text>
                            <Text style={styles.shop_more_info_2}>Đánh giá</Text>
                        </View>
                        <View style={styles.shop_more_info}>
                            <Text style={styles.shop_more_info_1}>{shop_info.reply}</Text>
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
                <View style={styles.fs_list}>
                    <View style={styles.fs_list_header}>
                        <Text style={styles.product_list_text}>Các sản phẩm khác của Shop</Text>
                        <TouchableOpacity
                        >
                            <Text style={styles.fs_list_btn}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={styles.flat_list2}
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
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    product_title: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 6,
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'left'
    },
    lovely: {
        backgroundColor: '#ee4d2d',
        borderRadius: 2,
        paddingHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lovely_txt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    price_rate: {
        width: '100%',
        flexDirection: 'column',
    },
    price: {
        fontSize: 20,
        color: '#ee4d2d',
        textAlign: 'left',
    },
    rate: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 24,
    },
    star: {
        flexDirection: 'row'
    },
    rate_txt: {
        marginHorizontal: 8,
        fontSize: 14
    },
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
    fs_list: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: 8
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
    fs_list_img: {
        height: 24,
        width: 80,
        resizeMode: 'stretch',
    },
    fs_list_btn: {
        color: '#ee4d2d',
    },
})