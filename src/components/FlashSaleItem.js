import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class FlashSaleItem extends Component {
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
                <Text style={styles.price}>{item_fs.price}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        height: 180,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderWidth: 0.4,
        borderRadius: 2
    },
    image: {
        height: 120,
        width: 120,
    },
    price: {
        fontSize: 20,
        color: '#ee4d2d',
        textAlign: 'center'
    }
})