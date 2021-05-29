import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet'



class App extends Component{

    
    
    render(){
        const Options=[
            'Yeni ekle',
            <Text style={{color:'green', fontSize:17}}>Düzenle</Text>,
            'Sil',
            'İptal'
        ];
        return(
            <View>
                <TouchableOpacity onPress={()=>this.ActionSheet.show()}>
                    <Text>Open ActionSheet</Text>
                </TouchableOpacity>
                <ActionSheet
                    ref={ref=>this.ActionSheet=ref}
                    title={<Text style={{fontSize:20, color:'black'}}>Neleri Seçmek istersiniz?</Text>}
                    options={Options}
                    cancelButtonIndex={3}
                    destructiveButtonIndex={2}
                    message={'seçmek istediğine tıkla'}
                    tintColor={'blue'}
                    onPress={(index)=>{
                        switch(index){
                            case 0:
                                alert('yeni ekle')
                                break;
                            case 1:
                                alert('yeni ekle')
                                break;
                            case 2:
                                alert('yeni ekle')
                                break;
                        }
                    }}
                />
              
            </View>
        )
    }
}



export default App;