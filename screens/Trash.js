import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'


export default class Trash extends Component {
  render() {
    return (
      <View style={trashStyle.main}>
        <Image source={require('../assets/trash.gif')} style = {trashStyle.trashImg} ></Image>
        <TouchableOpacity style = {trashStyle.stopButton}>
            <Text>Stop the Recycling</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const trashStyle = StyleSheet.create({
    main : {
        height : '100%',
        marginTop : '10%',
        backgroundColor : 'white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    trashImg : {

        width : '100%',
        height : '20%'
    },

    stopButton : {
        backgroundColor : '#54B049',
        width : '30%',
        height: '5%',
        justifyContent : 'center',
        borderRadius : 6,
        text : '#0000'
    }


    
})

