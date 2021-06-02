import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import Video from 'react-native-video'



class App extends Component {

  
   state={
       play:false,
       loading:false,
       start:false
    }
    

    render() {
        
        
        return (
           
                <View>
                    {this.state.start &&
            <Video
                source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
                //source={require('../assets/video/BigBuckBunny.mp4')}
                bufferConfig={{
                    minBufferMs: 15000,
                    maxBufferMs: 50000,
                    bufferForPlaybackMs: 2500,
                    bufferForPlaybackAfterRebufferMs: 5000
                }}
                onLoadStart={() => {
                    if (!this.state.loading) {
                        this.setState({loading: true})
                    }
                }}
                onLoad={(a) => {}}
                onProgress={(e) => {
                    if (this.state.loading) {
                        this.setState({loading: false})
                    }
                }}
                onEnd={() => {
                    this.setState({loading: false})
                }}
                ref={ref => this.player = ref}
                onBuffer={(e) => {
                    if (!this.state.loading) {
                        this.setState({loading: true})
                    }
                }}
                repeat={true}
                resizeMode={"cover"}
                onError={(e) => console.log(e)}
                style={style.video}
                paused={!this.state.play}
                playInBackground={true}
                muted={false}
                controls={true}
                volume={1}
            />
            }
                {
                    this.state.loading && <Text>Video Yükleniyor</Text>
                }
               <TouchableOpacity onPress={() => {
                   this.setState({play:!this.state.play,start:true})
                }}>
                   <Text>{this.state.play ? 'Durdur' : 'Başlat'}</Text>
               </TouchableOpacity>
                </View>
                
          
        )
    }
}

const style=StyleSheet.create({
    video:{
        width:400,
        height:300
    }
})

export default App;