import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
    static propTypes = {
        item_fs: PropTypes.object,
    }
    static defaultProps = {
        item_fs: []
    }
    render() {
        const { item_fs } = this.props;
        return (
            <View
                key={item_fs.id}
                style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: item_fs.url }}
                />
                <Text style={styles.text}>{item_fs.name}</Text>
                <View style={styles.footer_product}>
                    <Text style={styles.price}>₫ {item_fs.price}</Text>
                    <Text style={styles.traded}>Đã bán {item_fs.traded}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
        marginVertical: 3,
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 1,
    },
    image: {
        height: 150,
        width: 170,
    },
    text: {
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: '300',
        paddingHorizontal: 4,
        marginTop: 2
    },
    footer_product: {
        height: 10,
        width: 170,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    price: {
        fontSize: 18,
        color: '#ee4d2d',
        textAlign: 'center',
    },
    traded: {
        fontSize: 12,
        color: '#898989',
        textAlign: 'center',
    }
})