import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PropTypes from 'prop-types';
export default class CartItem extends Component {
    shouldComponentUpdate(newProps, newState) {
        // if (newProps.fs_item === this.props.fs_item && newProps.shop_name === this.props.shop_name, newProps.index === this.props.index) {
        if (newState.count !== this.state.count && newState.checked === this.state.checked) {
            return true;
        }
        else {
            return false;

        }
    }
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            checked: false,
        };
    }
    Increase = () => {
        this.setState({ count: this.state.count + 1 });
    }
    Decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }


    render() {
        const { fs_item, shop_name, onSetPrice, onRemoveProduct } = this.props;
        const price = this.state.count * fs_item.price;
        const setChecked = async () => {
            await this.setState({ checked: !this.state.checked });
            onSetPrice(this.state.checked, price);
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_1}>
                        <CheckBox
                            disabled={false}
                            onCheckColor={'#ee4d2d'}
                            tintColor={'#ee4d2d', 'white'}
                            value={this.state.checked}
                            onValueChange={() => setChecked()}
                        />
                        <MaterialIcons name="storefront" size={28} color="#000" />
                        <Text style={styles.shop_name}>{shop_name}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => onRemoveProduct(fs_item.id)}
                        style={styles.header_2}
                    >
                        <Text style={styles.header_2_txt}>Xóa</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <CheckBox
                        disabled={false}
                        onCheckColor={'#ee4d2d'}
                        tintColor={'#ee4d2d', 'white'}
                    />
                    <Image
                        style={styles.main_img}
                        source={{ uri: fs_item.url }}
                    />
                    <View style={styles.main_info}>
                        <Text style={styles.name_product} >{fs_item.name}</Text>
                        <View style={styles.main_info_sort}>
                            <Text style={styles.main_info_sort_txt}>Phân loại: Đen</Text>
                        </View>
                        <Text style={styles.price}>₫ {fs_item.price}</Text>
                        <View style={styles.main_amount}>
                            <TouchableOpacity
                                style={styles.amount_btn}
                                onPress={this.Decrease}
                            >
                                <AntDesign name="minus" size={20} color="#000" />
                            </TouchableOpacity>
                            <View style={styles.count}>
                                <Text>{this.state.count}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.amount_btn}
                                onPress={this.Increase}
                            >
                                <AntDesign name="plus" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        marginTop: 8,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        paddingHorizontal: 8,

        borderColor: 'gray',
        justifyContent: 'space-between'
    },
    header_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shop_name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    header_2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_2_txt: {
        fontSize: 16,
        color: 'gray',
    },
    main: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 8,
        paddingVertical: 8
    },
    main_img: {
        height: 100,
        width: 100,
        marginVertical: 8
    },
    main_info: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        marginHorizontal: 8,
    },
    name_product: {
        width: '100%',
        fontSize: 16,
        height: 22,
        overflow: 'hidden'
    },
    main_info_sort: {
        marginVertical: 8,
        backgroundColor: '#f5f5f5',
        padding: 2,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ee4d2d',
        textAlign: 'left'
    },
    main_amount: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',  
        width: 90,
        borderWidth: 0.3,
        borderColor: 'gray',
        marginVertical: 8
    },
    amount_btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    count: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 0.3,
        borderRightWidth: 0.3,
        borderColor: 'gray'
    }
})

