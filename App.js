import 'react-native-gesture-handler';
import React, { useState, useMemo } from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import StackContainerHome from './src/screens/Home'
import StackContainerAuth from './src/screens/Auth'
import Authencation from './src/helpers/handleLogin'
const App = (props) => {
  const [token, setToken] = useState(null)

  const authContext = React.useMemo(
    () => ({
      signIn: () => setToken('abc')
    }),
    []
  );
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
      <Provider store={store}>
        <Authencation.Provider value={authContext}>
          <NavigationContainer>
            {token == null
              ?
              <StackContainerAuth />
              :
              <StackContainerHome />

            }
          </NavigationContainer>
        </Authencation.Provider>
      </Provider>
    </SafeAreaView>
  )
}

export default App
