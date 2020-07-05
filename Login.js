import React, {Component} from 'react'
import {TextInput, 
        Alert, 
        StyleSheet, 
        View, 
        Image,
        TouchableWithoutFeedback } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Button,
        Container, 
        Card, 
        Content, 
        Text, 
        H1, 
        Form, 
        Label, 
        Root  } from 'native-base';
//import {GoogleSignin,
//        GoogleSigninButton,
//        statusCodes         } from '@react-native-community/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const goToHome = () => {
    Actions.home();
}

const goToAfterLogin = () => {
    Actions.afterlogin();
}

const goToRegister = () => {
   Actions.register();
}

export default class Login extends Component{
    static navigationOptions = {
      header: null
    };

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
       };
    }

    emailValidator(){
        const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailIsValid = re_email.test(this.state.email);

        if(this.state.email == ''){
            this.setState({emailError: "Boleh diisi Email nya dulu kakak :)"})
        } else {
            if(!emailIsValid){
                this.setState({emailError: "Isi email yg valid ya"})
            } else{
                this.setState({emailError: ""})
            }
        }
    }

    passwordValidator(){
        if(this.state.password == ""){
            this.setState({passwordError: "Wahh password masih kosong, bisa dibobol hacker!"})
        }
    }

    CheckTextInput = () => {
        if (this.state.TextInputEmail != '') {
            if (this.state.TextInputPassword != '') {
                alert('Success')
            } else {
                Alert.alert('Password Kosong','Mohon masukkan password');
            }
        } else {
                Alert.alert('Email Kosong','Mohon masukkan email');
        }
    };
    
    render() {
        return (
        <Root>
            <Container>
                <Content>

                    <View>    
                        <AntDesign 
                            onPress = {goToHome}
                            name='home'
                            style={styles.homeIcon}/>
                    </View>
                    
                    <View style={styles.head}>
                        <Text style={styles.title}>BUY-YO!</Text>
                        <Image source={require('./assets/images/buyyo.png')} style={styles.logo} />
                    </View>

                    <Text style={styles.welcome}>Selamat Datang</Text>

                    <View style={styles.gugel}>
                    <TouchableOpacity style={styles.buttonGoogle}>
                        <Image source={require('./assets/images/google.png')} style={styles.logoGoogle}/>
                        <Text style={styles.masukGoogle}>Masuk dengan Google</Text>
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.atau}>atau</Text>

                    <Form style={styles.form}>
                                
                        <Label style={styles.label}>Alamat Email</Label>
                        <TextInput
                            onChangeText={email => this.setState({ email })}
                            style={styles.kolomInput}
                            keyboardType='email-address'
                            onBlur={() => this.emailValidator() }
                            onSubmitEditing={() => this.password.focus()}
                            />
                        <Text style={styles.notifError}>{this.state.emailError}</Text>
                        
                        <Label style={styles.label}>Kata Sandi</Label>
                        <TextInput
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true}
                            style={styles.kolomInput}
                            onBlur={() => this.passwordValidator() }
                            />
                        <Text style={{alignSelf: 'flex-end', color: 'grey', fontFamily: 'Roboto-Regular', fontSize: 12,}}>Lupa Kata Sandi ?</Text>
                        <Text style={styles.notifError}>{this.state.passwordError}</Text>
                    
                    </Form>

                    <View style={styles.areaButton}>
                        <Button style={styles.inButton} onPress={goToAfterLogin} >
                            <Text style={styles.in}>Masuk</Text>
                        </Button>
                    </View>

                    <View style={styles.areaBawah}>
                        <Text style={styles.punyaAkun}>Belum punya akun ? {" "}
                            <TouchableWithoutFeedback onPress = {goToRegister} >
                                <Text numberOfLines={1} style={styles.blmPunyaAkun} >
                                    Daftar Sekarang
                                </Text>
                            </TouchableWithoutFeedback>
                        </Text>
                    </View>



                </Content>
            </Container>
        </Root>
      );
    }
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    homeIcon: {
        alignSelf: 'flex-end',
        marginRight: 25,
        fontSize: 25,
        paddingTop: 10,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 36,
        color: '#22659A',
    },
    logo: {
        marginLeft: 5,
    },
    welcome: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: 'grey',
        paddingTop: 5,
        alignSelf: 'center'
    },
    gugel : {
        paddingTop: 50,
    },
    buttonGoogle: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 6,
    },
    logoGoogle: {
        height: 30,
        width: 30,
    },
    masukGoogle: {
        fontFamily: 'Roboto-Regular',
        color: 'grey',
        paddingLeft: 5,
    },
    atau: {
        alignSelf: 'center',
        paddingTop: 10,
        color: 'grey',
    },
    form: {
        paddingHorizontal: 25,
    },
    label: {
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        color: 'grey',
        //paddingTop: 5,
    },
    kolomInput: {
        borderColor:'#E4E4E4',
        borderWidth: 2,
        paddingHorizontal:10,
        marginBottom: 5,
        marginTop: 10,
    },
    notifError: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        color: 'red',
    },
    areaButton: {
        paddingTop: 10,
    },
    inButton : {
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        backgroundColor: '#296d98',
    },
    in: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: 'white',
    },
    punyaAkun: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        textAlign:"center",
        color: 'grey',
        paddingTop: 10,
    },
    blmPunyaAkun: { 
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        paddingLeft: 5, 
        textDecorationLine: "underline", 
        color: '#22659A',
    },
    areaBawah: {
        //marginBottom: 30,
    },
});
