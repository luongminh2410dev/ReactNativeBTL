import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    CheckLogin = () => {
        const { username, password } = this.state;
        if (username.length <= 0 || password.length <= 0) {
            return alert('Bạn chưa nhập đủ thông tin')
        }
        this.props.onCheck(username, password, () => {
            this.textUser.clear(),
                this.textPass.clear(),
                this.setState({ username: '', password: '' })
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.txt_login}>Đăng nhập</Text>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/541px-Shopee_logo.svg.png' }}
                />
                <View style={styles.login_form}>
                    {/* <Text style={styles.login_form_txt}>Tài khoản</Text> */}
                    <View style={styles.searchSection}>
                        <AntDesign style={styles.searchIcon} name="user" size={30} color="#000" />
                        <TextInput
                            onChangeText={(text) => (this.state.username = text)}
                            style={styles.input}
                            editable={true}
                            placeholder={'Email/Số điện thoại/Tên đăng nhập'}
                            ref={(refs) => (this.textUser = refs)} />
                    </View>

                    {/* <Text style={styles.login_form_txt}>Mật khẩu</Text> */}
                    <View style={styles.searchSection}>
                        <AntDesign style={styles.searchIcon} name="lock1" size={30} color="#000" />
                        <TextInput
                            onChangeText={(text) => (this.state.password = text)}
                            style={styles.input}
                            editable={true}
                            secureTextEntry={true}
                            placeholder={'Mật khẩu'}
                            ref={(refs) => (this.textPass = refs)}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => this.CheckLogin()}
                    style={styles.btn}>
                    <Text style={styles.btn_text}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.reg}>
                    <TouchableOpacity style={styles.reg_btn}>
                        <Text style={styles.reg_btn_txt}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reg_btn}>
                        <Text style={styles.reg_btn_txt}>Đăng nhập bằng SMS</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ marginVertical: 40, textAlign: 'center', fontSize: 18, fontWeight: '300' }}>Hoặc</Text>

                <View style={styles.login_other}>
                    <View style={styles.login_other_btn_gg} >
                        <Image
                            style={styles.login_img}
                            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png' }}
                        />
                        <TouchableOpacity style={styles.login_gg}>
                            <Text style={styles.login_gg_txt}>Tiếp tục với Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.login_other_btn_fb} >
                        <Image
                            style={styles.login_img}
                            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png' }}
                        />
                        <TouchableOpacity style={styles.login_fb}>
                            <Text style={styles.login_gg_txt}>Tiếp tục với Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
        // justifyContent: 'center',
        // backgroundColor: '#ee4d2d'
    },
    logo: {
        width: 100,
        height: 140,
        resizeMode: "cover",
        justifyContent: "center",
        marginVertical: 50,
    },

    txt_login: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        padding: 8,
    },
    login_form: {
        flexDirection: 'column',
    },
    login_form_txt: {
        color: 'white',
        fontSize: 20,
        padding: 4,
        fontWeight: '600'
    },
    searchSection: {
        width: 350,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        padding: 2,
        marginVertical: 4,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    btn: {
        width: 350,
        backgroundColor: '#ee4d2d',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 2,
        marginTop: 8,
    },
    btn_text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    reg: {
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    reg_btn: {

    },
    reg_btn_txt: {
        color: '#4285f4'
    },
    login_other: {
        width: 350,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_gg: {
        width: 310,
        paddingVertical: 8,
    },
    login_other_btn_gg: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285f4',
        marginBottom: 8

    },
    login_other_btn_fb: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1877f2',
    },
    login_fb: {
        width: 310,
        paddingVertical: 8,

    },
    login_gg_txt: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    login_img: {
        height: 30,
        width: 30,
    }
});

