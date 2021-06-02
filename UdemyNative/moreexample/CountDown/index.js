import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'



class App extends Component {

   
   
    

    render() {
        
        
        return (
            
                <View>
                    <CountdownCircleTimer
                        isPlaying={true}
                        size={120}
                        strokeWidth={5} //default 12
                        isLinearGradient={true}
                        duration={15}
                        onComplete={()=>alert('süre tamam')}
                        colors={[
                            ['red',0.5],
                            ['blue',0.5],
                            ['green',0.5]
                        ]}
                    
                    >
                        {({remainingTime})=><Text style={{fontSize:50}}>{remainingTime}</Text>}
                    </CountdownCircleTimer>
                
                </View>
                
            
        )
    }
}



export default App;