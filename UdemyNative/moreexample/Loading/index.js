import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'

import {
    BallIndicator, 
    BarIndicator, 
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator, 
    UIActivityIndicator, 
    WaveIndicator} from 'react-native-indicators'


class App extends Component{

    state={
        loading:true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false})
        }, 3000);
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                {this.state.loading?
                    <UIActivityIndicator size={150} color={"blue"}/>
                    :
                    <View><Text>Sayfa açıldı</Text></View>  
            
            }

              
            </View>
        )
    }
}



export default App;