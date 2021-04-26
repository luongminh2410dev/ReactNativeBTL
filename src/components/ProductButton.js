import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class ProductButton extends Component {
    render() {
        return (
            <View style={styles.btn_footer}>
                <View style={styles.btn_footer_1}>
                    <TouchableOpacity style={styles.btn_message}>
                        <AntDesign name="message1" size={26} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_add}>
                        <MaterialCommunityIcons name="cart-arrow-down" size={26} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn_buy_now}>
                    <Text style={styles.btn_buy_now_txt} >Mua ngay</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    // Footer btn
    btn_footer: {
        width: '100%',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn_footer_1: {
        flexDirection: 'row',
        flex: 1,
        height: '100%'
    },
    btn_message: {
        flex: 1,
        backgroundColor: '#21a998',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.2
    },
    btn_add: {
        flex: 1,
        backgroundColor: '#21a998',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_buy_now: {
        flex: 1,
        height: '100%',
        backgroundColor: '#ee4d2d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_buy_now_txt: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    }
})

