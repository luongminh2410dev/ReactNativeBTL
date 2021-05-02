import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ProductItem from './ProductItem'
export default class Product extends Component {
    render() {
        const { fs_item, onMoveProduct } = this.props;
        return (
            <View styles={styles.product_list}>
                <View style={styles.product_list_header}>
                    <Text style={styles.product_list_text}>GỢI Ý HÔM NAY</Text>
                </View>
                <FlatList
                    style={styles.flat_list3}
                    numColumns={2}
                    data={fs_item}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <ProductItem
                            onMoveProduct={onMoveProduct}
                            item_fs={item}
                        />
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    product_list: {
        flexDirection: 'column'
    },
    product_list_header: {
        height: 40,
        paddingTop: 4,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 2
    },
    product_list_text: {
        color: '#ee4d2d',
        fontSize: 16,
        fontWeight: '600',
    },
    flat_list3: {
        marginBottom: 0,
        paddingBottom: 0,
        paddingHorizontal: 3,
    },
})