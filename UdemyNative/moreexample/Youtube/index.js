import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import Youtube from 'react-native-youtube'



class App extends Component {

  
   
    

    render() {
        
        
        return (
           
                <View>
                    <Youtube
                        apiKey={'AIzaSyCrQ-TYsVuzIU8g3oEsY08x5gi5bSrvEkk'}
                        play={true}
                        //fullscreen={true}
                        onReady={e=>console.log(e)}
                        onChangeState={e=>console.log(e)}
                        onChangeQuality={e=>console.log(e)}
                        onError={e=>console.log(e)}
                        videoId={'FKzZvF5UpC4'}
                        style={{
                            height:300
                        }}
                        showinfo={true}
                        // showFullscreenButton={true}
                    />

                    
                </View>
                
          
        )
    }
}



export default App;