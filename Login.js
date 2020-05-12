import React, {Component} from 'react'
import { TextInput, Alert, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Container, Card, Content, Text, H1, Form, Label, Root  } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const goToHome = () => {
   Actions.home()
}

export default class Login extends Component{
    static navigationOptions = {
      header: null
    };

    constructor(props) {
      super(props);
      this.state = {
        TextInputName: '',
        TextInputPassword: '',
       };
    }

    CheckTextInput = () => {
        if (this.state.TextInputName != '') {
            if (this.state.TextInputPassword != '') {
                alert('Success')
            } else {
                Alert.alert('Password Kosong','Mohon masukkan password');
            }
        } else {
                Alert.alert('Username Kosong','Mohon masukkan username atau email');
        }
    };

    
    render() {
        return (
        <Root>
            <Container>
                <Content style={{flex: 1}}>

                    <LinearGradient
                        colors={[
                        '#55CBD3',
                        '#C7DAC7',
                        '#FFB68C',
                        '#FE8E7B',
                        '#FF6787',  
                        ]}
                        style={{flex: 1}}
                        //  Linear Gradient 
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}

                        // Reversed
                        // start={{ x: 0, y: 1 }}
                        // end={{ x: 1, y: 0 }}

                        // Horizontal
                        // start={{ x: 0, y: 0 }}
                        // end={{ x: 1, y: 0 }}

                        // Diagonal
                        // start={{ x: 0, y: 0 }}
                        // end={{ x: 1, y: 1 }}
                    >
                    
                        <Image source={require('./assets/images/logo_buyyo.png')} style={styles.logo} />

                        <H1 style={styles.title}>Login</H1>
                        
                        <Card style={styles.box}>

                            <Form style={{paddingVertical:20}}>
                                
                                <Label style={{fontSize:13,fontFamily: "Roboto-Regular"}}>Username atau Email</Label>
                                <TextInput 
                                    placeholder="Masukkan username atau email"
                                    onChangeText={TextInputName => this.setState({ TextInputName })}
                                    style={{backgroundColor: '#F5F5F5', borderColor:'#E4E4E4', borderRadius:5, paddingHorizontal:10, marginBottom:5}}/>
                                
                                
                                <Label style={{fontSize:13,fontFamily: "Roboto-Regular"}}>Password</Label>
                                <TextInput placeholder="Masukkan Password"
                                    onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                                    secureTextEntry={true} style={{backgroundColor: '#F5F5F5', borderColor:'#E4E4E4', borderRadius:5,paddingHorizontal:10}}/>
                            
                            </Form>
                            
                            <Button block onPress={this.CheckTextInput} style={styles.buttonPrimary}><Text>Login</Text></Button>

                        </Card>

                    </LinearGradient>
                    
                </Content>
            </Container>
        </Root>
      );
    }
}

const styles = StyleSheet.create({
    logo: {
        backgroundColor: 'red'
    },
    title: {
        fontFamily: 'KaushanScript-Regular',
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
    },
    box: {
        borderRadius:20,
        padding:10,
        marginTop: 20,
        marginBottom:105,
    },
    button: {
        backgroundColor: '#FFE8C5',
        marginVertical:5,
        borderRadius:5
    },
    buttonPrimary: {
        backgroundColor: '#F05E23',
        marginVertical:5,
        borderRadius:5
    },
});
