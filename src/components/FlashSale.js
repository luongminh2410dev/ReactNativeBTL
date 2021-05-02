import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import FlashSaleItem from './FlashSaleItem'
export default class FlashSale extends Component {
    render() {
        const { fs_item } = this.props
        return (
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
                    style={styles.flat_list2}
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={fs_item}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <FlashSaleItem
                            onMoveProduct={this.props.onMoveProduct}
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
        marginTop: -120,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 10,
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
    flat_list2: {
        height: 190,
        marginBottom: 0,
        paddingBottom: 0,
    },
})