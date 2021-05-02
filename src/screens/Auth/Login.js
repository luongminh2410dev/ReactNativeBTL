
import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import { fetchAcc } from '../../redux/slice/accSlice';
import AuthContext from '../../helpers/handleLogin'
import { useNavigation } from '@react-navigation/native';
const Login = (props) => {
    const navigation = useNavigation();
    const { signIn } = React.useContext(AuthContext)
    const onCheck = async (user, pass, callback) => {
        await props.dispatch(fetchAcc({ user, pass }))
        console.log(props.account)
        if (props.account.length == 0) {
            return alert("Username or password wrong!")
        }
        else {
            console.log('Success');
            callback()
        }
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

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps)(Login);