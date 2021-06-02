import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import * as Progress from 'react-native-progress'





class App extends Component {

    
    

    render() {

        
        return (
            <View style={{flex:1}}>

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Progress.Bar
                        progress={0.4}
                        width={200}
                        // animated={false}
                        // indeterminate={true}
                        // indeterminateAnimationDuration={4000}
                        color={'red'}
                        unfilledColor={'blue'}
                        borderWidth={3}
                        borderColor={'black'}
                        height={10}
                    
                    />

                    

                  
                </View>
               

            </View>
        )
    }
}



export default App;