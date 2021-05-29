import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'



class App extends Component{

    
    
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.RBSheet.open()}>
                    <Text>Open Sheet</Text>
                </TouchableOpacity>
                <RBSheet
                    ref={ref=>{this.RBSheet=ref}}
                    height={300}
                    //minClosingHeight={150} //boyu nereye gelince kapansın
                    closeOnPressMask={true}  //false olursa boşluğa basınca kapanmaz
                    dragFromTopOnly={true}
                    openDuration={300}
                 
                    animationType={'fade'} //ya da fade,slide,none
                    customStyles={{
                        container:{
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }}
                >
                    <TouchableOpacity style={style.item}>
                        <Text>Yeni gönderi paylaş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Text>Yeni hikaye paylaş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item} onPress={()=>this.RBSheet.close()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                   
                </RBSheet>

              
            </View>
        )
    }
}

const style=StyleSheet.create({
    item:{
        padding:10
    }
})

export default App;