import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class ItemMenu extends Component {
    render() {
        const { item_menu } = this.props;
        return (
            <View
                key={item_menu.id}
                style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: item_menu.url }}
                />
                <Text style={styles.text}>{item_menu.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 2
    },
    text: {
        height: 35,
        width: 50,
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    }
})