
import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import AuthContext from '../../helpers/handleLogin'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Login = (props) => {
    const navigation = useNavigation();
    const { signIn } = React.useContext(AuthContext)

    const onCheck = (user, pass, callback) => {
        auth().signInWithEmailAndPassword(user, pass)
            .then(() => {
                callback();
            })
            .catch(error => {
                alert('Username or password is wrong!');
            });
    }
    const onRegist = () => navigation.navigate('Register')
    return (
        <LoginForm
            onRegist={onRegist}
            signIn={signIn}
            onCheck={onCheck}
        />
    )

}

export default Login;