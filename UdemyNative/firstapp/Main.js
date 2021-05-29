import React, { Component } from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import Welcome from './Welcome'

class Main extends Component {
    
    render() {
        
        return (
            <View>
                <Welcome name={"yusuf"}/>
            </View>
        )
    }
}


export default Main;