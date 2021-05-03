import React from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import ProductButton from '../../components/ProductButton'
import ProductMain from '../../components/ProductMain'
import { addProduct } from '../../redux/slice/cartSlice'
const ProductInfor = (props) => {
    onAddProduct = (id) => {
        props.dispatch(addProduct(id))
    }
    const { id, fs_item, shop_info } = props.route.params;
    const currentProduct = fs_item.find(product => {
        return product.id === id;
    })
    // Cac san pham khac cua shop 
    const more_product = fs_item.filter(product => {
        return product.shopid == currentProduct.shopid
    })
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        resizeMode={'cover'}
                        style={styles.product_img}
                        source={{ uri: currentProduct.url }}
                    />
                    <ProductMain
                        shop_info={shop_info[currentProduct.shopid]}
                        product={currentProduct}
                        fs_item={more_product}
                    // onRenderStar={this.onRenderStar}
                    />
                </View>
            </ScrollView>
            <ProductButton
                id={id}
                onAddProduct={onAddProduct}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        my_cart: state.carts,
    }
}
export default connect(mapStateToProps)(ProductInfor);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eeeeee'
    },
    product_img: {
        width: '100%',
        height: 250,
    },
    star: {
        flexDirection: 'row'
    },
})
