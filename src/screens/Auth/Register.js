
import React from 'react'
import { connect } from 'react-redux'
// import { firebaseApp } from '../../components/FirebaseConfig'
import RegistForm from '../../components/RegistForm'
import { useNavigation } from '@react-navigation/native';
const Register = (props) => {
    const navigation = useNavigation();
    const onRegist = (email, password) => {
        // firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         var user = userCredential.user;
        //         alert('Đăng ký thành công');
        //         navigation.navigate('Login');
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         // ..
        //     });
    }

    return (
        <RegistForm
        // onRegist={onRegist}
        />
    )

}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps)(Register);