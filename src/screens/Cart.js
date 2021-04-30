import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import CartMain from '../components/CartMain'
class Cart extends Component {
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
        this.props.dispatch({ type: 'REMOVE_PRODUCT', id });
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
        fs_item: state.fs_item,
        shop_info: state.shop_info,
        my_cart: state.my_cart,
    }
}
export default connect(mapStateToProps)(Cart);
