import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import WheelOfFortune from 'react-native-wheel-of-fortune'




class App extends Component {

   
   
    

    render() {
        
        
        return (
            
                <View style={{flex:1}}>
                    <WheelOfFortune
                        onRef={ref=>this.wheelRef=ref}
                        rewards={[1,2,3,4,5,6,7,8,9]}
                        borderWidth={3}
                        winner={3}
                        innerRadius={30}
                        backgroundColor={'red'}
                        getWinner={(value,index)=>alert(value+''+index)}
                    />
                
                </View>
                
            
        )
    }
}



export default App;