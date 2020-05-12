import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Image, Text, TouchableWithoutFeedback, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Container, Card, Content, Form, Label, Root } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const goToHome = () => {
   Actions.home()
}

const goToLogin = () => {
   Actions.login()
}

export default class Register extends Component{
    static navigationOptions = {
        header: null
    };
   
    constructor(props) {
        super(props);
        this.state = {
            isFocused: 'true',
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            cpassword: '',
            cpasswordError: '',
        };
    }

    handleFocus = () => this.setState({'isFocused' : true})
    handleBlur = () => this.setState({'isFocused' : false})

    nameValidator(){
        const re_name = /^[A-Za-z\s]+$/;
        let nameIsValid = re_name.test(this.state.name);

        if(this.state.name == ''){
           this.setState({nameError: "Nama masih kosong nih, kaya hati aja ..."})
        } else {
            if(!nameIsValid){
                this.setState({nameError: "Isi nama lengkap sesuai KTP ya :)"})
            } else{
                this.setState({nameError: ""})
            }
        }
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

    usernameValidator(){
        const re_username = /^[A-Za-z0-9_.]+$/;;
        let usernameIsValid = re_username.test(this.state.username);

        if(this.state.username == ""){
            this.setState({usernameError: "Username harus diisi hehe.."})
        } else {
            if(this.state.username.length<4){
                this.setState({usernameError: "Eitss.. Username minimal ada 4 karakter ya"})
            } else if(!usernameIsValid){
                this.setState({usernameError: "Username ga boleh ada spasi dan simbol kecuali 'titik' dan 'underscore' ya."})
            }else {
                this.setState({usernameError: ""})
            }
        }
    }

    passwordValidator(){
        if(this.state.password == ""){
            this.setState({passwordError: "Wahh password masih kosong, bisa dibobol hacker!"})
        } else {
            if(this.state.password.length<6){
                this.setState({passwordError: "Password minimal ada 6 karakter ya"})
            } else {
                this.setState({passwordError: ""})
            }
        }
    }
   
    render() {
        return (
        <Root>
            <Container>
                <Content style={styles.content}>
                    
                    <LinearGradient
                        colors={[
                        
                        '#1c4966',
                        //'#296d98',
                        '#3792cb',
                        '#45b6fe',
                        'white',  
                        ]}

                        style={styles.gradient}

                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >

                        <View>    
                            <IconIonicons 
                                onPress = {goToHome}
                                name='ios-home'
                                style={styles.homeIcon}/>
                        </View>
                        <View style={styles.judulPage} >
                            <Text style={styles.title}>Register</Text>
                            <Text style={styles.subtitle}>Buy-yo!</Text>
                        </View>
                    </LinearGradient>

                        
               
                        <Card style={styles.box}>
                        
                         <KeyboardAvoidingView behavior='padding'>
                            <Form style={styles.form}>
                                
                                
                                <Label style={styles.label}>Nama</Label>
                                <TextInput
                                    style={styles.textinput}
                                    onChangeText={ (text) => { this.setState( {name: text} ) } }
                                    onBlur={() => {this.nameValidator(); this.handleBlur} }
                                />
                                <Text style={styles.notifError}>{this.state.nameError}</Text>

                                <Label style={styles.label}>Email</Label>
                                <TextInput
                                    style={styles.textinput}
                                    keyboardType='email-address'
                                    onChangeText={ (text) => { this.setState( {email: text} ) } }
                                    onBlur={()=>this.emailValidator()}
                                />
                                <Text style={styles.notifError}>{this.state.emailError}</Text>
                    
                                <Label style={styles.label}>Password</Label>
                                <TextInput
                                    style={styles.textinput} 
                                    onChangeText={ (text) => { this.setState( {password: text} ) } }
                                    secureTextEntry={true}
                                    onBlur={()=>this.passwordValidator()}
                                />
                                <Text style={styles.notifError}>{this.state.passwordError}</Text>
                            
                            </Form>
                            </KeyboardAvoidingView>

                            <TouchableOpacity style={styles.regButton}>
                                <Text style={styles.reg}>Register</Text>
                            </TouchableOpacity>

                            <View>
                                <Text style={styles.punyaAkun}>Sudah punya akun ? {" "}
                                    <TouchableWithoutFeedback onPress = {goToLogin} >
                                        <Text numberOfLines={1} style={styles.punyaAkunLogin} >
                                            Log in
                                        </Text>
                                    </TouchableWithoutFeedback>
                                </Text>
                            </View>
                        
                        </Card>

                </Content>
            </Container>
        </Root>
      );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        //backgroundColor: 'red',
    },
    gradient: {
        flex: 1,
        height: 150,
        borderBottomRightRadius: 150,
    },
    homeIcon: {
        position: 'absolute',
        right: 0,
        fontSize: 30,
        color: 'white',
    },
    judulPage: {
        marginTop: 15,
        marginLeft: 20,
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 45,
        color: 'white',
    },
    subtitle: {
        fontFamily: 'Roboto-Thin',
        fontSize: 20,
        color: 'white',
    },
    box: {
        borderRadius:10,
        padding:10,
        marginBottom:20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: -20,
    },
    form: {
        paddingVertical:15,
        paddingHorizontal: 5,
    },
    label: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: '#3792cb',
        paddingBottom: 10,
    },
    notifError: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        color: 'red',
    },
    textinput: {
        borderColor: 'grey',
        borderWidth: 2,
        height: 40,
        borderRadius: 10,
        paddingHorizontal:10,
        marginBottom:5,
    },
    regButton : {
        borderRadius: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
        backgroundColor: '#296d98',
    },
    reg: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'white',
    },
    punyaAkun: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        textAlign:"center",
        color:"#8E8E8E",
        paddingTop: 10,
    },
    punyaAkunLogin: { 
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        paddingLeft: 5, 
        textDecorationLine: "underline", 
        color: '#45b6fe', 
    },
    button: {
        backgroundColor: '#FFE8C5',
        marginVertical:5,
        borderRadius:5,
    },
});
