import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import Select2 from 'react-native-select-two'



class App extends Component {



    render() {

        const Data=[
            {id:1, name:'a', checked:true},
            {id:2, name:'b'},
            {id:3, name:'c'}
        ]
       
        return (
            <View>
                <Select2
                    //isSelectSingle
                    colorTheme={'red'}
                    popupTitle={'pozisyon seç'}
                    title={'pozisyon seç'}
                    style={{marginTop:150}}
                    onSelect={data=>{
                        alert(data)
                    }}
                    onRemoveItem={data=>{
                        alert(data)
                    }}
                    //showSearchBox={false} //arama kutucuğunu yok eder
                    // modalStyle={{
                    //     backgroundColor:'blue'
                    // }}
                    cancelButtonText={'iptal'}
                    selectButtonText={'seç'}
                    searchPlaceHolderText={'arama'}
                    listEmptyTitle={'veri yok'}
                    data={Data}
                />

            </View>
        )
    }
}



export default App;