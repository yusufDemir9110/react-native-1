import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import TagInput from 'react-native-tags-input'


class App extends Component {

  
   
    state={
        tags:{tag:'',tagsArray:[]}
    }

    updateTagState=(state)=>{
        this.setState({
            tags:state
        })
    }

    render() {
        
        
        return (
            
                <View style={{flex:1}}>
                    
                      <TagInput
                        placeholder={'etiketler'}
                        updateState={this.updateTagState}
                        tags={this.state.tags}
                        label={'etiket girin'}
                        labelStyle={{color:'black'}}
                        inputContainerStyle={{
                            backgroundColor:'lightblue',
                            borderWidth:1,
                            borderRadius:5,
                            borderColor:'blue',
                            marginTop:5,
                            
                        }}
                        keysForTag={','} //virgüle bastığında enter gibi algılar
                        tagStyle={{
                            backgroundColor:'white',
                            borderWidth:1,
                            borderColor:'#ddd',
                            margin:10,
                            height:30
                            
                        }}
                        tagTextStyle={{
                            color:'red'
                        }}
                      />  
                    
                
                </View>
                
            
        )
    }
}



export default App;