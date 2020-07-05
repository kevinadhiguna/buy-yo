import React, { Component } from 'react';
import {Text,
        View, 
        StyleSheet, 
        Image,
        ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';

const goToHome = () => {
    Actions.home();
}

export default class Afterlogin extends Component {
    static navigationOptions = {
        header: null
    };

    render(){
        return(
            <View style={{flex: 1}} >            

                <View style={styles.head}>
                    <Text style={styles.title}>BUY-YO!</Text>
                    <Image source={require('./assets/images/buyyo.png')} style={styles.logo} />
                </View>

                <View style={styles.berhasil}>
                    <Text style={styles.txt}>Login Berhasil!</Text>
                    <Text style={styles.txt}>Happy Shopping!</Text>
                </View>

                <Image source={require('./assets/images/rsz_afterlogin.png')} style={styles.image} />
                
                <View style={styles.wrapButton}>
                    <Button block style={styles.mulaiButton} onPress={goToHome}>
                        <Text style={styles.tulisanButton}>Okey!</Text>
                    </Button>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 50,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 36,
        color: '#22659A',
    },
    logo: {
        marginLeft: 5,
    },
    image: {
        height: 240,
        width: 180,
        alignSelf: 'center',
        justifyContent: "center",
    },
    berhasil: {
        paddingTop: 50,
    },
    txt: {
        fontFamily: 'Roboto-Regular',
        fontSize: 19,
        color: '#22659A',
        alignSelf: 'center',
    },
    wrapButton: {
        justifyContent: 'flex-end',
        paddingTop: 68,
        marginLeft: 240,
    },
    mulaiButton: {
        height: 60,
        width: 120,
        borderColor: '#22659A',
        borderWidth: 2,
        backgroundColor: '#22659A', 
        borderTopLeftRadius: 70,
    },
    tulisanButton: {
        fontFamily: 'Roboto-Regular',
        fontSize : 16,
        fontWeight: 'bold',
        color: 'white',
    },
});