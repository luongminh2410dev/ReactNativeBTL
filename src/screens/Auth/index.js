import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Login from './Login'
const StackAuth = createStackNavigator()
const StackContainerAuth = () => {
    return (
        <StackAuth.Navigator headerMode='none'>
            <StackAuth.Screen name='Login' component={Login} />
        </StackAuth.Navigator>
    )
}

export default StackContainerAuth
