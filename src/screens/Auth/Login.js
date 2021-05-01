
import React from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import { fetchAcc } from '../../redux/slice/accSlice';
import AuthContext from '../../helpers/handleLogin'
const Login = () => {
    const { signIn } = React.useContext(AuthContext)
    onCheck = async (user, pass, callback) => {
        await this.props.dispatch(fetchAcc({ user, pass }))
        if (this.props.account.length == 0) {
            return alert("Username or password wrong!")
        }
        else {
            console.log('Success')
            callback()
        }
    }
    return (
        <LoginForm
            // signIn={signIn}
            onCheck={this.onCheck}
        />
    )

}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps)(Login);