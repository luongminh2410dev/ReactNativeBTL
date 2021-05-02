import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import CartMain from '../../components/CartMain'
import { removeProduct } from '../../redux/slice/cartSlice';
import { fetchProduct } from '../../redux/slice/productSlide';
import { fetchShop } from '../../redux/slice/shopSlice';
class Cart extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProduct()),
            this.props.dispatch(fetchShop())
    }
    constructor(props) {
        super(props);
        this.state = {
            total: 10,
        }
    }
    onSetPrice = (newValue, price) => {
        if (newValue) {
            this.setState({ total: this.state.total + price })
        }
        else {
            this.setState({ total: this.state.total - price })
        }
    }
    onRemoveProduct = (id) => {
        this.props.dispatch(removeProduct(id));
    }
    render() {
        console.log('Render Cart')
        const cart_product = this.props.fs_item.filter(product => {
            return product.id == this.props.my_cart.find(item => {
                return item === product.id
            })
        })
        return (
            <CartMain
                onSetPrice={this.onSetPrice}
                onRemoveProduct={this.onRemoveProduct}
                total={this.state.total}
                fs_item={cart_product}
                shop_info={this.props.shop_info}
            />
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
export default connect(mapStateToProps)(Cart);
