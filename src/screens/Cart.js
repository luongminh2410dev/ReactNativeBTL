import React from 'react'
import { View, useWindowDimensions, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CartItem from '../components/CartItem';
const cart_item = [
    { id: 1, name: 'ARIEL MATIC NƯỚC GIẶT TÚI 3.5KG/3.2KG', shop_name: 'MINA Official Store', price: '15.000', url: 'https://cf.shopee.vn/file/bb7dc00839c48880405200d1ac03e05e_tn&quot' },
    { id: 2, name: 'VÁY BÉ GÁI 2 LỚP DÁNG XÒE TAY 2 TẦNG SIÊU XINH XẮN BELLO LAND', shop_name: 'Bitis Store', price: '2.000.000', progress: 0.1, url: 'https://cf.shopee.vn/file/6ef0ee4fe0e94954541919d4d26cd90a_tn&quot' },
    { id: 3, name: 'Máy hút bụi cầm tay đa năng PUPPYOO A9', shop_name: 'Luonvuituoi', price: '36.000', url: 'https://cf.shopee.vn/file/736853cba44dc7d26afd0e46078b9451_tn&quot' },
    { id: 4, name: 'Set 40 sticker đáng yêu nhiều mẫu mới', shop_name: 'Shop vặt', price: '1.000', url: 'https://cf.shopee.vn/file/1ba13ff64ba10e687a79847c48ef9528_tn&quot' },
    { id: 5, name: 'Phấn Nước- Cushion Che Khuyết Điểm', shop_name: 'phuong.tran.520', price: '99.000', url: 'https://cf.shopee.vn/file/a0d0a6083a1fd0570bc795f3369b9b60_tn&quot' },
    { id: 6, name: 'Cân điện tử mini nhà bếp 5kg', shop_name: 'jobashop', price: '20.000', url: 'https://cf.shopee.vn/file/49007b236adc23e7e602e1e7f3a93780_tn&quot' },
    { id: 7, name: 'Giày Da Nam Cao Cấp Da Mềm Mại Da Bò Thật CHEAPSTORE CS487', shop_name: 'menaz.vn', price: '1.999.000', url: 'https://cf.shopee.vn/file/1d0aa274da8569c6265103058552567c_tn&quot' },
]
const FirstRoute = () => (
    <View style={{ flex: 1, flexDirection: 'column' }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FlatList
                        data={cart_item}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <CartItem
                                cart_item={item}
                            />
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    </View>
);
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
);

export default function TabViewExample() {
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
        // backgroundColor: 'white'
    }
})