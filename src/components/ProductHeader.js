import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class ProductHeader extends Component {
    render() {
        const { product } = this.props
        return (
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
                            <AntDesign name="star" size={16} color="gold" style={styles.star} />
                        </View>
                        <Text style={styles.rate_txt}>{product.rate}</Text>
                        <Text style={styles.rate_txt}> Đã bán {product.traded}</Text>
                    </View>
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


})