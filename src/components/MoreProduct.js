import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import FlashSaleItem from './FlashSaleItem';
export default class MoreProduct extends Component {
    render() {
        const { fs_item } = this.props;
        return (
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
        )
    }
}
const styles = StyleSheet.create({
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