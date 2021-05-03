import React from 'react'
import { View, useWindowDimensions, ScrollView, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CartItem from '../components/CartItem';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function TabViewExample(props) {
    const FirstRoute = () => (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView
                style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <FlatList
                            data={props.fs_item}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <CartItem
                                        onRemoveProduct={props.onRemoveProduct}
                                        onSetPrice={props.onSetPrice}
                                        fs_item={item}
                                        shop_name={props.shop_info[item.shopid].name}
                                    />
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer_buy}>
                <View style={styles.footer_voucher}>
                    <View style={styles.footer_voucher_1}>
                        <MaterialCommunityIcons name="ticket-percent-outline" size={28} color="#ee4d2d" />
                        <Text style={styles.footer_voucher_title}>Shopee Voucher</Text>
                    </View>
                    <View style={styles.footer_voucher_2}>
                        <TouchableOpacity>
                            <Text style={styles.footer_voucher_btn}>Chọn hoặc nhập mã</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer_pay}>
                    <View style={styles.footer_pay_select_all}>
                        <CheckBox
                            disabled={false}
                            onCheckColor={'#ee4d2d'}
                            tintColor={'#ee4d2d', 'white'}
                        />
                        <Text style={styles.footer_pay_select_txt}>Tất cả</Text>
                    </View>
                    <View style={styles.footer_total_pay}>
                        <View style={styles.footer_total_pay_1}>
                            <View style={styles.footer_total_1_1}>
                                <Text style={styles.total_txt}>Tổng tiền:</Text>
                                <Text style={styles.totalprice_txt}> ₫ {props.total}</Text>
                            </View>
                            <Text style={styles.give_coin}>Nhận 0 xu</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.footer_pay_btn}
                        >
                            <Text style={styles.footer_pay_btn_txt}>Mua hàng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );
    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    );

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tất cả' },
        { key: 'second', title: 'Giảm giá' },
        { key: 'third', title: 'Mua lần nữa' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });
    const renderTabBar = props => (
        <TabBar
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>
                    {route.title}
                </Text>
            )}
            {...props}
            indicatorStyle={{ backgroundColor: '#ee4d2d' }}
            style={{ backgroundColor: 'white' }}
        />
    );
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#eeeeee'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
    },
    footer_buy: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_voucher: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 0.2,
        borderColor: 'gray'
    },
    footer_voucher_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_voucher_title: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 4
    },
    footer_voucher_2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_voucher_btn: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
    },
    footer_pay: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    },
    footer_pay_select_all: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    footer_pay_select_txt: {
        fontSize: 16,
        textAlign: 'center'
    },
    footer_total_pay: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_total_pay_1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    footer_total_1_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    total_txt: {
        fontSize: 16,
        textAlign: 'center'
    },
    totalprice_txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ee4d2d',
        textAlign: 'center'
    },
    give_coin: {
        fontSize: 14,
        textAlign: 'center',
        color: '#f9c862'
    },
    footer_pay_btn: {
        width: 130,
        height: '100%',
        backgroundColor: '#ee4d2d',
        justifyContent: 'center'
    },
    footer_pay_btn_txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})