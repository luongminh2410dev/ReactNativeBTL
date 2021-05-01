import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import * as Progress from 'react-native-progress';
export default class FlashSaleItem extends Component {
    render() {
        const { item_fs } = this.props;
        const progress = item_fs.traded / item_fs.total;
        return (
            <View
                key={item_fs.id}
                style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: item_fs.url }}
                />
                <Text style={styles.price}>₫ {item_fs.price}</Text>
                <Progress.Bar color={'#ee4d2d'} progress={progress} width={80} >
                </Progress.Bar>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        height: 170,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 3,
        marginVertical: 6,
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 1,
    },
    image: {
        height: 120,
        width: 120,
    },
    price: {
        fontSize: 20,
        color: '#ee4d2d',
        textAlign: 'center',
        marginVertical: 8
    },
})