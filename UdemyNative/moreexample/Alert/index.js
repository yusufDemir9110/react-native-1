import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import {Root,Popup, Toast} from 'popup-ui'



class App extends Component {

   showPopupUI=()=>{
    
        Popup.show({
            type:'Success',
            title:'Baslik',
            button:true,
            textBody:'internete bağlandı',
            buttonText:'kapat',
            background:'red',
            timing:1000,
            callBack:()=>Popup.hide()
        })
   
   }

   showToastUI=()=>{
       Toast.show({
           title:'başarılı',
           text:'internete bağlandınız',
           color:'green',
           timing:3000
       })
   }
   
    

    render() {
        
        
        return (
            <Root>
                <View>
                    <TouchableOpacity onPress={this.showPopupUI}>
                        <Text>Görüntüle</Text>
                    </TouchableOpacity>
                
                </View>
                
            </Root>
        )
    }
}



export default App;