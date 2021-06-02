import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import {ColorPicker} from 'react-native-color-picker-light'



class App extends Component {

   state={
       color:""
   }
   componentDidMount(){
        this.setState({color:'#2fe65a'},()=>{
            this.ColorPicker.setColor('#2fe65a')
        })
   }
   
    

    render() {
        
        
        return (
            
                <View style={{flex:1}}>
                    <ColorPicker
                    ref={ref=>this.ColorPicker=ref}
                        style={{width:300, height:300}}
                        onColorChange={color=>this.setState({color})}
                    />
                    <Text>Color: {this.state.color}</Text>
                
                </View>
                
            
        )
    }
}



export default App;