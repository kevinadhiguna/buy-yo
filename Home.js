import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Content, Button, Text, Card } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const goToLogin = () => {
    Actions.login()
}
const goToRegister = () => {
    Actions.register()
}

export default class Home extends Component{
    static navigationOptions = {
        header: null
    };
    
    render(){
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={[
                    '#55CBD3',
                    '#C7DAC7',
                    '#FFB68C',
                    '#FE8E7B',
                    '#FF6787',  
                    ]}
                    style={{flex: 1}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    
                    <View style={styles.atas}>    
                        <AntDesign 
                            onPress = {goToLogin}
                            name='shoppingcart'
                            style={styles.cartIcon}/>
                        <IconMCI
                            name='chat-processing'
                            style={styles.chatIcon}/>
                    </View>

                    <View style={styles.head}>
                        <Text style={styles.title}>BUY-YO!</Text>
                        <Image source={require('./assets/images/buyyo.png')} style={styles.logo} />
                    </View>

                    <Text style={styles.explain}>
                        E-commerce that accomodates you to buy and sell so a joy happens!
                    </Text>

                    <Card style={styles.box}>

                        <Button onPress={goToLogin} style={styles.button}>
                            <Text>Login</Text>
                        </Button>
                        <Button bordered onPress={goToRegister} style={styles.button}>
                            <Text>Register</Text>
                        </Button>

                    </Card>

                </LinearGradient>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    atas: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 25,
        paddingTop: 20,
    },
    cartIcon: {
        //alignSelf: 'flex-end',
        //marginRight: 25,
        fontSize: 25,
        //paddingTop: 10,
        color: 'grey',
    },
    chatIcon: {
        //alignSelf: 'flex-end',
        //marginRight: 25,
        fontSize: 25,
        color: 'grey',
        paddingLeft: 10,
    },
    head: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 36,
        color: '#22659A',
    },
    logo: {
        
    },
    explain: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 50,
        marginTop: 10,
        marginBottom: 20,
        color: 'black'
    },
    box: {
        paddingHorizontal:20,
        borderRadius:20,
        alignSelf: 'center',
        padding:20,
        marginBottom:20,
        width: 150,
        alignItems: 'center'
    },
    button: {
        width: 100,
        marginBottom: 8,
    }
});
