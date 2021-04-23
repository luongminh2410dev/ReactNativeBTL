import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt_login}>Login</Text>
            <View style={styles.login_form}>
                <Text style={styles.login_form_txt}>Username</Text>
                <TextInput style={styles.input} editable={true} />
                <Text style={styles.login_form_txt}>Password</Text>
                <TextInput
                    style={styles.input}
                    editable={true}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.form_btn}>
                <TouchableOpacity style={styles.btn}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt_login: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        padding: 8,
        marginBottom: 50,
    },
    login_form: {
        flexDirection: 'column',
    },
    login_form_txt: {
        fontSize: 20,
        padding: 4,
    },
    input: {
        height: 40,
        width: 350,
        padding: 5,
        borderWidth: 0.3,
        borderRadius: 2,
    },
    form_btn: {
        flexDirection: 'row',
    },
    btn: {
        width: 100,
        backgroundColor: 'blue',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        padding: 10,
        borderRadius: 5,
        marginRight: 8,
        marginTop: 10,
    },
});

