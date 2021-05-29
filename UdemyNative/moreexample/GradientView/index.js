import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'



class App extends Component{

    
    
    render(){
        return(
            <LinearGradient 
            colors={['rgb(150,200,52)', 'rgb(50,20,15)', 'rgb(50,100,52)']} 
            style={{padding:10, marginTop:30, height:150}}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            >

            </LinearGradient>
        )
    }
}



export default App;