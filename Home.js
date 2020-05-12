import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Content, Button, Text, Card } from 'native-base';

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

                    <Text>
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
    logo: {
        height: 110,
        width: 110,
        alignSelf: 'center',
    },
    box: {
        paddingHorizontal:20,
        borderRadius:20,
        padding:20,
        marginBottom:20,
    },
    button: {
        width: 100,
        marginBottom: 8
    }
});
//export default Home
