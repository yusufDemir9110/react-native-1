import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas'



class App extends Component {

  
   
    

    render() {
        
        
        return (
            
                <View style={{flex:1}}>
                    <SketchCanvas
                        style={{flex:1}}
                        strokeColor={'red'}
                        strokeWidth={15}
                    />
                        
                    
                
                </View>
                
            
        )
    }
}



export default App;