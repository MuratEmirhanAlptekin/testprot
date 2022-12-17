import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
    return (
        <View style = {signupStyle.main}>
            <TouchableOpacity style={signupStyle.walletConnectButton} onPress = {() => {
              navigation.navigate('Home')
            }}>
                <Text style={{fontWeight : '600'}}>Wallet Connect</Text>
            </TouchableOpacity>
        </View>
    )
}

const signupStyle = StyleSheet.create({
    main: {
        height: '100%',
        marginTop: '10%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    walletConnectButton : {
        backgroundColor : "#54B049",
        justifyContent : 'center',
        alignItems : 'center',
        width : '30%',
        height : '5%',
        borderRadius : 8

    }


})


export default SignUp;