import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProductButton from '../../components/ProductButton'
import ProductMain from '../../components/ProductMain'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/slice/productSlide';
import { fetchShop } from '../../redux/slice/shopSlice';
import { addProduct } from '../../redux/slice/cartSlice'
class ProductInfor extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProduct()),
            this.props.dispatch(fetchShop())
    }
    // onRenderStar = (star) => {
    //     for (var index in 5) {
    //         console.log('Co')
    //         return (index <= star ?
    //             <AntDesign name="star" size={16} color="gold" style={styles.star} />
    //             :
    //             <AntDesign name="staro" size={16} color="gold" style={styles.star} />
    //         )
    //     }
    // }

    onAddProduct = (id) => {
        this.props.dispatch(addProduct(id))
    }
    render() {

        const { fs_item, shop_info, my_cart } = this.props;
        const more_product = fs_item.filter(product => {
            return product.shopid == shop_info[0].shopid
        })
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Image
                            resizeMode={'cover'}
                            style={styles.product_img}
                            source={{ uri: fs_item[0].url }}
                        />
                        <ProductMain
                            shop_info={shop_info[0]}
                            product={fs_item[0]}
                            fs_item={more_product}
                        // onRenderStar={this.onRenderStar}
                        />
                    </View>
                </ScrollView>
                <ProductButton
                    onAddProduct={this.onAddProduct}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fs_item: state.products,
        shop_info: state.shops,
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
