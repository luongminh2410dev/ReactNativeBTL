import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Login from './Login'
import Register from './Register'
const StackAuth = createStackNavigator()
const StackContainerAuth = () => {
    return (
        <StackAuth.Navigator>
            <StackAuth.Screen name='Login' component={Login} />
            <StackAuth.Screen name='Register' component={Register} />
        </StackAuth.Navigator>
    )
}

export default StackContainerAuth
