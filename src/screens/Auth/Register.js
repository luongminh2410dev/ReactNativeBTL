
import React from 'react'
import { connect } from 'react-redux'
import RegistForm from '../../components/RegistForm'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Register = (props) => {
    const navigation = useNavigation();
    const createAcc = (user, pass, cb) => {
        auth()
            .createUserWithEmailAndPassword(user, pass)
            .then(() => {
                alert('User account created & signed in!');
                cb();
                navigation.navigate('Login');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                alert(error);
            });
    }
    return (
        <RegistForm
            auth={createAcc}
        />
    )

}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps)(Register);