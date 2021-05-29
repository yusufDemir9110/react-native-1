import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import NetInfo from '@react-native-community/netinfo'




class App extends Component{

    componentDidMount(){
        //sayfa yenilemesine gerek duyar
        // NetInfo.fetch().then(state=>{
        //     if(!state.isConnected){
        //         alert('Internet bağlantısını kontrol edin')
        //     }
        // })



        //yenilemeden yapmanın yolu
        const baglanti=NetInfo.addEventListener(state=>{
            if(!state.isConnected){
                    alert('Internet bağlantısını kontrol edin')
            }
        })

    }
    
    render(){
        
        return(
            <View>
                
            </View>
        )
    }
}



export default App;