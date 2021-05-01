import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Cart from './Cart'
import MainScreen from './MainScreen'
import ProductInfor from './ProductInfor'

const StackHome = createStackNavigator()

const StackContainerHome = () => {
    return (
        <StackHome.Navigator headerMode='none'>
            <StackHome.Screen name='Home' component={MainScreen} />
            <StackHome.Screen name='Product' component={ProductInfor} />
            <StackHome.Screen name='Cart' component={Cart} />
        </StackHome.Navigator>
    )
}

export default StackContainerHome
