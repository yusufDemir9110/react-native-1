import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native'

import Share from 'react-native-share'



class App extends Component {

    share=()=>{
        const message=`Böyle bir uygulama gördüm çok güzel sen de dene \n AppStore:`
        Share.open({
            message,
            forceDialog:true
        }).then(e=>console.log(e))
        .catch(e=>console.log(e))
    }

    support=()=>{
        //Linking.openURL('mailto:yusuf.ferrum@gmail.com?subject=destek')
        Linking.openURL('https://google.com')
    }

    render() {

        
        return (
            <View>
                <TouchableOpacity onPress={this.share}>
                    <Text>Paylaş</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.support}>
                    <Text>Destek</Text>
                </TouchableOpacity>

            </View>
        )
    }
}



export default App;